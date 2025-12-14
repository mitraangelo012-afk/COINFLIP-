export type CoinSide = 'HEADS' | 'TAILS';

export interface ReflectionPair {
  id: string;
  theme: string;
  heads: string;
  tails: string;
}

export interface FlipResult {
  side: CoinSide;
  reflection: ReflectionPair;
}
