import { proxyMap, subscribeKey as subKey } from 'valtio/utils';
import { proxy, ref, subscribe as sub } from 'valtio/vanilla';
import { NetworkController } from './NetworkController.js';
import { AccountController } from './AccountController.js';
import { PublicStateController } from './PublicStateController.js';
import {} from '@web3modal/common';
const accountState = {
    isConnected: false,
    currentTab: 0,
    tokenBalance: [],
    smartAccountDeployed: false,
    addressLabels: new Map(),
    allAccounts: []
};
const networkState = {
    supportsAllNetworks: true,
    isDefaultCaipNetwork: false,
    smartAccountEnabledNetworks: []
};
const state = proxy({
    multiChainEnabled: false,
    chains: proxyMap(),
    activeChain: undefined,
    activeCaipNetwork: undefined
});
export const ChainController = {
    state,
    subscribeKey(key, callback) {
        return subKey(state, key, callback);
    },
    subscribeChain(callback) {
        let prev = undefined;
        const activeChain = state.activeChain;
        if (activeChain) {
            return sub(state.chains, () => {
                const nextValue = state.chains.get(activeChain);
                if (!prev || prev !== nextValue) {
                    prev = nextValue;
                    callback(nextValue);
                }
            });
        }
        return () => { };
    },
    subscribeChainProp(property, callback) {
        let prev = undefined;
        const activeChain = state.activeChain;
        if (activeChain) {
            return sub(state.chains, () => {
                const nextValue = state.chains.get(activeChain)?.[property];
                if (prev !== nextValue) {
                    prev = nextValue;
                    callback(nextValue);
                }
            });
        }
        return () => { };
    },
    initialize(adapters) {
        const firstChainToActivate = adapters?.[0]?.chain;
        if (!firstChainToActivate) {
            throw new Error('Chain is required to initialize ChainController');
        }
        state.activeChain = firstChainToActivate;
        adapters.forEach((adapter) => {
            state.chains.set(adapter.chain, {
                chain: adapter.chain,
                connectionControllerClient: adapter.connectionControllerClient,
                networkControllerClient: adapter.networkControllerClient,
                accountState,
                networkState
            });
        });
    },
    setMultiChainEnabled(multiChain) {
        state.multiChainEnabled = multiChain;
    },
    setChainNetworkData(chain, props) {
        if (!chain) {
            throw new Error('Chain is required to update chain network data');
        }
        const chainAdapter = state.chains.get(chain);
        if (chainAdapter) {
            chainAdapter.networkState = {
                ...chainAdapter.networkState,
                ...props
            };
            state.chains.set(chain, chainAdapter);
            NetworkController.replaceState(chainAdapter.networkState);
        }
    },
    setChainAccountData(chain, accountProps) {
        if (!chain) {
            throw new Error('Chain is required to update chain account data');
        }
        const chainAdapter = state.chains.get(chain);
        if (chainAdapter) {
            chainAdapter.accountState = {
                ...chainAdapter.accountState,
                ...accountProps
            };
            state.chains.set(chain, chainAdapter);
            AccountController.replaceState(chainAdapter.accountState);
        }
    },
    setAccountProp(prop, value, chain) {
        this.setChainAccountData(state.multiChainEnabled ? chain : state.activeChain, {
            [prop]: value
        });
    },
    setActiveChain(chain) {
        const newAdapter = chain ? state.chains.get(chain) : undefined;
        if (newAdapter) {
            state.activeChain = newAdapter.chain;
            state.activeCaipNetwork = state.chains.get(newAdapter.chain)?.networkState
                ?.requestedCaipNetworks?.[0];
            PublicStateController.set({ activeChain: chain });
        }
    },
    setActiveConnector(connector) {
        if (connector) {
            state.activeConnector = ref(connector);
        }
    },
    getNetworkControllerClient() {
        const chain = state.activeChain;
        if (!chain) {
            throw new Error('Chain is required to get network controller client');
        }
        const chainAdapter = state.chains.get(chain);
        if (!chainAdapter) {
            throw new Error('Chain adapter not found');
        }
        if (!chainAdapter.networkControllerClient) {
            throw new Error('NetworkController client not set');
        }
        return chainAdapter.networkControllerClient;
    },
    getConnectionControllerClient() {
        const chain = state.activeChain;
        if (!chain) {
            throw new Error('Chain is required to get connection controller client');
        }
        const chainAdapter = state.chains.get(chain);
        if (!chainAdapter) {
            throw new Error('Chain adapter not found');
        }
        if (!chainAdapter.connectionControllerClient) {
            throw new Error('ConnectionController client not set');
        }
        return chainAdapter.connectionControllerClient;
    },
    getAccountProp(key) {
        const chainToWrite = state.multiChainEnabled ? state.activeChain : state.activeChain;
        if (!chainToWrite) {
            return undefined;
        }
        const chainAccountState = state.chains.get(chainToWrite)?.accountState;
        if (!chainAccountState) {
            return undefined;
        }
        return chainAccountState[key];
    },
    getNetworkProp(key) {
        const chainToWrite = state.multiChainEnabled ? state.activeChain : state.activeChain;
        if (!chainToWrite) {
            return undefined;
        }
        const chainNetworkState = state.chains.get(chainToWrite)?.networkState;
        if (!chainNetworkState) {
            return undefined;
        }
        return chainNetworkState[key];
    },
    resetAccount(chain) {
        const chainToWrite = state.multiChainEnabled ? chain : state.activeChain;
        if (!chainToWrite) {
            throw new Error('Chain is required to set account prop');
        }
        this.setChainAccountData(chainToWrite, {
            isConnected: false,
            smartAccountDeployed: false,
            currentTab: 0,
            caipAddress: undefined,
            address: undefined,
            balance: undefined,
            balanceSymbol: undefined,
            profileName: undefined,
            profileImage: undefined,
            addressExplorerUrl: undefined,
            tokenBalance: [],
            connectedWalletInfo: undefined,
            preferredAccountType: undefined,
            socialProvider: undefined,
            socialWindow: undefined,
            farcasterUrl: undefined
        });
    }
};
//# sourceMappingURL=ChainController.js.map