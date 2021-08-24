import React, { FC } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Compare from './pages/Compare'
import Index from './pages/Index'

const App: FC = () => {
  return <Router>
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Index} />
        <Route path='/compare' component={Compare} />
      </Switch>
    </div>
  </Router>
}

export default App
