import { Col, Form, Row, Select } from "antd";
import { FormControl, InputGroup } from "react-bootstrap";
import "../../style/formlayanan.css"
import { Input } from 'antd';

const { TextArea } = Input;

export default function FormLayananA () {
    return (
        <div className="latar">
            <div className="item">
                <Form
                    name="normal_login"
                    initialValues={{
                    remember: true,
                    }}
                    // onFinish={login}
                    style={{ width: "85%", marginTop: 50, marginLeft: 10 }}
                    size="large"
                    
                >
                    <div >
                        <h2 >Hai</h2><br/>
                        <h2 >Isi Data Ini Yuk</h2> <br /><br />
                        <Row>
                            <Col span={8}>
                                <Form.Item name="nama">
                                    <h6>Nama</h6>
                                    <InputGroup className="mb-6">
                                        {/* <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text> */}
                                        <FormControl
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                        placeholder="masukkan nama mu"
                                        
                                        />
                                    </InputGroup>
                                </Form.Item>
                                <Form.Item name="email">
                                    <h6>Email</h6>
                                    <InputGroup className="mb-6">
                                        {/* <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text> */}
                                        <FormControl
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                        placeholder="masukkan email mu"
                                        type="email"
                                        />
                                    </InputGroup>
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item name="noHP" style = {{marginLeft : 30}}>
                                    <h6>No HP</h6>
                                    <InputGroup className="mb-6">
                                        {/* <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text> */}
                                        <FormControl
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                        placeholder="masukkan nomer HP mu"
                                        type="number"
                                        />
                                    </InputGroup>
                                </Form.Item>
                                <h6>Psikolog</h6>
                                <Form.Item name="psikolog" style = {{marginLeft : 30}} >
                                    <select style={{ width: 50}} className="mb-6">
                                            <option>a</option>
                                            <option>b</option>
                                    </select>
                                </Form.Item>

                            </Col>
                            <Col span={8}>
                                
                                <Form.Item style={{ marginLeft: 30 }}>
                                <h6>Sesi Konsultasi 1</h6>
                                <InputGroup className="mb-4">
                                        {/* <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text> */}
                                        <FormControl
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                        placeholder="masukkan nomer HP mu"
                                        type="date"
                                        
                                        />
                                </InputGroup>
                                </Form.Item>
                                
                                <Form.Item style={{ marginLeft: 30 }}>
                                <h6>Sesi Konsultasi 2</h6>
                                <InputGroup className="mb-4">
                                        {/* <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text> */}
                                        <FormControl
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                        placeholder="masukkan nomer HP mu"
                                        type="date"
                                        

                                        />
                                </InputGroup>
                                </Form.Item>
                               
                                <Form.Item style={{ marginLeft: 30 }}>
                                <h6>Sesi Konsultasi 3</h6>
                                <InputGroup className="mb-5">
                                        {/* <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text> */}
                                        <FormControl
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                        placeholder="masukkan nomer HP mu"
                                        type="date"
                                        
                                        />
                                </InputGroup>
                                </Form.Item>
                            </Col>
                        </Row>
                        
                        <h6>Deskripsi Keluhan</h6>
                        <Form.Item>
                           <TextArea rows={4} />
                        </Form.Item>
                        <Form.Item>
                        <button > Submit </button>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </div>
    )
}