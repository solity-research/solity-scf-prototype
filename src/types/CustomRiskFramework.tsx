export type CustomRiskFrameworkType = {
  id: string;
  name: string;
  modifiers: {
    overall: number;
    security: number;
    social: number;
    liquidity: number;
  };
};
