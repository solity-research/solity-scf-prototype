import { HorizonLinkType, HorizonListResponseType } from "./Response";

export type HorizonPoolType = {
  _links: HorizonPoolLinksType;
  id: string;
  paging_token: string;
  fee_bp: number;
  type: string;
  total_trustlines: string;
  total_shares: string;
  reserves: HorizonPoolReserveType[];
  last_modified_ledger: number;
  last_modified_time: string;
};

export type HorizonPoolLinksType = {
  self: HorizonLinkType;
  transactions: HorizonLinkType;
  operations: HorizonLinkType;
};

export type HorizonPoolReserveType = {
  asset: string;
  amount: string;
};

export type HorizonPoolResponseType = HorizonListResponseType<HorizonPoolType>;
