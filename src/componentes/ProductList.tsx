import { userStore } from "../stores/userStore";
import { RiDeleteBin6Line } from "react-icons/ri";

const ProductList = () => {
    const items = userStore(state => state.items);
    const borrarProducto = userStore(state => state.borrarProducto);
    const agregarProducto = userStore(state => state.agregarProducto);

    const aumentarCantidad = (producto: any) => {
        agregarProducto({ ...producto, cantidad: +1 }); 
    };

    const disminuirCantidad = (producto: any) => {
        if (producto.cantidad > 1) {
            agregarProducto({ ...producto, cantidad: -1 }); 
        } else {
            borrarProducto(producto); 
        }
    };

    return (
        <>
            <tbody className="table-group-divider">
                {items.map((product : any) => (
                    <tr key={product.id}>
                        <td>{product.descripcion}</td>
                        <td className="boton">
                            <div className="d-flex align-items-center">
                                <button
                                    className="boton-mas-menos me-2"
                                    onClick={() => disminuirCantidad(product)}
                                >
                                    -
                                </button>
                                <div>{product.cantidad}</div>
                                <button
                                    className="boton-mas-menos ms-2"
                                    onClick={() => aumentarCantidad(product)}
                                >
                                    +
                                </button>
                            </div>
                        </td>
                        <td>$ {product.precio}</td>
                        <td>$ {product.cantidad * product.precio}</td>
                        <td>
                            <div className="d-flex align-items-center ps-2">
                                <button
                                    className="btn btn-danger btn-xl"
                                    onClick={() => borrarProducto(product)}
                                >
                                    <RiDeleteBin6Line />
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </>
    );
};

export default ProductList;
