import { useEffect, useState } from "react";

export const useUsersList = () => {
    const [users, setUsers] = useState<any[]>([]);
    
    useEffect(() => {
        const requestOptions = {
            method: "GET",
        };

        fetch("http://localhost:5000/api/User/GetAll", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setUsers(result);
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
            });
    }, []);
    return { users }
}
