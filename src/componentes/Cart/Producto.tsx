import { useState } from "react";
import { userStore } from "../../stores/userStore";
import "./Producto.css"

const Producto = ({producto}: any) => {
  const agregarProducto  = userStore(state => state.agregarProducto)

  const [contador, setContador] = useState(0);

  const AgregarProducto = (producto: any) => {
    if (contador === 0) {
      alert("No se puede agregar un producto con cantidad 0");
      return;
    }

    agregarProducto({ ...producto, cantidad: contador });
    setContador(0);
  };

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
      <>
      <td>{producto.codigo}</td>
      <td>{producto.descripcion}</td>
      <td>${producto.precio}</td>
      <td className="boton">
        <div className="d-flex align-items-center">
          <button className="boton-mas-menos me-2" onClick={restar}>
            -
          </button>
          <div>{contador}</div>
          <button className="boton-mas-menos ms-2" onClick={sumar}>
            +
          </button>
        </div>
      </td>
      <td className="boton">
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="boton-agregar"
            onClick={() => AgregarProducto(producto)}
          >
            Agregar
          </button>
        </div>
      </td>
    </>
  );
};

export default Producto;
