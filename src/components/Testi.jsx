import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
function Testi() {
    console.log('IkanTawar')
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get("https://teslah-final.herokuapp.com/feedback/getFeedback")
            .then((response) => {
                console.log('ini dari useeffect array',response.data.result)
                console.log('ini dari useeffect obj',response.data)
                setAPIData(response.data.result);
            })
    },[])
    console.log(APIData)

    return (
        <div>
            <div className="list-paket">
                <h2>Testimoni</h2>
            </div>
            <div className="item">
            {
            !APIData ? null
            :
            APIData.map((post) =>
            {
                return(
                    <div id='testi'>
                    <div className='a-container'>
                    <div className='a-box'>
                         <div className="testi">
                         <div className='a-b-text'>
                         {post.namaUser}  
                         <br/>
                         <br/>
                         {post.komentar} 
                     </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    // <div className="item-con">
                    // <div className="testi">
                    //         <div className='a-container'>
                    //             <Testibox title={post.namaUser} className='turun' />
                    //             <Testibox title={post.komentar} className='turun' />
                    //         </div>
                    //     </div>
                    // </div>
                   ) 
            }   
           
            )
        }
        </div>
    </div>
    )
}

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
export default Testi;
