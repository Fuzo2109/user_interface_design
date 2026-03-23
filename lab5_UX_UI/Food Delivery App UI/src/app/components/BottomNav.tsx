import React from "react";
import { useNavigate, useLocation } from "react-router";
import { Home, Search, ShoppingCart, User } from "lucide-react";
import { useApp } from "../context/AppContext";

export function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartCount } = useApp();

  const items = [
    { icon: Home, label: "Home", path: "/home" },
    { icon: Search, label: "Search", path: "/search" },
    { icon: ShoppingCart, label: "Cart", path: "/cart" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  return (
    <div className="flex items-center justify-around bg-white border-t border-gray-100 pt-3 pb-5 px-4 shadow-lg">
      {items.map(({ icon: Icon, label, path }) => {
        const active = location.pathname === path;
        return (
          <button
            key={path}
            onClick={() => navigate(path)}
            className="flex flex-col items-center gap-1 relative"
          >
            <div className="relative">
              <Icon
                size={22}
                className={active ? "text-orange-500" : "text-gray-400"}
                strokeWidth={active ? 2.5 : 1.8}
              />
              {label === "Cart" && cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-orange-500 text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </div>
            <span
              className={`text-[10px] font-medium ${
                active ? "text-orange-500" : "text-gray-400"
              }`}
            >
              {label}
            </span>
            {active && (
              <div className="absolute -bottom-3 w-1 h-1 rounded-full bg-orange-500" />
            )}
          </button>
        );
      })}
    </div>
  );
}
