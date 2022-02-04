import React from 'react'

const SearchContext = React.createContext({
  SearchInput: '',
  click: false,
  changeSearchValue: () => {},
  setSearchInput: () => {},
  onMoreOptionsState: () => {},
})

export default SearchContext
