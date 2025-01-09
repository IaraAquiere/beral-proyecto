import { create } from "zustand";
import { IUserStore } from "../interfaces/IUserStore";
import { IUser } from "../interfaces/IUser";
import { IProducto } from "../interfaces/IProducto";


export const userStore = create<IUserStore>((set, get) => ({
  id: 23,
  idFolder: "ACTIVOS",
  logueado: false,
  usuario: undefined,
  items: [] as IProducto[], 
  total: 0,
  
  sumar: (producto: IProducto) => {
    const { items } = get();
    const newItems = [...items];
    const indice = newItems.findIndex(item => item.id == producto.id);

    if (indice > -1) {
      newItems[indice].quantity += producto.quantity; 
      set(() => ({ items: newItems }));
      set((state) => ({ total: state.total + (producto.price * producto.quantity) })); 
    } else {
      set((state) => ({
        items: [...state.items, producto],
        total: state.total + (producto.price * producto.quantity)
      }));
    }
  },

  agregarProducto: (producto: IProducto) => {
    const { items, total } = get();
    const newItems = [...items];

    const indice = newItems.findIndex(item => item.id == producto.id);

    if (indice > -1) {
      const productoExistente = newItems[indice];
      const diferenciaCantidad = producto.quantity - productoExistente.quantity; 
      newItems[indice] = { ...productoExistente, quantity: producto.quantity };
      set(() => ({ items: newItems }));

      set(() => ({ total: total + (producto.price * diferenciaCantidad) }));
    } else {
      set((state) => ({
        items: [...state.items, producto],
        total: total + (producto.price * producto.quantity)
      }));
    }
  },

  borrarProducto: (producto: IProducto) => {
    const { total, items } = get();
    const newItems = [...items];
    const indice = newItems.findIndex(item => item.id == producto.id);
    
    if (indice > -1) {
      
      const productoExistente = newItems[indice];
      const diferenciaCantidad = productoExistente.quantity; 
      newItems[indice] = { ...productoExistente, quantity: 0 }; 
      set(() => ({ items: newItems }));

      set(() => ({ total: total - (productoExistente.price * diferenciaCantidad) }));
    }
    

    set((state) => ({
      items: state.items.filter((item) => item.id !== producto.id),
    }));
  },

  setItems: (productos: IProducto[]) => {
    const total = productos.reduce((acc, producto) => acc + (producto.price * producto.quantity), 0);
    set(() => ({ items: productos, total }));
  },

  setId: (p: string) => {
    set(() => ({ idFolder: p }));
  },

  setUser: (p?: IUser | undefined) => {
    set(() => ({ usuario: p }));
    set(() => ({ logueado: true }));
  },

  logout: () => {
    set(() => ({ usuario: undefined }));
    set(() => ({ items: [] }));
    set(() => ({ logueado: false }));
    set(() => ({ total: 0 }));
  },

  vaciar: () => {
    set(() => ({ items: [] }));
    set(() => ({ total: 0 }));
  }
}));
