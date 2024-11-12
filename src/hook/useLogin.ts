import { useNavigate } from "react-router-dom";
import { appSetting } from "../settings/appsettings";

export const useLogin = () => {
    const navigate = useNavigate();

    const signIn = (e: React.FormEvent) => {
        e.preventDefault();

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
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                console.log("Resultado del login:", result);
                navigate("/orders");
            })
            .catch((error) => {
                console.error("Error al hacer login:", error);
            });
    };
    return { signIn }
};

export default useLogin;
