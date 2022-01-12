import { Form, Input, Button } from "antd";
import React from "react";
import '../../style/Artikel.css'

function Artikel () {
    return (
        <div className="container">
                <Form >
                <div class="wrapper">
                    <div class="title">
                        Form Tambah Artikel
                    </div>
                    <div class="form">
                        <div class="inputfield">
                            <label>Judul Artikel</label>
                            <input type="text" class="input"></input>
                        </div>  
                        <div class="inputfield">
                            <label>Author</label>
                            <input type="text" class="input"></input>
                        </div>  
                        <div class="inputfield">
                            <label>Tanggal</label>
                            <input type="date" class="input"></input>
                        </div>
                        <div class="inputfield">
                            <label>Tag</label>
                            <input type="text" class="input"></input>
                        </div> 
                        <div class="inputfield">
                            <label>Penerbit</label>
                            <input type="text" class="input"></input>
                        </div> 
                        <div class="inputfield">
                            <label>Image</label>
                            <input type="file" class="input" accept="image/png"></input>
                        </div> 
                        <div class="inputfield">
                            <label>Deskripsi</label>
                            <textarea class="textarea"></textarea>
                        </div> 
                        
                        <div class="inputfield">
                            <input type="submit" value="Tambah Artikel" class="btn"></input>
                        </div>
                        </div>
                        </div>	
                </Form>
        </div>
    )
}

export default Artikel;
// import React from 'react'
// import { useState, useEffect } from 'react'
// import axios from 'axios';


// function Artikel() {
//     const [APIData, setAPIData] = useState([]);
//     useEffect(() => {
//         axios.get("https://teslah-final.herokuapp.com/layanan/getAllLayanan")
//             .then((response) => {
//                 console.log('ini dari useeffect array',response.data.result)
//                 console.log('ini dari useeffect obj',response.data)
//                 setAPIData(response.data.result);
//             })
//     },[])
//     console.log(APIData)

//     return (
//         <div>
//             <div className="judul-list-ikan">
//                 <h2>Testimoni</h2>
//             </div>
//             <div className="item">
//             {
//             !APIData ? null
//             :
//             APIData.map((post) =>
//             {
//                 return(
//                     <div className="item-con">
//                     <div className="item-container">
//                             <div className = "nama-ikan">
//                                 <h4>{post.namaPaket}</h4>
//                                 <h4>{post.kuotaLayanan}</h4>
//                                 <h5>{post.hargaLayanan}</h5>
//                             </div>
//                         </div>
//                     </div>
//                    ) 
//             }   
           
//             )
//         }
//         </div>
//     </div>
//     )
// }

// export default Artikel;