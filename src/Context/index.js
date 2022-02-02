import React from 'react'

const Context = React.createContext({
  click: false,
  changeClickValue: () => {},
})

export default Context
