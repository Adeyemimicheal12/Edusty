import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu from '../../assets/menu-icon.png'
const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', ()=> {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    },[]);

    const [mobile, setMobile] = useState(false);
    const toggleMenu = () => {
        mobile? setMobile(false) : setMobile(true);
    };
  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo'/>
        <ul className={mobile?'':'hide-mobile'}>
            <li>Home</li>
            <li>Program</li>
            <li>About Us</li>
            <li>Campus</li>
            <li>Testimoials</li>
            <li><button className='btn'>Contact Us</button></li>
        </ul>
        <img src={menu} alt="" className='menu_icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar