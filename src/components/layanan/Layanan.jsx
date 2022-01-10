import React from 'react';
import Productbox from '../Productbox';
import logo1 from '../../images/logo1.png';
import Navbar from '../Navbar';
function Layanan() {
    return (
        <div id='products'>
            <Navbar/>
            <h1>Layanan Konseling</h1>
            <div className='a-container'>
                <Productbox image={logo1} title="Reguler"/>
                <Productbox image={logo1} title="Silver"/>
                <Productbox image={logo1} title="Platinum"/>
            </div>
        </div>    )}


export default Layanan;
