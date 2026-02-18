"use client";

import React from 'react';
import Layout from '@/components/Layout';
import DashboardCard from '@/components/DashboardCard';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { 
  Trash2, 
  Recycle, 
  Droplets, 
  Zap, 
  AlertCircle, 
  Activity,
  Layers,
  Stethoscope,
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from 'recharts';

const predictiveData = [
  { name: 'Mon', volume: 400, predicted: 420 },
  { name: 'Tue', volume: 600, predicted: 580 },
  { name: 'Wed', volume: 800, predicted: 850 },
  { name: 'Thu', volume: 700, predicted: 720 },
  { name: 'Fri', volume: 1100, predicted: 1150 },
  { name: 'Sat', volume: 1400, predicted: 1450 },
  { name: 'Sun', volume: 1200, predicted: 1300 },
];

const liveCounters = [
  { label: 'Wet Waste', value: '1,240', unit: 'Tons', icon: Droplets, color: 'text-blue-400', bg: 'bg-blue-400/10' },
  { label: 'Dry Waste', value: '842', unit: 'Tons', icon: Recycle, color: 'text-amber-400', bg: 'bg-amber-400/10' },
  { label: 'Plastic', value: '412', unit: 'Tons', icon: Zap, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
  { label: 'E-Waste', value: '128', unit: 'Tons', icon: Activity, color: 'text-purple-400', bg: 'bg-purple-400/10' },
  { label: 'Hospital', value: '94', unit: 'Tons', icon: Stethoscope, color: 'text-red-400', bg: 'bg-red-400/10' },
];

const Index = () => {
  return (
    <Layout>
      <div className="space-y-8">
        {/* Digital Twin Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 h-[600px] relative rounded-[2.5rem] overflow-hidden border border-emerald-500/20 bg-[#050a05] group shadow-2xl">
            {/* Mock Map Visualization */}
            <div className="absolute inset-0 opacity-30">
              <svg viewBox="0 0 800 500" className="w-full h-full">
                <path d="M50,50 L750,50 L750,450 L50,450 Z" fill="none" stroke="#10b981" strokeWidth="0.5" strokeDasharray="5,5" />
                <path d="M100,100 Q400,50 700,100 T700,400 Q400,450 100,400 Z" fill="none" stroke="#10b981" strokeWidth="1" />
                
                {/* Hospital Waste Route (Red) */}
                <motion.path 
                  d="M150,150 L300,200 L450,150" 
                  stroke="#ef4444" 
                  strokeWidth="2" 
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                
                {/* General Waste Flow */}
                <motion.path 
                  d="M200,350 L400,380 L600,350" 
                  stroke="#10b981" 
                  strokeWidth="2" 
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />

                {/* Overloaded Zones */}
                <circle cx="300" cy="200" r="15" fill="#ef4444" fillOpacity="0.2" className="animate-pulse" />
                <circle cx="300" cy="200" r="5" fill="#ef4444" />
                
                <circle cx="550" cy="300" r="12" fill="#ef4444" fillOpacity="0.2" className="animate-pulse" />
                <circle cx="550" cy="300" r="4" fill="#ef4444" />
              </svg>
            </div>

            {/* Overlay UI */}
            <div className="absolute inset-0 p-10 flex flex-col justify-between pointer-events-none">
              <div className="flex justify-between items-start pointer-events-auto">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping" />
                    <h3 className="text-3xl font-black text-white tracking-tighter">CITY DIGITAL TWIN</h3>
                  </div>
                  <p className="text-xs text-emerald-500/80 font-black uppercase tracking-[0.3em]">Real-Time Ecosystem Simulation</p>
                </div>
                <div className="flex gap-3">
                  <div className="bg-black/60 backdrop-blur-xl border border-white/10 px-5 py-2.5 rounded-2xl flex items-center gap-3">
                    <Layers size={16} className="text-emerald-500" />
                    <span className="text-[10px] font-black tracking-widest">MULTI-LAYER VIEW</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 pointer-events-auto">
                <div className="bg-black/80 backdrop-blur-2xl p-6 rounded-3xl border border-red-500/20">
                  <div className="flex items-center gap-3 mb-3">
                    <AlertCircle className="text-red-500" size={20} />
                    <p className="text-xs text-red-500 font-black uppercase tracking-widest">Critical Overflow Alert</p>
                  </div>
                  <p className="text-sm font-bold text-white/90 leading-relaxed">Sector 12: Predicted bin overflow in 42 mins. Rerouting vehicle VB-402 for emergency collection.</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[10px] font-black text-gray-500">RISK LEVEL: 88%</span>
                    <button className="text-[10px] font-black text-emerald-500 hover:underline">VIEW ROUTE</button>
                  </div>
                </div>

                <div className="bg-black/80 backdrop-blur-2xl p-6 rounded-3xl border border-emerald-500/20">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="text-emerald-500" size={20} />
                    <p className="text-xs text-emerald-500 font-black uppercase tracking-widest">Recycling Efficiency</p>
                  </div>
                  <div className="flex items-end gap-4">
                    <span className="text-4xl font-black">92.4%</span>
                    <span className="text-[10px] font-bold text-emerald-500/60 mb-1">+4.2% FROM YESTERDAY</span>
                  </div>
                  <div className="w-full bg-white/5 h-1.5 mt-4 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "92.4%" }}
                      className="bg-emerald-500 h-full" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <DashboardCard title="Live Waste Counters" subtitle="Real-time city-wide metrics">
              <div className="space-y-3">
                {liveCounters.map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className={cn("p-2.5 rounded-xl transition-transform group-hover:scale-110", stat.bg)}>
                        <stat.icon className={stat.color} size={20} />
                      </div>
                      <span className="text-xs font-black uppercase tracking-widest text-gray-400">{stat.label}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-black block leading-none">{stat.value}</span>
                      <span className="text-[10px] text-gray-500 font-bold uppercase">{stat.unit}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </DashboardCard>

            <DashboardCard title="7-Day Predictive Flow" subtitle="AI-generated overflow visualization">
              <div className="h-[200px] w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={predictiveData}>
                    <defs>
                      <linearGradient id="colorVol" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                    <XAxis dataKey="name" stroke="rgba(255,255,255,0.2)" fontSize={10} tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'rgba(0,0,0,0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                    />
                    <Area type="monotone" dataKey="volume" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorVol)" />
                    <Area type="monotone" dataKey="predicted" stroke="#3b82f6" strokeWidth={2} strokeDasharray="5 5" fill="none" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full" /> Actual
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 border border-blue-500 rounded-full" /> Predicted
                </div>
              </div>
            </DashboardCard>
          </div>
        </div>

        {/* Flow Animation Section */}
        <DashboardCard title="City Waste Movement Simulation" subtitle="Society → Collection → Recycling Hubs">
          <div className="relative py-12 px-10">
            <div className="flex justify-between items-center relative">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-emerald-500/10 -translate-y-1/2" />
              
              {[
                { label: 'Society', icon: Trash2, color: 'text-emerald-500' },
                { label: 'Collection', icon: Activity, color: 'text-blue-500' },
                { label: 'Sorting', icon: Layers, color: 'text-amber-500' },
                { label: 'Recycling', icon: Recycle, color: 'text-emerald-500' },
                { label: 'Wealth', icon: Zap, color: 'text-emerald-400' },
              ].map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center gap-4">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.2 }}
                    className={cn(
                      "w-20 h-20 rounded-[2rem] bg-black border-2 flex items-center justify-center shadow-2xl transition-all hover:scale-110",
                      i === 4 ? "border-emerald-400 shadow-emerald-500/20" : "border-emerald-500/20"
                    )}
                  >
                    <step.icon className={step.color} size={32} />
                  </motion.div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">{step.label}</span>
                </div>
              ))}
            </div>
            
            {/* Moving Particles */}
            <motion.div 
              animate={{ x: [0, 1000] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-0 w-2 h-2 bg-emerald-500 rounded-full blur-sm -translate-y-1/2"
            />
          </div>
        </DashboardCard>
      </div>
    </Layout>
  );
};

export default Index;