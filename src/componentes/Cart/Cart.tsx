
const Cart = () => {
  return (
    <div className="container">
            <div className="row ">
                <div className="col ">
                    <h2>Pedido</h2>
                    <hr />
                </div>
            </div>
            <div className="row ">
                <div className="col ">
                    <button
                        type="button"
                        className="btn btn-warning float-end"
                        data-bs-toggle="modal"
                        data-bs-target="#myModal"
                    >
                        Mi pedido
                    </button>
                </div>
            </div>
            <div className="container">
                <div className="d-flex flex-row justify-content-center m-4">
                    <input
                        type="search"
                        className="form-control border border-dark-subtle w-50"
                        
                    />
                </div>
            </div>
            <legend>Articulos </legend>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Codigo</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>

            {/* MODAL */}
            <div className="modal" id="myModal">
                <div className="modal-dialog modal-dialog-scrollable modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Su Pedido</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger float-start" data-bs-dismiss="modal">Limpiar</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Seguir Comprando</button>
                            <button type="button" className="btn btn-primary" >Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Cart