import React, { Component } from 'react';
import logo from './logo.svg';
import Header from "./Component/Header"
import LeftMenu from "./Component/LeftMenu"
import MainUI from "./Component/UIHandling"
import "bulma/css/bulma.min.css"
import "./index.css"
import './PhrApp.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="columns">
            <div className="column is-3">
              <LeftMenu />
            </div>
            <div className="column is-9">
              <MainUI />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
