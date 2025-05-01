"use client";

import { useHighValueProducts } from "@/app/hooks/useHighValueProducts";
import { ProductItem } from "./ProductItem";
import "./product.css";

export const ProductList = () => {
  const { data, isLoading, error } = useHighValueProducts();

  if (isLoading) return <div>Loading products...</div>;
  if (error) return <div>Error loading products: {error.message}</div>;

  const products = data?.data || [];

  return (
    <div className={`methods-wrapper item-list`}>
      {products.map((product) => (
        <ProductItem key={product.id} image={product.attributes?.image?.url} title={product.name} link={product.link} />
      ))}
    </div>
  );
};
