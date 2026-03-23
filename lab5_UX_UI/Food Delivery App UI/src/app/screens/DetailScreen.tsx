import React, { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, Star, Heart, Minus, Plus, ShoppingCart } from "lucide-react";
import { useApp } from "../context/AppContext";

const extras = [
  { id: 1, name: "Extra Cheese", price: 1.5 },
  { id: 2, name: "Bacon Strips", price: 2.0 },
  { id: 3, name: "Jalapeños", price: 0.75 },
  { id: 4, name: "Avocado Sauce", price: 1.25 },
];

export default function DetailScreen() {
  const navigate = useNavigate();
  const { addToCart } = useApp();
  const [quantity, setQuantity] = useState(1);
  const [selectedExtras, setSelectedExtras] = useState<number[]>([1]);
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);

  const basePrice = 12.99;
  const extrasTotal = extras
    .filter((e) => selectedExtras.includes(e.id))
    .reduce((s, e) => s + e.price, 0);
  const total = ((basePrice + extrasTotal) * quantity).toFixed(2);

  const toggleExtra = (id: number) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  };

  const handleAdd = () => {
    addToCart({
      id: 1,
      name: "Classic Double Burger",
      price: basePrice + extrasTotal,
      image:
        "https://images.unsplash.com/photo-1772884011435-00b8eeceb1a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
      extras: extras
        .filter((e) => selectedExtras.includes(e.id))
        .map((e) => e.name),
    });
    setAdded(true);
    setTimeout(() => navigate("/cart"), 800);
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Hero Image */}
      <div className="relative flex-shrink-0" style={{ height: "42%" }}>
        <img
          src="https://images.unsplash.com/photo-1772884011435-00b8eeceb1a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
          alt="Classic Double Burger"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20" />

        {/* Nav buttons */}
        <div className="absolute top-12 left-0 right-0 flex items-center justify-between px-5">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-md"
          >
            <ArrowLeft size={18} className="text-gray-800" />
          </button>
          <button
            onClick={() => setLiked(!liked)}
            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-md"
          >
            <Heart
              size={18}
              className={liked ? "text-red-500 fill-red-500" : "text-gray-600"}
            />
          </button>
        </div>

        {/* Tag */}
        <div className="absolute bottom-6 left-5">
          <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
            🏆 Best Seller
          </span>
        </div>
      </div>

      {/* Content card — scrollable */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1 bg-white rounded-t-[2.5rem] -mt-6 overflow-y-auto relative z-10"
      >
        <div className="px-6 pt-6 pb-4">
          {/* Name & Price */}
          <div className="flex items-start justify-between mb-2">
            <h1 className="text-xl font-black text-gray-900 flex-1 pr-4 leading-tight">
              Classic Double Burger
            </h1>
            <span className="text-xl font-black text-orange-500">$12.99</span>
          </div>

          {/* Restaurant & Rating */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs text-gray-500 font-medium">
              🏪 Burger Palace
            </span>
            <div className="w-1 h-1 rounded-full bg-gray-300" />
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  size={12}
                  className="text-amber-400 fill-amber-400"
                />
              ))}
              <span className="text-xs font-semibold text-gray-700 ml-1">
                4.9
              </span>
              <span className="text-xs text-gray-400">(2.4k reviews)</span>
            </div>
          </div>

          {/* Badges */}
          <div className="flex gap-2 mb-4">
            {["⏱ 20 min", "🚚 Free delivery", "🔥 Spicy"].map((b) => (
              <span
                key={b}
                className="bg-gray-100 text-gray-600 text-[10px] font-semibold px-2.5 py-1.5 rounded-xl"
              >
                {b}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            Two perfectly seasoned beef patties topped with melted American
            cheese, crispy lettuce, fresh tomatoes, pickles, and our signature
            special sauce on a toasted brioche bun.
          </p>

          <div className="h-px bg-gray-100 mb-4" />

          {/* Extras */}
          <h2 className="text-sm font-black text-gray-900 mb-3">
            Customize Your Order
          </h2>
          <div className="space-y-3">
            {extras.map((extra) => {
              const checked = selectedExtras.includes(extra.id);
              return (
                <button
                  key={extra.id}
                  onClick={() => toggleExtra(extra.id)}
                  className={`w-full flex items-center justify-between p-3.5 rounded-2xl border transition-all ${
                    checked
                      ? "border-orange-400 bg-orange-50"
                      : "border-gray-200 bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
                        checked
                          ? "bg-orange-500 border-orange-500"
                          : "border-gray-300 bg-white"
                      }`}
                    >
                      {checked && (
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path
                            d="M1 4L3.5 6.5L9 1"
                            stroke="white"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="text-sm font-semibold text-gray-800">
                      {extra.name}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-orange-500">
                    +${extra.price.toFixed(2)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Sticky Bottom Bar — always visible */}
      <div className="flex-shrink-0 bg-white border-t border-gray-100 px-5 py-4 shadow-2xl">
        <div className="flex items-center gap-3">
          {/* Quantity selector */}
          <div className="flex items-center gap-2.5 bg-gray-100 rounded-2xl px-2 py-1.5 flex-shrink-0">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-8 h-8 rounded-xl bg-white flex items-center justify-center shadow-sm active:scale-90 transition-transform"
            >
              <Minus size={14} className="text-gray-700" />
            </button>
            <span className="text-base font-black text-gray-900 w-5 text-center">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="w-8 h-8 rounded-xl bg-orange-500 flex items-center justify-center shadow-sm active:scale-90 transition-transform"
            >
              <Plus size={14} className="text-white" />
            </button>
          </div>

          {/* Add to Cart button */}
          <motion.button
            onClick={handleAdd}
            whileTap={{ scale: 0.97 }}
            className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-sm shadow-lg transition-colors ${
              added
                ? "bg-green-500 shadow-green-200"
                : "bg-orange-500 shadow-orange-200"
            } text-white`}
          >
            {added ? (
              <>
                <span className="text-base">✓</span>
                <span>Added to Cart!</span>
              </>
            ) : (
              <>
                <ShoppingCart size={16} strokeWidth={2.5} />
                <span>Add to Cart · ${total}</span>
              </>
            )}
          </motion.button>
        </div>
      </div>
    </div>
  );
}