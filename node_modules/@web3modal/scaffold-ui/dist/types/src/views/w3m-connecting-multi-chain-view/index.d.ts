import { LitElement } from 'lit';
export declare class W3mConnectingMultiChainView extends LitElement {
    static styles: import("lit").CSSResult;
    private unsubscribe;
    protected activeConnector: import("@web3modal/core").Connector | undefined;
    constructor();
    render(): import("lit").TemplateResult<1>;
    private networksTemplate;
    private onSwitchNetwork;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-connecting-multi-chain-view': W3mConnectingMultiChainView;
    }
}
