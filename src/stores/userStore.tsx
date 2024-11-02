import { create } from "zustand";
import { IUserStore } from "../interfaces/IUserStore";
import { IUser } from "../interfaces/IUser";

export const userStore = create<IUserStore>((set) => ({
    id: 1,
    idFolder: "0",
    logueado: false,
    usuario: undefined,
    items: [],
    
    setId: (p: string) => {
        set(() => ({ idFolder: p }))
    },
    setUser: (p?: IUser | undefined) => {
        set(() => ({ usuario: p }))        
        set(() => ({ logueado: true }))
    },
    logout: () => {
        set(() => ({ usuario: undefined }))
        
        set(() => ({ logueado: false }))
    },
    vaciar: () => ({  })
}))