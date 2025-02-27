import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLogin from "../../hook/useLogin";
import { userStore } from "../../stores/userStore";
import "./Login.css";
import "../Style/Style.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ThreeDot } from "react-loading-indicators";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(0);
  const setUser = userStore(state => state.setUser)
  const navigate = useNavigate();
  const { cargando, error } = useLogin(login, username, password);
  const inputPassword = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    setLogin(login + 1);
    e.preventDefault();
  };

  const verPass = () => {
    if (inputPassword.current) {
      inputPassword.current.type = "text"
    }
  }

  const NoPass = () => {
    if (inputPassword.current) {
      inputPassword.current.type = "password"
    }
  }

  useEffect(() => {

    const berallogin: string | null = window.localStorage.getItem('berallogin')

    const user = berallogin == null ? null : JSON.parse(berallogin)
    if (user !== null) {
      setUser(user)
      navigate("/orders")
    }
  }, [])

  return (
    <div className="todo">
      <div className="wrapper rounded-top borderLeft">
        <div className="container div-img">
          <img
            src="https://www.beral.com.ar/wp-content/uploads/2021/01/Beral_logo.png"
            alt="beral logo"
            className="img-logo"
          />
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3">
            <label className="form-label">Email</label>
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
            <div className="my-class">
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              ref={inputPassword}
              required
            />

            <i className="bi bi-eye marginEye fa-lg" 
                onMouseDown={verPass}
                onMouseUp={NoPass}  
                onMouseOut={NoPass}  
        ></i>
            </div>

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
          <p className="text-center mt-2"><Link to={"/"} className='ms-3'>Volver a la web</Link></p>
          <p>{cargando ?  <ThreeDot color="#ff6000" size="small" text="" textColor="" /> : <></> }</p>
          <p>{error}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;