import { useEffect, useState } from "react";
import { IUser } from "../interfaces/IUser";
import { appSetting } from "../settings/appsettings";
import { userStore } from "../stores/userStore";

export const useUsersList = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const token  = userStore(state => state.usuario?.token)

    useEffect(() => {

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + token);

        const requestOptions = {
            method: "GET",
            headers : myHeaders
        };

        fetch( appSetting.urlApi + "/api/User/GetAll", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setUsers(result);
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
            });
    }, []);
    return { users, setUsers }
}
