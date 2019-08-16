import React from 'react';
import './App.css';
// import Flowers from './assects/LianaMikah.jpg'
// import Flowers from './assects/AntonDarius.jpg'
import Flowers from './assets/VarsheshJoshi.jpg'
// import Logo from './assects/logo-via-logohub.png';

function Home() {
    return(
    <div className="homeContainer">

        {/* <div className="pinkContactTopBar deep-orange lighten-5 valign-wrapper">
            <div className="pinkPaddingLeft">Whatever the occasion, we'll find a bouquet!</div> 
            <div className="valign-wrapper pinkPaddingLeft">
                <i className="material-icons paddingRight">phone</i>
                    Phone: 956.580.8186
            </div>
        </div> */}
{/* 
        <div className="navBarBottom valign-wrapper">
            <h4 className="navLogo">Flores Floral</h4> 
            <div className="theHomelinksLeft">
                <a href="#!" className="theHomeLinks flow-text">Home</a>
                <a href="#!" className="theHomeLinks flow-text">About</a>
                <a href="#!" className="theHomeLinks flow-text">Services</a>
                <a href="#!" className="theHomeLinks flow-text">Contact</a>
            </div>
        </div> */}
        <div className="homePageTitle">
            <h1 className="header center black-text nText">Flores Floral</h1>
            <div className="row center">
                <h4 className="header col s12 light">
                    <span className="blue-text text-darken-4">Bonnets </span>
                    are<span className="blue-text text-darken-4"> blue</span>,
                    <span className="red-text text-darken-4">Roses</span> are
                    <span className="red-text text-darken-4"> red</span>,<br/>
                Flores Floral will help you the best!
                </h4>
            </div>
            <div className="row center">
                <a href="#!" className="btn-large waves-effect waves-light lime lighten-3 z-depth-5 black-text homeButton">
                Get Started
                </a>
            </div>
        </div>
            <img src={Flowers} alt="blue bonnet flower" className="homeImage">
            </img>
    </div> 
    )
}

export default Home


