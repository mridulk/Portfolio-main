import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Resume from './Components/Resume'
import CssBaseline from '@material-ui/core/CssBaseline'
import Home from './Components/index'

function App() {
  return (
    <>
    <CssBaseline/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/resume" component={Resume}/>
    </>
  );
}

export default App;
