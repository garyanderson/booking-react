import axios from 'axios'
import {useNavigate } from "react-router-dom"


const UseAunth = () => {

   const navigate = useNavigate ()



    //register
    const registerUser = (data) => {
        const url = 'https://booking-node.onrender.com/users'
        axios.post(url, data)
        .then(res => {
            console.log(res.data)
            navigate('/login')
        })
        
        .catch(err => console.log(err))
    }

    //login

    const loginUser = (data) =>{
        const url = 'http://localhost:8080/users/login'
        axios.post(url, data)
        .then(res =>{
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('user', JSON.stringify(res.data.user))
            navigate('/')
        })
        .catch(err =>{
            console.log(err)
            localStorage.removeItem('token')
            localStorage.removeItem('user')
        })
    }
    

  return {registerUser, loginUser}
}

export default UseAunth
