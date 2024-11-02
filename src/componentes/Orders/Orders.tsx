
const Orders = () => {
  return (
    <div className="container">
      <h2>Mis pedidos</h2>
      <hr />
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
      <div className="modal" id="myModal">
        <div className="modal-dialog modal-dialog-scrollable modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Orden de Stock</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Orders