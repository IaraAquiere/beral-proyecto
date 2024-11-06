import "./NavBar.css";


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm p-1 mb-5" >
      <div className="container">
        <img className="logo-beral" src="https://www.beral.com.ar/wp-content/uploads/2021/01/Beral_logo.png" alt="Logo-Beral" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="container">
          <ul className="navbar-nav nav-underline">
            <li className="nav-item">
            </li>
            <li className="nav-item">
             <p className="nav-link">Carrito</p>
            </li>
            <li className="nav-item">
            </li>
          </ul>
          </div>
          <ul className="navbar-nav ">
             <li className="nav-item ">
            </li>
          </ul>
        </div>  
      </div>
    </nav>
  )
}

export default NavBar