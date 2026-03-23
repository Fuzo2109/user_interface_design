import React, { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Minus, Plus, Trash2, Tag, ChevronRight } from "lucide-react";
import { BottomNav } from "../components/BottomNav";
import { useApp } from "../context/AppContext";
import { motion, AnimatePresence } from "motion/react";

export default function CartScreen() {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart, cartTotal, promoCode, setPromoCode } = useApp();
  const [promoInput, setPromoInput] = useState(promoCode);
  const [promoApplied, setPromoApplied] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const deliveryFee = cartTotal > 20 ? 0 : 2.99;
  const discount = promoApplied ? cartTotal * 0.1 : 0;
  const finalTotal = cartTotal + deliveryFee - discount;

  const applyPromo = () => {
    if (promoInput.toUpperCase() === "FOOD10") {
      setPromoApplied(true);
      setPromoCode(promoInput);
    }
  };

  const placeOrder = () => {
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="flex flex-col h-full bg-white items-center justify-center px-8">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="w-28 h-28 bg-orange-100 rounded-full flex items-center justify-center mb-6"
        >
          <span className="text-5xl">🎉</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <h2 className="text-2xl font-black text-gray-900 mb-2">
            Order Placed!
          </h2>
          <p className="text-sm text-gray-500 mb-8 leading-relaxed">
            Your order is being prepared.<br />
            Estimated delivery: <span className="text-orange-500 font-semibold">20-25 min</span>
          </p>
          <div className="bg-orange-50 border border-orange-200 rounded-3xl p-4 mb-8">
            <p className="text-xs text-gray-500 mb-1">Order Total</p>
            <p className="text-2xl font-black text-gray-900">
              ${finalTotal.toFixed(2)}
            </p>
          </div>
          <button
            onClick={() => navigate("/map")}
            className="w-full bg-orange-500 text-white py-4 rounded-2xl font-bold text-base shadow-lg shadow-orange-200 mb-3 flex items-center justify-center gap-2"
          >
            <span>📍</span> Track My Order
          </button>
          <button
            onClick={() => navigate("/home")}
            className="w-full bg-gray-100 text-gray-700 py-4 rounded-2xl font-bold text-base"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="bg-white px-5 pt-12 pb-4 flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="w-9 h-9 bg-gray-100 rounded-xl flex items-center justify-center"
        >
          <ArrowLeft size={16} className="text-gray-700" />
        </button>
        <h1 className="text-lg font-black text-gray-900 flex-1">My Cart</h1>
        <span className="text-xs font-semibold text-orange-500 bg-orange-50 px-3 py-1.5 rounded-full">
          {cartItems.reduce((s, i) => s + i.quantity, 0)} items
        </span>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Cart Items */}
        <div className="px-5 pt-4 space-y-3">
          <AnimatePresence>
            {cartItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20, height: 0, marginBottom: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-4 shadow-sm"
              >
                <div className="flex items-center gap-3.5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-2xl object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-gray-900 truncate mb-0.5">
                      {item.name}
                    </h3>
                    {item.extras && item.extras.length > 0 && (
                      <p className="text-[10px] text-gray-400 mb-1 truncate">
                        + {item.extras.join(", ")}
                      </p>
                    )}
                    <span className="text-base font-black text-orange-500">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <div className="text-[10px] text-gray-400 mt-0.5">
                      ${item.price.toFixed(2)} each
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="w-7 h-7 bg-red-50 rounded-xl flex items-center justify-center"
                    >
                      <Trash2 size={12} className="text-red-400" />
                    </button>
                    <div className="flex items-center gap-2 bg-gray-100 rounded-xl px-1.5 py-1">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-6 h-6 rounded-lg bg-white flex items-center justify-center shadow-sm"
                      >
                        <Minus size={10} className="text-gray-700" />
                      </button>
                      <span className="text-xs font-black text-gray-900 w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-6 h-6 rounded-lg bg-orange-500 flex items-center justify-center shadow-sm"
                      >
                        <Plus size={10} className="text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Add More */}
        <div className="px-5 mt-3">
          <button
            onClick={() => navigate("/home")}
            className="w-full border-2 border-dashed border-orange-300 bg-orange-50 rounded-3xl py-3.5 flex items-center justify-center gap-2 text-orange-500 text-sm font-semibold"
          >
            <Plus size={16} />
            Add More Items
          </button>
        </div>

        {/* Promo Code */}
        <div className="mx-5 mt-4 bg-white rounded-3xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <Tag size={15} className="text-orange-500" />
            <h2 className="text-sm font-bold text-gray-900">Promo Code</h2>
          </div>
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <input
                type="text"
                value={promoInput}
                onChange={(e) => setPromoInput(e.target.value.toUpperCase())}
                placeholder="Enter code (try FOOD10)"
                className={`w-full bg-gray-100 rounded-xl px-4 py-3 text-xs font-semibold outline-none transition-all ${
                  promoApplied
                    ? "text-green-600 bg-green-50 border border-green-200"
                    : "text-gray-700"
                }`}
                disabled={promoApplied}
              />
              {promoApplied && (
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500 text-base">
                  ✓
                </span>
              )}
            </div>
            <button
              onClick={applyPromo}
              disabled={promoApplied}
              className={`px-5 py-3 rounded-xl text-xs font-bold transition-all ${
                promoApplied
                  ? "bg-green-100 text-green-600"
                  : "bg-orange-500 text-white shadow-md shadow-orange-200"
              }`}
            >
              {promoApplied ? "Applied!" : "Apply"}
            </button>
          </div>
          {promoApplied && (
            <p className="text-green-500 text-[11px] font-semibold mt-2">
              🎉 10% discount applied!
            </p>
          )}
        </div>

        {/* Price Breakdown */}
        <div className="mx-5 mt-4 bg-white rounded-3xl p-4 shadow-sm mb-4">
          <h2 className="text-sm font-black text-gray-900 mb-4">
            Order Summary
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">Subtotal</span>
              <span className="text-xs font-bold text-gray-800">
                ${cartTotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">Delivery Fee</span>
              <span className={`text-xs font-bold ${deliveryFee === 0 ? "text-green-500" : "text-gray-800"}`}>
                {deliveryFee === 0 ? "FREE" : `$${deliveryFee.toFixed(2)}`}
              </span>
            </div>
            {promoApplied && (
              <div className="flex justify-between items-center">
                <span className="text-xs text-green-600 font-semibold">
                  Promo Discount
                </span>
                <span className="text-xs font-bold text-green-600">
                  -${discount.toFixed(2)}
                </span>
              </div>
            )}
            {deliveryFee === 0 && (
              <p className="text-[10px] text-green-500 font-medium">
                🎉 Free delivery on orders over $20!
              </p>
            )}
            <div className="h-px bg-gray-100" />
            <div className="flex justify-between items-center">
              <span className="text-sm font-black text-gray-900">Total</span>
              <span className="text-base font-black text-orange-500">
                ${finalTotal.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Delivery Address */}
        <div className="mx-5 mb-6 bg-white rounded-3xl p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-orange-100 rounded-xl flex items-center justify-center">
                <span className="text-sm">📍</span>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-800">Home</p>
                <p className="text-[10px] text-gray-400">123 Main Street, New York</p>
              </div>
            </div>
            <ChevronRight size={16} className="text-gray-400" />
          </div>
        </div>
      </div>

      {/* Place Order Button */}
      <div className="bg-white border-t border-gray-100 px-5 py-4 shadow-2xl">
        <button
          onClick={placeOrder}
          disabled={cartItems.length === 0}
          className="w-full bg-orange-500 text-white py-4 rounded-2xl font-bold text-base shadow-lg shadow-orange-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 transition-transform"
        >
          Place Order · ${finalTotal.toFixed(2)}
        </button>
      </div>
      <BottomNav />
    </div>
  );
}