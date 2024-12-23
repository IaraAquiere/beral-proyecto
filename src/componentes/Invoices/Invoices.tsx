//import { userStore } from "../../stores/userStore";
import { useEffect, useState } from "react";
import { appSetting } from "../../settings/appsettings";
import { userStore } from "../../stores/userStore";
import { IInvoices } from "../../interfaces/IInvoices";
import { ThreeDot } from "react-loading-indicators";


const Invoices = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [invoices, setInvoices] = useState<IInvoices[]>([])
    const token = userStore(state => state.usuario?.token)



    const Descargar = () => {

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + token);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
        };

        fetch(appSetting.urlApi + "/api/factura/GetInvoice", requestOptions)
            .then(res => res.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = "algo.pdf";
                document.body.appendChild(a);
                a.click();
                a.remove();
            });
    }


    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
        };
        setLoading(true)
        fetch(appSetting.urlApi + "/api/Factura", requestOptions)
            .then((response) => response.text())
            .then((result) => {
                setInvoices(JSON.parse(result));
                setLoading(false);
                //setCargando(null);
            })
            .catch((error) => {
                console.error(error)
                setLoading(false)
            });
    }
        , []);

    return (
        <>
            <div className="container pt-4">
                <legend>Mis Comprobantes</legend>
                <hr />
                {loading ? <ThreeDot color="#ff6000" size="small" text="" textColor="" /> :
                    <table className="table  table-striped">
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Comprobante</th>
                                <th>Estado</th>
                                <th>Condicion venta</th>
                                <th className="text-end">Importe</th>
                                <th className="text-end">Aciones</th>
                            </tr>
                        </thead>
                        <tbody className="table-group">
                            {invoices == null ? <></> :
                                invoices.map((c) => (
                                    <tr>
                                        <td>{c.fecha_emisFormat}</td>
                                        <td>{c.comprobante}</td>
                                        <td>{c.estado}</td>
                                        <td>{c.desc_cond}</td>
                                        <td className="text-end">{c.importe}</td>
                                        <td className="text-end"><button className="btn btn-primary" disabled onClick={() => Descargar()}>Descargar</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                }
            </div>
        </>
    )
}

export default Invoices;