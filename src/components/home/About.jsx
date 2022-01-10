import React from 'react';
import newpict from "../../images/newpict.png"

function About() {
    return (
        <div id='about'>
            <div className='about-text'>
                <p>Kami ada untuk kamu segera daftarkan diri untuk bisa konseling dengan psikolog terbaik yang kami miliki untuk info lebih lanjut klik tombol dibawah ini</p>
                <button>Lihat selengkapnya</button>
            </div>
            <div className='about-image'>
                <img src={newpict} alt=''/>
            </div>
        </div>
    )
}

export default About;
