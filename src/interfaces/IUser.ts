export interface IUser {
    id : number,
    token? : string,
    email: string,
    password: string,
    cuit: number,
    companyName?: string,
    address?: string,
    locality?: string,
    state?: string,
    country?: string,
    phone: number,
    isActive: boolean,
    isAdmin: boolean,
    tgClient?: string
}
