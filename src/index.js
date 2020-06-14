/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
// pages
import Home from "views/home/index.js";
import About from "views/about/index";
import Projects from "views/projects/index";
import Contact from "views/contact/index";
import Blog from "views/blog/index";
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/contact-us" render={props => <Contact {...props} />} />
      <Route path="/projects" render={props => <Projects {...props} />} />
      <Route path="/about-us" render={props => <About {...props} />} />
      <Route path="/blog" render={props => <Blog {...props} />} />
      <Route path="/" render={props => <Home {...props} />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
