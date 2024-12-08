import { Link } from 'react-router-dom';
import "./Register.css"
import "../Style/Style.css"
import useRegister from '../../hook/useRegister';
import { ThreeDot } from 'react-loading-indicators';

const Register = () => {
  const { handleChange, SaveUser, newUser, error, loading } = useRegister();
  return (
    <div className="todo">
      <div className="wrapper-register rounded-top borderLeft">
        <div className="row g-3">
          <div className="container div-img">
            <img
              src="https://www.beral.com.ar/wp-content/uploads/2021/01/Beral_logo.png"
              alt="beral logo"
              className="img-logo"
            />
          </div>
          <form className="row g-3" onSubmit={SaveUser}>
            <div className="col-md-12">
              <label className="form-floting">Email</label>
              <input type="email"
                className="form-control"
                name='email'
                value={newUser?.email}
                onChange={handleChange} required />
            </div>
            <div className="col-md-4">
              <label className="form-floting">CUIT</label>
              <input type="number"
                className="form-control"
                name='cuit'
                value={newUser?.cuit}
                onChange={handleChange} required/>
            </div>
            <div className="col-md-8">
              <label className="form-floting">Nombre de Empresa</label>
              <input type="text"
                className="form-control"
                name='companyName'
                value={newUser?.companyName}
                onChange={handleChange} required/>
            </div>
            <div className="col-md-12">
              <label className="form-floting">Direccion</label>
              <input type="text"
                className="form-control"
                name='address'
                value={newUser?.address}
                onChange={handleChange} required/>
            </div>
            <div className="col-md-4">
              <label className="form-floting">Localidad</label>
              <input type="text"
                className="form-control"
                name='locality'
                value={newUser?.locality}
                onChange={handleChange} required/>
            </div>
            <div className="col-md-4">
              <label className="form-floting">Provincia</label>
              <input type="text"
                className="form-control"
                name='state'
                value={newUser?.state}
                onChange={handleChange} required/>
            </div>
            <div className="col-md-4">
              <label className="form-floting">Pais</label>
              <input type="text"
                className="form-control"
                name='country'
                value={newUser?.country}
                onChange={handleChange} required/>
            </div>
            <div className="col-md-12">
              <label className="form-floting">Telefono</label>
              <input type="number"
                className="form-control"
                name='phone'
                value={newUser?.phone}
                onChange={handleChange} required/>
            </div>
            { loading ?
            <ThreeDot color="#ff6000" size="small" text="" textColor="" />
            : <></>}
            {error != null && error != "" ?
            <div className="col-12">
              <div>
                <p style={{color:"red"}}>{error}</p>
              </div>
            </div> : <></> }

            <div className="col-12">
              <div>
                <p>¿Ya tenes una cuenta?
                  <Link to={"/login"} className='ms-3'>Inicia Sesion</Link></p>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="boton-register">
                Registrarse
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;