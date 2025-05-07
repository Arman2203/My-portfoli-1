import { useContext } from "react"; // Հեռացրել ենք React-ը
import PropTypes from "prop-types"; // Ավելացրել ենք PropTypes
import { CartContext } from "../Features/ContextProvider";

const CartProduct = ({ product }) => {
  const { cart, dispatch } = useContext(CartContext);

  const Increase = (id) => {
    const Index = cart.findIndex((p) => p.id === id);
    if (cart[Index].quantity < 10) {
      dispatch({ type: "Increase", id });
    }
  };

  const Decrease = (id) => {
    const Index = cart.findIndex((p) => p.id === id);
    if (cart[Index].quantity > 1) {
      dispatch({ type: "Decrease", id });
    }
  };

  return (
    <div className="d-flex border mb-3">
      <img src={product.thumbnail} className="w-25 h-25" alt={product.title} />
      <div className="detail ms-4">
        <h4>{product.title}</h4>
        <h5>{product.price}դր</h5>
        <div className="buttons">
          <button
            className="rounded-circle px-2"
            onClick={() => Decrease(product.id)}
          >
            <b>-</b>
          </button>
          <button className="rounded">{product.quantity}</button>
          <button
            className="rounded-circle px-2"
            onClick={() => Increase(product.id)}
          >
            <b>+</b>
          </button>
        </div>
        <button
          className="btn btn-sm btn-warning"
          onClick={() => dispatch({ type: "Remove", id: product.id })}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

CartProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartProduct;
