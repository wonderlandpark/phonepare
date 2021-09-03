import React, { FC } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Compare from './pages/Compare'
import Index from './pages/Index'
import Recommend from './pages/Recommend'

const App: FC = () => {
  return <Router>
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Index} />
        <Route path='/compare' component={Compare} />
        <Route path='/recommend' component={Recommend} />
      </Switch>
      <Footer />
    </div>
  </Router>
}

export default App
