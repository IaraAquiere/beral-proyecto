import { useUsersList } from "../../hook/useUsersList.ts";
import { IUser } from "../../interfaces/IUser.ts";
import { appSetting } from "../../settings/appsettings.ts";
import Search from "../Search/Search.tsx";
import { userStore } from "../../stores/userStore.tsx";
import Swal from "sweetalert2";
import { useState } from "react";

const UsersList = () => {

  const { users, setUsers, search, userListSearch, resultUserList, recarga, setRecarga } = useUsersList();
  const token = userStore(state => state.usuario?.token)
  const [llamando, setllamando] = useState<boolean>(false)

  const Activar = (user: IUser) => {

    if (llamando)
      return;

    setllamando(true);

    if (user.isActive) {
      return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

    const raw = JSON.stringify({
      "email": user.email,
      "Password": ""
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch(appSetting.urlApi + "/api/User/Activar", requestOptions)
      .then(
        (response) => {
          if (response.ok) {
            const usuarios = users.map(u => {
              if (u.email === user.email) {
                return {
                  ...u,
                  isActive: true,
                };
              } else {
                return u;
              }
            });
            setUsers(usuarios)
            

            Swal.fire({
              position: "center",
              icon: "success",
              title: "Activado correctamente!",
              showConfirmButton: false,
              timer: 1500
            });
          }
          setllamando(false)
        }
      )
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: error,
          showConfirmButton: false,
          timer: 1500
        });
        setllamando(false);
      }
      );
  }

  const Actualizar = () => {
    setRecarga(!recarga)
  }

  const Reiniciar = (id: number) => {

    if (llamando)
      return;

    setllamando(true);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

    const raw = JSON.stringify({
      id: id, email: "", Password: ""
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch(appSetting.urlApi + "/api/User/Reiniciar", requestOptions)
      .then(
        (response) => {
          if (response.ok) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Reiniciado correctamente!",
              showConfirmButton: false,
              timer: 1500
            });
          }
          setllamando(false)
        }
      )
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: error,
          showConfirmButton: false,
          timer: 1500
        });
        setllamando(false);
      }
      );
  }


  return (
    <div className="container">
      <legend>Usuarios</legend>
      <hr />
      <button className="btn btn-primary float-end" onClick={() => Actualizar()}>Actualizar</button>
      <Search
        className1="d-flex flex-row justify-content-center pb-5 pt-4"
        className2="form-control form-control-lg border border-dark-subtle w-50"
        placeholder="Buscar Usuario"
        onChange={userListSearch}
        value={search}
      />
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Mail</th>
            <th scope="col">CUIT</th>
            <th scope="col">Empresa</th>
            <th scope="col">Calle</th>
            <th scope="col">Localidad</th>
            <th scope="col">Provincia</th>
            <th scope="col">Pais</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {resultUserList.map((user: IUser) => (
            <tr key={user.id}>
              <td>{user.email}</td>
              <td>{user.cuit}</td>
              <td>{user.companyName}</td>
              <td>{user.address}</td>
              <td>{user.locality}</td>
              <td>{user.state}</td>
              <td>{user.country}</td>
              <td><button className="btn btn-sm btn-warning" onClick={() => Reiniciar(user.id)}>Reiniciar</button></td>
              <td>

                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    onChange={() => Activar(user)}
                    checked={user.isActive}
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