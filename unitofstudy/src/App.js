/* eslint-disable react/jsx-no-undef */
import React from "react";
import "./App.css";
import { BrowserRouter as Router,  Route, Link} from 'react-router-dom';
import TodoDetailScreen from './containers/TodoDetailScreen';
import HomeScreen from './containers/HomeScreen';

function App(){
  return(
    <Router>
        <div>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/index/:id" component={TodoDetailScreen} />     
        </div>
    </Router>
    
  );
}

export default App;
