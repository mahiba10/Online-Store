import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { state, dispatch, totalPrice } = useCart();

  return (
    <div className="container">
      <h1>Cart</h1>
      <Link to="/">Back to Store</Link>

      {state.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div>
          {state.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>

              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_QUANTITY",
                    payload: { id: item.id, quantity: Number(e.target.value) },
                  })
                }
              />

              <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}>
                Remove
              </button>
            </div>
          ))}

          <h2>Total: ${totalPrice}</h2>
        </div>
      )}
    </div>
  );
}