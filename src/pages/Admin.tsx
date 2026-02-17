"use client";

import React from 'react';
import Layout from '@/components/Layout';
import DashboardCard from '@/components/DashboardCard';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Download,
  ArrowUpRight,
  ArrowDownRight,
  PieChart as PieChartIcon
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const wardData = [
  { name: 'Ward 1', efficiency: 92, waste: 450 },
  { name: 'Ward 2', efficiency: 85, waste: 520 },
  { name: 'Ward 3', efficiency: 78, waste: 610 },
  { name: 'Ward 4', efficiency: 95, waste: 380 },
  { name: 'Ward 5', efficiency: 88, waste: 490 },
];

const pieData = [
  { name: 'Recycled', value: 65, color: '#10b981' },
  { name: 'Composted', value: 20, color: '#3b82f6' },
  { name: 'Landfill', value: 15, color: '#ef4444' },
];

const Admin = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">Governance Command Center</h1>
            <p className="text-gray-400">City-wide waste intelligence and economic performance.</p>
          </div>
          <button className="bg-white/5 border border-white/10 px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors flex items-center gap-2">
            <Download size={18} /> Export Data
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Total Revenue", value: "₹12.4 Cr", trend: "+14%", icon: DollarSign, color: "text-emerald-500" },
            { label: "Jobs Created", value: "1,240", trend: "+8%", icon: Users, color: "text-blue-500" },
            { label: "Recycling Rate", value: "68.4%", trend: "+5.2%", icon: TrendingUp, color: "text-amber-500" },
            { label: "Active Ward", value: "Ward 4", trend: "Top", icon: BarChart3, color: "text-purple-500" },
          ].map((stat, i) => (
            <DashboardCard key={i} className="p-5">
              <div className="flex justify-between items-start mb-4">
                <div className={cn("p-3 rounded-2xl bg-white/5", stat.color)}>
                  <stat.icon size={24} />
                </div>
                <div className={cn(
                  "flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-lg bg-white/5",
                  stat.trend.startsWith('+') ? "text-emerald-500" : "text-blue-500"
                )}>
                  {stat.trend} {stat.trend.startsWith('+') ? <ArrowUpRight size={12} /> : null}
                </div>
              </div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">{stat.label}</p>
              <p className="text-2xl font-black mt-1">{stat.value}</p>
            </DashboardCard>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <DashboardCard className="lg:col-span-2" title="Ward Performance Comparison" subtitle="Waste collection vs Segregation efficiency">
            <div className="h-[350px] w-full mt-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={wardData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="name" stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  />
                  <Bar dataKey="waste" fill="#10b981" radius={[6, 6, 0, 0]} barSize={40} />
                  <Bar dataKey="efficiency" fill="#3b82f6" radius={[6, 6, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </DashboardCard>

          <DashboardCard title="Waste Distribution" subtitle="Current city-wide processing">
            <div className="h-[300px] w-full mt-4">
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
                    contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-3 mt-4">
              {pieData.map((item, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-gray-400">{item.name}</span>
                  </div>
                  <span className="font-bold">{item.value}%</span>
                </div>
              ))}
            </div>
          </DashboardCard>
        </div>

        <DashboardCard title="Predictive Waste Trends" subtitle="AI-generated forecast for the next 30 days">
          <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-grow">
              <h4 className="text-xl font-bold mb-2">Waste-to-Wealth Economy Estimator</h4>
              <p className="text-gray-400 leading-relaxed">
                Based on current trends, the city is projected to generate <span className="text-emerald-500 font-bold">₹4.2 Cr</span> in additional revenue from recycled plastic and compost by Q4 2047. AI recommends expanding the Sector 12 processing facility by 20% to meet demand.
              </p>
            </div>
            <button className="shrink-0 px-8 py-4 rounded-2xl bg-emerald-500 text-black font-black hover:scale-105 transition-transform">
              VIEW FULL REPORT
            </button>
          </div>
        </DashboardCard>
      </div>
    </Layout>
  );
};

export default Admin;