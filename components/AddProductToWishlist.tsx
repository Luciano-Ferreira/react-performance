export interface AddProductToWishlistProp {
  onAddToWishlist: () => void;
  onRequestClose: () => void;
}
export function AddProductToWishlist({ onAddToWishlist, onRequestClose }: AddProductToWishlistProp) {

  return (
    <span>
      Deseja adicionar aos favoritos?
      <button onClick={onAddToWishlist}>Sim</button>
      <button onClick={onRequestClose}>Não</button>
    </span>
  )
}