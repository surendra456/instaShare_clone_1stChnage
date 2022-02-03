import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'
import {GoThreeBars} from 'react-icons/go'
import Cookies from 'js-cookie'
import './index.css'

class Header extends Component {
  state = {click: false, searchInput: ''}

  moreOptions = () => {
    this.setState(prev => ({click: !prev.click}))
  }

  onLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onMoreOption = () => (
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
      <button className="logout-button" type="button" onClick={this.onLogout}>
        Logout
      </button>
    </div>
  )

  render() {
    const {click, searchInput} = this.state
    console.log(searchInput)
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
                onChange={this.onChangeSearchInput}
              />
              <button className="button-s" testid="searchIcon" type="button">
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
              onClick={this.onLogout}
            >
              Logout
            </button>
          </div>
          <div className="medium-view">
            <button
              className="med-button"
              type="button"
              onClick={this.moreOptions}
            >
              <GoThreeBars className="more-img" />
            </button>
          </div>
        </nav>
        {click && this.onMoreOption()}
      </>
    )
  }
}

export default withRouter(Header)
