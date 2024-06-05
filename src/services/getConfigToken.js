import React from 'react'

const getConfigToken = () => {
  return {
    headers:{
        Authorization:`Bearer ${window.localStorage.getItem('token')}`
    }
  }
    
}

export default getConfigToken