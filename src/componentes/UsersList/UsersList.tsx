
const UsersList = () => {
  return (
    <table className="table table-hover">
  <thead>
    <tr>
      <th >CUIT</th>
      <th >Mail</th>
      <th >Nombre empresa</th>
      <th >Calle</th>
      <th >Localidad</th>
      <th >Provincia</th>
      <th >Pais</th>
      <th >Telefono</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>20-4664842-2</th>
      <td>iara-victoria@hotmail.com</td>
      <td>victoria aquiere</td>
      <td>cosquin 1751</td>
      <td>CABA</td>
      <td>buenos aires</td>
      <td>Argentina</td>
      <td>1135101369</td>
      <th>
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        </div>
      </th>
    </tr>
  </tbody>
</table>
  )
}

export default UsersList