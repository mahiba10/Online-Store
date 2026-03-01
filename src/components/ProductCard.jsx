import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { dispatch } = useCart();

  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <button onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}>
        Add to Cart
      </button>
    </div>
  );
}