import type { Config } from '@wagmi/core';
import type { Web3ModalOptions } from '../src/client.js';
import { Web3Modal } from '../src/client.js';
export type { Web3Modal, Web3ModalOptions } from '../src/client.js';
export { defaultWagmiConfig } from '../src/utils/defaultWagmiCoreConfig.js';
export { authConnector } from '../src/connectors/AuthConnectorExport.js';
export declare function createWeb3Modal(options: Web3ModalOptions<Config>): Web3Modal;
