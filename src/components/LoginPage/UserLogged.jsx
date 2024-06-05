import React from 'react'
import descarga from '../../../public/descarga.png'
import female from '../../../public/female.jpeg'


const userLogged = ({ user, setUser }) => {

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUser()
    }
    
  return (
    <article>
        <header>
            <img 
            src={
                user.gender==='female'
                ?'/female.jpeg'
                :'/descarga.png'

            } alt="" 
            />
        </header>
        <h2>
            {user.firstName} {user.lastName}
        </h2>
        <button onClick={handleLogout}>logund</button>

      
    </article>
  )
}

export default userLogged
