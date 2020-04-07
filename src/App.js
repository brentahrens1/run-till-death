import React, { useState, useEffect } from 'react'
import './App.css'

import { Switch, Route } from "react-router-dom" 

import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import AdminAuth from './components/Admin/AdminAuth'

import adminService from './utils/adminService'

function App() {
  const [currentAdmin, setCurrentAdmin] = useState(adminService.getAdmin())
  useEffect(
    () => {
      setCurrentAdmin(adminService.getAdmin())
    },
    [sessionStorage]
  )
  return (
    <div className="App">
      <NavBar />
      <div className="App__body">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/admin-auth" exact component={AdminAuth} />
        </Switch>
      </div>
      <Footer currentAdmin={currentAdmin} />
    </div>
  )
}

export default App
