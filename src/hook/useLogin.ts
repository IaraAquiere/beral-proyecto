import { useNavigate } from "react-router-dom";
import { appSetting } from "../settings/appsettings";
import { useEffect, useState } from "react";
import { userStore } from "../stores/userStore";

export const useLogin = (login: number) => {
    const [cargando, setCargando] = useState("");
    const [error, setError] = useState<string>("");
    const navigate = useNavigate();
    const SetUser = userStore(state => state.setUser);

    useEffect(() => {
        if (login > 0) {
            setCargando("cargando...");
            setError("")

            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({
                "Username": "ADMIN",
                "Password": "ADMIN"
            });

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
            };

            fetch(appSetting.urlApi + "/api/User/Login", requestOptions)
                .then((response) => response.text())
                .then((result) => {
                    var login = JSON.parse(result);

                    if (login.token != undefined) {
                        const user = {
                            token: login.token,
                            username: login.username,
                            password: login.password,
                            nombre: login.nombre,
                            cuit: login.cuit,
                            phone: login.phonets
                        }
                        SetUser(user)
                        localStorage.setItem("berallogin", JSON.stringify(user));
                        navigate("/orders");
                    } else {
                        setError("usuario y/o comtraseña incorrecto/s");
                    }
                    setCargando("");
                })
                .catch((error) => console.error(error));

        }
    }, [login]);

    return { cargando, error }

};
export default useLogin;
