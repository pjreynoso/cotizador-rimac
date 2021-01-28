import React from 'react'
import { Switch, Route, Redirect , BrowserRouter as Router } from 'react-router-dom'
import Login from './login'
import Process from './process'
import Thanks from './thanks'

const App = () => {
  return (
    <Router>
      <div className='content'>
        <Switch>
          <Route path='/' exact>
            <Login />
          </Route>
          <Route path='/process'>
            <Process />
          </Route>
          <Route path='/thanks'>
            <Thanks />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
