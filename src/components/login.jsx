import { useDispatch } from "react-redux";
import { post_login } from "../redux/action/index";
import "../style/login.css"
import imagelogin from "./login.svg"
import { Form, Input, Button, Checkbox } from 'antd';
import { Link, useHistory } from "react-router-dom";

export default function Login () {
    const dispatch = useDispatch()
    const history = useHistory()
    const login = (values) => {
        dispatch(post_login(values,history))
    }

    return (
        <>
            <div className="biru">
                <div className="forms-container">
                    <div  className="signin-signup">
                        <Form
                                name="normal_login"
                                initialValues={{
                                remember: true,
                                }}
                                onFinish={login}
                                style={{ width: "79%", marginTop: 50, marginLeft: 30 }}
                                size="large"
                               
                            >
                            <div className="sign-in-form">
                                <h2 className="title1">Hai</h2><br/>
                                <h2 className="title">Selamat Datang</h2> <br /><br />
                                <label htmlFor="">Username</label>
                                <Form.Item name="username" className="input-field" >
                                    <Input />
                                </Form.Item>
                                <label htmlFor="">Password</label>
                                <Form.Item name="password" >
                                <Input.Password />
                                </Form.Item>

                                <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                                </Form.Item>
                            </div>
                            </Form>
                    </div>
                             
                </div>
                         <div className="panels-container">
                             <div className="panel left-panel">
                                 <div className="content">
                                     <h2 className="title1">Silahkan Mendaftar</h2>
                                     <p>Buat akun sekarang gratis dan cepat</p>
                                     <Button className="btn transparent">Daftar</Button>
                                 </div>
                                 <img src="../img/login.svg" alt="" className="image" />
                                 <img src={imagelogin} alt="" className="image" />
                             </div>
                             <div className="panel right-panel">
                                 <div></div>
                             </div>
                         </div>               

                
            </div>
            
         </>
    )
}