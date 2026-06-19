import type { Product } from "@/data/products";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  showCategory?: boolean;
}

export default function ProductGrid({
  products: items,
  showCategory = true,
}: ProductGridProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
      {items.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          showCategory={showCategory}
        />
      ))}
    </div>
  );
}
