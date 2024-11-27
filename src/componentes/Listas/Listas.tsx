import { appSetting } from "../../settings/appsettings";
import { userStore } from "../../stores/userStore";

const Listas = () => {
    const token = userStore(state => state.usuario?.token)
    const Descargar = () => {
        

        console.log("Holi");
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + token);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
        };

        fetch(appSetting.urlApi + "/api/PriceList", requestOptions)
            .then(res => res.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = "listaDePrecios.xlsx";
                document.body.appendChild(a); 
                a.click();    
                a.remove();         
            });
    }

    return (
        <>
            <div className="container">
                <h2>Listas de Precios</h2>
                <hr />
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Nombre de la Lista</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="table-group">
                        <tr>
                            <td>Lista General</td>
                            <td><button className="btn btn-primary float-end" onClick={() => Descargar()}>
                                Descargar
                            </button></td>
                        </tr>
                        <tr>
                            <td>Lista ejemplo</td>
                            <td><button className="btn btn-primary float-end">
                                Descargar
                            </button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Listas;