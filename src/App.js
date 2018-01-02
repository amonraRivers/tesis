import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChapterComponent from './components/chapterComponent'
import chapters from './data/chapters.json'
import {Switch, Route,BrowserRouter,Link} from "react-router-dom"

class App extends Component {

  renderLinks(){
    console.log(chapters);
    return chapters.map(e=>{
      return <Link key={e.name} to={"/chapter"+e.url}>{e.name}</Link>
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <BrowserRouter>
            <div>
              {this.renderLinks()}
              <Switch>
                <Route path="/chapter/:url" component={ChapterComponent}/>
              </Switch>
            </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
