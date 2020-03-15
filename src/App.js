import React from 'react'
import './App.css'

import { Switch, Route } from "react-router-dom" 

import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="App__body">
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </div>
  )
}

export default App
