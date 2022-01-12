import { Col, Form, Row, Select } from "antd";
import { FormControl, InputGroup } from "react-bootstrap";
import "../../style/formlayanan.css"
import { Input } from 'antd';
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../Navbar"
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { post_layanan } from "../../redux/action";

const { TextArea } = Input;

export default function FormLayananA () {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get("https://teslah-final.herokuapp.com/psikolog/getAllPsikolog")
            .then((response) => {
                console.log('ini dari useeffect array',response.data.result)
                console.log('ini dari useeffect obj',response.data)
                setAPIData(response.data.result);
            })
    },[])
    console.log(APIData)

    const dispatch = useDispatch()
    const history = useHistory()
    const formlayanan = (values) => {
        dispatch(post_layanan (values,history))
    }
    return (
        <div className="latar">
            <Navbar/>
            <div className="item">
            
                <Form
                    name="normal_login"
                    initialValues={{
                    remember: true,
                    }}
                    onFinish={formlayanan}
                    style={{ width: "95%"}}
                    size="large"
                    
                >
                    <div >
                        <h2 >Hai</h2><br/>
                        <h2 >Isi Data Ini Yuk</h2> <br /><br />
                        <Row>
                            <Col span={8}>
                            <h6 htmlFor="">Nama</h6>
                            <Form.Item 
                                name="nama" 
                                className="inp-sel"
                                rules={[{ required: true }]} 
                            >
                                <input type="text" placeholder="Masukkan Nama Anda"  className="inp-sel"/>
                            </Form.Item>
                            <h6 htmlFor="">Email</h6>
                            <Form.Item 
                                name="email" 
                                className="inp-sel"
                                rules={[{ required: true }]} 
                            >
                                <input type="email" placeholder="Masukkan Email Anda"  className="inp-sel"/>
                            </Form.Item>
                            </Col>
                            <Col span={8}>
                            <h6 htmlFor="">Nomer HP</h6>
                            <Form.Item 
                                name="noHP" 
                                className="inp-sel"
                                rules={[{ required: true }]} 
                            >
                                <input type="text" placeholder="Masukkan Nomer HP Anda"  className="inp-sel"/>
                            </Form.Item>
                                <h6>Psikolog</h6>
                                <Form.Item 
                                    name="psikolog" 
                                    style={{marginLeft : 10}} 
                                    rules={[{ required: true }]} 
                                >
                                    <select className="mb-6 inp-sel">
                                        {
                                            !APIData ? null
                                            :
                                            APIData.map((post)=> {
                                                return (
                                                    <option>{post.nama}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </Form.Item>

                            </Col>
                            <Col span={8}>
                            <h6 htmlFor="">Sesi Konsultasi 1</h6>
                            <Form.Item 
                                name="tanggal1" 
                                className="inp-sel"
                                rules={[{ required: true }]} 
                            >
                                <input type="date"  className="inp-sel"/>
                            </Form.Item>
                            <h6 htmlFor="">Sesi Konsultasi 2</h6>
                            <Form.Item 
                                name="tanggal2" 
                                className="inp-sel"
                                rules={[{ required: true }]} 
                            >
                                <input type="date"  className="inp-sel"/>
                            </Form.Item>
                            <h6 htmlFor="">Sesi Konsultasi 3</h6>
                            <Form.Item 
                                name="tanggal3" 
                                className="inp-sel"
                                rules={[{ required: true }]} 
                            >
                                <input type="date"  className="inp-sel"/>
                            </Form.Item>
                            </Col>
                        </Row>
                        
                        <h6>Deskripsi Keluhan</h6>
                        <Form.Item name="deskripsiKeluhan">
                           <TextArea rows={3} placeholder="Tuliskan Keluhanmu Disini" name="deskripsiKeluhan" />
                        </Form.Item>
                        <Form.Item>
                        <button className="btn-form"> Submit </button>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </div>
    )
}