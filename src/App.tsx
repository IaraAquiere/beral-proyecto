import { BrowserRouter, Route, Routes } from "react-router-dom"
import Register from "./componentes/Register/Register"
import Login from "./componentes/Login/Login"
import Cart from "./componentes/Cart/Cart"
import UsersList from "./componentes/UsersList/UsersList"
import Orders from "./componentes/Orders/Orders"
import NavBar from "./componentes/NavBar/NavBar"


function App() {
return (
<BrowserRouter>
<NavBar/>
<Routes>
    <Route path="/" element={<Orders/>}/> 
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/userlist" element={<UsersList/>}/>
</Routes>
</BrowserRouter>
)
}

export default App
