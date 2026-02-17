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
  Activity
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
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
  { label: 'Total Collected', value: '1,284 Tons', icon: Trash2, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
  { label: 'Wet Waste', value: '542 Tons', icon: Droplets, color: 'text-blue-400', bg: 'bg-blue-400/10' },
  { label: 'Dry Waste', value: '412 Tons', icon: Recycle, color: 'text-amber-400', bg: 'bg-amber-400/10' },
  { label: 'Plastic Waste', value: '210 Tons', icon: Zap, color: 'text-purple-400', bg: 'bg-purple-400/10' },
  { label: 'E-Waste', value: '120 Tons', icon: AlertCircle, color: 'text-red-400', bg: 'bg-red-400/10' },
];

const Index = () => {
  return (
    <Layout>
      <div className="space-y-8">
        {/* Hero Section: Digital Twin Map */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <DashboardCard className="lg:col-span-2 h-[500px] p-0 overflow-hidden" title="City Digital Twin: Real-Time Waste Flow">
            <div className="absolute inset-0 bg-[#0a150a] flex items-center justify-center">
              {/* Mock Map Visualization */}
              <div className="relative w-full h-full opacity-40">
                <svg viewBox="0 0 800 500" className="w-full h-full">
                  <path d="M100,100 Q400,50 700,100 T700,400 Q400,450 100,400 Z" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="5,5" />
                  <circle cx="200" cy="150" r="8" fill="#ef4444" className="animate-pulse" />
                  <circle cx="500" cy="200" r="6" fill="#10b981" />
                  <circle cx="350" cy="350" r="10" fill="#ef4444" className="animate-pulse" />
                  <circle cx="600" cy="380" r="6" fill="#10b981" />
                  
                  {/* Flow Lines */}
                  <motion.path 
                    d="M200,150 L500,200" 
                    stroke="#10b981" 
                    strokeWidth="2" 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.path 
                    d="M350,350 L600,380" 
                    stroke="#10b981" 
                    strokeWidth="2" 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                </svg>
              </div>
              
              <div className="absolute top-10 left-10 space-y-4">
                <div className="bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                  <p className="text-xs text-emerald-500 font-bold uppercase tracking-tighter">AI Prediction</p>
                  <p className="text-sm font-medium">Sector 12: High Overflow Risk</p>
                  <div className="w-full bg-white/10 h-1.5 mt-2 rounded-full overflow-hidden">
                    <div className="bg-red-500 h-full w-[85%]" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-10 right-10 flex gap-4">
                <div className="bg-emerald-500 text-black px-4 py-2 rounded-full text-xs font-bold cursor-pointer hover:scale-105 transition-transform">
                  AI PREDICTION ON
                </div>
                <div className="bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold cursor-pointer hover:bg-white/20 transition-colors">
                  SATELLITE VIEW
                </div>
              </div>
            </div>
          </DashboardCard>

          <div className="space-y-6">
            <DashboardCard title="Live Waste Counters" subtitle="Real-time city metrics">
              <div className="space-y-4">
                {stats.map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={cn("p-2 rounded-xl", stat.bg)}>
                        <stat.icon className={stat.color} size={18} />
                      </div>
                      <span className="text-sm font-medium text-gray-300">{stat.label}</span>
                    </div>
                    <span className="text-lg font-bold">{stat.value}</span>
                  </motion.div>
                ))}
              </div>
            </DashboardCard>

            <DashboardCard title="Environmental Impact" subtitle="CO2 Reduction Today">
              <div className="flex flex-col items-center justify-center py-4">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#10b981" strokeWidth="8" strokeDasharray="283" strokeDashoffset="70" strokeLinecap="round" className="animate-[dash_2s_ease-in-out]" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold">75%</span>
                    <span className="text-[10px] text-emerald-500 font-bold">TARGET</span>
                  </div>
                </div>
                <p className="mt-4 text-center text-sm text-gray-400">
                  <span className="text-emerald-400 font-bold">12.4 Tons</span> of CO2 emissions prevented today.
                </p>
              </div>
            </DashboardCard>
          </div>
        </div>

        {/* Secondary Section: Analytics & Trends */}
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
                  <XAxis dataKey="name" stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                    itemStyle={{ color: '#10b981' }}
                  />
                  <Area type="monotone" dataKey="waste" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorWaste)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </DashboardCard>

          <DashboardCard title="AI Infrastructure Insights" subtitle="Recommended actions for today">
            <div className="space-y-4 mt-2">
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex gap-4">
                <div className="p-2 bg-amber-500/20 rounded-xl h-fit">
                  <AlertCircle className="text-amber-500" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-amber-500">New Dustbins Required</h4>
                  <p className="text-sm text-gray-400">Sector 45 shows 40% higher plastic waste than average. Recommend installing 5 smart bins.</p>
                </div>
              </div>
              
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex gap-4">
                <div className="p-2 bg-emerald-500/20 rounded-xl h-fit">
                  <TrendingUp className="text-emerald-500" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-emerald-500">Efficiency Peak</h4>
                  <p className="text-sm text-gray-400">Segregation efficiency in Ward 7 reached 92% today. Consider rewarding the local community.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex gap-4">
                <div className="p-2 bg-blue-500/20 rounded-xl h-fit">
                  <Activity className="text-blue-500" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-blue-500">Festival Surge Prediction</h4>
                  <p className="text-sm text-gray-400">Upcoming festival on Sunday. Predicted 35% increase in wet waste. Routing optimized.</p>
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