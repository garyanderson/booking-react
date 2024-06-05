import { useForm } from "react-hook-form"
import UseAunth from "../hooks/UseAunth.JS"
import '../components/style/Register.css'

const RegisterPage = () => {


   const { register, handleSubmit, reset} = useForm ()

   const {registerUser} = UseAunth()


   const submit = data => {
    registerUser(data)
    reset({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      gender: 'unknown'
    })

   


  }


  return (
    <div className="register">
      <form className="register__form" onSubmit={handleSubmit (submit)}>
        <h2 className="register__name">Register</h2>
        <label className="register__label">
          <span className="register__span">First Name</span>
          <input className="register__input" {...register('firstName')}type="text" />
        </label>
        <label className="register__label">
          <span className="register__span">Last Name</span>
          <input className="register__input" {...register('lastName')} type="text" />
        </label>
        <label className="register__label">
          <span className="register__span">Email</span>
          <input className="register__input" {...register('email')} type="email" />
        </label>
        <label className="register__label">
          <span className="register__span">Password</span>
          <input className="register__input" {...register('password')}type="password" />
        </label>
        <label className="register__label">
          <span className="register__span">Gender</span>
          <select className="register__select" {...register('gender')}>
            <option className="register__option" value='unknown'>Unknown</option>
            <option className="register__option" value='male'>male</option>
            <option className="register__option" value='female'>female</option>
            <option className="register__option" value='other'>I prefer don't say it</option>

          </select>
        </label>
        <button className="register__btn">Submit</button>
      </form>
    </div>
  )
}

export default RegisterPage
