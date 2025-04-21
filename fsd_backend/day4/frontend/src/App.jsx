import Register from "./components/Register"
import View from "./components/View"  
import Update from "./components/Update"
import Delete from "./components/Delete"

const App = () => {
  return (
    <div >
      <h1>User Registration System</h1>
      <Register />
      <View />
      <Update />
      <Delete />
    </div>
  )
}
export default App