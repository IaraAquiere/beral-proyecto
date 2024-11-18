import { BrowserRouter, Route, Routes } from "react-router-dom"
import Register from "./componentes/Register/Register"
import Login from "./componentes/Login/Login"
import UsersList from "./componentes/UsersList/UsersList"
import Orders from "./componentes/Orders/Orders"
import NavBar from "./componentes/NavBar/NavBar"
import Logout from "./componentes/Login/Logout"
import ProtectedRoute from "./componentes/ProtectedRoute"
import Cart from "./componentes/Cart/Cart"


function App() {
return (
<BrowserRouter>
<NavBar/>
<Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/logout" element={<Logout />} />
    <Route path="/register" element={<Register/>}/>
    <Route element={<ProtectedRoute redirectPath='/'/>}>
        <Route path="/orders" element={<Orders/>}/> 
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/userlist" element={<UsersList/>}/>
    </Route>
</Routes>
</BrowserRouter>
)
}

export default App