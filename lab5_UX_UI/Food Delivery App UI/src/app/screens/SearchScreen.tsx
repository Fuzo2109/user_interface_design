import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Search, X, ArrowLeft } from "lucide-react";
import { BottomNav } from "../components/BottomNav";
import { motion } from "motion/react";

const recentSearches = [
  "Double Burger",
  "Margherita Pizza",
  "Spicy Ramen",
  "Caesar Salad",
  "Chicken Wings",
];

const cuisines = [
  {
    id: 1,
    name: "American",
    emoji: "🍔",
    color: "bg-orange-100",
    image:
      "https://images.unsplash.com/photo-1772884011435-00b8eeceb1a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  },
  {
    id: 2,
    name: "Italian",
    emoji: "🍕",
    color: "bg-red-100",
    image:
      "https://images.unsplash.com/photo-1771757242065-b88cbe58f1e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  },
  {
    id: 3,
    name: "Japanese",
    emoji: "🍣",
    color: "bg-pink-100",
    image:
      "https://images.unsplash.com/photo-1712183718471-dab51f0748ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  },
  {
    id: 4,
    name: "Healthy",
    emoji: "🥗",
    color: "bg-green-100",
    image:
      "https://images.unsplash.com/photo-1622922229376-b25fec9357aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  },
  {
    id: 5,
    name: "Mexican",
    emoji: "🌮",
    color: "bg-yellow-100",
    image:
      "https://images.unsplash.com/photo-1722875183792-bebac14859b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  },
  {
    id: 6,
    name: "Noodles",
    emoji: "🍜",
    color: "bg-amber-100",
    image:
      "https://images.unsplash.com/photo-1609167670511-0a700216013e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  },
];

export default function SearchScreen() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [recent, setRecent] = useState(recentSearches);

  const removeRecent = (item: string) => {
    setRecent((prev) => prev.filter((r) => r !== item));
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Search Header */}
      <div className="bg-white px-5 pt-12 pb-4 shadow-sm">
        <div className="flex items-center gap-3 mb-1">
          <button
            onClick={() => navigate("/home")}
            className="w-9 h-9 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0"
          >
            <ArrowLeft size={16} className="text-gray-700" />
          </button>
          <div className="flex-1 flex items-center gap-2.5 bg-gray-100 rounded-2xl px-4 py-3">
            <Search size={16} className="text-orange-500" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search food, restaurants..."
              autoFocus
              className="flex-1 text-sm text-gray-800 bg-transparent outline-none placeholder-gray-400"
            />
            {query && (
              <button onClick={() => setQuery("")}>
                <X size={15} className="text-gray-400" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-5">
        {/* Recent Searches */}
        {recent.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-black text-gray-900">
                Recent Searches
              </h2>
              <button
                onClick={() => setRecent([])}
                className="text-orange-500 text-xs font-semibold"
              >
                Clear All
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {recent.map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-sm"
                >
                  <Search size={11} className="text-gray-400" />
                  <span className="text-xs font-medium text-gray-700">
                    {item}
                  </span>
                  <button
                    onClick={() => removeRecent(item)}
                    className="ml-0.5"
                  >
                    <X size={11} className="text-gray-400" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Trending */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-base">🔥</span>
            <h2 className="text-sm font-black text-gray-900">
              Trending Today
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Spicy Burger", "Pad Thai", "BBQ Ribs", "Tiramisu", "Pho Soup"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => setQuery(item)}
                  className="bg-orange-50 border border-orange-200 text-orange-600 text-xs font-semibold px-3 py-1.5 rounded-xl"
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>

        {/* Popular Cuisines */}
        <div>
          <h2 className="text-sm font-black text-gray-900 mb-3">
            Popular Cuisines
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {cuisines.map((c, i) => (
              <motion.button
                key={c.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                onClick={() => navigate("/home")}
                className="relative overflow-hidden rounded-2xl h-24 group"
              >
                <img
                  src={c.image}
                  alt={c.name}
                  className="absolute inset-0 w-full h-full object-cover group-active:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10" />
                <div className="absolute bottom-0 left-0 right-0 p-3 flex items-end gap-1.5">
                  <span className="text-xl">{c.emoji}</span>
                  <span className="text-white text-xs font-bold">{c.name}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
