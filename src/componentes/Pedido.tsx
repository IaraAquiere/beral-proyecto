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
         <div className="d-flex justify-content-end">
          <h5>Total: $ { total }</h5>
          </div>
         
    </>
  );
};

export default Pedido;