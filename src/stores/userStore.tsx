import { create } from "zustand";
import { IUserStore } from "../interfaces/IUserStore";
import { IUser } from "../interfaces/IUser";

export const userStore = create<IUserStore>((set,get) => ({
    id: 1,
    idFolder: "0",
    logueado: false,
    usuario: undefined,
    items: [],
    agregarProducto: (producto: { id: any; cantidad: any; }) =>{
        const { items } = get();

        const newItems = [...items];
    
        const indice = newItems.findIndex(item => item.id == producto.id )
    
        if(indice > -1)
        {
            newItems[indice] = {...newItems[indice], cantidad: newItems[indice].cantidad + producto.cantidad}
            set(() => ({ items: newItems }))
        } else
        {
          set((state) => ({items: [...state.items, producto] }))
        }
      },
      borrarProducto: (producto: { id: any; }) =>{
       set((state) => ({
      items: state.items.filter((item: { id: any; }) => item.id !== producto.id),
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