import './Navbar.css'
import Logo from '../assets/logo.svg'
import Button from './Button'
import { useState } from 'react'

const Navbar = () => {

    const [isActive, setIsActive] = useState(false)

    const activateNavbar = () => setIsActive(prevState => !prevState)

    // console.log(isActive)

    return (
        <nav className = "navbar">
            <div className = {isActive ? 'backdrop active' : 'backdrop'}></div>

            <ul className = {isActive ? 'nav-list active' : 'nav-list'}>
                
                <li className = "nav-item">
                    <a href = "#" className = "nav-link">
                        home
                    </a>
                </li>

                <li className = "nav-item">
                    <a href = "#" className = "nav-link">
                        menu
                    </a>
                </li>

                <li className = "nav-item nav-logo-img">
                    <a href = "#" className = "nav-link">
                        <img src = {Logo} className = "nav-logo" />
                    </a>
                </li>

                <li className = "nav-item">
                    <a href = "#" className = "nav-link">
                        gift cards
                    </a>
                </li>

                <li className = "nav-item">
                    <a href = "#" className = "nav-link">
                        order online
                    </a>
                </li>
            </ul>

            <a href = "#" className = "nav-link nav-logo-mobile">
                <img src = {Logo} className = "nav-logo-mobile-img" />
            </a>

            <Button className = "hamburger" onClick = {activateNavbar}>
                <div className = {`line-1 ${isActive && 'active'}`} ></div>
                <div className = {`line-2 ${isActive && 'active'}`} ></div>
                <div className = {`line-3 ${isActive && 'active'}`} ></div>
            </Button>
        </nav>

    )
}

export default Navbar