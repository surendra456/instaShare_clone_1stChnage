import {Component} from 'react'
import Header from '../Header'
import Stories from '../Stories'
import PostsList from '../PostsList'
import SearchPostsList from '../searchPosts'
import SearchContext from '../../SearchContext/index'
import './index.css'

class Home extends Component {
  state = {searchInput: '', click: false, searchPostView: false}

  onChangeSearchInput = input => {
    this.setState({searchInput: input})
  }

  setSearchInput = () => {
    this.setState({searchPostView: true})
  }

  moreOptions = () => {
    this.setState(prev => ({click: !prev.click}))
  }

  render() {
    const {searchInput, searchPostView, click} = this.state
    return (
      <>
        <SearchContext.Provider
          value={{
            searchInput,
            click,
            onChangeSearchInput: this.onChangeSearchInput,
            setSearchInput: this.setSearchInput,
            onMoreOptionsState: this.moreOptions,
          }}
        >
          <Header />
          <div className="bg-color">
            {searchPostView ? (
              <SearchPostsList input={searchInput} />
            ) : (
              <>
                <Stories />
                <PostsList />
              </>
            )}
          </div>
        </SearchContext.Provider>
      </>
    )
  }
}

export default Home
