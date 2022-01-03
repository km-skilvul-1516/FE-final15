import { Form } from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";
import "../style/login.css"

export default function Register () {
    return (
        <>
            <div className="biru">
                <div className="forms-container">
                    <div className="signin-signup">   
                        <div className="sign-up-form">
                            <Form>
                                <h1 className="title">Daftar Sekarang</h1>
                                <h5 className="done"> Sudah Punya Akun?</h5>
                                <label htmlFor="lname">Username</label>
                                <div className="input-field">
                                    <div className="fa-user"> <FaUserAlt></FaUserAlt> </div>
                                    <input type="text" placeholder="masukkan username anda" required />
                                </div>
                                <label htmlFor="lname">Password</label>
                                <div className="input-field">
                                    <div className="fa-user"> <FaUserAlt></FaUserAlt> </div>
                                    <input type="password" placeholder="masukkan password anda" required />
                                </div>
                                {/* <label htmlFor="lname">email</label>
                                <div className="input-field">
                                    <div className="fa-user"> <FaUserAlt></FaUserAlt> </div>
                                    <input type="email" placeholder="masukkan email anda" required />
                                </div>
                                <label htmlFor="lname">Username</label>
                                <div className="input-field">
                                    <div className="fa-user"> <FaUserAlt></FaUserAlt> </div>
                                    <input type="text" placeholder="masukkan username anda" required />
                                </div> */}
                                <label htmlFor="lname">Jenis Kelamin</label>
                                <div className="input-field">
                                    <div className="fa-user"> <FaUserAlt></FaUserAlt> </div>
                                    <select name="" id="">
                                        <option value="Laki-Laki">Laki-Laki</option>
                                        <option value="Perempuan">Perempuan</option>
                                    </select>
                                </div>
                                <label htmlFor="lname">Tanggal Lahir</label>
                                <div className="input-field">
                                    <div className="fa-user"> <FaUserAlt></FaUserAlt> </div>
                                    <input type="date" placeholder="masukkan tanggal lahir anda" required />
                                </div>
                                <label htmlFor="lname">Foto</label>
                                <div className="input-field">
                                    <div className="fa-user"> <FaUserAlt></FaUserAlt> </div>
                                    <input type="file" placeholder="masukkan foto anda" required />
                                </div>
                                <label htmlFor="lname">Masuk Sebagai</label>
                                <div className="input-field">
                                    <div className="fa-user"> <FaUserAlt></FaUserAlt> </div>
                                    <select name="" id="">
                                        <option value="user">Pengguna Biasa</option>
                                        <option value="psikolog">Psikolog</option>
                                    </select>
                                </div>
                            </Form>
                        </div>
                        
                    </div>
                </div>
            </div>
        
        </>
    )
}