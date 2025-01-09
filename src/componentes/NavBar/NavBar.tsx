import { Link, useLocation } from "react-router-dom";
import { userStore } from "../../stores/userStore";
import { IoLogOutOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import "./NavBar.css";
import beralLogo from "../../assets/imagenes/Beral_logo.png"


const NavBar = () => {
  const logueado = userStore(state => state.logueado)
  const usuario = userStore(state => state.usuario)
  
  const location = useLocation();
  
  return (
    <>
    { location.pathname != "/login" && location.pathname != "/register"  ? 
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container ">
          <img className="logo-beral" src={beralLogo} alt="Logo-Beral" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {logueado ?
              <>
                <ul className="navbar-nav nav-underline me-auto">
                  <li className="nav-item">
                  </li>
                  {usuario?.isAdmin ? <></> :
                    <li className="nav-item">
                      <Link className="nav-link" to="/orders">MIS PEDIDOS</Link>
                    </li>
                  }
                  <li className="nav-item">
                    <Link className="nav-link" to="/cart">CARRITO <IoCartOutline size={25} /></Link>
                  </li>
                  {usuario?.isAdmin ?
                    <li className="nav-item">
                      <Link className="nav-link" to="/userlist">LISTA USUARIOS</Link>
                    </li> : <>

                      <li className="nav-item">
                        <Link className="nav-link" to="/listas">LISTA PRECIOS</Link>
                      </li>

                      <li className="nav-item">
                        <Link className="nav-link" to="/CuentaCorriente">MI CTA CTE</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/miscomprobantes">MIS COMPROBANTES</Link>
                      </li>
                    </>
                  }
                </ul>
                <ul className="navbar-nav nav-underline">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                      {usuario?.email}</a>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="/cambiarpass">Cambiar contraseña
                      </Link></li>
                      <li><Link className="dropdown-item" to="/logout">Salir<IoLogOutOutline />
                      </Link></li>
                    </ul>
                  </li>
                </ul>
              </> : <>
                <ul className="navbar-nav nav-underline me-auto">
                </ul>
                <ul className="navbar-nav nav-underline ">
                  <li className="nav-item float-end">
                    <Link className="nav-link" to="/login">Ingresar</Link>
                  </li>
                </ul>
              </>}

          </div>
        </div>
      </nav>
    </header> : <></> }
    </>
  )
}

export default NavBar