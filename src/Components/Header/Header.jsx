import React, { useState } from "react";
import logo from "../../../public/logo.png";
import "./Header.css";
import OutsideClickHandler from "react-outside-click-handler";
import {BiMenuAltRight} from 'react-icons/bi'

function Header() {

    const [menuOpened,setMenuOpened]=useState(false);

const getMenuStyles=(menuOpened)=>{
    if(document.documentElement.clientWidth<=800){
        return{
            
            right:!menuOpened && "-100%"
        }
    }

}

  return (
    <section className="header-wrapper">
      <div className="flexCenter paddings innerWidth header-container">
        <img  src={logo} alt="headerlogo" width={100} />
<OutsideClickHandler onOutsideClick={()=>{
    setMenuOpened(false);
}}>
        <div className="flexCenter header-menu"
        style={getMenuStyles(menuOpened)}
        >
          <a href="#Residencies">Residencies</a>
          <a href="#values">Our Value</a>
          <a href="#contact">Contact Us</a>
          <a href="#getStarted">Get Started</a>

          <button className="contactBtn">
            <a href="">Contact</a>
          </button>
        </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
        <BiMenuAltRight size={30}/>
      </div>
      </div>


    </section>
  );
}

export default Header;
