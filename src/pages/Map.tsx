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
  Search,
  Filter,
  Info,
  Droplets,
  Trash2,
  TrendingUp,
  Zap
} from 'lucide-react';

const Map = () => {
  return (
    <Layout>
      <div className="space-y-8">
        {/* Header Section from Image */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="bg-emerald-500/10 text-emerald-500 text-[10px] font-black px-2 py-0.5 rounded border border-emerald-500/20 uppercase tracking-widest">Viksit Bharat 2047</span>
            <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">• National Smart Infrastructure</span>
          </div>
          <h1 className="text-6xl font-black tracking-tighter leading-none">
            WASTE <span className="text-emerald-400">INTELLIGENCE</span><br />
            PLATFORM
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Map Area */}
          <div className="lg:col-span-9 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-black tracking-tight">City Digital Twin</h2>
                <p className="text-emerald-500/60 font-bold text-sm">Real-time waste flow & infrastructure monitoring</p>
              </div>
              <div className="flex gap-3">
                <div className="bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-xl flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">AI Prediction: ON</span>
                </div>
                <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl flex items-center gap-2">
                  <Layers size={14} className="text-emerald-500" />
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Layer: Waste Flow</span>
                </div>
              </div>
            </div>

            <div className="h-[600px] relative rounded-[2.5rem] overflow-hidden border border-emerald-500/20 bg-[#050a05] shadow-2xl group">
              {/* Scanline Effect Overlay */}
              <div className="absolute inset-0 pointer-events-none z-10 opacity-20" 
                style={{ 
                  backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
                  backgroundSize: '100% 4px, 3px 100%'
                }} 
              />
              
              {/* Stylized Map SVG */}
              <div className="absolute inset-0 opacity-40">
                <svg viewBox="0 0 800 500" className="w-full h-full">
                  <defs>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Grid Lines */}
                  <path d="M0,0 L800,0 M0,100 L800,100 M0,200 L800,200 M0,300 L800,300 M0,400 L800,400" stroke="rgba(16,185,129,0.1)" strokeWidth="0.5" />
                  <path d="M100,0 L100,500 M200,0 L200,500 M300,0 L300,500 M400,0 L400,500 M500,0 L500,500 M600,0 L600,500 M700,0 L700,500" stroke="rgba(16,185,129,0.1)" strokeWidth="0.5" />

                  {/* Stylized Landmass/City Path */}
                  <path 
                    d="M150,100 Q200,80 250,120 T350,150 Q450,180 550,140 T700,180 L720,350 Q650,420 500,400 T300,380 Q150,350 120,250 Z" 
                    fill="rgba(16,185,129,0.03)" 
                    stroke="rgba(16,185,129,0.2)" 
                    strokeWidth="1"
                  />

                  {/* Glowing Data Points */}
                  <g filter="url(#glow)">
                    <circle cx="400" cy="250" r="6" fill="#10b981" className="animate-pulse" />
                    <circle cx="400" cy="250" r="12" stroke="#10b981" strokeWidth="1" fill="none" className="animate-ping" />
                    
                    <circle cx="250" cy="180" r="4" fill="#3b82f6" />
                    <circle cx="550" cy="320" r="4" fill="#ef4444" />
                    <circle cx="600" cy="150" r="4" fill="#f59e0b" />
                  </g>

                  {/* Moving Flow Lines */}
                  <motion.path 
                    d="M400,250 Q450,200 600,150" 
                    stroke="#10b981" 
                    strokeWidth="1" 
                    fill="none" 
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </svg>
              </div>

              {/* Map Overlay UI */}
              <div className="absolute bottom-8 left-8 flex gap-4">
                <div className="bg-black/80 backdrop-blur-xl p-4 rounded-2xl border border-white/10 flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-[8px] font-black uppercase tracking-widest text-gray-400">Active Hubs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-[8px] font-black uppercase tracking-widest text-gray-400">Collection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <span className="text-[8px] font-black uppercase tracking-widest text-gray-400">Critical</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar Stats from Image */}
          <div className="lg:col-span-3 space-y-6">
            {/* City Green Score Card */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <Zap size={40} className="text-emerald-500" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-4 border border-emerald-500/20">
                  <TrendingUp className="text-emerald-500" size={24} />
                </div>
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">City Green Score</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black">842</span>
                  <span className="text-sm font-bold text-gray-600">/ 1000</span>
                </div>
              </div>
            </div>

            {/* Wet Waste Card */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 relative overflow-hidden">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <Droplets className="text-blue-400" size={24} />
                </div>
                <span className="text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-lg">+2.4%</span>
              </div>
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Wet Waste</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black">1,240</span>
                <span className="text-[10px] font-bold text-gray-600 uppercase">Tons</span>
              </div>
            </div>

            {/* Dry Waste Card */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 relative overflow-hidden">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                  <Trash2 className="text-amber-400" size={24} />
                </div>
                <span className="text-[10px] font-black text-red-500 bg-red-500/10 px-2 py-1 rounded-lg">-1.2%</span>
              </div>
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Dry Waste</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black">842</span>
                <span className="text-[10px] font-bold text-gray-600 uppercase">Tons</span>
              </div>
            </div>

            {/* System Messages / Logs */}
            <div className="bg-black/40 border border-white/5 rounded-[2rem] p-6">
              <div className="flex items-center gap-2 mb-4">
                <Activity size={14} className="text-emerald-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">System Messages</span>
              </div>
              <div className="space-y-3">
                <p className="text-[10px] font-mono text-emerald-500/60 leading-tight">
                  [0] GET https://infra.gov.in/api/v1/waste-flow...
                </p>
                <p className="text-[10px] font-mono text-gray-600 leading-tight">
                  [1] Rerouting vehicle VB-402 to Sector 12...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Map;