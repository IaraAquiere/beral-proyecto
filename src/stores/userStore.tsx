import { create } from "zustand";
import { IUserStore } from "../interfaces/IUserStore";
import { IUser } from "../interfaces/IUser";

export const userStore = create<IUserStore>((set, get) => ({
  id: 1,
  idFolder: "Rubro",
  logueado: false,
  usuario: undefined,
  items: [],
  total: 0,
  agregarProducto: (producto) => {
    const { items } = get();
    const { total } = get();
    const newItems = [...items];

    const indice = newItems.findIndex(item => item.id == producto.id)

    if (indice > -1) {
      newItems[indice] = { ...newItems[indice], quantity: newItems[indice].quantity + producto.quantity }
      set(() => ({ items: newItems }))

      set(() => ({ total: total + (producto.price * producto.quantity) }))
    } else {
      set((state) => ({ items: [...state.items, producto] }))

      set(() => ({ total: total + (producto.price * producto.quantity) }))
    }
  },
  borrarProducto: (producto) => {
    const { total } = get();
    set((state) => ({
      items: state.items.filter((item: { id: number; }) => item.id !== producto.id),
    }));
    set(() => ({ total: total - (producto.price * producto.quantity) }))
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
  vaciar: () => {
    set(() => ({ items: [] }))
    set(() => ({ total: 0 }))
  }
}))