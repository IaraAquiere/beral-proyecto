import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../interfaces/IUser";
import { appSetting } from "../settings/appsettings";
import Swal from "sweetalert2";


export const useRegister = () => {
    const [newUser, setNewUser] = useState<IUser>({
        username: "",
        password: "",
        cuit: 0,
        email: "",
        companyName: "",
        address: "",
        locality: "",
        state: "",
        country: "",
        phone: 0,
      });
    
      const navigate = useNavigate();
    
      const handleChange = (e: any) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
      };
    
    
      const SaveUser = async (e: React.FormEvent) => {
        e.preventDefault();
    
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
        const raw = JSON.stringify(newUser);
    
    
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
        };
    
        try {
          const response = await fetch(appSetting.urlApi + "/api/User", requestOptions);
    
          if (!response.ok) {
            const errorData = await response.json();
            console.error("Error en la API:", errorData);
            return;
          }
    
          const result = await response.json();
          console.log("Usuario creado:", result);
          Swal.fire({
            icon: "success",
            title: "Registro exitoso!",
            text: "Verifica tu email para poder acceder a la pagina",
            confirmButtonText: "OK",
          });
          navigate("/");
    
        } catch (error) {
          console.error("Error al registrar el usuario:", error);
        }
      };
    
  return {handleChange, SaveUser, newUser}
};

export default useRegister;

