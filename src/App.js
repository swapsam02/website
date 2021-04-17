import React, { Fragment } from 'react';
import './App.css';
import Header from "./layout/Header";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Switch, HashRouter} from "react-router-dom";

function App() {
  return (
    <HashRouter>
        <Fragment>
            <div className="container">
                <Header />
                <Navbar />
                <Route exact path='/' component={Home} />
                <Switch>
                    <Route exact path='/about' component={About} />
                    <Route exact path='/service' component={Service} />
                    <Route exact path='/contact' component={Contact} />
                </Switch>
                <Footer />
            </div>
        </Fragment>  
    </HashRouter>
  );
}
export default App;
