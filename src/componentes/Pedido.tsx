import "./Pedido.css"
import ProductList from "./productList";

const Pedido = () => {
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
          <h5>Total: $</h5>
          </div>
         
    </>
  );
};

export default Pedido;