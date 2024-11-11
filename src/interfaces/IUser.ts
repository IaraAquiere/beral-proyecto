export interface IUser {
    username: string,
  password: string,
  cuit: number,
  email?: string,
  companyName?: string,
  address?: string,
  locality?: string,
  state?: string,
  country?: string,
  phone: number,
}
