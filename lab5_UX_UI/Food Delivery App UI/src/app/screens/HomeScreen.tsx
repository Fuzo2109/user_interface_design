import React, { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Search, Bell, Star, Plus, MapPin, ChevronRight } from "lucide-react";
import { BottomNav } from "../components/BottomNav";

const categories = [
  { id: 1, emoji: "🍔", label: "Burgers" },
  { id: 2, emoji: "🍕", label: "Pizza" },
  { id: 3, emoji: "🍣", label: "Sushi" },
  { id: 4, emoji: "🥗", label: "Healthy" },
  { id: 5, emoji: "🍜", label: "Noodles" },
  { id: 6, emoji: "🌮", label: "Tacos" },
];

const popularItems = [
  {
    id: 1,
    name: "Classic Double Burger",
    restaurant: "Burger Palace",
    price: 12.99,
    rating: 4.9,
    time: "20 min",
    image:
      "https://images.unsplash.com/photo-1772884011435-00b8eeceb1a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Margherita Pizza",
    restaurant: "Pizza House",
    price: 14.99,
    rating: 4.8,
    time: "30 min",
    image:
      "https://images.unsplash.com/photo-1771757242065-b88cbe58f1e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    tag: "Popular",
  },
  {
    id: 3,
    name: "Spicy Tuna Roll",
    restaurant: "Sushi World",
    price: 16.5,
    rating: 4.7,
    time: "25 min",
    image:
      "https://images.unsplash.com/photo-1712183718471-dab51f0748ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    tag: "New",
  },
  {
    id: 4,
    name: "Crispy Fried Chicken",
    restaurant: "Chicken Corner",
    price: 11.99,
    rating: 4.6,
    time: "18 min",
    image:
      "https://images.unsplash.com/photo-1765360024320-b2ab819c6f75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
  {
    id: 5,
    name: "Garden Fresh Salad",
    restaurant: "Green Eats",
    price: 9.99,
    rating: 4.5,
    time: "15 min",
    image:
      "https://images.unsplash.com/photo-1622922229376-b25fec9357aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
];

export default function HomeScreen() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="bg-white px-5 pt-12 pb-5">
        <div className="flex items-center justify-between mb-1">
          <div>
            <p className="text-xs text-gray-500 font-medium">Good morning 👋</p>
            <h1 className="text-xl font-black text-gray-900">Hi, Alex!</h1>
          </div>
          <div className="relative">
            <button className="w-10 h-10 bg-gray-100 rounded-2xl flex items-center justify-center">
              <Bell size={18} className="text-gray-700" />
            </button>
            <span className="absolute top-1.5 right-2 w-2 h-2 bg-orange-500 rounded-full" />
          </div>
        </div>
        <div className="flex items-center gap-1.5 mt-2">
          <MapPin size={13} className="text-orange-500" />
          <p className="text-xs text-gray-500">
            Delivering to{" "}
            <span className="text-gray-800 font-semibold">
              123 Main Street, New York
            </span>
          </p>
          <ChevronRight size={12} className="text-gray-400" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Search bar */}
        <div className="px-5 py-4 bg-white">
          <button
            onClick={() => navigate("/search")}
            className="w-full flex items-center gap-3 bg-gray-100 rounded-2xl px-4 py-3.5"
          >
            <Search size={16} className="text-gray-400" />
            <span className="text-sm text-gray-400">Search food, restaurants...</span>
          </button>
        </div>

        {/* Banner */}
        <div className="mx-5 mt-3 mb-1">
          <div className="bg-orange-500 rounded-3xl p-5 relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 w-32 h-32 rounded-full bg-orange-400 opacity-50" />
            <div className="absolute right-8 top-0 w-20 h-20 rounded-full bg-orange-600 opacity-25 -translate-y-1/3" />
            <p className="text-white text-xs font-medium mb-1 opacity-90">
              Limited time offer 🔥
            </p>
            <h3 className="text-white font-black text-lg leading-tight mb-3">
              Get 30% off on<br />your first order!
            </h3>
            <button className="bg-white text-orange-500 text-xs font-bold px-4 py-2 rounded-xl">
              Order Now
            </button>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 text-5xl">
              🍔
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mt-5 mb-2 px-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-black text-gray-900">Categories</h2>
            <button className="text-orange-500 text-xs font-semibold">
              See All
            </button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-1 -mx-5 px-5 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex flex-col items-center gap-1.5 flex-shrink-0 transition-all`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all ${
                    activeCategory === cat.id
                      ? "bg-orange-500 shadow-lg shadow-orange-200"
                      : "bg-white shadow-sm"
                  }`}
                >
                  {cat.emoji}
                </div>
                <span
                  className={`text-[10px] font-semibold ${
                    activeCategory === cat.id
                      ? "text-orange-500"
                      : "text-gray-500"
                  }`}
                >
                  {cat.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Popular Near You */}
        <div className="mt-5 px-5 pb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-black text-gray-900">
              Popular Near You 📍
            </h2>
            <button className="text-orange-500 text-xs font-semibold">
              See All
            </button>
          </div>
          <div className="space-y-4">
            {popularItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                onClick={() => navigate("/detail")}
                className="bg-white rounded-3xl overflow-hidden shadow-sm flex gap-0 cursor-pointer active:scale-98 transition-transform"
              >
                <div className="relative w-28 h-28 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  {item.tag && (
                    <span className="absolute top-2 left-2 bg-orange-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
                      {item.tag}
                    </span>
                  )}
                </div>
                <div className="flex-1 p-3.5 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">{item.restaurant}</p>
                    <h3 className="text-sm font-bold text-gray-900 leading-snug">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-1 mt-1">
                      <Star size={10} className="text-amber-400 fill-amber-400" />
                      <span className="text-[11px] font-semibold text-gray-700">
                        {item.rating}
                      </span>
                      <span className="text-[10px] text-gray-400">•</span>
                      <span className="text-[10px] text-gray-400">
                        {item.time}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-base font-black text-gray-900">
                      ${item.price.toFixed(2)}
                    </span>
                    <button className="w-7 h-7 bg-orange-500 rounded-xl flex items-center justify-center shadow-sm active:scale-90 transition-transform">
                      <Plus size={14} className="text-white" strokeWidth={2.5} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
