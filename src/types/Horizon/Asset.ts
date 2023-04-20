import { HorizonLinkType, HorizonListResponseType } from "./Response";

export type HorizonAssetType = {
  _links: HorizonAssetLinksType;
  asset_type: string;
  asset_code: string;
  asset_issuer: string;
  paging_token: string;
  num_accounts: number;
  num_claimable_balances: number;
  num_liquidity_pools: number;
  amount: string;
  accounts: HorizonAssetAccountsType;
  claimable_balances_amount: string;
  liquidity_pools_amount: string;
  balances: HorizonAssetBalancesType;
  flags: HorizonAssetFlagsType;
};

export type HorizonAssetLinksType = {
  toml: HorizonLinkType;
};

export type HorizonAssetAccountsType = {
  authorized: number;
  authorized_to_maintain_liabilities: number;
  unauthorized: number;
};

export type HorizonAssetBalancesType = {
  authorized: string;
  authorized_to_maintain_liabilities: string;
  unauthorized: string;
};

export type HorizonAssetFlagsType = {
  auth_required: boolean;
  auth_revocable: boolean;
  auth_immutable: boolean;
  auth_clawback_enabled: boolean;
};

export type HorizonAssetResponseType =
  HorizonListResponseType<HorizonAssetType>;
