export type ProductCondition = 'novo' | 'seminovo';

export interface Product {
  id: string;
  slug: string;
  name: string;
  model: string;
  storage: string;
  color: string;
  condition: ProductCondition;
  image: string;
  featured?: boolean;
  badge?: string;
}
