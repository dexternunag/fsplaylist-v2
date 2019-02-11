import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './views/Home'
import Landing from './views/Landing'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/floor" component={Landing} />
        </div>
      </Router>
    );
  }
}

export default App;
