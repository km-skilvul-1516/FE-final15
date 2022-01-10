// import React from 'react';
// import Productbox from '../Productbox';
// import logo1 from '../../images/logo1.png';
// import Navbar from '../Navbar';
// function Layanan() {
//     return (
        // <div id='products'>
        //     <Navbar/>
        //     <h1>Layanan Konseling</h1>
        //     <div className='a-container'>
        //         <Productbox image={logo1} title="Reguler"/>
        //         <Productbox image={logo1} title="Silver"/>
        //         <Productbox image={logo1} title="Platinum"/>
        //     </div>
        // </div>    )}


// export default Layanan;

import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Navbar from '../Navbar';


function Layanan() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get("https://teslah-final.herokuapp.com/layanan/getAllLayanan")
            .then((response) => {
                console.log('ini dari useeffect array',response.data.result)
                console.log('ini dari useeffect obj',response.data)
                setAPIData(response.data.result);
            })
    },[])
    console.log(APIData)

    return (
     <div>
            <div className="List-Paket">
            <Navbar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

                <h2>Paket Layanan</h2>
            </div>
            <div className="item">
            {
            !APIData ? null
            :
            APIData.map((post) =>
            {
                return(
                    <div id='products'>
                    <div id='testi'>
                    <div className='a-container'>
                    <div className='a-box'>
                         <div className="testi">
                         <div className='a-b-text'>
                                {post.namaPaket}
                                {post.deskripsiLayanan}
                                {post.hargaLayanan}
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                
                   ) 
            }   
           
            )
        }
        </div>
    </div>
    )
}


export default Layanan;
