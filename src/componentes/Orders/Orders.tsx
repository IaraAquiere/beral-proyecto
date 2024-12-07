import useOrders from "../../hook/useOrders.ts";
import { userStore } from "../../stores/userStore.tsx";
import { useState } from "react";
import Order from "./Order.tsx";

const Orders = () => {
  const { orderSearch, result, search } = useOrders();
  const isAdmin = userStore(state => state.usuario?.isAdmin)
  const [id, setId] = useState<number>(0);

  const SeeOrder = (id: number) => {
    setId(id)
  }

  return (
    <>
      <div className="container pt-4">
        <legend>{isAdmin ? "Adm. de Pedidos" : "Mis pedidos"}</legend>
        <hr />
        <div className="container">
                <div className="d-flex flex-row justify-content-center m-4">
                    <input
                        type="search"
                        className="form-control border border-dark-subtle w-50"
                        placeholder={"Buscar..."}
                        onChange={(e) => orderSearch(e.target.value)}
                        value={search}
                    />
                </div>
            </div>
        <div className="tabla-busqueda">
          <table className="table  table-striped">
            <thead>
              <tr>

                <th>Fecha</th>
                <th>Nro. pedido</th>
                {
                  //<th>Cod. cliente</th>
                }
                <th>Cod. vendedor</th>
                <th>Nro. Lista</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="table-group">
              {result.map((orderItem) => (
                <tr key={orderItem.id}>
                  <td>{orderItem.orderDateFormat}</td>
                  <td>{orderItem.orderNo}</td>
                  {
                    //<td>{orderItem.clientCode}</td>
                  }
                  <td>{orderItem.sellerCode}</td>
                  <td>{orderItem.listCode}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-secondary  float-end"
                      data-bs-toggle="modal"
                      data-bs-target="#myModal"
                      onClick={() => SeeOrder(orderItem.id)}
                    >
                      Ver
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="modal" id="myModal">
        <div className="modal-dialog modal-dialog-scrollable modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Detalle de pedido</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <Order pId={ id } />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;