import { useEffect, useState } from "react";
import { appSetting } from "../settings/appsettings";
import { userStore } from "../stores/userStore";
import { IUserOrder } from "../interfaces/IOrders";

export const useOrders = () => {
  const [order, setOrder] = useState<IUserOrder[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const token = userStore((state) => state.usuario?.token);

  const orderSearch = (value: string) => {
    setSearch(value);
  };

  const result = search
    ? order.filter((order) => {
        return (
          order.orderDateFormat.toUpperCase().indexOf(search.toUpperCase()) >
            -1 ||
          order.orderNo.toString().toUpperCase().indexOf(search.toUpperCase()) >
            -1
        );
      })
    : order;

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
    };
    setLoading(true);
    fetch(appSetting.urlApi + "/api/orders", requestOptions)
      .then((response) => {
        if (response.ok) {
          setLoading(false);
          return response.json();
        }
        throw new Error("Bad request!");
      })
      .then((orderData) => {
        setOrder(orderData);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return { order, orderSearch, result, search, loading };
};

export default useOrders;
