import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="bgHeaderCont">
    <div className="logoLogoutCont">
      <img
        className="homeLogoImg"
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      />
      <Link to="/login">
        <button type="button" className="logoutBtnSm">
          <img
            className="logoutImg"
            alt="nav logout"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          />
        </button>
      </Link>
    </div>
    <ul className="optionsContSm">
      <Link to="/">
        <li className="optionSm">
          <img
            className="optionSmImg"
            alt="nav home"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          />
        </li>
      </Link>
      <Link to="/products">
        <li className="optionSm">
          <img
            className="optionSmImg"
            alt="nav products"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          />
        </li>
      </Link>
      <Link to="/cart">
        <li className="optionSm">
          <img
            className="optionSmImg"
            alt="nav cart"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          />
        </li>
      </Link>
    </ul>
  </nav>
)

export default Header
