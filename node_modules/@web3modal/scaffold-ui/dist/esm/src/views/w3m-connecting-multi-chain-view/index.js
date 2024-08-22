var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AssetUtil, ChainController, CoreHelperUtil, NetworkController, RouterController } from '@web3modal/core';
import { customElement } from '@web3modal/ui';
import { html, LitElement } from 'lit';
import { state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './styles.js';
import { ConstantsUtil } from '@web3modal/common';
let W3mConnectingMultiChainView = class W3mConnectingMultiChainView extends LitElement {
    constructor() {
        super();
        this.unsubscribe = [];
        this.activeConnector = ChainController.state.activeConnector;
        this.unsubscribe.push(...[ChainController.subscribeKey('activeConnector', val => (this.activeConnector = val))]);
    }
    render() {
        return html `
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${['m', 'xl', 'xl', 'xl']}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${ifDefined(this.activeConnector?.imageUrl)}
          ></wui-wallet-image>
        </wui-flex>

        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${['0', 's', '0', 's']}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            Select Chain for ${this.activeConnector?.name}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${['xs', '0', 'xs', '0']}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `;
    }
    networksTemplate() {
        const requestedCaipNetworks = NetworkController.getRequestedCaipNetworks();
        const approvedCaipNetworkIds = NetworkController.state.approvedCaipNetworkIds;
        const supportsAllNetworks = NetworkController.state.supportsAllNetworks;
        const chains = ChainController.state.chains;
        const sortedNetworks = CoreHelperUtil.sortRequestedNetworks(approvedCaipNetworkIds, requestedCaipNetworks);
        const networks = [];
        if (chains.get(ConstantsUtil.CHAIN.EVM)) {
            const network = sortedNetworks.find(element => element.name === 'Ethereum');
            if (network) {
                networks.push(network);
            }
        }
        if (chains.get(ConstantsUtil.CHAIN.SOLANA)) {
            const network = sortedNetworks.find(element => element.name === 'Solana');
            if (network) {
                networks.push(network);
            }
        }
        return networks?.map(network => html `
        <wui-list-wallet
          imageSrc=${ifDefined(AssetUtil.getNetworkImage(network))}
          type="network"
          tagLabel="installed"
          tagVariant="main"
          name=${network.name ?? network.id}
          @click=${() => this.onSwitchNetwork(network)}
          .disabled=${!supportsAllNetworks && !approvedCaipNetworkIds?.includes(network.id)}
        ></wui-list-wallet>
      `);
    }
    onSwitchNetwork(network) {
        NetworkController.setCaipNetwork(network);
        if (network.name === ConstantsUtil.CHAIN_NAME.EVM) {
            const connector = this.activeConnector?.providers?.find(provider => provider.chain === ConstantsUtil.CHAIN.EVM);
            RouterController.push('ConnectingExternal', { connector });
        }
        else if (network.name === ConstantsUtil.CHAIN_NAME.SOLANA) {
            const connector = this.activeConnector?.providers?.find(provider => provider.chain === ConstantsUtil.CHAIN.SOLANA);
            RouterController.push('ConnectingExternal', { connector });
        }
    }
};
W3mConnectingMultiChainView.styles = styles;
__decorate([
    state()
], W3mConnectingMultiChainView.prototype, "activeConnector", void 0);
W3mConnectingMultiChainView = __decorate([
    customElement('w3m-connecting-multi-chain-view')
], W3mConnectingMultiChainView);
export { W3mConnectingMultiChainView };
//# sourceMappingURL=index.js.map