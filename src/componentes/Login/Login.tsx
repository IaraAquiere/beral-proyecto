import { useState } from "react";
import { useLogin } from "../../hook/useLogin";
import "./Login.css";
import "../Style/Style.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useLogin();
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
        <form onSubmit={signIn}>
          <div className="mb-3">
            <label className="form-label">Usuario</label>
            <input
              name="username"
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="col-12">
              <div>
                <p>¿No tenes una cuenta todavia?
                  <Link to={"/register"} className='ms-3'>Registrate</Link></p>
              </div>
            </div>
          <div className="d-flex justify-content-center mt-4">
            <button className="boton-iniciar" type="submit">
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;