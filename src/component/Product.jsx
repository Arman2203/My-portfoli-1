import  { useContext } from "react";
import PropTypes from "prop-types"; // PropTypes-ի ներմուծում
import { CartContext } from "../Features/ContextProvider";

const Product = ({ product }) => {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="col">
      <div className="card h-100"> {/* className օգտագործվում է */}
        <img
          src={product.thumbnail}
          className="card-img-top h-75" /* className օգտագործվում է */
          alt={product.title}
        />
        <div className="card-body"> {/* className օգտագործվում է */}
          <h4 className="card-title">{product.title}</h4> {/* className օգտագործվում է */}
          <h5>{product.price}դր</h5>
          <button
            className="btn btn-primary" /* className օգտագործվում է */
            onClick={() => dispatch({ type: "Add", product: product })}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

// PropTypes-ի ստուգում
Product.propTypes = {
  product: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Product;
