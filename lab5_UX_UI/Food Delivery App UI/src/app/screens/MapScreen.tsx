import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Phone, MessageCircle, ChevronUp, Star, Navigation, Clock } from "lucide-react";

const MAP_IMAGE =
  "https://images.unsplash.com/photo-1662140246046-fc44f41e4362?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800";
const DRIVER_IMAGE =
  "https://images.unsplash.com/photo-1551825687-f9de1603ed8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200";

// Route waypoints (percentage positions on the map)
const ROUTE_POINTS = [
  { x: 22, y: 28 },  // Restaurant
  { x: 30, y: 38 },
  { x: 42, y: 35 },
  { x: 50, y: 48 },
  { x: 60, y: 52 },
  { x: 68, y: 62 },
  { x: 74, y: 72 },  // Home
];

const STATUS_STEPS = [
  { id: 1, label: "Order Confirmed", time: "12:30", done: true, icon: "✅" },
  { id: 2, label: "Preparing Food", time: "12:32", done: true, icon: "🍳" },
  { id: 3, label: "Driver On The Way", time: "12:45", done: true, icon: "🚴" },
  { id: 4, label: "Delivered", time: "~13:05", done: false, icon: "🏠" },
];

export default function MapScreen() {
  const navigate = useNavigate();
  const [sheetExpanded, setSheetExpanded] = useState(false);
  const [driverProgress, setDriverProgress] = useState(0.38); // 0 = restaurant, 1 = home
  const [eta, setEta] = useState(18);
  const [calling, setCalling] = useState(false);

  // Animate driver moving along route
  useEffect(() => {
    const interval = setInterval(() => {
      setDriverProgress((p) => {
        const next = p + 0.004;
        if (next >= 1) { clearInterval(interval); return 1; }
        return next;
      });
      setEta((e) => (e > 1 ? e - 0.02 : e));
    }, 200);
    return () => clearInterval(interval);
  }, []);

  // Interpolate driver position along route
  const getDriverPos = (progress: number) => {
    const total = ROUTE_POINTS.length - 1;
    const segment = progress * total;
    const idx = Math.min(Math.floor(segment), total - 1);
    const t = segment - idx;
    const a = ROUTE_POINTS[idx];
    const b = ROUTE_POINTS[idx + 1];
    return {
      x: a.x + (b.x - a.x) * t,
      y: a.y + (b.y - a.y) * t,
    };
  };

  const driverPos = getDriverPos(driverProgress);
  const etaMin = Math.ceil(eta);

  // Build SVG polyline points string
  const polylinePoints = ROUTE_POINTS.map((p) => `${p.x},${p.y}`).join(" ");

  // Compute completed route up to driver
  const completedPoints = (() => {
    const total = ROUTE_POINTS.length - 1;
    const segment = driverProgress * total;
    const idx = Math.min(Math.floor(segment), total - 1);
    const t = segment - idx;
    const a = ROUTE_POINTS[idx];
    const b = ROUTE_POINTS[idx + 1];
    const current = { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
    return [...ROUTE_POINTS.slice(0, idx + 1), current]
      .map((p) => `${p.x},${p.y}`)
      .join(" ");
  })();

  return (
    <div className="flex flex-col h-full bg-white overflow-hidden">
      {/* MAP AREA */}
      <div className="relative flex-1 overflow-hidden">
        {/* Map Background */}
        <img
          src={MAP_IMAGE}
          alt="map"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "saturate(0.85) brightness(0.92)" }}
        />

        {/* Overlay gradient at top */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />

        {/* SVG Route Overlay */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* Dashed grey road */}
          <polyline
            points={polylinePoints}
            fill="none"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="1.2"
            strokeDasharray="2,2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Completed route — orange */}
          <polyline
            points={completedPoints}
            fill="none"
            stroke="#FF6B00"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.95"
          />
          {/* Glow on completed route */}
          <polyline
            points={completedPoints}
            fill="none"
            stroke="#FF6B00"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.2"
          />
        </svg>

        {/* Restaurant Pin */}
        <div
          className="absolute flex flex-col items-center"
          style={{
            left: `${ROUTE_POINTS[0].x}%`,
            top: `${ROUTE_POINTS[0].y}%`,
            transform: "translate(-50%, -100%)",
          }}
        >
          <div className="bg-white rounded-2xl px-2.5 py-1.5 shadow-xl border border-orange-100 flex items-center gap-1.5 mb-1">
            <span className="text-sm">🍔</span>
            <span className="text-[10px] font-bold text-gray-800 whitespace-nowrap">Burger Palace</span>
          </div>
          <div className="w-3 h-3 bg-orange-500 rounded-full border-2 border-white shadow-lg" />
        </div>

        {/* Home Pin */}
        <div
          className="absolute flex flex-col items-center"
          style={{
            left: `${ROUTE_POINTS[ROUTE_POINTS.length - 1].x}%`,
            top: `${ROUTE_POINTS[ROUTE_POINTS.length - 1].y}%`,
            transform: "translate(-50%, -100%)",
          }}
        >
          <div className="bg-white rounded-2xl px-2.5 py-1.5 shadow-xl border border-blue-100 flex items-center gap-1.5 mb-1">
            <span className="text-sm">🏠</span>
            <span className="text-[10px] font-bold text-gray-800 whitespace-nowrap">Your Home</span>
          </div>
          <div className="w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-lg" />
        </div>

        {/* Driver Marker — animated */}
        <motion.div
          className="absolute"
          style={{
            left: `${driverPos.x}%`,
            top: `${driverPos.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* Pulse ring */}
          <motion.div
            className="absolute inset-0 rounded-full bg-orange-400"
            animate={{ scale: [1, 2.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            style={{ width: 36, height: 36, margin: "-4px" }}
          />
          {/* Driver bubble */}
          <div className="relative w-[28px] h-[28px] bg-orange-500 rounded-full border-[2.5px] border-white shadow-xl flex items-center justify-center">
            <span className="text-[13px]">🚴</span>
          </div>
        </motion.div>

        {/* ETA Floating Card */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="absolute top-16 right-4 bg-white rounded-2xl px-3 py-2.5 shadow-xl border border-gray-100"
        >
          <div className="flex items-center gap-1.5 mb-0.5">
            <Clock size={11} className="text-orange-500" />
            <span className="text-[9px] font-semibold text-gray-500 uppercase tracking-wide">ETA</span>
          </div>
          <p className="text-lg font-black text-gray-900 leading-none">{etaMin} min</p>
        </motion.div>

        {/* Header */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 pt-12">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-md"
          >
            <ArrowLeft size={18} className="text-gray-800" />
          </button>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-md">
            <p className="text-xs font-black text-gray-900">Track Order</p>
          </div>
          <button className="w-10 h-10 bg-orange-500 rounded-2xl flex items-center justify-center shadow-md">
            <Navigation size={16} className="text-white" />
          </button>
        </div>
      </div>

      {/* BOTTOM SHEET */}
      <motion.div
        className="bg-white rounded-t-[2rem] shadow-2xl flex-shrink-0"
        style={{ zIndex: 10 }}
      >
        {/* Drag handle */}
        <div
          className="flex justify-center pt-3 pb-1 cursor-pointer"
          onClick={() => setSheetExpanded((v) => !v)}
        >
          <div className="w-10 h-1 bg-gray-300 rounded-full" />
        </div>

        <div className="px-5 pb-2">
          {/* Status bar */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-[10px] font-semibold text-orange-500 uppercase tracking-wider mb-0.5">
                🚴 On The Way
              </p>
              <h2 className="text-base font-black text-gray-900">
                Arriving in {etaMin} minutes
              </h2>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-2xl px-3 py-1.5 text-center">
              <p className="text-[9px] text-gray-500 font-medium">Order</p>
              <p className="text-sm font-black text-orange-500">#4827</p>
            </div>
          </div>

          {/* Progress steps */}
          <div className="flex items-center justify-between mb-4">
            {STATUS_STEPS.map((step, i) => (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center gap-1">
                  <motion.div
                    initial={false}
                    animate={step.done ? { scale: [1, 1.2, 1] } : {}}
                    className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm transition-all ${
                      step.done
                        ? "bg-orange-500 shadow-md shadow-orange-200"
                        : "bg-gray-100"
                    }`}
                  >
                    <span style={{ fontSize: 14 }}>{step.icon}</span>
                  </motion.div>
                  <p
                    className={`text-[8px] font-semibold text-center leading-tight max-w-[48px] ${
                      step.done ? "text-orange-500" : "text-gray-400"
                    }`}
                  >
                    {step.label}
                  </p>
                  <p className="text-[8px] text-gray-400 font-medium">{step.time}</p>
                </div>
                {i < STATUS_STEPS.length - 1 && (
                  <div className="flex-1 h-0.5 mx-1 mb-6 rounded-full overflow-hidden bg-gray-200">
                    <motion.div
                      className="h-full bg-orange-400 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{
                        width:
                          step.done && STATUS_STEPS[i + 1].done
                            ? "100%"
                            : step.done
                            ? "60%"
                            : "0%",
                      }}
                      transition={{ duration: 0.8, delay: i * 0.2 }}
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Driver card */}
          <div className="bg-gray-50 rounded-2xl p-3.5 flex items-center gap-3 mb-4">
            <div className="relative flex-shrink-0">
              <img
                src={DRIVER_IMAGE}
                alt="driver"
                className="w-12 h-12 rounded-xl object-cover"
              />
              <div className="absolute -bottom-1 -right-1 bg-green-500 w-3.5 h-3.5 rounded-full border-2 border-gray-50" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-black text-gray-900">Alex Johnson</p>
              <div className="flex items-center gap-1 mt-0.5">
                <Star size={10} className="text-amber-400 fill-amber-400" />
                <span className="text-[10px] font-semibold text-gray-600">4.97</span>
                <span className="text-[10px] text-gray-400">• 1,203 deliveries</span>
              </div>
              <p className="text-[10px] text-gray-400 mt-0.5">🛵 Honda PCX • <span className="font-semibold text-gray-600">BKS-4921</span></p>
            </div>
            <div className="flex gap-2">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setCalling(true)}
                className="w-9 h-9 bg-orange-500 rounded-xl flex items-center justify-center shadow-md shadow-orange-200"
              >
                <Phone size={14} className="text-white" />
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 bg-white border border-gray-200 rounded-xl flex items-center justify-center shadow-sm"
              >
                <MessageCircle size={14} className="text-gray-600" />
              </motion.button>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-2.5 bg-blue-50 border border-blue-100 rounded-2xl px-3.5 py-3 mb-4">
            <span className="text-base">📍</span>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] text-blue-500 font-semibold">Delivering to</p>
              <p className="text-xs font-bold text-gray-800 truncate">123 Main Street, New York, NY 10001</p>
            </div>
            <ChevronUp size={14} className="text-gray-400 flex-shrink-0" />
          </div>
        </div>
      </motion.div>

      {/* Calling overlay */}
      <AnimatePresence>
        {calling && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 flex items-end pb-16 justify-center z-50"
            onClick={() => setCalling(false)}
          >
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 60, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-6 mx-6 w-full max-w-sm text-center shadow-2xl"
            >
              <img
                src={DRIVER_IMAGE}
                alt="driver"
                className="w-16 h-16 rounded-2xl object-cover mx-auto mb-3"
              />
              <p className="text-xs text-gray-500 mb-1 font-medium">Calling...</p>
              <p className="text-lg font-black text-gray-900 mb-1">Alex Johnson</p>
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                className="flex justify-center gap-1 mb-5"
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full bg-orange-500"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.2, delay: i * 0.3, repeat: Infinity }}
                  />
                ))}
              </motion.div>
              <button
                onClick={() => setCalling(false)}
                className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-red-200"
              >
                <Phone size={22} className="text-white rotate-[135deg]" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
