import React, { useEffect } from 'react'
import { useAuth } from '../Contexts/AuthContext';

const logout = () => {
        const { setUser } = useAuth();
    
    useEffect(()=>{
        const handleLogout = async () => {
            setUser(null)
            await localStorage.removeItem('@Auth')
            window.location.href = '/'
        }
        handleLogout()
    },[])
  return (
    <div>
      <h1>successfuly logout</h1>
    </div>
  )
}

export default logout
