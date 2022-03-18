import { useMemo } from 'react';
import ProductItem from './ProductItem';

type SearchResultsProps = {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
  onAddToWishlist: (id: number) => void;
}

export default function SearchResults({ results, onAddToWishlist }: SearchResultsProps) {
  const totalPrice = useMemo(() => {
    results.reduce((acc, product) => {
      return acc + product.price;
    }, 0)
  }, [results])

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