import { HorizonLinkType, HorizonListResponseType } from "./Response";

export type HorizonOperationType = {
  _links: HorizonOperationLinksType;
  id: string;
  paging_token: string;
  transaction_successful: boolean;
  source_account: string;
  type: string;
  type_i: number;
  created_at: string;
  transaction_hash: string;
  asset_type: string;
  from: string;
  to: string;
  amount: string;
  path: HorizonOperationPathType[];
  source_amount: string;
  destination_min?: string;
  source_asset_type: string;
  source_asset_code?: string;
  source_asset_issuer?: string;
  asset_code?: string;
  asset_issuer?: string;
  source_max?: string;
};

export type HorizonOperationPathType = {
  asset_type: string;
  asset_code: string;
  asset_issuer: string;
};

export type HorizonOperationLinksType = {
  self: HorizonLinkType;
  transaction: HorizonLinkType;
  effects: HorizonLinkType;
  succeeds: HorizonLinkType;
  precedes: HorizonLinkType;
};

export type HorizonOperationResponseType =
  HorizonListResponseType<HorizonOperationType>;
