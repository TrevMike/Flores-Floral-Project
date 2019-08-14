import React from 'react';
import './App.css';
// import Flowers from './assects/LianaMikah.jpg'
// import Flowers from './assects/AntonDarius.jpg'
import Flowers from './assects/VarsheshJoshi.jpg'
// import Logo from './assects/logo-via-logohub.png';

function Home() {
    return(
    <div className="homeContainer">
        <div className="homePageTitle">
            
            <h1 className="header center black-text">Flores Floral
                {/* <img src={Logo} alt="Thelogo"/> */}
            </h1>

            <div className="row center">
                <h4 className="header col s12 light">Getting the Right Flowers for the Right Person</h4>
            </div>

            <div className="row center">
                <a href="#!" className="btn-large waves-effect waves-light lime lighten-3 z-depth-5 black-text">Get Started</a>
            </div>
        </div>
            <img src={Flowers} alt="blue bonnet flower" className="homeImage"></img>
    </div> 
    )
}

export default Home


