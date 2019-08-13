import React from 'react';
import AboutMe from './AboutMe';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper cyan lighten-4">
              <div className="brand-logo black-text">Flores Floral and Nursury</div>
              <ul className="right hide-on-med-and-down">
                <li><a href="sass.html" className="black-text">Home</a></li>
                <li><a href="badges.html" className="black-text">About</a></li>
                <li><a href="badges.html" className="black-text">Portfolio</a></li>
                <li><a href="badges.html" className="black-text">Contact</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <AboutMe/>

      <footer className="page-footer ">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="-text">Like what you see?</h5>
                <p className="grey-text text-lighten-4">Then give us a call and we'll chat through what you need. <br/>
                We've got the perfect flowers for the occasion.
                </p>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Mobile: (956) 580-8186</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Email: floresfloral386@gmail.com</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Address: 916 Expressway 83 La Joya, Texas</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Address: 916 Expressway 83 La Joya, Texas</a></li>
                </ul>
              </div>

            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2017 Copyright
            <a className="grey-text text-lighten-4 right" href="#!">FaceBook</a>
            </div>
          </div>
        </footer>
    </div>
  );
}

export default App;
