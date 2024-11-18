import { useEffect, useState } from "react"
import { userStore } from "../stores/userStore"
import { appSetting } from "../settings/appsettings"

export default function Categorias() {

    const [data, setData] = useState<any>({})
    const setId  = userStore(state => state.setId)
    const token = userStore(state => state.usuario?.token)

    const Actualizar = async (id: string) => {
        
        const showData = async () => {

            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", "Bearer " + token);

            const requestOptions = {
                method: "GET",
                headers: myHeaders,
            };

            fetch(appSetting.urlApi + "/api/Category/Get/" + id, requestOptions)
                .then((response) => response.text())
                .then((result) => {
                    const data = JSON.parse(result);
                    setData(data)
                    MandarId(data.seleccionada?.path)
                })
                .catch((error) => console.error(error));
        };

        showData()
    }

    const MandarId = (id:string) => {setId(id)}

    useEffect(() => {
        Actualizar("45")
    }, []);

    const clickLink = (param: string) => {
        Actualizar(param)
    }


    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    {
                        data.padres?.map((x: any) => (
                            <li className="breadcrumb-item"  key={x.idfolder}><a href="#" onClick={() => clickLink(x.idfolder)}>{x.descrip}</a></li>
                        ))
                    }
                    <li className="breadcrumb-item active" aria-current="page">{data.seleccionada?.descrip}</li>
                </ol>
            </nav>
            <div className="d-flex flex-wrap flex-row">
                {
                    data.hijos?.map((j: any) => (
                        <button key={j.idfolder} type="button" className="btn btn-secondary btn-sm m-2" onClick={() => clickLink(j.idfolder)}>
                            {j.descrip}
                        </button>
                    ))
                }
            </div>
        </>
    )
}