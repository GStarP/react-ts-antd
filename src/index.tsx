import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'
import App from './pages/App'
import { Route, Switch, HashRouter } from 'react-router-dom'
import Error from './pages/error/Error'

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/404" component={Error} />
      <Route path="/" component={App} />
    </Switch>
  </HashRouter>,
  document.getElementById('root')
)
