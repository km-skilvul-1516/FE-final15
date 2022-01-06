import { Form, Button, Select, Input } from "antd";
import { useDispatch } from "react-redux";
import { post_register } from "../redux/action/index";
import "../style/login.css"
import imageregister from "../img/registerimg.svg"
//hiraukan
import { Link, useHistory } from "react-router-dom";
const { Option } = Select;



const Register = () => {
  const dispatch = useDispatch();
  //hiraukan
  const history = useHistory();
  
  const register = (values) => {
    dispatch(post_register(values, history));
  };

  return (
    <>
        <div className="biru">
            <div className="forms-container">
              <div className="sign-up-form">
                
                <Form
                  name="normal_register"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={register}
                  style={{ width: "79%", marginTop: 50, marginLeft: 400 }}
                  size="large"
                >
                  <h2 class="title">Daftar Sekarang</h2> <br />

                  <h6 htmlFor="">Username</h6>
                  <Form.Item name="username" className="input-field" >
                      <Input />
                  </Form.Item>

                  <h6 htmlFor="">Password</h6>
                  <Form.Item name="password" className="input-field" rules={[{ required: true }]}>
                    <input type="password" placeholder="Masukkan Password Anda" />
                  </Form.Item>

                  <h6 htmlFor="">Email</h6>
                  <Form.Item name="email" className="input-field" rules={[{ required: true }]}>
                    <input type="text" placeholder="Masukkan Email Anda" />
                  </Form.Item>

                  <h6 htmlFor="">Jenis Kelamin</h6>
                  <Form.Item name="jenis_kelamin" rules={[{ required: true }]}>
                      <select
                      placeholder="Pilih Jenis Kelamin Anda"
                      // onChange={onJenisKelaminChange}
                      allowClear
                      className="input-field"
                      style={{marginLeft : 120, width : 500, marginTop : -3}}
                      rules={[{ required: true }]}
                      >
                      <option value="laki-laki">Laki - Laki</option>
                      <option value="perempuan">Perempuan</option>
                      
                      </select>
                  </Form.Item>
                  
                  <h6 htmlFor="">Tanggal Lahir</h6>
                  <Form.Item name="tanggal_lahir" className="input-field" rules={[{ required: true }]}>
                      
                      <input type="text" />
                  </Form.Item>

                  <h6 htmlFor="">Foto Profil</h6>
                  <Form.Item
                      name="foto"
                      // getValueFromEvent={normFile}
                      style={{marginLeft : -115, width : 500, marginTop : -35}}
                  >
                      <input type='file' name="foto" className="input-field"/>
                  </Form.Item>

                  <Form.Item>
                    <Link to= "/home">
                      <button className="btn-masuk"> Submit </button>
                    </Link>
                  </Form.Item>
                </Form>
              </div>
          </div>
          <div className="panels-container">
              <div className="panel left-panel">
                  <div className="content">
                      <h2 className="title">Sudah Punya Akun?</h2>
                      <Link to="/login">
                        <p>Masuk Sekarang</p>
                      </Link>
                        
                  </div>
                  
                  <img src={imageregister} alt="" className="image" />
              </div>
              <div className="panel right-panel">
                  <div></div>
              </div>
          </div> 
        </div>
    </>
  );
};

export default Register;