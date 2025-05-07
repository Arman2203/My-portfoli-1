import { useContext } from 'react';
import { CartContext } from '../Features/ContextProvider';
import StripeCheckout from 'react-stripe-checkout';
// import "./cart.css"
import CartProduct from '../component/CartProduct';
import { totalItem, totalPrice } from '../Features/CartReducer';
// import { Link } from 'react-router-dom';
const onToken = (token) => {
    console.log(token);
    
  };
const Cart = () => {
    const { cart } = useContext(CartContext);
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-8">
                    {cart.map((p) => (
                        <CartProduct key={p.id} product={p} /> // Ավելացրեք `key={p.id}`
                    ))}
                </div>
                <div className="col-4">
                    <div className="bg-secondary p-3 text-white">
                        <h5>Total Items: {totalItem(cart)}</h5>
                        <h5>Total Price: {totalPrice(cart)}դր </h5>
                        {/* <Link to=""><button className="btn btn-warning">Վճարել</button></Link> */}
                        <StripeCheckout
               token={onToken}
               name="onepr1ce"
               currency="AMD"
               amount={totalPrice}
               stripeKey="pk_test_51QZYcHCAXkeHDsbCugIGs5OJWHN1RRnXKsNPcr24v9JPMRbNB1lrrrxu5kIblZWNUMAxMef5wAYMrpe5J9pbr9JW00Lb00rMMa"
               label='Վճարել'
               
             />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
