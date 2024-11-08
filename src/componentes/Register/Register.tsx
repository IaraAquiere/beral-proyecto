import { useState } from 'react';
import "./Register.css"
import "../Style/Style.css"

interface NewUser {
  username: string;
  password: string;
  cuit: number | null;
  email: string;
  companyName: string;
  address: string;
  locality: string;
  state: string;
  country: string;
  phone: number | null;
}
const Register = () => {
  const [newUser, setNewUser] = useState<NewUser>({
    "username": "",
    "password": "",
    "cuit": 0,
    "email": "",
    "companyName": "",
    "address": "",
    "locality": "",
    "state": "",
    "country": "",
    "phone": 0
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const SaveUser = () => {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "••••••");

    const raw = JSON.stringify(newUser);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch("http://localhost:5187/api/User", requestOptions)
      .then((response) => response.text())
      .then(() => console.log(handleChange))
      .catch((error) => console.error(error));
  };

  return (
    <div className="todo">
      <div className="wrapper-register rounded-top ">
        <div onSubmit={SaveUser} className="row g-3 ">
        <div className="container div-img ">
          <img
            src="https://www.beral.com.ar/wp-content/uploads/2021/01/Beral_logo.png"
            alt="beral logo"
            className="img-logo"
          />
        </div>
          <div className="col-md-6">
            <label className="form-label">Username</label>
            <input
              name='username'
              type="text"
              className="form-control"
              value={newUser.username}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={newUser.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Cuil</label>
            <input type="number" className="form-control" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Nombre de empresa</label>
            <input
              type="text"
              className="form-control"
              name="companyName"
              value={newUser.companyName}
              onChange={handleChange}
              required />
          </div>

          <div className="col-12">
            <label className="form-label">Direccion</label>
            <input
              type="text"
              className="form-control"
              placeholder="Calle 123"
              name="address"
              value={newUser.address}
              onChange={handleChange} />
          </div>
          <div className="col-md-4">
            <label className="form-label">Localidad</label>
            <input
              type="text"
              className="form-control"
              name="locality"
              value={newUser.locality}
              onChange={handleChange} />
          </div>
          <div className="col-md-4">
            <label className="form-label">Provincia</label>
            <input
              type="text"
              className="form-control"
              name="state"
              value={newUser.state}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Pais</label>
            <input
              type="text"
              className="form-control"
              name="country"
              value={newUser.country}
              onChange={handleChange} />
          </div>
          <div className="col-md-4">
            <label className="form-label">Cod.area</label>
            <input
              type="number"
              className="form-control"

            />
          </div>
          <div className="col-md-8">
            <label className="form-label">Telefono</label>
            <input
              type="number"
              className="form-control"

            />
          </div>
          <div className="d-flex justify-content-center mt-4 " >
            <button className="boton-register" type="submit">Registrarse</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Register;