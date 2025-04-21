import React from 'react'
import axios from 'axios'

const Register = () => {
    const handleRegister = async (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const age = e.target.age.value
        const users = {name, age}
        await axios.post('https://sem-6-1.onrender.com/users', users)
        alert('User registered successfully')
    }
  return (
    <div>
        <h1 class="heading">Register</h1>
        <form onSubmit={handleRegister} action="">
        <table ><tr>
        
                <td class="field"><b> Name:</b></td>
                
                <td>
                <input type="text" name="name" id="" /></td>
            </tr>
            <tr>
                <td class="field"><b >Age :</b></td>
                <td>
                <input type="number" name="age" id="" /></td>
            </tr>
            </table>
            <button id="submit">Submit</button>
        </form>
    </div>
  )
}
export default Register