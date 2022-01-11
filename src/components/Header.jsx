import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../images/banner.png';

function Header() {
    return (
        <div id='main'>
            <div className='header-heading'>
                <h1><span>TES</span> Sekarang<br/></h1>
                <p className='details'>Sekitar 6,1% penduduk berusia 15 tahun keatas</p>
                <p className='details'>menunjukkan gejala gangguan mental emosional</p>
                <Link to='/quiz'>
                <button className='header-btn'>Mulai</button>
                </Link>
               
            </div>
            <div className='bannerimg'>
            <img src={banner} alt=''/>
            </div>
        </div>
    )
}

export default Header;
