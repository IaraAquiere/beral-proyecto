import { IProducto } from "./IProducto"

export interface IUserOrder {
    id: number,
    clientCode: string,
    clientName: string,
    sellerCode: string,
    sellerName: string,
    orderNo: string,
    listCode: string,
    orderDateFormat: string,
    userid: number,
    subtotal: number,
    iva: number,
    total: number,
    items: IProducto[]
}
