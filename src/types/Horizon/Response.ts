export type HorizonListResponseType<T> = {
  records: T[];
  self: HorizonLinkType;
  next: HorizonLinkType;
  prev: HorizonLinkType;
};

export type HorizonLinkType = {
  href: string;
  templated?: boolean;
};
