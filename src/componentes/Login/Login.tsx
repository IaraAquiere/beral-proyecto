import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLogin from "../../hook/useLogin";
import { userStore } from "../../stores/userStore";
import "./Login.css";
import "../Style/Style.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(0);
  const setUser = userStore(state=> state.setUser)
  const navigate = useNavigate();
  const { cargando, error } = useLogin(login);

  const handleSubmit = (e : any ) => {
    setLogin(login + 1);
    e.preventDefault();
  };

  useEffect( () => {

    var berallogin: any = window.localStorage.getItem('berallogin')

    const user = JSON.parse(berallogin)
    if (user !== null)
    {
     setUser(user) 
     navigate("/")
    }
},[])
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
        <form onSubmit={handleSubmit}>
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
          <p>{cargando}</p>
        <p>{error}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;