import { useEffect, useState } from "react";
import { appSetting } from "../settings/appsettings";

export const useOrder = () => {
  const [order, setOrder] = useState<any[]>([]);
  const [search, setSearch] = useState<string>("");

  const orderSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const result = search
    ? order.filter((order) => {
      return (
        order.orderDate.includes(search)
      );
    })
    : order;

  useEffect(() => {
    const requestOptions = {
      method: "GET",
    };

    fetch(appSetting.urlApi + "/api/orders", requestOptions)
      .then((response) => response.json())
      .then((orderData) => {
        setOrder(orderData);
      })
      .catch((error) => console.error(error));
  }, []);


  return { order, orderSearch, result, search  }
};

export default useOrder;
