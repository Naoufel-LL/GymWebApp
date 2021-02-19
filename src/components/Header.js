import {useState} from 'react';
import '../App.css'
import Zoom from 'react-reveal/Zoom'
import Navbar from './Navbar';
const Header = () => {
    return ( 
       <>
       <div id="header" className="header-container">
           <Navbar />
           <Zoom cascade>
       <div className="header-text">
           <h2>STEP UP YOUR </h2>
           <h1><span>FITNESS</span> WITH US</h1>
           <h3>build your body and fitness with professional touch</h3>
           <a href="/">Join US</a>
       </div>
       </Zoom>
       </div>
       </>
     );
}
 
export default Header;