"use client";

import React from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { 
  Droplets, 
  Trash2, 
  Zap, 
  TrendingUp,
  Award,
  Activity
} from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      <div className="space-y-12">
        {/* Header Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-emerald-500 text-[10px] font-black uppercase tracking-widest">VIKSIT BHARAT 2047</span>
            <span className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">• NATIONAL SMART INFRASTRUCTURE</span>
          </div>
          <h1 className="text-8xl font-black tracking-tighter leading-[0.85] flex flex-col">
            <span>WASTE <span className="text-emerald-400">INTELLIGENCE</span></span>
            <span>PLATFORM</span>
          </h1>
        </div>

        {/* Subtitle and Controls */}
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-4xl font-black tracking-tight">City Digital Twin</h2>
            <p className="text-emerald-500/60 font-bold text-lg mt-1">Real-time waste flow & infrastructure monitoring</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-emerald-500/10 border border-emerald-500/20 px-6 py-3 rounded-xl flex items-center gap-3">
              <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">AI PREDICTION: ON</span>
            </div>
            <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-xl flex items-center gap-3">
              <span className="text-[10px] font-black text-emerald-500/60 uppercase tracking-widest">LAYER: WASTE FLOW</span>
            </div>
          </div>
        </div>

        {/* Main Visualization Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Map Area */}
          <div className="lg:col-span-9">
            <div className="h-[650px] relative rounded-[3rem] overflow-hidden border border-white/5 bg-[#050a05] shadow-2xl group">
              {/* Scanline Effect */}
              <div className="absolute inset-0 pointer-events-none z-10 opacity-20" 
                style={{ 
                  backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
                  backgroundSize: '100% 4px, 3px 100%'
                }} 
              />
              
              {/* Stylized World Map */}
              <div className="absolute inset-0 opacity-30 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f45945c1b?auto=format&fit=crop&q=80&w=2000" 
                  alt="World Map" 
                  className="w-full h-full object-cover grayscale invert opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050a05]/50 to-[#050a05]" />
              </div>

              {/* Map Overlay Elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Glowing Point */}
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center animate-pulse">
                    <div className="w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_20px_rgba(16,185,129,1)]" />
                  </div>
                  {/* Dashed Line Animation */}
                  <svg className="absolute top-1/2 left-1/2 w-[400px] h-[200px] -translate-y-full pointer-events-none">
                    <motion.path 
                      d="M 0 100 Q 100 0 300 150" 
                      fill="none" 
                      stroke="#10b981" 
                      strokeWidth="2" 
                      strokeDasharray="8,8"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="opacity-40"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Stats Sidebar */}
          <div className="lg:col-span-3 space-y-8">
            {/* City Green Score */}
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 relative overflow-hidden group">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                  <Award className="text-emerald-500" size={32} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">CITY GREEN SCORE</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black">842</span>
                    <span className="text-sm font-bold text-gray-600">/ 1000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Wet Waste */}
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 relative overflow-hidden">
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                  <Droplets className="text-emerald-500" size={28} />
                </div>
                <span className="text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-3 py-1.5 rounded-xl">+2.4%</span>
              </div>
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">WET WASTE</p>
              <div className="flex items-baseline gap-3">
                <span className="text-6xl font-black">1,240</span>
                <span className="text-xs font-bold text-gray-600 uppercase">Tons</span>
              </div>
            </div>

            {/* Dry Waste */}
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 relative overflow-hidden">
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <Trash2 className="text-blue-400" size={28} />
                </div>
                <span className="text-[10px] font-black text-red-500 bg-red-500/10 px-3 py-1.5 rounded-xl">-1.2%</span>
              </div>
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">DRY WASTE</p>
              <div className="flex items-baseline gap-3">
                <span className="text-6xl font-black">842</span>
                <span className="text-xs font-bold text-gray-600 uppercase">Tons</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;