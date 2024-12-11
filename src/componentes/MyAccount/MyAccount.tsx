//import { userStore } from "../../stores/userStore";
import { useEffect, useState } from "react";
import "../Style/Style.css"
import { appSetting } from "../../settings/appsettings";
import { userStore } from "../../stores/userStore";
import { IAccount } from "../../interfaces/IAccount";
import { ThreeDot } from "react-loading-indicators";

const MyAccount = () => {
    const [ctaCte, setCtaCte] = useState<IAccount>()
    const token = userStore(state => state.usuario?.token)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
        };
        setLoading(true)
        fetch(appSetting.urlApi + "/api/Factura/GetAccount", requestOptions)
            .then((response) => response.text())
            .then((result) => {
                setCtaCte(JSON.parse(result));
                setLoading(false)
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
                <legend>Cuenta Corriente</legend>
                <hr />
                {loading ? <ThreeDot color="#ff6000" size="small" text="" textColor="" /> :
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Comprobante</th>
                                <th>Fecha</th>
                                <th>Vencimiento</th>
                                <th className="text-end">Importe</th>
                            </tr>
                        </thead>
                        <tbody className="table-group">
                            {ctaCte == null ? <></> :
                                ctaCte.comprobantes.map((c) => (
                                    <tr>
                                        <td>{c.comprobante}</td>
                                        <td>{c.fecha_emis}</td>
                                        <td>{c.fecha_vto}</td>
                                        <td className="text-end">{c.importe_pen}</td>
                                    </tr>
                                ))
                            }
                            <tr >
                                <td colSpan={3} className="TotalBack text-end"><b>Saldo:</b></td>
                                <td className="TotalBack text-end">{ctaCte?.saldo}</td>
                            </tr>
                        </tbody>
                    </table>
                }
            </div>
        </>
    )
}

export default MyAccount;