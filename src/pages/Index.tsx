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
  TrendingUp,
  Activity,
  Layers,
  Stethoscope,
  ArrowUpRight
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

const data = [
  { name: '06:00', waste: 400 },
  { name: '09:00', waste: 1200 },
  { name: '12:00', waste: 900 },
  { name: '15:00', waste: 1500 },
  { name: '18:00', waste: 2100 },
  { name: '21:00', waste: 1800 },
  { name: '00:00', waste: 600 },
];

const stats = [
  { label: 'Wet Waste', value: '1,240', unit: 'Tons', icon: Droplets, color: 'text-blue-400', bg: 'bg-blue-400/10', trend: '+2.4%' },
  { label: 'Dry Waste', value: '842', unit: 'Tons', icon: Recycle, color: 'text-amber-400', bg: 'bg-amber-400/10', trend: '-1.2%' },
  { label: 'Hospital Waste', value: '156', unit: 'Tons', icon: Stethoscope, color: 'text-red-400', bg: 'bg-red-400/10', trend: '+0.8%' },
  { label: 'Plastic Waste', value: '312', unit: 'Tons', icon: Zap, color: 'text-emerald-400', bg: 'bg-emerald-400/10', trend: '-4.5%' },
];

const Index = () => {
  return (
    <Layout>
      <div className="space-y-8">
        {/* Hero Section: Digital Twin Map */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 h-[550px] relative rounded-3xl overflow-hidden border border-emerald-500/20 bg-[#050a05] group">
            <div className="absolute inset-0 opacity-40">
              <svg viewBox="0 0 800 500" className="w-full h-full">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(16,185,129,0.1)" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                <path d="M100,100 Q400,50 700,100 T700,400 Q400,450 100,400 Z" fill="none" stroke="#10b981" strokeWidth="1" strokeDasharray="10,10" />
                <circle cx="200" cy="150" r="8" fill="#ef4444" className="animate-pulse" />
                <circle cx="500" cy="200" r="6" fill="#10b981" />
                <circle cx="350" cy="350" r="10" fill="#ef4444" className="animate-pulse" />
              </svg>
            </div>

            <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
              <div className="flex justify-between items-start pointer-events-auto">
                <div>
                  <h3 className="text-3xl font-black text-white tracking-tighter">City Digital Twin</h3>
                  <p className="text-sm text-emerald-500/80 font-bold">Real-time waste flow & infrastructure monitoring</p>
                </div>
                <div className="flex gap-3">
                  <button className="bg-emerald-500 text-black px-4 py-2 rounded-full text-[10px] font-black flex items-center gap-2 hover:scale-105 transition-transform">
                    AI PREDICTION: ON
                  </button>
                  <button className="bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-[10px] font-black flex items-center gap-2 hover:bg-white/20 transition-colors">
                    LAYER: WASTE FLOW
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-end pointer-events-auto">
                <div className="bg-black/80 backdrop-blur-xl p-6 rounded-2xl border border-red-500/30 max-w-xs shadow-[0_0_30px_rgba(239,68,68,0.1)]">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="text-red-500" size={18} />
                    <p className="text-xs text-red-400 font-black uppercase tracking-tighter">Critical Alert: Hospital Node</p>
                  </div>
                  <p className="text-sm font-medium text-white/90">Bio-hazard accumulation detected at AIIMS Node. Specialized vehicle VB-MED-01 dispatched.</p>
                </div>

                <div className="bg-emerald-500/10 backdrop-blur-md p-4 rounded-2xl border border-emerald-500/20">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-black text-emerald-400 uppercase">City Green Score</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black">842</span>
                    <span className="text-xs text-gray-500 font-bold">/ 1000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-2xl flex items-center justify-between group hover:border-emerald-500/30 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className={cn("p-3 rounded-xl", stat.bg)}>
                      <stat.icon className={stat.color} size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{stat.label}</p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-black">{stat.value}</span>
                        <span className="text-[10px] text-gray-500 font-bold">{stat.unit}</span>
                      </div>
                    </div>
                  </div>
                  <div className={cn(
                    "text-[10px] font-black px-2 py-1 rounded-lg",
                    stat.trend.startsWith('+') ? "bg-emerald-500/10 text-emerald-500" : "bg-red-500/10 text-red-500"
                  )}>
                    {stat.trend}
                  </div>
                </motion.div>
              ))}
            </div>

            <DashboardCard className="bg-emerald-500 border-emerald-400/50 shadow-[0_0_40px_rgba(16,185,129,0.2)]" title="AI Infrastructure Insights" subtitle="Priority Actions">
              <div className="space-y-4 mt-2">
                <div className="p-4 rounded-xl bg-black/20 border border-white/10">
                  <h4 className="text-sm font-black text-black mb-1">OPTIMIZE: SECTOR 12</h4>
                  <p className="text-xs text-black/70 font-medium">Predicted 40% surge in dry waste. Deploying additional sorting units to MRF-04.</p>
                </div>
                <div className="p-4 rounded-xl bg-black/20 border border-white/10">
                  <h4 className="text-sm font-black text-black mb-1">REVENUE ALERT</h4>
                  <p className="text-xs text-black/70 font-medium">Compost quality at Hub-02 reached Grade A. Market value increased by 15%.</p>
                </div>
              </div>
            </DashboardCard>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <DashboardCard title="Waste Generation Trends" subtitle="Hourly collection volume (Tons)">
            <div className="h-[300px] w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorWaste" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="name" stroke="rgba(255,255,255,0.3)" fontSize={10} tickLine={false} axisLine={false} />
                  <YAxis stroke="rgba(255,255,255,0.3)" fontSize={10} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(0,0,0,0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  />
                  <Area type="monotone" dataKey="waste" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorWaste)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </DashboardCard>

          <DashboardCard title="Hospital Waste Management" subtitle="Bio-hazard Safety Protocol">
            <div className="space-y-4 mt-2">
              <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 flex gap-4">
                <div className="p-2 bg-red-500/20 rounded-xl h-fit">
                  <Stethoscope className="text-red-500" size={20} />
                </div>
                <div>
                  <h4 className="font-black text-red-500 text-sm">STERILIZATION STATUS</h4>
                  <p className="text-xs text-gray-400">98% of hospital waste processed via autoclave today. Zero contamination reported.</p>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex gap-4">
                <div className="p-2 bg-blue-500/20 rounded-xl h-fit">
                  <Activity className="text-blue-500" size={20} />
                </div>
                <div>
                  <h4 className="font-black text-blue-500 text-sm">LOGISTICS TRACKING</h4>
                  <p className="text-xs text-gray-400">5 specialized bio-hazard vehicles active. Average response time: 14 minutes.</p>
                </div>
              </div>
            </div>
          </DashboardCard>
        </div>
      </div>
    </Layout>
  );
};

export default Index;