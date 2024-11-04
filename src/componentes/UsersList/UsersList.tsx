
const UsersList = () => {
  return (
    <div className="container">
      <h2 className="pb-5 pt-4">Lista de usuarios a dar de alta</h2>
      <table className="table table-hover ">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Username</th>
            <th>CUIT</th>
            <th>Mail</th>
            <th>Empresa</th>
            <th>Calle</th>
            <th>Localidad</th>
            <th>Provincia</th>
            <th>Pais</th>
            <th>Telefono</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="table-group" >
          <tr>
          </tr>
          <tr>
            <td>24/08/2024</td>
            <td>vicho05</td>
            <td>20-46647842-2</td>
            <td>iara-victoria@hotmail.com</td>
            <td>victoriaaquiereasociados</td>
            <td>cosquin 1751</td>
            <td>caba</td>
            <td>buenos aires</td>
            <td>argentina</td>
            <td>1135101369</td>
            <td><div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default UsersList