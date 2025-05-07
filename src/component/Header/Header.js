import { Link } from 'react-router-dom';
import './header.css';
import Section from '../Section/Section';
import { CartContext } from "../../Features/ContextProvider"; // ուղղված ուղին
import  { useContext,  } from "react";
import { BsCart } from "react-icons/bs";
import { useTranslation } from 'react-i18next';
// import i18next from 'i18next';



function Header ()  {
  const {cart} = useContext(CartContext)
  
  const [t, i18n] = useTranslation("global");
  const handleChangeLanguage = (lang: string ) => {
    i18n.changeLanguage(lang);
  }
 
  return (
    <>
      <div className="header">
        <div className="size">
        
          <Link className="li-image">
            <img src="./images/header-logo.jpg" alt='' className="header-logo" />
          
          </Link>
          <nav>
            <ul>
              <li>
                <Link className="home">{t("home")}</Link>
              </li>
              <li>
                <Link className="li">{t("contact")}</Link>
              </li>
              <li>
                 <Link className='li'to="/login">{t("login")}</Link>
                </li>
                <li>
                 <Link className='li' to="/register">{t("register")}</Link>
                </li>

            </ul>
          </nav>

          <button onClick={() => handleChangeLanguage("en")} className='lang-button'>EN</button>
          <button onClick={() => handleChangeLanguage("am")}className='lang-button'>AM</button>
          <button onClick={() => handleChangeLanguage("ru")}className='lang-button'>RU</button>

          
            <Link
          to="/cart"
          className="navbar-link fs-5 text-white text-decoration-none"
          >
          <BsCart />{cart.length}
          </Link>
           
        </div>
      </div>
       <Section/>
    </>
   
  );
}
export default Header;