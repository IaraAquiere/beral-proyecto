import { create } from "zustand";
import { IUserStore } from "../interfaces/IUserStore";
import { IUser } from "../interfaces/IUser";

export const userStore = create<IUserStore>((set,get) => ({
    id: 1,
    idFolder: "0",
    logueado: false,
    usuario: undefined,
    items: [],
    agregarProducto: (producto) =>{
        const { items } = get();

        const newItems = [...items];
    
        const indice = newItems.findIndex(item => item.id == producto.id )
    
        if(indice > -1)
        {
            newItems[indice] = {...newItems[indice], quantity: newItems[indice].quantity + producto.quantity}
            set(() => ({ items: newItems }))
        } else
        {
          set((state) => ({items: [...state.items, producto] }))
        }
      },
      borrarProducto: (producto: { id: number; }) =>{
       set((state) => ({
      items: state.items.filter((item: { id: number; }) => item.id !== producto.id),
    }));
      },
    setId: (p: string) => {
        set(() => ({ idFolder: p }))
    },
    setUser: (p?: IUser | undefined) => {
        set(() => ({ usuario: p }))        
        set(() => ({ logueado: true }))
    },
    logout: () => {
        set(() => ({ usuario: undefined }))
        set(() => ({ items: [] }))
        set(() => ({ logueado: false }))
    },
    vaciar: () => set(() => ({ items: [] }))
}))