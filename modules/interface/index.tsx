export interface PageBlock {
  // Properties
  getData: () => any;
  setData: (data: any) => Promise<void>;
  getTag: () => any;
  setTag: (tag: any) => Promise<void>
  validate?: () => boolean;
  defaultEdit?: boolean;
  tag?: any;

  // Page Events
  readonly onEdit: () => Promise<void>;
  readonly onConfirm: () => Promise<void>;
  readonly onDiscard: () => Promise<void>;
  // onClear: () => void;

  // Page Block Events
  edit: () => Promise<void>;
  confirm: () => Promise<void>;
  discard: () => Promise<void>;
  config: () => Promise<void>;
}

export interface ICommissionInfo {
  walletAddress: string;
  share: string;
}

export type dappType = 'donation' | 'nft-minter';
export interface IConfig {
  name?: string;
  dappType?: dappType;
  productId?: number;
  logo?: string;
  description?: string;
  link?: string;
  chainId?: number;
  token?: ITokenObject;
  price?: string;
  maxPrice?: string;
  maxOrderQty?: number;
  qty?: number;
  commissions?: ICommissionInfo[];
}

export interface ITokenObject {
  address?: string;
  name: string;
  decimals: number;
  symbol: string;
  status?: boolean | null;
  logoURI?: string;
  isCommon?: boolean | null;
  balance?: string | number;
  isNative?: boolean | null;
  isWETH?: boolean | null;
  isNew?: boolean | null;
};