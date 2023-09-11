import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CartItemType {
  id: number;
  name: string;
  price: number;
}

interface CartContextType {
  cartItems: CartItemType[]; 
  total: number; 
  count: number; 
  addToCart: (item: CartItemType) => void; 
  removeFromCart: (itemId: number) => void; 
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]); 
  const [total, setTotal] = useState<number>(0);
  const [count, setCount] = useState<number>(0); 

  const addToCart = (item: CartItemType) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]); 
    setTotal(total + item.price);
    setCount(count + 1); 
  };

  const removeFromCart = (itemId: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
    const newTotal = updatedCart.reduce((acc, item) => acc + item.price, 0);
    setTotal(newTotal);
    setCount(count - 1); 
  };

  return (
    <CartContext.Provider value={{ cartItems, total, count, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
