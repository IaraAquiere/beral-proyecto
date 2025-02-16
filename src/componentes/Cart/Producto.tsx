import { useEffect, useState } from "react";
import { userStore } from "../../stores/userStore";
import "./Producto.css"
import { IProducto } from "../../interfaces/IProducto";
import Swal from "sweetalert2";

type IProps = {
  producto : IProducto
}

const Producto = ({ producto }: IProps) => {
  const agregarProducto = userStore(state => state.agregarProducto)
  const borrarProducto = userStore(state => state.borrarProducto)
  const tgClient = userStore(state => state.usuario?.tgClient)
  const [contador, setContador] = useState(0);

  const AgregarProducto = (producto: IProducto) => {

    agregarProducto({ ...producto, quantity: contador });

    Swal.fire({
        position: "center",
        icon: "success",
        title: "Articulo agregado!",
        showConfirmButton: false,
        timer : 1000
    });
  };

  const sumar = () => {
    //setContador(contador + 1);
    agregarProducto({ ...producto, quantity: producto.quantity + 1 }); 
  };

  const restar = () => {
    //if (contador > 0) {
    //  setContador(contador - 1);
    //}
    
    if (producto.quantity > 1) {
      agregarProducto({ ...producto, quantity: producto.quantity -1 }); 
  } else {
      borrarProducto(producto); 
  }

  };


  useEffect(() => {
    setContador(producto.quantity)
  },[producto])

  return (
    <>
      <td>{producto.productCode}</td>
      <td>{producto.description}</td>
      <td>${producto.price}</td>
      {
        tgClient == "" ? <></> : <>
          <td className="boton">
            <div className="d-flex align-items-center">
              <button className="btn btn-secondary btn-sm me-2" onClick={restar}>
                -
              </button>
              <div>{contador}</div>
              <button className="btn btn-secondary btn-sm ms-2" onClick={sumar}>
                +
              </button>
              
              <button 
                type="button"
                className="btn btn-secondary btn-sm ms-2" 
                disabled={contador == producto.quantity}
                onClick={() => AgregarProducto(producto)}>
                 Agregar
              </button>
            </div>
          </td>
          <td className="boton">
            <div className="">

            </div>
          </td>
        </>}
    </>
  );
};

export default Producto;
