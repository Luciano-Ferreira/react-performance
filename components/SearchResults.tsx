import { useMemo } from 'react';
import ProductItem from './ProductItem';

type SearchResultsProps = {
  results: Array<{
    id: number;
    price: number;
    title: string;
    priceFormatted: string;
  }>;
  onAddToWishlist: (id: number) => void;
  totalPrice: number;
}

export default function SearchResults({ results, onAddToWishlist, totalPrice }: SearchResultsProps) {
  return (
    <>
      <h2>Total price - {totalPrice}</h2>
      {results.map(product => {
      return (
        <ProductItem 
          key={product.title} 
          product={product} 
          onAddToWishlist={onAddToWishlist} 
        />
      );
    })}
    </>
  );
}