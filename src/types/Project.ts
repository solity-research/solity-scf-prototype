export type Price = {
  current: number;
  change: number;
};

export type ProjectType = {
  _id: string;
  name: string;
  slug: string;
  symbol: string;
  logo: string;
  p_uid: string;
  type: string;
  price: Price;
  accent: string;
  b_uid: string;
  score: {
    overall: number;
    security: number;
    social: number;
    liquidity: number;
  };
};
