import ProductItem from './ProductItem';

type SearchResultsProps = {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>
}

export default function SearchResults({ results }: SearchResultsProps) {
  return (
    <>{results.map(product => {
      return (
        <ProductItem key={product.title} product={product} />
      );
    })}</>
  );
}