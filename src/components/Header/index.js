import {Link, withRouter} from 'react-router-dom'

import {FaSearch} from 'react-icons/fa'
import {GoThreeBars} from 'react-icons/go'

import Cookies from 'js-cookie'
import SearchContext from '../../SearchContext/index'
import './index.css'

const Header = props => (
  <SearchContext.Consumer>
    {value => {
      const {
        searchInput,
        click,
        onChangeSearchInput,
        setSearchInput,
        onMoreOptionsState,
      } = value

      const onLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const onMoreOptions = () => {
        onMoreOptionsState()
      }

      const ChangeSearchInput = event => {
        onChangeSearchInput(event.target.value)
      }

      const onsetSearchInput = () => {
        setSearchInput()
      }

      const onMoreOptionELe = () => (
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
          <button className="logout-button" type="button" onClick={onLogout}>
            Logout
          </button>
        </div>
      )

      return (
        <>
          <nav className="nav-header">
            <div className="img-name">
              <Link to="/">
                <img
                  src="https://res.cloudinary.com/dq7imhrvo/image/upload/v1643601872/insta%20Shere%20clone/Standard_Collection_8_wutyeq.png"
                  alt="website logo"
                  className="header-img"
                />
              </Link>
              <h1 className="header-head">Insta Share</h1>
            </div>
            <div className="right-side">
              <div className="input-container">
                <input
                  className="search-input"
                  type="search"
                  placeholder="Search Caption"
                  onChange={ChangeSearchInput}
                  value={searchInput}
                />
                <button
                  className="button-s"
                  testid="searchIcon"
                  type="button"
                  onClick={onsetSearchInput}
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
                onClick={onLogout}
              >
                Logout
              </button>
            </div>
            <div className="medium-view">
              <button
                className="med-button"
                type="button"
                onClick={onMoreOptions}
              >
                <GoThreeBars className="more-img" />
              </button>
            </div>
          </nav>
          {click && onMoreOptionELe()}
        </>
      )
    }}
  </SearchContext.Consumer>
)

export default withRouter(Header)
