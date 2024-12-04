import { useUsersList } from "../../hook/useUsersList.ts";
import { IUser } from "../../interfaces/IUser.ts";
import { appSetting } from "../../settings/appsettings.ts";
import Search from "../Search/Search.tsx";
import { userStore } from "../../stores/userStore.tsx";

const UsersList = () => {

const { users, setUsers, search, userListSearch, resultUserList} = useUsersList();
const token = userStore(state => state.usuario?.token)


const Activar = (user : IUser) => {

  if(user.isActive)
  {
    alert("Usuario Ya esta Activo")
    return;
  }

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Bearer " + token);

const raw = JSON.stringify({
  "Username": user.email,
  "Password": ""
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
};

fetch( appSetting.urlApi +  "/api/User/Activar", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));


  const usuarios = users.map(u => {
      if (u.email === user.email) {
        return {
          ...u,
          active: !user.isActive,
        };
      } else {
        return u;
      }
    });
    setUsers(usuarios);
    
 }

  return (
    <div className="container">
      <h2>Usuarios</h2>
      <hr />
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
               <td>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      onChange={ () => Activar(user) }
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