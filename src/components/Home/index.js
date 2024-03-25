import {Link} from 'react-router-dom'

import Header from '../Header/index'

import './index.css'

const Home = () => (
  <div className="bgHomeCont">
    <div className="homeCont">
      <div className="headNav">
        <Header />
        <ul className="optionsContLg">
          <li className="optionLg">
            <Link to="/">Home</Link>
          </li>
          <li className="optionLg">
            <Link to="/products">Products</Link>
          </li>
          <li className="optionLg">
            <Link to="/cart">Cart</Link>
          </li>
          <Link className="optionLg" to="/login">
            <li className="optionLg">
              <button type="button" className="logoutBtnLg">
                Logout
              </button>
            </li>
          </Link>
        </ul>
      </div>
      <div className="imgTextLg">
        <div className="imgTextBtnCont">
          <h1 className="homeHead">Clothes That Get YOU Noticed</h1>
          <img
            className="homeImgSm"
            alt="clothes that get you noticed"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          />
          <p className="homePara">
            Fashion is part of the daily air and it does not quite help that it
            changes all the time. Clothes have always been a marker of the era
            and we are in a revolution. Your fashion makes you been seen and
            heard that way you are. So, celebrate the seasons new and exciting
            fashion in your own way.
          </p>
          <button type="button" className="homeShopBtn">
            Shop Now
          </button>
        </div>
        <img
          className="homeImgLg"
          alt="clothes that get you noticed"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        />
      </div>
    </div>
  </div>
)

export default Home
