import React,{useContext} from 'react'
import Usercontextprovider from '../context/Usercontextprovider'
import usercontext from '../context/Usercontext'
function Profile() { 
    const {user}=useContext(usercontext)
    if(!user)
        return <div>please login</div>  

    return <div>welcome {user.username}</div>
}

export default Profile
