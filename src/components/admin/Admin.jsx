import { Table, Tag, Space, Button } from "antd";
import { useState } from "react";
import {EditOutlined, DeleteOutlined} from '@ant-design/icons'
import '../../style/admin.css'

const Admin = () => {
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
        {
            judul: 'ini judul 2',
            author: 'ini author 2',
            tanggal: "02",
            tag: 'ini tag 2',
            penerbit: 'ini penerbit 2',
            image: 'ini image 2',
            deskripsi: 'ini deskripsi 2'
        },
        {
            judul: 'ini judul 3',
            author: 'ini author 3',
            tanggal: "03",
            tag: 'ini tag 3',
            penerbit: 'ini penerbit 3',
            image: 'ini image 3',
            deskripsi: 'ini deskripsi 3'
        },
        {
            judul: 'ini judul 4',
            author: 'ini author 4',
            tanggal: "04",
            tag: 'ini tag 4',
            penerbit: 'ini penerbit 4',
            image: 'ini image 4',
            deskripsi: 'ini deskripsi 4'
        }
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
                    <Button type="primary" style={{marginTop: 50}}>Tambah Artikel</Button>
                    <Table className="admin-table"
                    columns={columns}
                    dataSource={dataSource}
                    style={{marginTop: 50, textAlign: "center"}}
                    size="large"
                    >

                    </Table>
                </header>
            </div>
    );
}

export default Admin;