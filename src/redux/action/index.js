import axios from "axios";
let ls = window.localStorage

export const post_login = (data, history) => {
    return (dispatch) => {
      
        axios 
            .post("https://teslah-final.herokuapp.com/user/login", data)
            .then((res)=> {
                let role = res.data.result.role
                if ( role === "user") {
                    ls.setItem('token', res.data.token)
                    ls.setItem('email', res.data.result.email)
                    ls.setItem('username', res.data.result.username)
                    window.location.href = 'http://localhost:3000'
                } else if (role === "psikolog") {
                    ls.setItem('token', res.data.token)
                    ls.setItem('email', res.data.result.email)
                    ls.setItem('username', res.data.result.username)
                    window.location.href = 'http://localhost:3000/admin'
                }
            })
            .catch((error)=> {
                alert("salah password")
            })
    }
}

export const post_register = (data, history) => {
    return (dispatch) => {
        // console.log(data)
        axios 
            .post("https://teslah-final.herokuapp.com/user/register", data)
            .then((res)=> {
                // if (res.data.msg !== "salah password") {}
                console.log(res)
            })
    }
}