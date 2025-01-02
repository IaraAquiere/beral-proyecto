import { IProducto } from "../interfaces/IProducto";
import { userStore } from "../stores/userStore";
import { RiDeleteBin6Line } from "react-icons/ri";

const ProductList = () => {
    const items = userStore(state => state.items);
    const borrarProducto = userStore(state => state.borrarProducto);
    const agregarProducto = userStore(state => state.agregarProducto);

    const aumentarCantidad = (producto: IProducto) => {
        agregarProducto({ ...producto, quantity: producto.quantity + 1 }); 
    };

    const disminuirCantidad = (producto: IProducto) => {
        if (producto.quantity > 1) {
            agregarProducto({ ...producto, quantity: producto.quantity -1 }); 
        } else {
            borrarProducto(producto); 
        }
    };

    return (
        <>
            <tbody className="table-group-divider">
                {items.filter(p => p.quantity > 0).map((product : IProducto) => (
                    <tr key={product.id}>
                        <td>{product.description}</td>
                        <td className="boton">
                            <div className="d-flex align-items-center">
                                <button
                                    className="boton-mas-menos me-2"
                                    onClick={() => disminuirCantidad(product)}
                                >
                                    -
                                </button>
                                <div>{product.quantity}</div>
                                <button
                                    className="boton-mas-menos ms-2"
                                    onClick={() => aumentarCantidad(product)}
                                >
                                    +
                                </button>
                            </div>
                        </td>
                        <td>$ {product.price.toFixed(2)}</td>
                        <td>$ {(product.quantity * product.price).toFixed(2)}</td>
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
