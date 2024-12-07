import { useEffect, useState } from "react";
import { appSetting } from "../settings/appsettings";
import { userStore } from "../stores/userStore";
import { IUserOrder } from "../interfaces/IOrders";

export const useOrders = () => {
  const [order, setOrder] = useState<IUserOrder[]>([]);
  const [search, setSearch] = useState<string>("");
  const token = userStore(state => state.usuario?.token)
  
  const orderSearch = (value: string) => {
    setSearch(value);
  };

  const result = search
    ? order.filter((order) => {
      return (
        order.orderDateFormat.toUpperCase().indexOf(search.toUpperCase()) > -1 || 
        order.id.toString().toUpperCase().indexOf(search.toUpperCase()) > -1
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
      .then((response) => {
        if (response.ok) {
            return response.json()
          }
          throw new Error('Bad request!');
         })
      .then((orderData) => {
        setOrder(orderData);
      })
      .catch((error) => console.error(error));
  }, []);


  return { order, orderSearch, result, search  }
};

export default useOrders;
