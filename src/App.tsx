import { BrowserRouter, Route, Routes } from "react-router-dom"
import Register from "./componentes/Register/Register"
import Login from "./componentes/Login/Login"
import UsersList from "./componentes/UsersList/UsersList"
import Orders from "./componentes/Orders/Orders"
import NavBar from "./componentes/NavBar/NavBar"
import Logout from "./componentes/Login/Logout"
import ProtectedRoute from "./componentes/ProtectedRoute"
import Cart from "./componentes/Cart/Cart"
import MyAccount from "./componentes/MyAccount/MyAccount"
import Lists from "./componentes/Lists/Lists"
import Invoices from "./componentes/Invoices/Invoices"
import ChangePass from "./componentes/Login/ChangePass"
import Home from "./componentes/Home/Home"


function App() {
return (
<BrowserRouter>
<NavBar/>
<Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/logout" element={<Logout />} />
    <Route path="/register" element={<Register/>}/>
    <Route element={<ProtectedRoute redirectPath='/'/>}>
        <Route path="/orders" element={<Orders/>}/> 
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/userlist" element={<UsersList/>}/>
        <Route path="/listas" element={<Lists />}/>
        <Route path="/cuentacorriente" element={<MyAccount />}/>
        <Route path="/miscomprobantes" element={<Invoices />}/>
        <Route path="/cambiarpass" element={<ChangePass />}/>
    </Route>
</Routes>
</BrowserRouter>
)
}

export default App