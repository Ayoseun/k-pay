import type { AuthConnector, Connector } from '../utils/TypeUtil.js';
export interface ConnectorControllerState {
    connectors: Connector[];
}
export declare const ConnectorController: {
    state: ConnectorControllerState;
    subscribeKey<K extends "connectors">(key: K, callback: (value: ConnectorControllerState[K]) => void): () => void;
    setConnectors(connectors: ConnectorControllerState['connectors'], multiChain?: boolean): void;
    mergeMultiChainConnectors(connectors: ConnectorControllerState['connectors']): Connector[];
    addConnector(connector: Connector | AuthConnector): void;
    getAuthConnector(): AuthConnector | undefined;
    getAnnouncedConnectorRdns(): (string | undefined)[];
    getConnectors(): Connector[];
    getConnector(id: string, rdns?: string | null): Connector | undefined;
};
