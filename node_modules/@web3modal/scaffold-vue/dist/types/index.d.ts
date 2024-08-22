import type { Event } from '@web3modal/core';
import type { W3mAccountButton, W3mButton, W3mConnectButton, W3mNetworkButton, W3mOnrampWidget, Web3ModalScaffold } from '@web3modal/scaffold';
type OpenOptions = Parameters<Web3ModalScaffold['open']>[0];
type ThemeModeOptions = Parameters<Web3ModalScaffold['setThemeMode']>[0];
type ThemeVariablesOptions = Parameters<Web3ModalScaffold['setThemeVariables']>[0];
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        W3mConnectButton: Pick<W3mConnectButton, 'size' | 'label' | 'loadingLabel'>;
        W3mAccountButton: Pick<W3mAccountButton, 'disabled' | 'balance'>;
        W3mButton: Pick<W3mButton, 'size' | 'label' | 'loadingLabel' | 'disabled' | 'balance'>;
        W3mNetworkButton: Pick<W3mNetworkButton, 'disabled'>;
        W3mOnrampWidget: Pick<W3mOnrampWidget, 'disabled'>;
    }
}
export declare function getWeb3Modal(web3modal: any): void;
export declare function useWeb3ModalTheme(): {
    setThemeMode: (themeMode: ThemeModeOptions) => void;
    setThemeVariables: (themeVariables: ThemeVariablesOptions) => void;
    themeMode: import("vue").Ref<import("@web3modal/core").ThemeMode>;
    themeVariables: import("vue").Ref<{
        '--w3m-font-family'?: string | undefined;
        '--w3m-accent'?: string | undefined;
        '--w3m-color-mix'?: string | undefined;
        '--w3m-color-mix-strength'?: number | undefined;
        '--w3m-font-size-master'?: string | undefined;
        '--w3m-border-radius-master'?: string | undefined;
        '--w3m-z-index'?: number | undefined;
    }>;
};
export declare function useWeb3Modal(): {
    open: (options?: OpenOptions) => Promise<void>;
    close: () => Promise<void>;
};
export declare function useWalletInfo(): {
    walletInfo: import("vue").Ref<{
        [x: string]: unknown;
        name?: string | undefined;
        icon?: string | undefined;
    } | undefined>;
};
export declare function useWeb3ModalState(): {
    open: boolean;
    selectedNetworkId: `${string}:${string}` | undefined;
};
export interface Web3ModalEvent {
    timestamp: number;
    data: Event;
}
export declare function useWeb3ModalEvents(): Web3ModalEvent;
export {};
