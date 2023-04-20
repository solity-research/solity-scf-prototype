/** Shrinks a web3 address */
export const shrinkAddress = (str: string) =>
  `${str.substring(0, 4)}...${str.substring(str.length - 5)}`;
