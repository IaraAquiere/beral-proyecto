import { useEffect, useState } from "react";
import { appSetting } from "../settings/appsettings";

export const useOrder = () => {
  const [order, setOrder] = useState<any[]>([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
    };

    fetch(appSetting.urlApi + "/api/orders", requestOptions)
      .then((response) => response.json())
      .then((orderData) => {
        console.log(orderData);
        setOrder(orderData);
      })
      .catch((error) => console.error(error));
  }, []);


  return { order }
};

export default useOrder;
