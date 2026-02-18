"use client";

import React from 'react';
import Layout from '@/components/Layout';
import DashboardCard from '@/components/DashboardCard';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { 
  Activity, 
  TrendingUp, 
  Users, 
  Zap, 
  Leaf, 
  FileText, 
  Briefcase,
  ArrowRight,
  PieChart as PieChartIcon
} from 'lucide-react';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Tooltip 
} from 'recharts';

const pieData = [
  { name: 'Compost', value: 45, color: '#10b981' },
  { name: 'Recycled Paper', value: 25, color: '#3b82f6' },
  { name: 'Plastic Pellets', value: 20, color: '#f59e0b' },
  { name: 'Metal Scrap', value: 10, color: '#ef4444' },
];

const Resources = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-black tracking-tighter mb-2">RESOURCE UTILIZATION</h1>
          <p className="text-gray-500 font-medium">Economic and sustainability impact of the circular waste economy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Revenue Generated", value: "₹12.4 Cr", trend: "+14%", icon: TrendingUp, color: "text-emerald-500" },
            { label: "Jobs Created", value: "1,240", trend: "+8%", icon: Briefcase, color: "text-blue-500" },
            { label: "Compost Produced", value: "842 Tons", trend: "+12%", icon: Leaf, color: "text-emerald-400" },
            { label: "Energy Saved", value: "1.2 GWh", trend: "+5%", icon: Zap, color: "text-amber-500" },
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
          <DashboardCard className="lg:col-span-2" title="Circular Economy Model" subtitle="Waste-to-Wealth transformation flow">
            <div className="relative py-12 px-10">
              <div className="flex justify-between items-center relative">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-emerald-500/10 -translate-y-1/2" />
                
                {[
                  { label: 'Waste Input', icon: Activity, color: 'text-gray-500' },
                  { label: 'Processing', icon: Zap, color: 'text-blue-500' },
                  { label: 'Resource', icon: Leaf, color: 'text-emerald-500' },
                  { label: 'Economic Value', icon: TrendingUp, color: 'text-emerald-400' },
                ].map((step, i) => (
                  <div key={i} className="relative z-10 flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-[1.5rem] bg-black border border-white/10 flex items-center justify-center shadow-xl">
                      <step.icon className={step.color} size={24} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{step.label}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-3xl bg-emerald-500/5 border border-emerald-500/10">
                  <h4 className="text-sm font-black uppercase tracking-widest text-emerald-500 mb-3">Compost for Farmers</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">High-quality organic fertilizer produced from wet waste. Reduces chemical dependency and improves soil health for local agriculture.</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[10px] font-black text-gray-500">AVAILABILITY: 120 TONS</span>
                    <button className="text-[10px] font-black text-emerald-500 hover:underline">VIEW ADVANTAGES</button>
                  </div>
                </div>
                <div className="p-6 rounded-3xl bg-blue-500/5 border border-blue-500/10">
                  <h4 className="text-sm font-black uppercase tracking-widest text-blue-500 mb-3">Waste-to-Paper</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">Dry waste processed into recycled paper products. Powering government offices and local schools with sustainable stationery.</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[10px] font-black text-gray-500">PRODUCTION: 45 TONS/MO</span>
                    <button className="text-[10px] font-black text-blue-500 hover:underline">VIEW INITIATIVES</button>
                  </div>
                </div>
              </div>
            </div>
          </DashboardCard>

          <DashboardCard title="Resource Distribution" subtitle="Current city-wide output">
            <div className="h-[250px] w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(0,0,0,0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-3 mt-6">
              {pieData.map((item, i) => (
                <div key={i} className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-gray-500">{item.name}</span>
                  </div>
                  <span>{item.value}%</span>
                </div>
              ))}
            </div>
          </DashboardCard>
        </div>
      </div>
    </Layout>
  );
};

export default Resources;