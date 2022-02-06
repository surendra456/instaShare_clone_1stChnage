import React from 'react'

const SearchContext = React.createContext({
  SearchInput: '',
  click: false,
  searchPostView: false,
  searchValue: false,
  changeSearchValue: () => {},
  setSearchInput: () => {},
  onMoreOptionsState: () => {},
  searchBox: () => {},
})

export default SearchContext
