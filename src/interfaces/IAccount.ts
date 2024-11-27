import { IComprobante } from "./IComprobante.ts"

export interface IAccount {
    comprobantes : IComprobante[],
    saldo: number
}