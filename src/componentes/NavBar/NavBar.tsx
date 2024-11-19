import { Link } from "react-router-dom";
import { userStore } from "../../stores/userStore";
import { IoLogOutOutline } from "react-icons/io5";
import "./NavBar.css";

const NavBar = () => {
  const logueado = userStore(state => state.logueado)
  const usuario = userStore(state => state.usuario)
  return (
    <header>
      {logueado ?
        <>
          <nav className="navbar navbar-expand-lg   ">
            <div className="container ">
              <img className="logo-beral" src="https://www.beral.com.ar/wp-content/uploads/2021/01/Beral_logo.png" alt="Logo-Beral" />
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav nav-underline">
                    <li className="nav-item">
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/orders">{usuario?.isAdmin ? "Adm. de Pedidos" : "Ordenes"}</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/cart">Carrito</Link>
                    </li>
                    {usuario?.isAdmin ?
                      <li className="nav-item">
                        <Link className="nav-link" to="/userlist">Lista Usuarios</Link>
                      </li> : <></>
                    }
                  </ul>
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0  ">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                      {usuario?.companyName}</a>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="/logout">Salir   <IoLogOutOutline />
                      </Link></li>
                    </ul>
                  </li>

                </ul>
              </div>
             
            </div>
          </nav>
        </> : <></>}
    </header>
  )
}

export default NavBar