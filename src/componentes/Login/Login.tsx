import "./Login.css";


const Login = () => {
  return (
    <div className="todo">
      <div className="wrapper">
        <img 
        src="https://www.beral.com.ar/wp-content/uploads/2021/01/Beral_logo.png" 
        alt="beral logo"
        className="img-logo" />
        <form className="pt-4">
          <div className="text-login">
            <p>Usuario</p>
            <input
              type="text"
              required
            />
          </div>
          <div className="text-login">
            <p>Contraseña</p>
            <input
              type="password"
              required
            />
          </div>
          <div>
            <div className="mt-4">
              <button type="submit" className="boton-iniciar">
                Iniciar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login