import { IItem } from '@interfaces';
import { ICart } from 'interfaces/ICart';
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

const emptyCart: ICart = {
  items: [],
  total: 0,
};

interface ICartContext {
  cart: ICart;
  addItem(item: IItem): void;
  removeItem(id: number, price: number): void;
}

const getInicialState = () => {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : emptyCart;
};

const CartContext = createContext<ICartContext | undefined>(undefined);

const useCartContext = (): ICartContext => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }

  return context;
};

interface Props {
  children: ReactNode;
}
const CartProvider = ({ children }: Props) => {
  const [cart, setCart] = useState(getInicialState);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const updateQuantity = (id: number, quantity: number) => {
    return cart.items.map(itemCart => {
      if (itemCart.id === id) itemCart.quantity += quantity;
      return itemCart;
    });
  };

  const getTotal = (price: number) => {
    if (cart.total === 0) {
      return cart.total;
    }
    return (cart.total -= price);
  };

  const addItem = (item: IItem) => {
    const isItemInCart = cart.items.some(itemCart => itemCart.id === item.id);
    if (!isItemInCart) {
      const items = [...cart.items, { ...item, quantity: 1 }];
      return setCart({
        items: items,
        total: cart.total + item.price,
      });
    }
    setCart({
      items: updateQuantity(item.id, 1),
      total: cart.total + item.price,
    });
  };

  const removeItem = (id: number, price: number) => {
    console.log('teste');
    const itemCart = cart.items.find(itemCart => itemCart.id === id);
    if (itemCart?.quantity === 1) {
      return setCart({
        items: cart.items.filter(itemCart => itemCart.id !== id),
        total: getTotal(price),
      });
    }
    setCart({
      items: updateQuantity(id, -1),
      total: getTotal(price),
    });
  };

  const context: ICartContext = {
    cart,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};

export { CartProvider, useCartContext };
