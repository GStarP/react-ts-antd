import React from 'react'
import './App.less'
import { Switch, Route, Redirect } from 'react-router-dom'
import DashBoard from './dashboard/DashBoard'
import Home from './home/Home'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        APP
        <Switch>
          <Route exact path="/" component={DashBoard} />
          <Route path="/home" component={Home} />
          <Redirect to="/404" />
        </Switch>
      </div>
    )
  }
}

export default App
