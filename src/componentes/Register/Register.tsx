import { useState } from 'react';

interface NewUser {
  username: string;
  password: string;
  cuit: string;
  email: string;
  companyName: string;
  address: string; // Opcional
  locality: string; // Opcional
  state: string; // Opcional
  country: string; // Opcional
}

const Register = () => {
  const [newUser, setNewUser] = useState<NewUser>({
   "username": "",
  "password": "",
  "cuit": "",
  "email": "",
  "companyName": "",
  "address": "",
  "locality": "",
  "state": "",
  "country": ""
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
    <div>
      <form onSubmit={SaveUser}>
      <div>
          <p>username</p>
          <input
            name="username"
            value={newUser.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <p>CUIT</p>
          <input
            name="cuit"
            value={newUser.cuit}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <p>Email</p>
          <input
            name="email"
            value={newUser.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <p>Nombre de la empresa</p>
          <input
            name="companyName"
            value={newUser.companyName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <p>Dirección</p>
          <input
            name="address"
            value={newUser.address}
            onChange={handleChange}
            
          />
        </div>
        <div>
          <p>Localidad</p>
          <input
            name="locality"
            value={newUser.locality}
            onChange={handleChange}
            
          />
        </div>
        <div>
          <p>Provincia</p>
          <input
            name="state"
            value={newUser.state}
            onChange={handleChange}
            
          />
        </div>
        <div>
          <p>País</p>
          <input
            name="country"
            value={newUser.country}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Iniciar</button>
        </div>
      </form>
    </div>
  );
};

export default Register;