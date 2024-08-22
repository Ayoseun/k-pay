import type { Web3ModalOptions } from '../src/client.js';
import { Web3Modal } from '../src/client.js';
import type { Config } from '@wagmi/core';
export type { Web3ModalOptions } from '../src/client.js';
export declare function createWeb3Modal(options: Web3ModalOptions<Config>): Web3Modal;
export { useWeb3ModalTheme, useWeb3Modal, useWeb3ModalState, useWeb3ModalEvents, useWalletInfo } from '@web3modal/scaffold-vue';
export { defaultWagmiConfig } from '../src/utils/defaultWagmiCoreConfig.js';
