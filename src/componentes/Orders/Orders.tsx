import ModalOrders from "./ModalOrders";
import Search from "../Search/Search.tsx";
import useOrder from "../../hook/useOrder.ts";

import { userStore } from "../../stores/userStore.tsx";

const Orders = () => {
  const { orderSearch, result, search } = useOrder();
  const isAdmin = userStore(state => state.usuario?.isAdmin)
  return (
    <>
      <div className="container">
        <h2>{ isAdmin ? "Adm. de Pedidos" : "Mis pedidos" }</h2>
        <hr />
        <Search
          className1="d-flex flex-row justify-content-center pb-5 pt-4"
          className2="form-control form-control-lg border border-dark-subtle w-50"
          placeholder="Buscar Pedido"
          onChange={orderSearch}
          value={search}
        />
        <div className="tabla-busqueda">
          <table className="table table-hover">
            <thead>
              <tr>

                <th>Fecha</th>
                <th>Nro. pedido</th>
                <th>Cod. cliente</th>
                <th>Cod. vendedor</th>
                <th>Nro. Lista</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="table-group">
              {result.map((orderItem) => (
                <tr key={orderItem.id}>
                  <td>{orderItem.orderDate}</td>
                  <td>{orderItem.id}</td>
                  <td>{orderItem.clientCode}</td>
                  <td>{orderItem.sellerCode}</td>
                  <td>{orderItem.listCode}</td>
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
              ))}
            </tbody>
          </table>
        </div>
        <ModalOrders />
      </div>
    </>
  );
};

export default Orders;