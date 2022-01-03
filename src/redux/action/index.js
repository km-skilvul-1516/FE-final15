import axios from "axios";

export const post_login = (data, history) => {
    return (dispatch) => {
      
        axios 
            .post("https://teslah-final.herokuapp.com/user/login", data)
            .then((res)=> {
                if (res.data.msg !== "salah password") {}
                // console.log(res)
            })
    }
}