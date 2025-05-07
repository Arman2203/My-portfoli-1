import { useState } from 'react';
import Data from '../Data.json';
import Product from '../component/Product';
import { CartContext } from "../Features/ContextProvider"; // ուղղված ուղին
import { Link } from 'react-router-dom';
import  { useContext } from "react";
import { BsCart } from "react-icons/bs";

function Electronic (){
    const [products] = useState(Data.products); 
    const {cart} = useContext(CartContext)
     return(
        <>
         <div className="header">
        <div className="size">
        
          <Link className="li-image">
            <img src="./images/header-logo.jpg" alt='' className="header-logo" />
          </Link>
          <nav>
            <ul>
              <li>
                <Link className="home">Գլխավոր</Link>
              </li>
              <li>
                <Link className="li">Կապ</Link>
              </li>
              <li>
                 <Link className='li'to="/login">Մուտք</Link>
                </li>
                <li>
                 <Link className='li' to="/register">Գրանցում</Link>
                </li>
            </ul>
          </nav>
          {/* <i
            id="ic1"
            className="fa-solid fa-cart-shopping"
        
          ></i>  */}
            <Link
          to="/cart"
          className="navbar-link fs-5 text-white text-decoration-none"
          >
          <BsCart />{cart.length}
          </Link>
           
        </div>
      </div>
        <div className="container mt-5">
                    <div className="row row-cols-1 row-cols-md-5 g-4">
                        {products.map((p) => (
                            <Product key={p.id} product={p} /> 
                        ))}
                    </div>
                </div>
                <div>
                     
                </div>
        </>
     )
}

export default Electronic;