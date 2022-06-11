import './navbar.styles.scss';
import logo from '../../images/logo.svg';
import hamburger from '../../images/icon-hamburger.svg';
import close from '../../images/icon-close.svg';
import { Link } from 'react-scroll';
import { useState } from 'react';
import mobileNavImg from '../../images/mobile-nav-pattern.svg';

const Navbar = () => {
    const [mobileNav, setmobileNav] = useState(false)
    
    const handleMobileNav = () => {
        setmobileNav(!mobileNav)
    }

    const handleClose = () => {
        setmobileNav(false)

        window.scrollTo(0,0)
    }

    
    return ( 
        <header>
            <div className="header-container">
                <Link to='/' className="logo" onClick={handleClose}>
                    <img src={logo} alt="logo" />
                </Link>

                <nav className={mobileNav ? 'active' : ''}>
                    <ul>
                        <li><Link to='/' onClick={handleClose}>how we work</Link></li>
                        <li><Link to='/' onClick={handleClose}>blog</Link></li>
                        <li><Link to='/' onClick={handleClose}>account</Link></li>
                    </ul>

                    <Link to='/' className='nav-btn' onClick={handleClose}>view plans</Link>

                    <img src={mobileNavImg} alt="nav bg" />
                </nav>

                {mobileNav ? (
                    <div className="menu-btn" onClick={handleMobileNav}>
                        <img src={close} alt="Close Nav" />
                    </div>  ): (<div className="menu-btn" onClick={handleMobileNav}>
                        <img src={hamburger} alt="Open Nav" />
                    </div>)}
            </div>
        </header>
     );
}
 
export default Navbar;