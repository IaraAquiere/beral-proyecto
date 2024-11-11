import ModalOrders from "./ModalOrders";
import Search from "../Search/Search.tsx";
import { useState } from "react";
import useOrder from "../../hook/useOrder.ts";


const Orders = () => {
  const { order } = useOrder();
  const [search, setSearch] = useState<string>("");

  const orderSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const result = search
    ? order.filter((order) => {
      return (
        order.orderDate.includes(search)
      );
    })
    : order;

  return (
    <>
      <div className="container">
        <h2>Mis pedidos</h2>
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
                <th>Id user</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="table-group">
              {result.map((orderItem) => (
                <tr key={orderItem.id}>
                  <td>{orderItem.orderDate}</td>
                  <td>{orderItem.orderNo}</td>
                  <td>{orderItem.clientCode}</td>
                  <td>{orderItem.sellerCode}</td>
                  <td>{orderItem.userId}</td>
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