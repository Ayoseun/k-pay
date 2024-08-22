import { proxy } from 'valtio/vanilla';
import { PublicStateController } from './PublicStateController.js';
import { EventsController } from './EventsController.js';
import { ModalController } from './ModalController.js';
import { CoreHelperUtil } from '../utils/CoreHelperUtil.js';
import { NetworkUtil } from '@web3modal/common';
import { ChainController } from './ChainController.js';
const state = proxy({
    supportsAllNetworks: true,
    isDefaultCaipNetwork: false,
    smartAccountEnabledNetworks: []
});
export const NetworkController = {
    state,
    replaceState(newState) {
        Object.assign(state, newState);
    },
    subscribeKey(property, callback) {
        let prev = undefined;
        return ChainController.subscribeChainProp('networkState', networkState => {
            if (networkState) {
                const nextValue = networkState[property];
                if (prev !== nextValue) {
                    prev = nextValue;
                    callback(nextValue);
                }
            }
        });
    },
    _getClient() {
        return ChainController.getNetworkControllerClient();
    },
    initializeDefaultNetwork() {
        const networks = this.getRequestedCaipNetworks();
        if (networks.length > 0) {
            this.setCaipNetwork(networks[0]);
        }
    },
    setCaipNetwork(caipNetwork) {
        const chain = ChainController.state.multiChainEnabled
            ? caipNetwork?.chain
            : ChainController.state.activeChain;
        if (!chain) {
            throw new Error('chain is required to set active network');
        }
        if (!caipNetwork) {
            throw new Error('caipNetwork is required to set active network');
        }
        ChainController.state.activeCaipNetwork = caipNetwork;
        ChainController.state.activeChain = chain;
        ChainController.setChainNetworkData(chain, { caipNetwork });
        PublicStateController.set({ activeChain: chain, selectedNetworkId: caipNetwork?.id });
        if (!ChainController.state.chains.get(chain)?.networkState?.allowUnsupportedChain) {
            const isSupported = this.checkIfSupportedNetwork();
            if (!isSupported) {
                this.showUnsupportedChainUI();
            }
        }
    },
    setDefaultCaipNetwork(caipNetwork, chain) {
        const chainToSet = ChainController.state.multiChainEnabled
            ? chain
            : ChainController.state.activeChain;
        if (!chainToSet) {
            throw new Error('chain is required to set default network');
        }
        ChainController.state.activeCaipNetwork = caipNetwork;
        ChainController.state.activeChain = chainToSet;
        ChainController.setChainNetworkData(chainToSet, { caipNetwork, isDefaultCaipNetwork: true });
        PublicStateController.set({ selectedNetworkId: caipNetwork?.id, activeChain: chain });
    },
    setRequestedCaipNetworks(requestedNetworks, chain) {
        ChainController.setChainNetworkData(ChainController.state.multiChainEnabled ? chain : ChainController.state.activeChain, { requestedCaipNetworks: requestedNetworks });
    },
    setAllowUnsupportedChain(allowUnsupportedChain, chain) {
        ChainController.setChainNetworkData(chain || ChainController.state.activeChain, {
            allowUnsupportedChain
        });
    },
    setSmartAccountEnabledNetworks(smartAccountEnabledNetworks, chain) {
        ChainController.setChainNetworkData(ChainController.state.multiChainEnabled ? chain : ChainController.state.activeChain, { smartAccountEnabledNetworks });
    },
    getRequestedCaipNetworks(chainToFilter) {
        let chainAdapters = undefined;
        if (!ChainController.state.activeChain) {
            throw new Error('activeChain is required to get requested networks');
        }
        if (chainToFilter) {
            const chain = ChainController.state.multiChainEnabled
                ? chainToFilter
                : ChainController.state.activeChain;
            if (!chain) {
                throw new Error('chain is required to get requested networks');
            }
            chainAdapters = [chain];
        }
        else {
            const chains = ChainController.state.multiChainEnabled
                ? [...ChainController.state.chains.keys()]
                : [ChainController.state.activeChain];
            chainAdapters = chains;
        }
        const approvedIds = [];
        const requestedNetworks = [];
        chainAdapters.forEach((chn) => {
            if (ChainController.state.chains.get(chn)?.networkState?.approvedCaipNetworkIds) {
                approvedIds.push(...(ChainController.state.chains.get(chn)?.networkState?.approvedCaipNetworkIds || []));
            }
            if (ChainController.state.chains.get(chn)?.networkState?.requestedCaipNetworks) {
                requestedNetworks.push(...(ChainController.state.chains.get(chn)?.networkState?.requestedCaipNetworks || []));
            }
        });
        const sortedNetworks = CoreHelperUtil.sortRequestedNetworks(approvedIds, requestedNetworks);
        return sortedNetworks;
    },
    async switchActiveNetwork(network) {
        const networkControllerClient = ChainController.getNetworkControllerClient();
        await networkControllerClient.switchCaipNetwork(network);
        const chain = ChainController.state.multiChainEnabled
            ? network?.chain
            : ChainController.state.activeChain;
        if (!chain) {
            throw new Error('chain is required to switch active network');
        }
        if (!network) {
            throw new Error('network is required to switch active network');
        }
        ChainController.state.activeCaipNetwork = network;
        ChainController.state.activeChain = chain;
        ChainController.setChainNetworkData(chain, { caipNetwork: network });
        PublicStateController.set({ activeChain: chain, selectedNetworkId: network.id });
        if (network) {
            EventsController.sendEvent({
                type: 'track',
                event: 'SWITCH_NETWORK',
                properties: { network: network.id }
            });
        }
    },
    getApprovedCaipNetworkIds(chainToFilter) {
        if (chainToFilter) {
            const chain = ChainController.state.multiChainEnabled
                ? chainToFilter
                : ChainController.state.activeChain;
            if (!chain) {
                throw new Error('chain is required to get approved network IDs');
            }
            return ChainController.state.chains.get(chain)?.networkState?.approvedCaipNetworkIds;
        }
        const allCaipNetworkIds = [];
        Object.values(ChainController.state.chains).forEach(adapter => {
            if (adapter.networkState.approvedCaipNetworkIds) {
                allCaipNetworkIds.push(...(adapter.networkState?.approvedCaipNetworkIds || []));
            }
        });
        return allCaipNetworkIds;
    },
    async setApprovedCaipNetworksData(_chain) {
        const networkControllerClient = ChainController.getNetworkControllerClient();
        const data = await networkControllerClient.getApprovedCaipNetworksData();
        const chain = ChainController.state.multiChainEnabled
            ? _chain
            : ChainController.state.activeChain;
        if (!chain) {
            throw new Error('chain is required to set approved network data');
        }
        ChainController.setChainNetworkData(chain, {
            approvedCaipNetworkIds: data?.approvedCaipNetworkIds,
            supportsAllNetworks: data?.supportsAllNetworks || false
        });
    },
    checkIfSupportedNetwork() {
        const chain = ChainController.state.activeChain;
        if (!chain) {
            return false;
        }
        const activeCaipNetwork = ChainController.state.chains.get(chain)?.networkState?.caipNetwork;
        const requestedCaipNetworks = this.getRequestedCaipNetworks();
        return requestedCaipNetworks?.some(network => network.id === activeCaipNetwork?.id);
    },
    checkIfSmartAccountEnabled() {
        const networkId = NetworkUtil.caipNetworkIdToNumber(ChainController.state.activeCaipNetwork?.id);
        const activeChain = ChainController.state.activeChain;
        if (!activeChain) {
            throw new Error('activeChain is required to check if smart account is enabled');
        }
        if (!networkId) {
            return false;
        }
        const smartAccountEnabledNetworks = ChainController.state.chains.get(activeChain)?.networkState?.smartAccountEnabledNetworks || [];
        return Boolean(smartAccountEnabledNetworks?.includes(networkId));
    },
    resetNetwork() {
        const chain = ChainController.state.activeChain;
        if (!chain) {
            throw new Error('chain is required to reset network');
        }
        if (!ChainController.state.chains.get(chain)?.networkState?.isDefaultCaipNetwork) {
            ChainController.setChainNetworkData(chain, { caipNetwork: undefined });
        }
        ChainController.setChainNetworkData(chain, {
            approvedCaipNetworkIds: undefined,
            supportsAllNetworks: true,
            smartAccountEnabledNetworks: []
        });
    },
    getSupportsAllNetworks() {
        const chain = ChainController.state.multiChainEnabled
            ? ChainController.state.activeChain
            : ChainController.state.activeChain;
        if (!chain) {
            throw new Error('chain is required to check if network supports all networks');
        }
        return ChainController.state.chains.get(chain)?.networkState?.supportsAllNetworks;
    },
    showUnsupportedChainUI() {
        setTimeout(() => {
            ModalController.open({ view: 'UnsupportedChain' });
        }, 300);
    }
};
//# sourceMappingURL=NetworkController.js.map