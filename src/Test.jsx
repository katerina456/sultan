import React, { Component } from 'react';

import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';


const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Contacts = () => (
  <div>
    <h2>Contacts</h2>
  </div>
);

class Menu extends Component {
  render() {
    return (
      <BrowserRouter >
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
          </ul>
          <hr />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contacts" element={<Contacts />} />
          </Routes>
          
        </div>
      </BrowserRouter>
    );
  }
}

export default Menu;