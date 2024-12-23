import { useNavigate } from "react-router-dom";
import { appSetting } from "../settings/appsettings";
import { useEffect, useState } from "react";
import { userStore } from "../stores/userStore";
import { IUser } from "../interfaces/IUser";

export const useLogin = (login: number, username: string, password: string) => {
  const [cargando, setCargando] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const SetUser = userStore((state) => state.setUser);

  useEffect(() => {
    if (login > 0) {
      setCargando(true);
      setError("");

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        Email: username,
        Password: password,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
      };

      fetch(appSetting.urlApi + "/api/User/Login", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          const login = JSON.parse(result);

          if (login.token != undefined) {
            const user: IUser = {
              id: 0,
              token: login.token,
              email: login.companyName,
              password: login.password,
              cuit: login.cuit,
              phone: login.phonets,
              isActive: login.active,
              isAdmin: login.isAdmin,
              tgClient: login.tgClient,
            };
            SetUser(user);
            localStorage.setItem("berallogin", JSON.stringify(user));
            console.log(user.isAdmin);
            if (user.isAdmin) {
              navigate("/userlist");
              return;
            }
            navigate("/orders");
          } else {
            setError("usuario y/o comtraseña incorrecto/s");
          }
          setCargando(false);
        })
        .catch((error) => {
          console.error(error);
          setCargando(false);
        });
    }
  }, [login]);

  return { cargando, error };
};
export default useLogin;
