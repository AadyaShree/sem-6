import React from 'react'
import axios from 'axios'


const Update = () => {
  const handleUpdate = async (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const age = e.target.age.value
    const id = e.target.id.value
    const users = {name, age}
    await axios.put(`https://sem-6-1.onrender.com/users/${id}`, users)
    alert('User updated successfully')
  }
  return (
    <div>
      <h1 class="heading">Update</h1>
      <form onSubmit={handleUpdate}>
        <table>
          <tr>
            <td>
            ID: 
            </td>
            <td>
            <input type="text" name="id" id="" /> 
            </td>
          </tr>
          <tr>
            <td>Name: </td>
            <td> 
            <input type="text" name="name" id="" /> </td>
          </tr>
          <tr>
            <td> Age: </td>
            <tr><input type="number" name="age" id="" />  </tr>
          </tr>
        </table>
       
       
        <button id="update">Update</button>
      </form>
    </div>
  )
}

export default Update