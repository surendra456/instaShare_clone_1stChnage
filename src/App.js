import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home/index.'
import Profile from './components/Profile'
import UserProfile from './components/UserProfile'
import Context from './Context/index'

import './App.css'

class App extends Component {
  state = {click: false}

  changeClickValue = () => {
    this.setState(prev => ({click: !prev.click}))
  }

  render() {
    const {click} = this.state
    return (
      <Context.Provider
        value={{
          click,
          changeClickValue: this.changeClickValue,
        }}
      >
        <Switch>
          <Route exact to path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/my-profile" component={Profile} />
          <ProtectedRoute path="/users/:userId" component={UserProfile} />
        </Switch>
      </Context.Provider>
    )
  }
}

export default App
