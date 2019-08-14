import React from 'react';
import AboutMe from './AboutMe';
import Home from './Home';
import './App.css';
import FuneralSprays from './FuneralSprays';
// import Logo from './assects/logo-via-logohub.png';
function App() {
  return (
    <div>

      <header>
      <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper red lighten-4">
              <div className="brand-logo black-text">Flores Floral</div>
              <ul className="right hide-on-med-and-down">
                <li><a href="sass.html" className="black-text">Home</a></li>
                <li><a href="badges.html" className="black-text">About</a></li>
                <li><a href="badges.html" className="black-text">Funeral Sprays</a></li>
                <li><a href="BottomTest" className="black-text">Contact</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <Home/> 
      <AboutMe/>
      <FuneralSprays/>

      <footer className="page-footer" id="BottomTest">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="-text">Like what you see?</h5>
                <p className="grey-text text-lighten-4">Then give us a call and we'll chat through what you need. <br/>
                We've got the perfect flowers for the occasion.
                </p>
              </div>
              <div className="col l6 s12">
                <h5 className="-text">Contact</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="tel:9565808186">956.580.8186</a></li>
                  <li><a className="grey-text text-lighten-3" href="mailto:floresfloral386@gmail.com">floresfloral386@gmail.com</a></li>
                  <li><div className="grey-text text-lighten-3" href="#!">916 Expressway 83 La Joya, Texas</div></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2017 Copyright
            <div className="grey-text text-lighten-4 right">Michael Trevino</div>
            </div>
          </div>
        </footer>
    </div>
  );
}

export default App;
