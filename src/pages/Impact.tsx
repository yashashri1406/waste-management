"use client";

import React from 'react';
import Layout from '@/components/Layout';
import DashboardCard from '@/components/DashboardCard';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { 
  BarChart3, 
  TrendingUp, 
  Leaf, 
  Droplets, 
  Zap, 
  Download, 
  AlertCircle,
  Activity,
  Stethoscope
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
  Bar
} from 'recharts';

const impactData = [
  { name: 'Day 1', co2: 40, landfill: 60 },
  { name: 'Day 3', co2: 45, landfill: 55 },
  { name: 'Day 5', co2: 55, landfill: 45 },
  { name: 'Day 7', co2: 65, landfill: 35 },
  { name: 'Day 9', co2: 75, landfill: 25 },
  { name: 'Day 11', co2: 85, landfill: 15 },
  { name: 'Day 13', co2: 95, landfill: 10 },
  { name: 'Day 15', co2: 110, landfill: 5 },
];

const Impact = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black tracking-tighter mb-2">IMPACT ANALYSIS</h1>
            <p className="text-gray-500 font-medium">Sustainability report and environmental risk monitoring.</p>
          </div>
          
          <button className="bg-emerald-500 text-black px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-2">
            <Download size={16} /> DOWNLOAD 15-DAY REPORT
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "CO2 Reduction", value: "12.4 Tons", trend: "+18%", icon: Leaf, color: "text-emerald-500" },
            { label: "Landfill Reduction", value: "84%", trend: "+12%", icon: Activity, color: "text-blue-500" },
            { label: "Waste Recycled", value: "1,284 Tons", trend: "+24%", icon: BarChart3, color: "text-emerald-400" },
            { label: "Hospital Waste", value: "94 Tons", trend: "Safe", icon: Stethoscope, color: "text-red-500" },
          ].map((stat, i) => (
            <DashboardCard key={i} className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className={cn("p-3 rounded-2xl bg-white/5", stat.color)}>
                  <stat.icon size={24} />
                </div>
                <span className="text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-lg">{stat.trend}</span>
              </div>
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{stat.label}</p>
              <p className="text-2xl font-black mt-1">{stat.value}</p>
            </DashboardCard>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <DashboardCard className="lg:col-span-2" title="Sustainability Trends" subtitle="CO2 Offset vs Landfill Diversion (15 Days)">
            <div className="h-[350px] w-full mt-6">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={impactData}>
                  <defs>
                    <linearGradient id="colorCO2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="name" stroke="rgba(255,255,255,0.2)" fontSize={10} tickLine={false} axisLine={false} />
                  <YAxis stroke="rgba(255,255,255,0.2)" fontSize={10} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(0,0,0,0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  />
                  <Area type="monotone" dataKey="co2" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorCO2)" />
                  <Area type="monotone" dataKey="landfill" stroke="#3b82f6" strokeWidth={2} fill="none" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-6 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" /> CO2 Reduction
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" /> Landfill Diversion
              </div>
            </div>
          </DashboardCard>

          <div className="space-y-6">
            <DashboardCard title="Environmental Risk Index">
              <div className="flex flex-col items-center py-6">
                <div className="relative w-44 h-44">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="10" />
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#10b981" strokeWidth="10" strokeDasharray="283" strokeDashoffset="240" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-black">15</span>
                    <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">LOW RISK</span>
                  </div>
                </div>
                <p className="mt-8 text-center text-xs text-gray-500 leading-relaxed px-4">
                  The city's environmental risk index is at an all-time low of <span className="text-emerald-500 font-bold">15/100</span>.
                </p>
              </div>
            </DashboardCard>

            <DashboardCard title="Waste-to-Wealth Summary">
              <div className="space-y-4 py-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-gray-400">Revenue Generated</span>
                  <span className="text-sm font-black text-emerald-500">₹12.4 Cr</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-gray-400">Compost Produced</span>
                  <span className="text-sm font-black text-blue-500">842 Tons</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-gray-400">Recycled Paper</span>
                  <span className="text-sm font-black text-amber-500">45 Tons</span>
                </div>
                <div className="mt-4 p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
                  <p className="text-[10px] text-gray-500 leading-relaxed">Performance is <span className="text-emerald-500 font-bold">12% higher</span> than the previous 15-day period.</p>
                </div>
              </div>
            </DashboardCard>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Impact;