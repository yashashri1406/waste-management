"use client";

import React from 'react';
import Layout from '@/components/Layout';
import DashboardCard from '@/components/DashboardCard';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { 
  BarChart3, 
  Brain, 
  TrendingUp, 
  Activity, 
  Zap, 
  ShieldCheck,
  Search,
  Cpu
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const predictiveData = [
  { name: 'Week 1', actual: 400, predicted: 420 },
  { name: 'Week 2', actual: 450, predicted: 460 },
  { name: 'Week 3', actual: 480, predicted: 490 },
  { name: 'Week 4', actual: 510, predicted: 520 },
  { name: 'Week 5', actual: null, predicted: 550 },
  { name: 'Week 6', actual: null, predicted: 580 },
];

const Intelligence = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">AI Intelligence Hub</h1>
            <p className="text-gray-400">Deep neural analysis of city-wide waste patterns and predictive modeling.</p>
          </div>
          <div className="flex items-center gap-2 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
            <Cpu className="text-emerald-500 animate-pulse" size={18} />
            <span className="text-xs font-bold text-emerald-400">NEURAL ENGINE ACTIVE</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <DashboardCard className="lg:col-span-2" title="Predictive Waste Growth" subtitle="Actual vs AI Forecast (Tons)">
            <div className="h-[350px] w-full mt-6">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={predictiveData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="name" stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  />
                  <Line type="monotone" dataKey="actual" stroke="#10b981" strokeWidth={3} dot={{ r: 4, fill: '#10b981' }} />
                  <Line type="monotone" dataKey="predicted" stroke="#3b82f6" strokeWidth={2} strokeDasharray="5 5" dot={{ r: 4, fill: '#3b82f6' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </DashboardCard>

          <div className="space-y-6">
            <DashboardCard title="Neural Insights" subtitle="Real-time pattern detection">
              <div className="space-y-4">
                {[
                  { label: "Anomaly Detection", value: "Normal", color: "text-emerald-500" },
                  { label: "Pattern Recognition", value: "High Accuracy", color: "text-blue-500" },
                  { label: "Data Integrity", value: "99.9%", color: "text-purple-500" },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">{item.label}</p>
                    <p className={cn("text-lg font-bold", item.color)}>{item.value}</p>
                  </div>
                ))}
              </div>
            </DashboardCard>

            <DashboardCard title="Infrastructure Health">
              <div className="flex items-center justify-center py-4">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#10b981" strokeWidth="8" strokeDasharray="283" strokeDashoffset="28" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-black">92%</span>
                    <span className="text-[10px] font-bold text-emerald-500">OPTIMAL</span>
                  </div>
                </div>
              </div>
            </DashboardCard>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <DashboardCard title="Waste Composition Analysis" subtitle="AI-driven material breakdown">
            <div className="h-[300px] w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={predictiveData}>
                  <defs>
                    <linearGradient id="colorComp" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="name" stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  />
                  <Area type="monotone" dataKey="predicted" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorComp)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </DashboardCard>

          <DashboardCard title="Strategic Recommendations" subtitle="AI-generated city planning">
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
                <h4 className="font-bold text-emerald-500 mb-2 flex items-center gap-2">
                  <TrendingUp size={18} /> Efficiency Boost
                </h4>
                <p className="text-sm text-gray-400">Redirecting 15% of collection fleet to Sector 4 during peak hours could reduce fuel consumption by 8%.</p>
              </div>
              <div className="p-4 rounded-2xl bg-blue-500/5 border border-blue-500/20">
                <h4 className="font-bold text-blue-500 mb-2 flex items-center gap-2">
                  <ShieldCheck size={18} /> Risk Mitigation
                </h4>
                <p className="text-sm text-gray-400">Predicted monsoon surge in wet waste. Recommend increasing processing capacity at Dwarka Hub by 20%.</p>
              </div>
            </div>
          </DashboardCard>
        </div>
      </div>
    </Layout>
  );
};

export default Intelligence;