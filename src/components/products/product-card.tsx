
interface Product {
    id: number;
    name: string;
    description: string;
    tags: string[];
    votes: number;
    isFeatured: boolean;
}

export default function ProductCard({ product }: { 
  product: Product }) {
  return <div>{product.name}</div>;
}