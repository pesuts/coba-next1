export interface ProductType {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
};

export interface ProductsProps { 
  products?: ProductType[]
}
export interface ProductProps { 
  product?: ProductType
}