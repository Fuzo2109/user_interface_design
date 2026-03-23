import React, { createContext, useContext, useState, ReactNode } from "react";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  extras?: string[];
}

interface AppContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, delta: number) => void;
  cartCount: number;
  cartTotal: number;
  promoCode: string;
  setPromoCode: (code: string) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Classic Double Burger",
      price: 12.99,
      image:
        "https://images.unsplash.com/photo-1772884011435-00b8eeceb1a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
      quantity: 1,
      extras: ["Extra Cheese"],
    },
    {
      id: 3,
      name: "Margherita Pizza",
      price: 14.99,
      image:
        "https://images.unsplash.com/photo-1771757242065-b88cbe58f1e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
      quantity: 2,
    },
  ]);
  const [promoCode, setPromoCode] = useState("");

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity + delta } : i))
        .filter((i) => i.quantity > 0)
    );
  };

  const cartCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);
  const cartTotal = cartItems.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  return (
    <AppContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartCount,
        cartTotal,
        promoCode,
        setPromoCode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
