import { useEffect, useState } from "react";
import { appSetting } from "../settings/appsettings";
import { userStore } from "../stores/userStore";

export const useOrders = () => {
  const [order, setOrder] = useState<any[]>([]);
  const [search, setSearch] = useState<string>("");
  const token = userStore(state => state.usuario?.token)
  
  const orderSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const result = search
    ? order.filter((order) => {
      return (
        (order.orderDateFormat.includes(search)) || 
        order.id.toString().includes(search) ||
        order.clientCode.includes(search)
      );
    })
    : order;

  useEffect(() => {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

    const requestOptions = {
      method: "GET",
      headers: myHeaders
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

export default useOrders;
