import { memo, useState } from 'react';
import { AddProductToWishlistProp } from './AddProductToWishlist';
// import AddProductToWishlist from './AddProductToWishlist';
import dynamic from 'next/dynamic';

const AddProductToWishlist = dynamic<AddProductToWishlistProp>(() => {
   return import ('./AddProductToWishlist').then(mod => mod.AddProductToWishlist)
}, {
  loading: () => <span>Carregando...</span>
})

type ProductItemProps = {
  product: {
    id: number;
    price: number;
    title: string;
    priceFormatted: string;
  },
  onAddToWishlist: (id: number) => void;
}

function ProductItemComponent({ product, onAddToWishlist }: ProductItemProps) {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);


  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishlist(true)}>Adicionar aos favoritos</button>
      {
        isAddingToWishlist &&
        <AddProductToWishlist onAddToWishlist={() => onAddToWishlist(product.id)} onRequestClose={() => setIsAddingToWishlist(false)} />

      }
    </div>
  );
}

const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
})

export default ProductItem;