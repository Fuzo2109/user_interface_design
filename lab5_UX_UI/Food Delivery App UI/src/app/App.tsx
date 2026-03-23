import React from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { AppProvider } from "./context/AppContext";

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      {/* Desktop hint */}
      <div className="hidden lg:block absolute top-6 left-1/2 -translate-x-1/2">
        <p className="text-gray-500 text-xs font-medium tracking-wide">
          FoodRush — Mobile App Preview
        </p>
      </div>

      {/* Phone frame */}
      <div
        className="relative flex-shrink-0"
        style={{ width: 390, height: 844 }}
      >
        {/* Outer phone body */}
        <div
          className="absolute inset-0 rounded-[48px] bg-gray-900 shadow-2xl"
          style={{
            boxShadow:
              "0 0 0 2px #374151, 0 40px 80px rgba(0,0,0,0.7), inset 0 0 0 1px rgba(255,255,255,0.05)",
          }}
        />

        {/* Screen area */}
        <div
          className="absolute overflow-hidden bg-white"
          style={{
            top: 6,
            left: 6,
            right: 6,
            bottom: 6,
            borderRadius: 44,
          }}
        >
          {/* Dynamic island */}
          <div
            className="absolute top-3 left-1/2 -translate-x-1/2 bg-black rounded-full z-50"
            style={{ width: 120, height: 34 }}
          />

          {/* Screen content */}
          <div className="absolute inset-0 overflow-hidden" style={{ borderRadius: 44 }}>
            {children}
          </div>
        </div>

        {/* Side buttons */}
        <div
          className="absolute bg-gray-700 rounded-r-sm"
          style={{ left: -3, top: 120, width: 3, height: 32, borderRadius: "0 2px 2px 0" }}
        />
        <div
          className="absolute bg-gray-700 rounded-r-sm"
          style={{ left: -3, top: 168, width: 3, height: 64, borderRadius: "0 2px 2px 0" }}
        />
        <div
          className="absolute bg-gray-700 rounded-r-sm"
          style={{ left: -3, top: 244, width: 3, height: 64, borderRadius: "0 2px 2px 0" }}
        />
        <div
          className="absolute bg-gray-700 rounded-l-sm"
          style={{ right: -3, top: 180, width: 3, height: 80, borderRadius: "2px 0 0 2px" }}
        />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <PhoneFrame>
        <RouterProvider router={router} />
      </PhoneFrame>
    </AppProvider>
  );
}
