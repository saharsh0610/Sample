import './App.css';
import React from 'react';
import PreNavbar from './components/PreNavbar';
import Navbar from "./components/Navbar.js"
import {BrowserRouter as Router} from "react-router-dom";
import Slider from "./components/Slider.js"
import data from "./data/data.json"
import Heading  from "./components/Heading.js"
// import StarProduct from "./components/StarProduct.js"
import HotAccessoriesMenu  from "./components/HotAccessoriesMenu.js"
import HotAccessories from "./components/HotAccessories.js"
// import Videos from "./components/Videos.js"
import Banner from "./components/Banner.js"
// import Footer from "./components/Footer.js"
import NavOptios from "./components/NavOptios.js"



function App() {

  return (
    // <Router>
    <Router>

<PreNavbar/>
     <Navbar />
     <NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>

       <Slider start={data.banner.start} />

    <Heading text="HOT ACCESSORIES" />
  <HotAccessoriesMenu />
  <Heading text="STAR PRODUCTS"/>
  <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}  />
 <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}  />     <HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}  />
    <HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}  />
        <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}  />
            
  {/* //      
  //       


  //      <StarProduct starProduct={data.starProduct} />

  //      <Route exact path="/music">
  //      </Route>

  //      <Route exact path="/smartDevice">
  //      </Route>

  //      <Route exact path="/home">
  //      </Route>

  //      <Route exact path="/lifestyle">
  //      </Route>


  //      <Route exact path="/mobileAccessories">
  //      </Route>

  //      <Heading text="VIDEOS" />
      
  //     <Videos videos={data.videos} />

  //     <Heading  text="IN THE PRESS"/>
   
  
//      <Footer footer={data.footer} /> */}
  <Banner  banner={data.banner}/>
  </Router>

  );
}

export default App;
