"use client";

import React from 'react';
import Layout from '@/components/Layout';
import DashboardCard from '@/components/DashboardCard';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { 
  MapPin, 
  Navigation, 
  Truck, 
  Activity, 
  Layers,
  Stethoscope,
  Recycle,
  Trash2,
  Search,
  Filter,
  Info
} from 'lucide-react';

const Map = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black tracking-tighter mb-2">INTERACTIVE MAP</h1>
            <p className="text-gray-500 font-medium">Live vehicle tracking and waste density heatmap.</p>
          </div>
          
          <div className="flex gap-3">
            <div className="bg-black/40 backdrop-blur-xl border border-white/10 px-5 py-2.5 rounded-2xl flex items-center gap-3">
              <Layers size={16} className="text-emerald-500" />
              <span className="text-[10px] font-black tracking-widest">HEATMAP: ON</span>
            </div>
            <button className="bg-emerald-500 text-black px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-transform">
              REFRESH DATA
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 h-[700px] relative rounded-[2.5rem] overflow-hidden border border-emerald-500/20 bg-[#050a05] shadow-2xl">
            {/* Mock Map Visualization */}
            <div className="absolute inset-0">
              <svg viewBox="0 0 800 500" className="w-full h-full">
                {/* Grid */}
                <path d="M0,0 L800,0 M0,100 L800,100 M0,200 L800,200 M0,300 L800,300 M0,400 L800,400 M0,500 L800,500" stroke="rgba(16,185,129,0.05)" strokeWidth="1" />
                <path d="M0,0 L0,500 M100,0 L100,500 M200,0 L200,500 M300,0 L300,500 M400,0 L400,500 M500,0 L500,500 M600,0 L600,500 M700,0 L700,500 M800,0 L800,500" stroke="rgba(16,185,129,0.05)" strokeWidth="1" />
                
                {/* Heatmap Zones */}
                <circle cx="200" cy="150" r="80" fill="url(#heatRed)" fillOpacity="0.4" />
                <circle cx="500" cy="300" r="100" fill="url(#heatAmber)" fillOpacity="0.3" />
                <circle cx="650" cy="150" r="60" fill="url(#heatRed)" fillOpacity="0.3" />
                
                <defs>
                  <radialGradient id="heatRed">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="heatAmber">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Centers */}
                <g className="cursor-pointer">
                  <circle cx="400" cy="250" r="8" fill="#10b981" />
                  <circle cx="400" cy="250" r="15" stroke="#10b981" strokeWidth="1" fill="none" className="animate-ping" />
                </g>
                
                <g className="cursor-pointer">
                  <circle cx="150" cy="350" r="8" fill="#3b82f6" />
                </g>

                {/* Vehicles */}
                <motion.g 
                  animate={{ x: [0, 200, 200, 0], y: [0, 0, 100, 100] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <rect x="300" y="150" width="12" height="8" rx="2" fill="#10b981" />
                </motion.g>
              </svg>
            </div>

            {/* Map Controls */}
            <div className="absolute top-8 left-8 flex flex-col gap-3 pointer-events-auto">
              <div className="bg-black/80 backdrop-blur-2xl p-4 rounded-2xl border border-white/10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Recycling Hubs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Collection Points</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Hospital Waste</span>
                </div>
              </div>
            </div>

            {/* Selected Point Info */}
            <div className="absolute bottom-8 right-8 w-80 pointer-events-auto">
              <div className="bg-black/90 backdrop-blur-2xl p-6 rounded-[2rem] border border-emerald-500/30 shadow-2xl">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-black tracking-tight">Dwarka MRF Hub</h4>
                  <span className="text-[10px] font-black px-2 py-1 rounded bg-emerald-500/10 text-emerald-500">ACTIVE</span>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Current Load</span>
                    <span className="font-bold">72%</span>
                  </div>
                  <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[72%]" />
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Waste Processed</span>
                    <span className="font-bold">12.4 Tons</span>
                  </div>
                </div>
                <button className="w-full py-3 rounded-xl bg-emerald-500 text-black font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-transform">
                  VIEW FULL ANALYTICS
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <DashboardCard title="Live Fleet Status" subtitle="Active vehicles in Sector 12">
              <div className="space-y-4">
                {[
                  { id: 'VB-402', status: 'On Route', load: '65%', type: 'General' },
                  { id: 'VB-405', status: 'Collecting', load: '82%', type: 'General' },
                  { id: 'VB-MED-101', status: 'On Route', load: '40%', type: 'Medical' },
                ].map((v, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Truck className={v.type === 'Medical' ? 'text-red-500' : 'text-emerald-500'} size={18} />
                      <div>
                        <p className="text-xs font-black">{v.id}</p>
                        <p className="text-[10px] text-gray-500 uppercase font-bold">{v.status}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-black">{v.load}</p>
                      <p className="text-[10px] text-gray-500 uppercase font-bold">LOAD</p>
                    </div>
                  </div>
                ))}
              </div>
            </DashboardCard>

            <DashboardCard title="Area Density Heatmap" subtitle="Waste accumulation index">
              <div className="space-y-4">
                {[
                  { area: 'Sector 12 Market', index: 'High', color: 'text-red-500' },
                  { area: 'Medical District', index: 'Medium', color: 'text-amber-500' },
                  { area: 'Pocket 4 Residential', index: 'Low', color: 'text-emerald-500' },
                ].map((a, i) => (
                  <div key={i} className="flex items-center justify-between text-xs">
                    <span className="font-bold text-gray-400">{a.area}</span>
                    <span className={cn("font-black uppercase tracking-widest", a.color)}>{a.index}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 flex gap-3">
                <Info className="text-emerald-500 shrink-0" size={16} />
                <p className="text-[10px] text-gray-500 leading-relaxed">Heatmap is updated every 5 minutes based on smart bin sensor data and collection reports.</p>
              </div>
            </DashboardCard>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Map;