import { useState } from "react";
import { appSetting } from "../../settings/appsettings";
import { userStore } from "../../stores/userStore";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ChangePass = () => {
    const token = userStore(state => state.usuario?.token)
    const navigate = useNavigate();
    const [pass, setpass] = useState("");
    const [newPass, setnewPass] = useState("");
    const [newPass2, setnewPass2] = useState("");

    const handleSubmit = (e: any) => {
        cambiar()
        e.preventDefault();
    };



    const cambiar = () => {

        if (pass == "" || newPass == "" || newPass != newPass2) {
            alert("Complete los campos")
            return;
        }
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + token);


        const raw = JSON.stringify({
            "pass": pass,
            "newPass": newPass
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
        };

        fetch(appSetting.urlApi + "/api/User/CambiarPass", requestOptions)
            .then((response) => response.text())
            .then((result) => {
                Swal.fire({
                    icon: "success",
                    title: "Ok",
                    text: JSON.parse(result).msg,
                    confirmButtonText: "OK",
                });
                navigate("/");
            }
            )
            .catch((error) => console.error(error));
    }


    return (
        <>
            <div className="container pt-4">
                <legend>Cambiar Contraseña</legend>
                <hr />
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="offset-2 form-label">Contraseña actual</label>
                        <div className="offset-2 col-8">
                            <input id="contrasena" name="contrasena" type="password" className="form-control"
                                value={pass}
                                onChange={(e) => setpass(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="offset-2 col-8">
                            <label className="form-label">Nueva Contraseña</label>

                            <input id="newPass" name="newPass" type="password" className="form-control"
                                value={newPass}
                                onChange={(e) => setnewPass(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="offset-2 col-8">
                            <label className="form-label">repetir nueva Contraseña</label>

                            <input id="newPass2" name="newPass2" type="password" className="form-control"

                                value={newPass2}
                                onChange={(e) => setnewPass2(e.target.value)} />
                        </div>
                    </div>
                    
                        <div className="offset-2 col-8">
                            <button name="submit" type="submit" className="btn btn-primary">Cambiar</button>
                        </div>
                    
                </form>

            </div>
        </>
    )
}

export default ChangePass;

