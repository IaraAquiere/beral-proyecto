import "./Login.css";
import "../Style/Style.css"

const Login = () => {
  return (
    <div className="todo">
      <div className="wrapper rounded-top">
        <div className="container div-img">
          <img
            src="https://www.beral.com.ar/wp-content/uploads/2021/01/Beral_logo.png"
            alt="beral logo"
            className="img-logo"
          />
        </div>
        <div className="row g-2 mt-3 ">
          <div className="md-6">
            <label className="form-label align-item-center">Usuario</label>
            <input
              name='username'
              type="text"
              className="form-control"
              required
            />
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              name="password"
              required
            />
          </div>
          
        </div>
         <div className="d-flex justify-content-center mt-4 " >
  <button className="boton-iniciar" type="submit">Iniciar</button>
</div>      </div>
    </div>
  )
}

export default Login