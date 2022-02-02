import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'
import {FaSearch} from 'react-icons/fa'
import {GoThreeBars} from 'react-icons/go'
import Context from '../../Context/index'
import './index.css'

const Header = props => {
  const onLogoutButton = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <Context.Consumer>
      {value => {
        const {click, changeClickValue} = value

        const onMoreOption = () => (
          <div className="options-container">
            <ul className="header-links">
              <li className="link-tag">
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li className="link-tag">
                <Link to="/my-profile" className="link">
                  Profile
                </Link>
              </li>
            </ul>
            <button
              className="logout-button"
              type="button"
              onClick={onLogoutButton()}
            >
              Logout
            </button>
          </div>
        )

        const moreOptions = () => {
          changeClickValue()
        }

        return (
          <>
            <nav className="nav-header">
              <div className="img-name">
                <Link to="/">
                  <img
                    src="https://res.cloudinary.com/dq7imhrvo/image/upload/v1643618953/insta%20Shere%20clone/Group_7807_coznoy.png"
                    alt="website logo"
                    className="header-img"
                  />
                </Link>
              </div>
              <div className="right-side">
                <div className="input-container">
                  <input
                    className="search-input"
                    type="text"
                    placeholder="search"
                  />
                  <button
                    className="button-s"
                    testid="searchIcon"
                    type="button"
                  >
                    <FaSearch className="search-icon" />
                  </button>
                </div>
                <ul className="header-links">
                  <li className="link-tag">
                    <Link to="/" className="link">
                      Home
                    </Link>
                  </li>
                  <li className="link-tag">
                    <Link to="/my-profile" className="link">
                      Profile
                    </Link>
                  </li>
                </ul>
                <button
                  className="logout-button"
                  type="button"
                  onClick={onLogoutButton()}
                >
                  Logout
                </button>
              </div>
              <div className="medium-view">
                <button
                  className="med-button"
                  type="button"
                  onClick={moreOptions()}
                >
                  <GoThreeBars className="more-img" />
                </button>
              </div>
            </nav>
            {click && onMoreOption()}
          </>
        )
      }}
    </Context.Consumer>
  )
}

export default withRouter(Header)
