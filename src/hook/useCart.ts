import { useState, useEffect } from "react";
import { userStore } from "../stores/userStore";


function useCart(url: string) {
  const [cargando, setCargando] = useState<string | null>(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const token = userStore(state => state.usuario?.token)

  useEffect(() => {
    if (url != "") {
      setCargando("cargando...");
      setError(null);

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", "Bearer " + token);

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
      };
      fetch(url, requestOptions)
        .then((response) => response.text())
        .then((result) => {
          setData(JSON.parse(result));
          setCargando(null);
        })
        .catch((error) => {
          setError(error);
          setCargando(null);
        });
    }
  }, [url]);

  return { data, cargando, error };
}

export default useCart;
