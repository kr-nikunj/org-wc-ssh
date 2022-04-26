import { ClientTypes } from "./client";
import { RelayerTypes } from "./relayer";
import { SessionTypes } from "./session";
import { IStore } from "./store";

export declare namespace ProposalTypes {
  export interface Struct {
    id: number;
    relays: RelayerTypes.ProtocolOptions[];
    proposer: {
      publicKey: string;
      metadata: ClientTypes.Metadata;
    };
    namespaces: SessionTypes.Namespace[];
    pairingTopic?: string;
  }
}

export type IProposal = IStore<number, ProposalTypes.Struct>;
