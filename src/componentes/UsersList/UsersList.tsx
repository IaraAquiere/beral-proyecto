import { useState, useEffect } from "react";
import Search from "../Search/Search.tsx";

const UsersList = () => {
  const [users, setUsers] = useState<any[]>([]);


  
  useEffect(() => {
    const requestOptions = {
      method: "GET",
    };

    fetch("http://localhost:5000/api/User/GetAll", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setUsers(result);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);
  return (
    <div className="container">
      <h2>Lista de usuarios a dar de alta</h2>
      <hr />
      <Search
        className1="d-flex flex-row justify-content-center pb-5 pt-4"
        className2="form-control form-control-lg border border-dark-subtle w-50"
        placeholder="Buscar Usuario"
      />
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Usuario</th>
            <th scope="col">CUIT</th>
            <th scope="col">Mail</th>
            <th scope="col">Empresa</th>
            <th scope="col">Calle</th>
            <th scope="col">Localidad</th>
            <th scope="col">Provincia</th>
            <th scope="col">Pais</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.cuit}</td>
              <td>{user.email}</td>
              <td>{user.companyName}</td>
              <td>{user.address}</td>
              <td>{user.locality}</td>
              <td>{user.state}</td>
              <td>{user.country}</td>
              <td>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                  />
                </div>
              </td>
            </tr>
          ))
          }


        </tbody>
      </table>
    </div>
  );
};

export default UsersList;