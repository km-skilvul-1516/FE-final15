import { Table, Tag, Space, Button } from "antd";
import { useEffect, useState } from "react";
import {EditOutlined, DeleteOutlined} from '@ant-design/icons'
import '../../style/admin.css'
import axios from "axios";
import { Link } from "react-router-dom";

const Admin = () => {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get("https://teslah-final.herokuapp.com/artikel/getArtikel")
            .then((response) => {
                setAPIData(response.data.result);
            })
    },[])
    console.log(APIData)
    const [dataSource, setDataSource]=  useState([
        {
            judul: 'ini judul 1',
            author: 'ini author 1',
            tanggal: "01",
            tag: 'ini tag',
            penerbit: 'ini penerbit 1',
            image: 'ini image 1',
            deskripsi: 'ini deskripsi 1'
        },
    ]);

    const columns = [
        {
            title:"Judul",
            dataIndex:"judul",
            key:"judul"
        },
        {
            title:"Author",
            dataIndex:"author",
            key:"author"
        },
        {
            title:"Tanggal",
            dataIndex:"tanggal",
            key:"tanggal"
        },
        {
            title:"Tag",
            dataIndex:"tag",
            key:"tag"
        },
        {
            title:"Penerbit",
            dataIndex:"penerbit",
            key:"penerbit"
        },
        {
            title:"Image",
            dataIndex:"image",
            key:"image"
        },
        {
            title:"Deskripsi",
            dataIndex:"deskripsi",
            key:"deskripsi"
        },
        {
            title:"Actions",
            key:"actions",
            render:(record) => {
                return <>
                    <EditOutlined />
                    <DeleteOutlined style={{color: "red" , marginLeft: 15}} />
                </>
            }
        },
    ];
    
    return (
            <div className="container">
                <header className="admin-header">
                    <Link to='/artikel'>
                    <Button type="primary" style={{marginTop: 50}}>Tambah Artikel</Button>
                    </Link>
                    <Table className="admin-table"
                    columns={columns}
                    dataSource={dataSource}
                    style={{marginTop: 50, textAlign: "center"}}
                    size="large"
                   
                    >

                    </Table>
                </header>
                {
                    !APIData ? null
                    :
                    APIData.map((post) => {
                        return (
                           <div>
                                <p>{post.Judul}</p>
                                {/* <p>{post.Author}</p> */}
                           </div>
                        )
                    })
                }
            </div>
    );
}

export default Admin;