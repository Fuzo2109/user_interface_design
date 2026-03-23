import React from "react";
import { useNavigate } from "react-router";
import {
  ChevronRight,
  ShoppingBag,
  CreditCard,
  MapPin,
  Tag,
  Settings,
  LogOut,
  Bell,
  HelpCircle,
  Star,
} from "lucide-react";
import { BottomNav } from "../components/BottomNav";
import { motion } from "motion/react";

const menuSections = [
  {
    title: "Account",
    items: [
      { icon: ShoppingBag, label: "My Orders", sub: "12 orders placed", color: "bg-orange-100 text-orange-500" },
      { icon: CreditCard, label: "Payment Methods", sub: "2 cards saved", color: "bg-blue-100 text-blue-500" },
      { icon: MapPin, label: "Saved Addresses", sub: "3 locations", color: "bg-green-100 text-green-500" },
      { icon: Tag, label: "Promo Codes", sub: "1 active code", color: "bg-purple-100 text-purple-500" },
    ],
  },
  {
    title: "Preferences",
    items: [
      { icon: Bell, label: "Notifications", sub: "Manage alerts", color: "bg-yellow-100 text-yellow-600" },
      { icon: Star, label: "My Reviews", sub: "8 reviews", color: "bg-pink-100 text-pink-500" },
      { icon: HelpCircle, label: "Help & Support", sub: "FAQ, Chat", color: "bg-teal-100 text-teal-500" },
      { icon: Settings, label: "Settings", sub: "App preferences", color: "bg-gray-100 text-gray-600" },
    ],
  },
];

const stats = [
  { label: "Orders", value: "12", emoji: "🛍" },
  { label: "Reviews", value: "8", emoji: "⭐" },
  { label: "Rewards", value: "240", emoji: "🎁" },
];

export default function ProfileScreen() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="bg-white px-5 pt-12 pb-5 shadow-sm">
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-lg font-black text-gray-900">My Profile</h1>
          <button className="w-9 h-9 bg-gray-100 rounded-xl flex items-center justify-center">
            <Settings size={16} className="text-gray-700" />
          </button>
        </div>

        {/* User Info */}
        <div className="flex items-center gap-4 mb-5">
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-200">
              <span className="text-white text-2xl font-black">A</span>
            </div>
            <button className="absolute -bottom-1 -right-1 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center border-2 border-white">
              <span className="text-white text-[9px]">✏️</span>
            </button>
          </div>
          <div className="flex-1">
            <h2 className="text-base font-black text-gray-900">Alex Johnson</h2>
            <p className="text-xs text-gray-500">alex.johnson@email.com</p>
            <div className="flex items-center gap-1 mt-1">
              <span className="text-[10px] bg-orange-100 text-orange-600 font-bold px-2 py-0.5 rounded-full">
                🥇 Gold Member
              </span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex-1 bg-gray-50 rounded-2xl p-3 text-center"
            >
              <span className="text-xl">{stat.emoji}</span>
              <p className="text-base font-black text-gray-900 mt-1">
                {stat.value}
              </p>
              <p className="text-[10px] text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-5 space-y-5">
        {menuSections.map((section, si) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: si * 0.1 }}
          >
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5 px-1">
              {section.title}
            </h3>
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
              {section.items.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    className={`w-full flex items-center gap-3.5 px-4 py-4 active:bg-gray-50 transition-colors ${
                      idx < section.items.length - 1
                        ? "border-b border-gray-50"
                        : ""
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-2xl flex items-center justify-center ${item.color}`}
                    >
                      <Icon size={16} />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-sm font-semibold text-gray-800">
                        {item.label}
                      </p>
                      <p className="text-[11px] text-gray-400">{item.sub}</p>
                    </div>
                    <ChevronRight size={15} className="text-gray-300" />
                  </button>
                );
              })}
            </div>
          </motion.div>
        ))}

        {/* Logout */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          onClick={() => navigate("/")}
          className="w-full flex items-center justify-center gap-2.5 bg-red-50 border border-red-100 text-red-500 rounded-3xl py-4 font-bold text-sm mb-2"
        >
          <LogOut size={16} />
          Sign Out
        </motion.button>

        <p className="text-center text-[10px] text-gray-400 pb-4">
          FoodRush v1.0.0 · Terms · Privacy
        </p>
      </div>

      <BottomNav />
    </div>
  );
}
