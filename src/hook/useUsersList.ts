import { useEffect, useState } from "react";
import { IUser } from "../interfaces/IUser";
import { appSetting } from "../settings/appsettings";

export const useUsersList = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    
    useEffect(() => {
        const requestOptions = {
            method: "GET",
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
