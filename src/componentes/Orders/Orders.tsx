import ModalOrders from "./ModalOrders";
import Search from "../Search/Search.tsx"
const Orders = () => {
  return (
    <>
   
    <div className="container">
      <h2 className="pt-4">Mis pedidos</h2>
      <hr />
      <Search
      className1="d-flex flex-row justify-content-center pb-5 pt-4"
      className2="form-control form-control-lg border border-dark-subtle w-50  "
      placeholder="Buscar Pedido"
      />
      <div className="tabla-busqueda">
        <table className="table table-hover ">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Tipo</th>
              <th>Numero</th>    
              <th>Estado</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="table-group" >
                <tr >
                  <td>24/07/2024</td>
                  <td>nose</td>
                  <td>00002345687</td>   
                  <td>nose</td>
                  <td>
                    <button
                      type="button"
                      className="btn float-end btn-sm btn-widex"
                      data-bs-toggle="modal"
                      data-bs-target="#myModal"
                    >
                      Ver
                    </button>
                  </td>
                </tr>
          </tbody>
        </table>
      </div>
      <ModalOrders/>
    </div>
</>
  );
}

export default Orders