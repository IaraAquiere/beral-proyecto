import { appSetting } from "../../settings/appsettings";
import { userStore } from "../../stores/userStore";

const Lists = () => {
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
            <div className="container pt-4">
                <legend>Listas de Precios</legend>
                <hr className="mb-5" />
                <div className="container d-flex justify-content-center mt-5">
                    <div className="col-4 me-3">
                        <div className="card-deck text-center">
                            <div className="card mb-4 ">
                                <div className="card-header">
                                    <h4 >Lista General</h4>
                                </div>
                                <div className="card-body">
                                    <button type="button" className="btn btn-lg btn-block btn-outline-primary" onClick={() => Descargar()}>Descargar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 ms-3">
                        <div className="card-deck text-center">
                            <div className="card mb-4 ">
                                <div className="card-header">
                                    <h4 >Lista Ejemplo</h4>
                                </div>
                                <div className="card-body">
                                    <button type="button" className="btn btn-lg btn-block btn-outline-primary">Descargar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Lists;