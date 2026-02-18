"use client";

import React from 'react';
import Layout from '@/components/Layout';
import DashboardCard from '@/components/DashboardCard';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  Download, 
  Calendar, 
  CheckCircle2,
  Globe,
  Droplets,
  Zap,
  Leaf
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';

const impactData = [
  { name: 'Day 1-15', waste: 450, recycled: 380 },
  { name: 'Day 16-30', waste: 520, recycled: 460 },
  { name: 'Day 31-45', waste: 480, recycled: 440 },
  { name: 'Day 46-60', waste: 610, recycled: 580 },
];

const Impact = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-black mb-2">ENVIRONMENTAL <span className="text-emerald-500">IMPACT</span></h1>
            <p className="text-gray-400 font-medium">Tracking our progress towards a zero-waste city by 2047.</p>
          </div>
          <button className="bg-white/5 border border-white/10 px-6 py-3 rounded-xl font-black text-xs hover:bg-white/10 transition-colors flex items-center gap-2">
            <Download size={18} /> EXPORT 15-DAY REPORT
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "CO2 Prevented", value: "1,240 Tons", icon: Globe, color: "text-blue-500" },
            { label: "Water Saved", value: "4.2M Liters", icon: Droplets, color: "text-cyan-500" },
            { label: "Energy Saved", value: "840 MWh", icon: Zap, color: "text-amber-500" },
            { label: "Trees Equivalent", value: "12,400", icon: Leaf, color: "text-emerald-500" },
          ].map((stat, i) => (
            <DashboardCard key={i} className="p-5">
              <div className="flex justify-between items-start mb-4">
                <div className={cn("p-3 rounded-2xl bg-white/5", stat.color)}>
                  <stat.icon size={24} />
                </div>
                <div className="text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-lg">
                  +12%
                </div>
              </div>
              <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">{stat.label}</p>
              <p className="text-2xl font-black mt-1">{stat.value}</p>
            </DashboardCard>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <DashboardCard className="lg:col-span-2" title="15-Day Performance Cycle" subtitle="Waste Collection vs Recycling Efficiency">
            <div className="h-[350px] w-full mt-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={impactData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="name" stroke="rgba(255,255,255,0.3)" fontSize={10} tickLine={false} axisLine={false} />
                  <YAxis stroke="rgba(255,255,255,0.3)" fontSize={10} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(0,0,0,0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  />
                  <Bar dataKey="waste" fill="rgba(255,255,255,0.1)" radius={[6, 6, 0, 0]} barSize={40} />
                  <Bar dataKey="recycled" fill="#10b981" radius={[6, 6, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </DashboardCard>

          <DashboardCard title="Recent Reports" subtitle="15-Day Cycles">
            <div className="space-y-4 mt-4">
              {[
                { period: "Feb 01 - Feb 15", status: "Verified", score: "94/100" },
                { period: "Jan 16 - Jan 31", status: "Verified", score: "91/100" },
                { period: "Jan 01 - Jan 15", status: "Verified", score: "88/100" },
                { period: "Dec 16 - Dec 31", status: "Verified", score: "92/100" },
              ].map((report, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between group hover:border-emerald-500/30 transition-all cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Calendar className="text-gray-500" size={18} />
                    <div>
                      <h4 className="text-xs font-black">{report.period}</h4>
                      <p className="text-[10px] text-emerald-500 font-bold uppercase">{report.status}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-black">{report.score}</p>
                    <p className="text-[8px] text-gray-500 font-black uppercase">EFFICIENCY</p>
                  </div>
                </div>
              ))}
            </div>
          </DashboardCard>
        </div>
      </div>
    </Layout>
  );
};

export default Impact;