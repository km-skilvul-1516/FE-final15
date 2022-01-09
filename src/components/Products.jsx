import React from 'react';
import Productbox from './Productbox';
import logo1 from '../images/logo1.png';
function Products() {
    return (
        <div id='products'>
            <h1>Layanan Konseling</h1>
                <div className='a-container'>
                <Productbox image={logo1} title="Reguler"  />
               <br/>
                <Productbox image={logo1} title="Premium" />
                <Productbox image={logo1} title="Platinum" />
            </div>
        </div>
    )
}

export default Products;
