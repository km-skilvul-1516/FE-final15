import React from 'react';
import banner from '../../images/banner.png';

function Header() {
    return (
        <div id='main'>
            <div className='header-heading'>
                <h1><span>TES</span> Sekarang<br/></h1>
                <p className='details'>Sekitar 6,1% penduduk berusia 15 tahun keatas</p>
                <p className='details'>menunjukkan gejala gangguan mental emosional</p>
                <div className='header-btns'>
                    <a href='#' className='header-btn'>Mulai</a>
                </div>
            </div>
            <div className='bannerimg'>
            <img src={banner} alt=''/>
            </div>
        </div>
    )
}

export default Header;
