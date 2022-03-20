import ProductItem from './ProductItem';
import { List, ListRowRenderer } from 'react-virtualized'

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
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem 
          product={results[index]}
          onAddToWishlist={onAddToWishlist}
        />
      </div>
    )
  }

  return (
    <>
      <h2>Total price - {totalPrice}</h2>

      <List 
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
      {
        /**
         * {results.map(product => {
            return (
              <ProductItem 
                key={product.title} 
                product={product} 
                onAddToWishlist={onAddToWishlist} 
              />
            );
          })}
         */
      }
    </>
  );
}