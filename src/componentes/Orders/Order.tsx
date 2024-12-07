import { useEffect, useState } from "react";
import { userStore } from "../../stores/userStore";
import { appSetting } from "../../settings/appsettings";
import { IProducto } from "../../interfaces/IProducto";
import { IUserOrder } from "../../interfaces/IOrders";

type TProp = { pId : number }

const Order = ({pId}: TProp) => {
  const token = userStore(state => state.usuario?.token)
  
  const [data, setData] = useState<IUserOrder>();

    useEffect(() => {
        if(pId > 0)
            {
        const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
    };
    
    fetch(appSetting.urlApi + "/api/orders/" + pId, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        setData(JSON.parse(result));
      })
      .catch((error) => {
        console.log(error);
    
      });
  }
}
    , [pId])

  return (
    <>
    { data != null ? 
      <section className="py-1 py-md-7">
        <div >
          <div className="row ">
            <div className="col-12 ">
              <div className="row mb-3">
                <div className="col-12 col-sm-6 col-md-8">
                  <address>
                    <strong>{}</strong><br />
                    <p><b>Cliente:</b> {data.clientCode}-{data.clientName}</p>
                    <p><b>Vendedor:</b> {data.sellerCode}</p>
                    <p><b>Lista: </b> {data.listCode}</p>
                  </address>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                  <h4 className="row">
                    <span className="col-6">Nro #</span>
                    <span className="col-6 text-sm-end">{data.orderNo}</span>
                  </h4>
                  <div className="row">
                    <span className="col-6"><b>Fecha:</b></span>
                    <span className="col-6 text-sm-end">{data.orderDateFormat}</span>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-12">
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col" className="text-uppercase">Cant.</th>
                          <th scope="col" className="text-uppercase">Producto</th>
                          <th scope="col" className="text-uppercase text-end">Precio</th>
                          <th scope="col" className="text-uppercase text-end">Importe</th>
                        </tr>
                      </thead>
                      <tbody className="table-group-divider">
                      {
                        data.items.map( (i: IProducto) => (
                          <tr key={i.productCode}>
                          <th scope="row">{(i.quantity).toFixed(2)}</th>
                          <td>{i.productCode} - {i.description}</td>
                          <td className="text-end">{(i.price).toFixed(2)}</td>
                          <td className="text-end">{(i.import).toFixed(2)}</td>
                        </tr>
                        ))
                      }
                       <tr>
                    <td colSpan={3} className="text-end">Subtotal</td>
                    <td className="text-end">{(data.subtotal).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td colSpan={3} className="text-end">VAT (21%)</td>
                    <td className="text-end">{(data.iva).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <th scope="row" colSpan={3} className="text-uppercase text-end">Total</th>
                    <td className="text-end">${(data.total).toFixed(2)}</td>
                  </tr> 
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>  : <></>}
       </>
  
  );
}

export default Order;