import { useState } from 'react';
import { appSetting } from '../../settings/appsettings';
import { IUser } from '../../interfaces/IUser';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [newUser, setNewUser] = useState<IUser>({
    username: "",
    password: "",
    cuit: 0,
    email: "",
    companyName: "",
    address: "",
    locality: "",
    state: "",
    country: "",
    phone: 0,
  });

  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };


  const SaveUser = async (e: React.FormEvent) => {
    e.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(newUser);


    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    try {
      const response = await fetch(appSetting.urlApi + "/api/User", requestOptions);

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error en la API:", errorData);
        return;
      }

      const result = await response.json();
      console.log("Usuario creado:", result);
      Swal.fire({
        icon: "success",
        title: "Registro exitoso!",
        text: "Verifica tu email para poder acceder a la pagina",
        confirmButtonText: "OK",
      });
      navigate("/login");

    } catch (error) {
      console.error("Error al registrar el usuario:", error);
    }
  };

  return (
    <div className="todo">
      <div className="wrapper-register rounded-top">
        <div className="row g-3">
          <div className="container div-img">
            <img
              src="https://www.beral.com.ar/wp-content/uploads/2021/01/Beral_logo.png"
              alt="beral logo"
              className="img-logo"
            />
          </div>
          <form onSubmit={SaveUser}>
            <div className="col-md-6" onSubmit={SaveUser}>
              <label className="form-label">Username</label>
              <input
                name="username"
                type="text"
                className="form-control"
                value={newUser?.username}

              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={newUser?.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Cuit</label>
              <input
                type="text"
                name="cuit"
                className="form-control"
                value={newUser?.cuit}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Nombre de empresa</label>
              <input
                type="text"
                className="form-control"
                name="companyName"
                value={newUser?.companyName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-12">
              <label className="form-label">Direccion</label>
              <input
                type="text"
                className="form-control"
                placeholder="Calle 123"
                name="address"
                value={newUser?.address}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Localidad</label>
              <input
                type="text"
                className="form-control"
                name="locality"
                value={newUser?.locality}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Provincia</label>
              <input
                type="text"
                className="form-control"
                name="state"
                value={newUser?.state}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Pais</label>
              <input
                type="text"
                className="form-control"
                name="country"
                value={newUser?.country}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-12">
              <label className="form-label">Telefono</label>
              <input
                type="number"
                name="phone"
                className="form-control"
                value={newUser?.phone}
                onChange={handleChange}
              />
            </div>
            <div className="d-flex justify-content-center mt-4">
              <button className="boton-register" type="submit">
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