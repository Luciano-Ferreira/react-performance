import { memo } from 'react';

type ProductItemProps = {
  product: {
    id: number;
    price: number;
    title: string;
    priceFormatted: string;
  },
  onAddToWishlist: (id: number) => void;
}

function ProductItemComponent ({ product, onAddToWishlist }:ProductItemProps) {
  return(
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => onAddToWishlist(product.id)} >Add to Wishlist</button>
    </div>
  );
}

const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
})

export default ProductItem;