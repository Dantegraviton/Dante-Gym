import React, { useState } from 'react'
import "./Navbar.css"
import { CgClose, CgShapeCircle } from 'react-icons/cg'
import { CgShoppingBag } from 'react-icons/cg'
import { CgSearch } from 'react-icons/cg'
import { CgHeart } from 'react-icons/cg'
import { CgMenu } from 'react-icons/cg'

const Navbar = (porps) => {
    const style = {
        color: '#fffff'
    }

    const [activeSerarch, setActiveSeatch] = useState(false)

    const handleActive = () =>{
        setActiveSeatch(activeSerarch => !activeSerarch)
    }

    let toggleClassCheck = activeSerarch ? " activeSearch": "";


    const [menuOpen, setMenuOpne] = useState(false)

    const handleMenu = () =>{
        setMenuOpne(menuOpen => !menuOpen)
    }

    let toggleMenuOpen = menuOpen ? " small-navLinks": "";

  return (
    <div className="navbar-cont">
        <nav className="navbar">
            <div className="logo">
                <div className="icon">
                    <CgShapeCircle size={20} style={style}/>
                </div>
                <p> <span className="highlight">G</span>ym<span className="highlight">P</span>lex</p>
            </div>
            <div className={`nav-links${toggleMenuOpen}`}>
                <ul>
                    <li className='active'><p>SHOP</p></li>
                    <li><p>BLOG</p></li>
                    <li><p>ABOUT</p></li>
                </ul>
            </div>
            <div className="nav-icons">
                <div className="search ">
                    <input type="text" className={`searchInput${toggleClassCheck}`} />
                    <div className="search-icon">
                        <div><CgSearch size={20} onClick={handleActive}/></div>
                    </div>
                </div>
                <div className='icon' ><CgShoppingBag size={20} /></div>
                <div className='icon' ><CgHeart size={20}/></div>

                
            </div>
            <div className='icon' id='menuopen' onClick={handleMenu} ><CgMenu size={20}/></div>

        </nav>
    </div>
  )
}

export default Navbar
