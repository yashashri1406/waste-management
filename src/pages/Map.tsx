"use client";

import React from 'react';
import Layout from '@/components/Layout';
import DashboardCard from '@/components/DashboardCard';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Truck, 
  Recycle, 
  AlertTriangle, 
  Search, 
  Filter,
  Navigation,
  Layers,
  Crosshair
} from 'lucide-react';

const Map = () => {
  return (
    <Layout>
      <div className="space-y-8 h-[calc(100vh-120px)] flex flex-col">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0">
          <div>
            <h1 className="text-4xl font-black mb-2">CITY <span className="text-emerald-500">MAP</span></h1>
            <p className="text-gray-400 font-medium">Live infrastructure, recycling nodes, and vehicle tracking.</p>
          </div>
          
          <div className="flex gap-3">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input 
                type="text" 
                placeholder="Search nodes..." 
                className="bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-emerald-500/50 transition-all w-64"
              />
            </div>
            <button className="bg-white/5 border border-white/10 p-3 rounded-xl hover:bg-white/10 transition-colors">
              <Filter size={20} />
            </button>
          </div>
        </div>

        <div className="flex-grow relative rounded-3xl overflow-hidden border border-emerald-500/20 bg-[#050a05]">
          {/* High-Tech Grid Map Background */}
          <div className="absolute inset-0">
            <svg width="100%" height="100%" className="opacity-20">
              <defs>
                <pattern id="map-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(16,185,129,0.2)" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#map-grid)" />
              
              {/* Mock City Roads */}
              <path d="M0,100 L1000,100 M0,300 L1000,300 M200,0 L200,800 M600,0 L600,800" stroke="rgba(16,185,129,0.1)" strokeWidth="4" />
            </svg>
          </div>

          {/* Map Markers */}
          <div className="absolute inset-0 p-10">
            {/* Recycling Points */}
            <motion.div 
              initial={{ scale: 0 }} animate={{ scale: 1 }}
              className="absolute top-1/4 left-1/3 group cursor-pointer"
            >
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.5)] group-hover:scale-125 transition-transform">
                <Recycle size={20} className="text-black" />
              </div>
              <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-black/90 backdrop-blur-md border border-emerald-500/30 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                <p className="text-[10px] font-black text-emerald-500">RECYCLING HUB-01</p>
                <p className="text-[8px] text-gray-400">Capacity: 85% Full</p>
              </div>
            </motion.div>

            {/* Dumping Points (Alerts) */}
            <motion.div 
              initial={{ scale: 0 }} animate={{ scale: 1 }}
              className="absolute bottom-1/3 right-1/4 group cursor-pointer"
            >
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.5)] animate-pulse">
                <AlertTriangle size={20} className="text-white" />
              </div>
              <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-black/90 backdrop-blur-md border border-red-500/30 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                <p className="text-[10px] font-black text-red-500">ILLEGAL DUMPING DETECTED</p>
                <p className="text-[8px] text-gray-400">Reported: 12 mins ago</p>
              </div>
            </motion.div>

            {/* Live Vehicles */}
            <motion.div 
              animate={{ 
                x: [0, 200, 200, 400],
                y: [0, 0, 150, 150]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/4 group cursor-pointer"
            >
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                <Truck size={16} className="text-white" />
              </div>
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/90 backdrop-blur-md border border-blue-500/30 p-1.5 rounded-lg whitespace-nowrap">
                <p className="text-[8px] font-black text-blue-400">VB-TRK-402 (ACTIVE)</p>
              </div>
            </motion.div>
          </div>

          {/* Map Controls Overlay */}
          <div className="absolute bottom-8 right-8 flex flex-col gap-3">
            <button className="bg-black/80 backdrop-blur-md border border-white/10 p-3 rounded-xl hover:bg-emerald-500 hover:text-black transition-all">
              <Layers size={20} />
            </button>
            <button className="bg-black/80 backdrop-blur-md border border-white/10 p-3 rounded-xl hover:bg-emerald-500 hover:text-black transition-all">
              <Crosshair size={20} />
            </button>
            <button className="bg-emerald-500 text-black p-3 rounded-xl hover:scale-110 transition-transform shadow-[0_0_20px_rgba(16,185,129,0.4)]">
              <Navigation size={20} />
            </button>
          </div>

          {/* Legend Overlay */}
          <div className="absolute top-8 left-8 bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl space-y-3">
            <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Map Legend</h4>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="text-[10px] font-bold">Recycling Hubs</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <span className="text-[10px] font-bold">Dumping Points</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-lg bg-blue-500" />
              <span className="text-[10px] font-bold">Live Vehicles</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Map;