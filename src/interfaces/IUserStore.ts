import { IProducto } from "./IProducto"
import { IUser } from "./IUser"

export interface IUserStore  {
    id: number,
    idFolder: string,
    logueado: boolean,
    usuario?: IUser,
    items: IProducto[],
    total: number,
    sumar: (producto: IProducto) => void,
    agregarProducto: (producto: IProducto) => void,
    borrarProducto: (producto: IProducto) => void,
    setId: (p: string) => void,
    setUser: (p?: IUser | undefined) => void,
    setItems: (productos : IProducto[]) => void,
    logout: () => void,
    vaciar: () => void
}
