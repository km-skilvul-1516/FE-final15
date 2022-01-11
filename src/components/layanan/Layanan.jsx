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

// import React from 'react'
// import { useState, useEffect } from 'react'
// import axios from 'axios';
// import Navbar from '../Navbar';


// function Layanan() {
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
//      <div>
//             <div className="List-Paket">
//             <Navbar/>
//             <br/>
//             <br/>
//                 <h2>Paket Layanan</h2>
//             </div>
//             <div className="item">
//             {
//             !APIData ? null
//             :
//             APIData.map((post) =>
//             {
                // return(
                    // <div>
                    // <div className='a-box'>
                    //     <h1>{post.namaPaket}</h1> 
                    //     <p>--------------------------------</p>
                    //     <h3>{post.hargaLayanan}</h3> 
                    //  </div>
                    //  </div>        
                
                   
                // )
//                 <div className="App">
//       <h1>Semua layanan</h1>
//       {APIData ? (
//         <ul>
//           {APIData.map((item) => (
//             <>
//               <li key={item._id}>{item.namaPaket}</li>
//               <li>{item.hargaLayanan}</li>
//               <li>{item.kuotaLayanan}</li>
//               <li>
//                 <>
//                   {item.deskripsiPaket &&
//                     item.deskripsiPaket.map((desc) => (
//                       <div>
//                         <li key={desc._id}>{desc.sesiIndividual}</li>
//                         <li>{desc.sesiIndividual}</li>
//                         <li>{desc.sesiGroup}</li>
//                         <li>{desc.konsulChat}</li>
//                       </div>
//                     ))}
//                 </>
//               </li>
//             </>
//           ))}
//         </ul>
//       ) : null}
//     </div>
//             }   
           
//             )
//         }
//         </div>
//     </div>
//     )
// }


// export default Layanan;

import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Navbar from '../Navbar';
export default function Layanan() {
    const [items, setItems] = React.useState([]);
  
    React.useEffect(() => {
      async function getAllService() {
        const { result } = await window
          .fetch("https://teslah-final.herokuapp.com/layanan/getAllLayanan")
          .then((r) => r.json());
        setItems(result);
      }
  
      getAllService();
    }, []);
  
    return (
      <div className="App">
          <Navbar/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        <h1>Semua layanan</h1>
        {items ? (
          <ul>
            {items.map((item) => (
              <>
                <li key={item._id}>{item.namaPaket}</li>
                <li>{item.hargaLayanan}</li>
                <li>{item.kuotaLayanan}</li>
                <li>
                  <>
                    {item.deskripsiPaket &&
                      item.deskripsiPaket.map((desc) => (
                        <div>
                          <li key={desc._id}>{desc.sesiIndividual}</li>
                          <li>{desc.sesiIndividual}</li>
                          <li>{desc.sesiGroup}</li>
                          <li>{desc.konsulChat}</li>
                        </div>
                      ))}
                  </>
                </li>
              </>
            ))}
          </ul>
        ) : null}
      </div>
    );
  }
  