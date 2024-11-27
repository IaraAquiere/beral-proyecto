import { useEffect, useState } from "react";
import Producto from "./Producto";
import { userStore } from "../../stores/userStore";
import Pedido from "../Pedido";
import { IProducto } from "../../interfaces/IProducto";
import Swal from "sweetalert2";
import "./Cart.css"
import Categorias from "../Categorias";
import { appSetting } from "../../settings/appsettings";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let bootstrap: any;

export default function Cart() {

    const token = userStore(state => state.usuario?.token)
    const items = userStore(state => state.items)
    const vaciar = userStore(state => state.vaciar)
    const [productos, setProductos] = useState<IProducto[]>([])
    const [filtrados, setFiltrados] = useState<IProducto[]>([]);
    const [buscar, setBuscar] = useState<string>("");

    const idFolder = userStore(state => state.idFolder)

    const Actualizar = async () => {
        const showData = async () => {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", "Bearer " + token);

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
            };

            fetch(appSetting.urlApi + "/api/articulos/listar/" + idFolder, requestOptions)
                .then((response) => response.text())
                .then((result) => {
                    const data = JSON.parse(result)
                    setProductos(data as IProducto[])
                    setFiltrados(data as IProducto[])
                    setBuscar("")
                })
                .catch((error) => console.error(error));
        };
        showData()
    }
    useEffect(() => {
        Actualizar()
    }, [idFolder]);

    const busquedaProductos = (e: string) => {
        setBuscar(e)
        setFiltrados(productos.filter(p => p.description.toUpperCase().indexOf(e.toUpperCase()) > -1))
    };
    const GuardarOrden = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + token);

        const raw = JSON.stringify(items);

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
        };
        console.log(raw)
        fetch( appSetting.urlApi + "/api/Orders", requestOptions)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('No se puede guardar la orden')
                }
                response.text()
            }
            )
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Guardado correctamente!",
                    showConfirmButton: false,
                    timer: 1500
                });
                vaciar();
                bootstrap.Modal.getInstance(document.getElementById('myModal')).hide();
            })
            .catch((error) => {
                Swal.fire({
                    position: "center",
                    icon: "warning",
                    title: error,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            );
    };


    return (
        <div className="container">
            <div className="row ">
                <div className="col ">
                    <h2>Pedido</h2>
                    <hr />
                </div>
            </div>
            <div className="row ">
                <div className="col ">
                    <legend>Categorias</legend>
                </div>
                <div className="col mt-2">
                    <button
                        type="button"
                        className="btn btn-primary float-end"
                        data-bs-toggle="modal"
                        data-bs-target="#myModal"
                    >
                        Ver Pedido { items.length > 0 ? "(" +items.length + ")" : ""   }</button>
                </div>
            </div>
            <Categorias />
            <div className="container">
                <div className="d-flex flex-row justify-content-center m-4">
                    <input
                        type="search"
                        className="form-control border border-dark-subtle w-50"
                        placeholder={"Buscar..."}
                        onChange={(e) => busquedaProductos(e.target.value)}
                        value={buscar}
                    />
                </div>
            </div>

            <></>

            <legend>Articulos ({filtrados.length})</legend>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Codigo</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        filtrados.map(( p : IProducto) => (
                            <tr key={p.id}>
                                <Producto producto={p} />
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="modal" id="myModal">
                <div className="modal-dialog modal-dialog-scrollable modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Su Pedido</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Pedido/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger float-start" data-bs-dismiss="modal" onClick={() => vaciar()}>Limpiar</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Seguir Comprando</button>
                            <button type="button" className="btn btn-primary" onClick={() => GuardarOrden()}>Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
