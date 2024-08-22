import type { Chain } from '@wagmi/core/chains';
import type { Config } from '@wagmi/core';
import type { LibraryOptions, PublicStateControllerState, Token } from '@web3modal/scaffold';
import { Web3ModalScaffold } from '@web3modal/scaffold';
import type { Web3ModalSIWEClient } from '@web3modal/siwe';
export interface Web3ModalClientOptions<C extends Config> extends Omit<LibraryOptions, 'defaultChain' | 'tokens'> {
    wagmiConfig: C;
    siweConfig?: Web3ModalSIWEClient;
    defaultChain?: Chain;
    chainImages?: Record<number, string>;
    connectorImages?: Record<string, string>;
    tokens?: Record<number, Token>;
}
export type Web3ModalOptions<C extends Config> = Omit<Web3ModalClientOptions<C>, '_sdkVersion' | 'isUniversalProvider'>;
interface Web3ModalState extends PublicStateControllerState {
    selectedNetworkId: number | undefined;
}
export declare class Web3Modal extends Web3ModalScaffold {
    private hasSyncedConnectedAccount;
    private options;
    private wagmiConfig;
    private chain;
    constructor(options: Web3ModalClientOptions<Config>);
    getState(): {
        selectedNetworkId: number | undefined;
        loading: boolean;
        open: boolean;
        activeChain?: string | undefined;
    };
    subscribeState(callback: (state: Web3ModalState) => void): () => void;
    private syncRequestedNetworks;
    private syncAccount;
    private syncNetwork;
    private syncWalletConnectName;
    private syncProfile;
    private syncBalance;
    private syncConnectedWalletInfo;
    private syncConnectors;
    private syncAuthConnector;
    private initAuthConnectorListeners;
    private listenAuthConnector;
    private listenModal;
}
export {};
