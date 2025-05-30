import React from 'react'
import axios from 'axios'
const Delete = () => {
    const handleDelete = async (e) => {
        e.preventDefault();
        const id = e.target.id.value
        await axios.delete(`https://sem-6-1.onrender.com/users/${id}`)
        alert('User Deleted successfully')
      }
  return (
    <div>
        <h1 class="heading">Delete User</h1>
      <form onSubmit={handleDelete}>
        <label>
          ID:
          <input type="text" name="id" />
        </label>
       
        <button type='submit' id='submit'>Update</button>
      </form>
    </div>
  )
}

export default Delete