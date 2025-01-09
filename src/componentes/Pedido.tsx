import { userStore } from "../stores/userStore";
import "./Pedido.css"
import ProductList from "./ProductList";

const Pedido = () => {

  const total = userStore(state => state.total)
  return (
    <>
        <table className="table table-hover ">
                <thead>
                  <tr>
                    <th>Descripcion</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Importe</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <ProductList />
         </table>
         <div className="d-flex justify-content-end pe-5 pt-4">
          <h5>Total: $ { total.toFixed(2) }</h5>
          </div>
          <div className="d-flex justify-content-end">
          <p>(Precios + IVA + Impuestos en total de la Factura)</p>
          </div>
         
    </>
  );
};

export default Pedido;