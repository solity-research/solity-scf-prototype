import { HorizonLinkType, HorizonListResponseType } from "./Response";

export type HorizonTransactionType = {
  _links: HorizonTransactionLinksType;
  id: string;
  paging_token: string;
  successful: boolean;
  hash: string;
  ledger: number;
  created_at: string;
  source_account: string;
  source_account_sequence: string;
  fee_account: string;
  fee_charged: string;
  max_fee: string;
  operation_count: number;
  envelope_xdr: string;
  result_xdr: string;
  result_meta_xdr: string;
  fee_meta_xdr: string;
  memo_type: string;
  signatures: string[];
  valid_after: string;
  valid_before: string;
  preconditions?: HorizonTransactionPreconditionsType;
};

export interface HorizonTransactionLinksType {
  self: HorizonLinkType;
  account: HorizonLinkType;
  ledger: HorizonLinkType;
  operations: HorizonLinkType;
  effects: HorizonLinkType;
  precedes: HorizonLinkType;
  succeeds: HorizonLinkType;
  transaction: HorizonLinkType;
}

export interface HorizonTransactionPreconditionsType {
  timebounds: HorizonTransactionTimeboundsType;
}

export interface HorizonTransactionTimeboundsType {
  min_time: string;
  max_time: string;
}

export type HorizonTransactionResponseType =
  HorizonListResponseType<HorizonTransactionType>;
