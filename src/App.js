import React from 'react';
import { About } from "./routes/About";
import { Home } from "./routes/Home";
import './App.css';
import { HashRouter, Route } from "react-router-dom";

class App extends React.Component {

  render() { // 렌더링
    return (
      <HashRouter>
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
      </HashRouter>
    );
  }
}

export default App;


