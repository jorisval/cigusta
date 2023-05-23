import { HeaderContext } from "../utils/context";
import { useContext } from "react";
import MenuMd from "./Menu-md";
import Logo from "../../assets/images/cigusta-logo.png";
import NavLg from "./Nav-lg";
import Search from "./Search";
import Cart from "./Cart";
import Favorite from "./Favorite";
import { Link } from "react-router-dom";

function Header() {
  const { activePage } = useContext(HeaderContext);

  const handleSearchClick = () => {
    document.querySelector('.search .background').style.display = 'block';
    document.querySelector('.search-content').classList.add('show');
  };

  const handleBagPlusClick = () => {
    document.querySelector('.cart .background').style.display = 'block';
    document.querySelector('.cart-content').classList.add('show');
  };

  const handleFavoriteClick = () => {
    document.querySelector('.favorite .background').style.display = 'block';
    document.querySelector('.favorite-content').classList.add('show');
  };

  return (
    <>
      <div className="header-band">
        <ul className="infos">
          <li><span className="bi bi-telephone-fill"></span>+33 7 80 70 82 87</li>
          <li><span className="bi bi-envelope-fill"></span>info@kingfood.com</li>
          <li><span className="bi bi-geo-alt-fill"></span>123 Main Street, New York, NY 10030</li>
          <li><span className="bi bi-clock-fill"></span>10AM - 5 PM</li>
        </ul>
        <ul className="media">
          <li><Link to=""><span className="bi bi-facebook"></span></Link></li>
          <li><Link to=""><span className="bi bi-instagram"></span></Link></li>
          <li><Link to=""><span className="bi bi-twitter"></span></Link></li>
          <li><Link to=""><span className="bi bi-youtube"></span></Link></li>
          <li><Link to=""><span className="bi bi-pinterest"></span></Link></li>
        </ul>
      </div>
      <div className={activePage === "home" ? "header home" : "header"}>
        <MenuMd />
        <div className="header__logo">
            <img src={Logo} alt=""/>
        </div>
        <NavLg />
        <div className="header__butons">
          <div className="header__booking">
              <span onClick={handleSearchClick}>Book Now</span>
          </div>
          <div className="header__cart">
              <span className="bi bi-cart3" onClick={handleBagPlusClick}></span>
          </div>
          <div className="header__call">
              <div className="call-icon">
                <span className="bi bi-telephone-fill" onClick={handleFavoriteClick}></span>
              </div>
              <div className="call">
                <span className="text">Call Us</span>
                <span className="number">+33 7 80 70 82 87</span>
              </div>
          </div>
        </div>
        <Search />
        <Cart />
        <Favorite />
      </div>  
    </>
  );
}
  
export default Header;
  