import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext';

const User = () => {

  const {logout} = useContext(AuthContext);
  return (
    <div>

      
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default User