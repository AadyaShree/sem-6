import React, { useEffect, useState } from 'react'
import axios from 'axios'
const View = () => {
    const [users, setUsers] = useState([]);
    const handleview=async ()=>{
       const res=await axios.get('http://localhost:9000/users');
       setUsers(res.data);
    }
    useEffect(()=>{
        handleview();
     },[])
  return (
    <div class='font'>
        <h1 class="heading">View Registered Users</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody >
                {
                    users.map((user)=>(
                        <tr key={user.id}>
                            <td class='td'>{user.id}</td>
                            <td class='td'>{user.name}</td>
                            <td class='td'>{user.age}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
      
    </div>
  )
}

export default View