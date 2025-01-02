import { create } from "zustand";
import { IUserStore } from "../interfaces/IUserStore";
import { IUser } from "../interfaces/IUser";
import { IProducto } from "../interfaces/IProducto";

export const userStore = create<IUserStore>((set, get) => ({
  id: 23,
  idFolder: "ACTIVOS",
  logueado: false,
  usuario: undefined,
  items: [],
  total: 0,
  sumar : (producto) => {
    const { items } = get();
    const newItems = [...items];
    const indice = newItems.findIndex(item => item.id == producto.id)

    if (indice > -1) {
      //newItems[indice] = { ...newItems[indice], quantity: newItems[indice].quantity + producto.quantity }
      newItems[indice] = { ...newItems[indice], quantity: producto.quantity + 1 }
      set(() => ({ items: newItems }))
    }
  },
  agregarProducto: (producto) => {
    const { items } = get();
    const { total } = get();
    const newItems = [...items];

    const indice = newItems.findIndex(item => item.id == producto.id)

    if (indice > -1) {
      //newItems[indice] = { ...newItems[indice], quantity: newItems[indice].quantity + producto.quantity }
      newItems[indice] = { ...newItems[indice], quantity: producto.quantity }
      set(() => ({ items: newItems }))

      set(() => ({ total: total + (producto.price * producto.quantity) }))
    } else {
      set((state) => ({ items: [...state.items, producto] }))

      set(() => ({ total: total + (producto.price * producto.quantity) }))
    }
  },
  setItems : (productos : IProducto[]) =>
  {
    set(() => ({ items: productos }))
  },
  borrarProducto: (producto) => {
    //const { total } = get();
    const { items } = get();
    const newItems = [...items];
    const indice = newItems.findIndex(item => item.id == producto.id)
    newItems[indice] = { ...newItems[indice], quantity: 0}
    set(() => ({ items: newItems }))

    /*
    set((state) => ({
      items: state.items.filter((item: { id: number; }) => item.id !== producto.id),
    }));
    set(() => ({ total: total - (producto.price * producto.quantity) })) */
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