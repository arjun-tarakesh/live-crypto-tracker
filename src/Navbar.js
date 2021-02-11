import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  
  Nav,
  NavItem,
  NavLink,
  
} from 'reactstrap';
import { Link, animateScroll as scroll } from "react-scroll";

const Nav1 = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [navBar, setNavBar] = useState(false);

  const changeBg = () => {
    if(window.scrollY >= 100){
      setNavBar(true);
    }else{
      setNavBar(false);
    }
  }

  window.addEventListener('scroll', changeBg);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar  dark expand="md " className="navbar" fixed="top">
        
        <NavbarToggler onClick={toggle} className="ml-auto">
🍔</NavbarToggler>
        <Collapse isOpen={isOpen} navbar className="navbar">
          <Nav className="ml-auto" navbar>

          <Link
              
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={900} 
          >
            <NavItem className="navitem ">
              <NavLink  style={navBar ? {color:"white"}:{color:"#1a1a1c",cursor:"default"} } href="/components/">Scroll to top ▲</NavLink>
            </NavItem>

            </Link>
            <NavItem>
              <NavLink className="item" href="https://coinmarketcap.com/alexandria/" target="_blank">Resources</NavLink>
              
            </NavItem>
            <NavItem>
            <NavLink className="item" href="https://in.investing.com/news/markets/cryptocurrency" target="_blank">Updates</NavLink>
            </NavItem>            
            <NavItem>
            <NavLink className="item" href="https://in.investing.com/charts/cryptocurrency-charts" target="_blank">Charts</NavLink>
            </NavItem>            
            <NavItem>
            

            <NavItem  className="navitem">
              <NavLink  className="item" href="https://github.com/arjun-tarakesh" target="_blank">Dev</NavLink>
            </NavItem>
            
            
            </NavItem>
           
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Nav1;