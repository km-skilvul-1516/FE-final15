import { Form, Input, Button, Dropdown, Select, DatePicker, Upload} from "antd";
import { useDispatch } from "react-redux";
import { post_register } from "../redux/action/index";
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
    <div>
      <Form
        name="normal_register"
        initialValues={{
          remember: true,
        }}
        onFinish={register}
        style={{ width: "79%", marginTop: 50, marginLeft: 30 }}
        size="large"
      >
        <Form.Item label="Username" name="username">
          <Input placeholder="Select a option and change input text above" />
        </Form.Item>

        <Form.Item label="Password" name="password">
          <Input.Password placeholder="Select a option and change input text above" />
        </Form.Item>

        <Form.Item label="Email" name="email">
          <Input placeholder="Select a option and change input text above" />
        </Form.Item>

        <Form.Item name="jenis_kelamin" label="jenis kelamin" rules={[{ required: true }]}>
            <Select
            placeholder="Select a option and change input text above"
            // onChange={onJenisKelaminChange}
            allowClear
            >
            <Option value="laki-laki">laki-laki</Option>
            <Option value="perempuan">perempuan</Option>
            
            </Select>
        </Form.Item>
        
        <Form.Item label="tanggal lahir" name="tanggal_lahir">
            <DatePicker />
        </Form.Item>

        <Form.Item
            name="foto"
            label="Upload"
            // getValueFromEvent={normFile}
            extra="foto profil"
        >
            <input type='file' name="foto" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

    </div>
  );
};

export default Register;