import React, { Component } from 'react';
import TableBoard from './board/TableBoard';
import BoardContent from './board/BoardContent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route  exact path='/' component={TableBoard}/>
          <Route  path='/board/content/:boardNo' component={BoardContent}/>
        </Switch> 
      </Router>
    );
  }
}

export default App;