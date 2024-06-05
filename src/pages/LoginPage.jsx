import React, { useState } from 'react'
import UseAunth from '../hooks/UseAunth.JS'
import { useForm } from 'react-hook-form'
import UserLogged from '../components/LoginPage/UserLogged.jsx'
import '../components/style/Login.css'

const loginPage = () => {

  const[ user, setUser] = useState(JSON.parse(localStorage.getItem ('user')));


  const {register, handleSubmit,reset } = useForm();

  const {loginUser }  = UseAunth ()


  const submit = data => {
    loginUser (data)
    reset({
      email: '',
      password: ''
    })
  }

  if(localStorage.getItem('token')) {
    return< UserLogged setUser={setUser} user={user}/>;

  }

  return (
    <div className='login'>      
      <form className='form__login' onSubmit={handleSubmit(submit)}>
      <p className='login__name'>User</p>
        <label className='login__label'>
          <span className='login__span'>Email</span>
          <input className='login__input' {...register('email')} type= "email" id="" />
        </label>
        <label className='login__label'>
          <span className='login__span'>password</span>
          <input className='login__input' {...register('password')} type= "password" id="" />
        </label>
        <button className='login__btn'>submit</button>
      </form>

    </div>
  )
}

export default loginPage