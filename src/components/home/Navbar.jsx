import React,{useState} from 'react';
import {Link} from 'react-scroll';
import logo from '../../images/logo1.png';

function Navbar() {

    const[nav,setnav] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50){
            setnav(true);
        }
        else{
            setnav(false);
        }
    }

    window.addEventListener('scroll',changeBackground);

    return (
        <nav className={nav ? "nav active" :"nav"}>
            <Link to='main' className='logo' smooth={true} duration={2000}>
                <img src={logo} alt=''/>
            </Link>
            <input className='menu-btn' type='checkbox' id='menu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><Link to="main" smooth={true} duration={1200}>Beranda</Link></li>
                <li><Link to="" smooth={true} duration={1200}>Tes Psikologi</Link></li>
                <li><Link to="about" smooth={true} duration={1200}>Layanan</Link></li>
                <li><Link to="" smooth={true} duration={1200}>Konten</Link></li>
                <li><Link to="contact" smooth={true} duration={1200}>Hubungi Kami</Link></li>
               
            </ul>
            <Link to ="/#">
                <button className="btn-nav">Daftar</button>               
            </Link>
        </nav>
    )
}

export default Navbar;
