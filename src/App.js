import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Practice from "./components/Practice/Practice"
import Home from "./components/Home /Home"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Services from "./components/Services/Services"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path='/' components={Home} exact>
            <Home />
          </Route>
          <Route path='/about' components={About} exact>
            <About />
          </Route>
          <Route path='/services' components={Services} exact>
            <Services />
          </Route>
          <Route path='/practice' components={Practice} exact>
            <Practice />
          </Route>
          <Route path='/contact' components={Contact} exact>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App