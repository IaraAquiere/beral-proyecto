import { IUser } from "./IUser"

export interface IUserStore  {
    id: number,
    idFolder: string,
    logueado: boolean,
    usuario?: IUser,
    setId: (p: string) => void,
    setUser: (p?: IUser | undefined) => void,
    logout: () => void,
    vaciar: () => void
}
