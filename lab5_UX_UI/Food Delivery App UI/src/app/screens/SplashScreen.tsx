import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";

export default function SplashScreen() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-orange-500 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-orange-400 opacity-40 -translate-y-1/3 translate-x-1/4" />
      <div className="absolute top-24 left-0 w-40 h-40 rounded-full bg-orange-600 opacity-30 -translate-x-1/3" />
      <div className="absolute bottom-48 right-0 w-32 h-32 rounded-full bg-orange-400 opacity-25 translate-x-1/4" />

      {/* Logo area */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-center gap-2 px-6 pt-14"
      >
        <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center shadow-md">
          <span className="text-orange-500 text-lg">🍔</span>
        </div>
        <span className="text-white text-xl font-bold tracking-wide">
          FoodRush
        </span>
      </motion.div>

      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="flex-1 flex items-center justify-center px-6 pt-4"
      >
        <div className="relative w-full max-w-xs">
          {/* Plate glow */}
          <div className="absolute inset-0 bg-orange-300 rounded-full blur-3xl opacity-40 scale-90 translate-y-4" />
          <img
            src="https://images.unsplash.com/photo-1558250070-363aa42f9a00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
            alt="Delicious food"
            className="relative w-full h-72 object-cover rounded-[2.5rem] shadow-2xl"
          />
          {/* Floating badges */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute -left-2 top-8 bg-white rounded-2xl px-3 py-2 shadow-lg flex items-center gap-2"
          >
            <span className="text-base">⭐</span>
            <div>
              <p className="text-[10px] text-gray-500 leading-none">Rating</p>
              <p className="text-sm font-bold text-gray-800 leading-none mt-0.5">4.9/5</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="absolute -right-2 bottom-10 bg-white rounded-2xl px-3 py-2 shadow-lg flex items-center gap-2"
          >
            <span className="text-base">⚡</span>
            <div>
              <p className="text-[10px] text-gray-500 leading-none">Delivery</p>
              <p className="text-sm font-bold text-gray-800 leading-none mt-0.5">20 min</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom white card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="bg-white rounded-t-[2.5rem] px-6 pt-8 pb-10"
      >
        <div className="text-center mb-6">
          <h1 className="text-2xl font-black text-gray-900 leading-tight mb-2">
            Deliver Your<br />
            <span className="text-orange-500">Cravings Fast</span>
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed">
            Order your favorite food from the best<br />restaurants near you.
          </p>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mb-6">
          <div className="w-6 h-2 rounded-full bg-orange-500" />
          <div className="w-2 h-2 rounded-full bg-gray-200" />
          <div className="w-2 h-2 rounded-full bg-gray-200" />
        </div>

        <button
          onClick={() => navigate("/auth")}
          className="w-full bg-orange-500 text-white py-4 rounded-2xl font-bold text-base shadow-lg shadow-orange-200 active:scale-95 transition-transform"
        >
          Get Started
        </button>
        <p className="text-center text-gray-400 text-xs mt-4">
          By continuing you agree to our{" "}
          <span className="text-orange-500">Terms & Privacy</span>
        </p>
      </motion.div>
    </div>
  );
}
