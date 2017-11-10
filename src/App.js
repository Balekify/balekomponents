import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Nav from "components/nav";

class App extends Component {
  navItems = () => [
    <Link key={'randomId222'} to="/">lien 1</Link>,
    <Link key={'randomId2SDAD'} to="/2">lien 2</Link>,
    <Link key={'∆Ω∆'} to="/3">lien 3</Link>
  ];
  render() {
    return (
      <Router>
        <div className="App">
          <Nav buttonLabel={"nav"}>{this.navItems()}</Nav>
        </div>
      </Router>
    );
  }
}

export default App;
