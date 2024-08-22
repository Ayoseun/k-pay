import type { CaipNetwork, ChainAdapter, Connector } from '../utils/TypeUtil.js';
import { type NetworkControllerState } from './NetworkController.js';
import { type AccountControllerState } from './AccountController.js';
import { type Chain } from '@web3modal/common';
export interface ChainControllerState {
    multiChainEnabled: boolean;
    activeChain: Chain | undefined;
    activeCaipNetwork?: CaipNetwork;
    chains: Map<Chain, ChainAdapter>;
    activeConnector?: Connector;
}
type ChainsInitializerAdapter = Pick<ChainAdapter, 'connectionControllerClient' | 'networkControllerClient' | 'chain'>;
export declare const ChainController: {
    state: ChainControllerState;
    subscribeKey<K extends keyof ChainControllerState>(key: K, callback: (value: ChainControllerState[K]) => void): () => void;
    subscribeChain(callback: (value: ChainAdapter | undefined) => void): () => void;
    subscribeChainProp<K_1 extends keyof ChainAdapter>(property: K_1, callback: (value: ChainAdapter[K_1] | undefined) => void): () => void;
    initialize(adapters: ChainsInitializerAdapter[]): void;
    setMultiChainEnabled(multiChain: boolean): void;
    setChainNetworkData(chain: Chain | undefined, props: Partial<NetworkControllerState>): void;
    setChainAccountData(chain: Chain | undefined, accountProps: Partial<AccountControllerState>): void;
    setAccountProp(prop: keyof AccountControllerState, value: AccountControllerState[keyof AccountControllerState], chain?: Chain): void;
    setActiveChain(chain?: Chain): void;
    setActiveConnector(connector: ChainControllerState['activeConnector']): void;
    getNetworkControllerClient(): import("./NetworkController.js").NetworkControllerClient;
    getConnectionControllerClient(): import("./ConnectionController.js").ConnectionControllerClient;
    getAccountProp<K_2 extends keyof AccountControllerState>(key: K_2): AccountControllerState[K_2] | undefined;
    getNetworkProp<K_3 extends keyof NetworkControllerState>(key: K_3): NetworkControllerState[K_3] | undefined;
    resetAccount(chain?: Chain): void;
};
export {};
