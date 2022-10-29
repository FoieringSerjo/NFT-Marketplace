export type Trait = 'attack' | 'health' | 'speed';

export type NFTattribute = {
  trait_type: Trait;
  value: string;
};

export type NFTmeta = {
  name: string;
  description: string;
  image: string;
  attributes: NFTattribute[];
};
