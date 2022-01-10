// import React from 'react';
// import Testibox from './Testibox';
// function Testi() {
//     return (
//         <div id='testi'>
//             <h1>Testimoni</h1>
//                 <div className='a-container'>
//                 <Testibox  title="Anton" className='turun'  />
//                 <Testibox  title="Budi" className='turun' />
//                 <Testibox  title="Candra" className='turun' />
//             </div>
//         </div>
//     )
// }
// export default Testi;
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';


function Testi() {
    console.log('IkanTawar')
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get("https://teslah-final.herokuapp.com/feedback/getFeedback")
            .then((response) => {
                console.log(APIData)
                setAPIData(response.data);
            })
    }, [])
    console.log(APIData)

    return (
        <div>
            <div className="judul-list-ikan">
                <h2>Nama-nama Ikan Laut</h2>
            </div>
            <div className="item">
            {APIData.map(post =>
            (   <div className="item-con" key={post.id}>
                <div className="item-container">
                    <img src={post.Img} alt="" />
                        <div className = "nama-ikan">
                            <h4>{post.namaUser}</h4>
                            <h5>{post.komentar}</h5>
                            <p>
                            Protein : {post.namaUser} g <br/>
                            Kalori : {post.komentar} kkal <br/>
                            Lemak : {post.namaUser} g <br/>
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}




export default Testi;


