import React, { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

export default function AuthScreen() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex flex-col h-full bg-white overflow-y-auto">
      {/* Header */}
      <div className="bg-orange-500 pt-14 pb-10 px-6 rounded-b-[2.5rem] relative overflow-hidden">
        <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-orange-400 opacity-40" />
        <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-orange-600 opacity-20 -translate-x-1/2 translate-y-1/2" />
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center relative"
        >
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-3">
            <span className="text-3xl">🍔</span>
          </div>
          <h1 className="text-white text-2xl font-black">FoodRush</h1>
          <p className="text-orange-100 text-sm mt-1">Your cravings, delivered</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-1 px-6 pt-8 pb-6"
      >
        {/* Tab */}
        <div className="flex bg-gray-100 rounded-2xl p-1 mb-8">
          <button
            onClick={() => setIsSignUp(false)}
            className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              !isSignUp
                ? "bg-white text-orange-500 shadow-sm"
                : "text-gray-500"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsSignUp(true)}
            className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              isSignUp
                ? "bg-white text-orange-500 shadow-sm"
                : "text-gray-500"
            }`}
          >
            Sign Up
          </button>
        </div>

        <div className="space-y-4">
          {isSignUp && (
            <div>
              <label className="text-xs font-semibold text-gray-600 mb-1.5 block">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <span className="text-gray-400 text-base">👤</span>
                </div>
                <input
                  type="text"
                  placeholder="Alex Johnson"
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-11 pr-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-orange-400 focus:bg-white transition-all"
                />
              </div>
            </div>
          )}

          <div>
            <label className="text-xs font-semibold text-gray-600 mb-1.5 block">
              Email Address
            </label>
            <div className="relative">
              <Mail
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex@example.com"
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-11 pr-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-orange-400 focus:bg-white transition-all"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-600 mb-1.5 block">
              Password
            </label>
            <div className="relative">
              <Lock
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-11 pr-11 py-3.5 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-orange-400 focus:bg-white transition-all"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {!isSignUp && (
            <div className="flex justify-end">
              <button className="text-orange-500 text-xs font-semibold">
                Forgot Password?
              </button>
            </div>
          )}
        </div>

        <button
          onClick={() => navigate("/home")}
          className="w-full bg-orange-500 text-white py-4 rounded-2xl font-bold text-base shadow-lg shadow-orange-200 mt-6 active:scale-95 transition-transform"
        >
          {isSignUp ? "Create Account" : "Login"}
        </button>

        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400 font-medium">or continue with</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <div className="flex gap-3">
          <button className="flex-1 flex items-center justify-center gap-2.5 border border-gray-200 rounded-2xl py-3.5 bg-white active:bg-gray-50 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <span className="text-sm font-semibold text-gray-700">Google</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-2.5 border border-gray-200 rounded-2xl py-3.5 bg-white active:bg-gray-50 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <span className="text-sm font-semibold text-gray-700">Apple</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
