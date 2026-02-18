"use client";

import React from 'react';
import Layout from '@/components/Layout';
import DashboardCard from '@/components/DashboardCard';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { 
  Building2, 
  MapPin, 
  AlertTriangle, 
  CheckCircle2, 
  TrendingUp,
  Users,
  Stethoscope,
  ArrowUpRight,
  Zap
} from 'lucide-react';

const insights = [
  {
    title: "New Recycling Center Required",
    location: "Sector 45, Dwarka",
    reason: "Waste volume exceeded local capacity by 40% for 3 consecutive weeks.",
    impact: "High Priority",
    type: "Infrastructure",
    icon: Building2,
    color: "text-red-500",
    bg: "bg-red-500/10"
  },
  {
    title: "Extra Smart Bins Deployment",
    location: "Central Market Area",
    reason: "High footfall detected. Current bin density insufficient for plastic waste.",
    impact: "Medium Priority",
    type: "Logistics",
    icon: Zap,
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  },
  {
    title: "Awareness Program Needed",
    location: "Ward 7 Residential",
    reason: "Segregation efficiency dropped to 62%. High contamination in dry waste.",
    impact: "Strategic",
    type: "Social",
    icon: Users,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    title: "Hospital Waste Node",
    location: "Medical District",
    reason: "3 new clinics opened. Specialized incineration capacity needs 15% boost.",
    impact: "Critical",
    type: "Medical",
    icon: Stethoscope,
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  }
];

const Infrastructure = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-black tracking-tighter mb-2">STRATEGIC INSIGHTS</h1>
          <p className="text-gray-500 font-medium">Data-driven infrastructure planning and resource optimization for 2047.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {insights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <DashboardCard className="h-full flex flex-col group">
                <div className="flex justify-between items-start mb-6">
                  <div className={cn("p-4 rounded-2xl transition-transform group-hover:scale-110", item.bg)}>
                    <item.icon className={item.color} size={24} />
                  </div>
                  <span className={cn(
                    "text-[10px] font-black px-3 py-1.5 rounded-lg border",
                    item.impact === 'Critical' || item.impact === 'High Priority' 
                      ? "bg-red-500/10 border-red-500/20 text-red-500" 
                      : "bg-emerald-500/10 border-emerald-500/20 text-emerald-500"
                  )}>
                    {item.impact.toUpperCase()}
                  </span>
                </div>
                
                <h3 className="text-xl font-black mb-2 tracking-tight">{item.title}</h3>
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-500 mb-4">
                  <MapPin size={14} /> {item.location}
                </div>
                <p className="text-sm text-gray-400 mb-8 flex-grow leading-relaxed">{item.reason}</p>
                
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                  <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">{item.type}</span>
                  <button className="bg-emerald-500 text-black px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-2">
                    INITIATE PLAN <ArrowUpRight size={14} />
                  </button>
                </div>
              </DashboardCard>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <DashboardCard className="lg:col-span-2" title="Predictive Infrastructure Demand" subtitle="Projected requirements for the next 180 days">
            <div className="space-y-6 py-4">
              {[
                { label: 'Recycling Capacity', current: 85, projected: 110, unit: 'Tons/Day' },
                { label: 'Collection Fleet', current: 42, projected: 55, unit: 'Vehicles' },
                { label: 'Smart Bin Density', current: 120, projected: 180, unit: 'Units' },
              ].map((stat, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-end">
                    <span className="text-xs font-black uppercase tracking-widest text-gray-400">{stat.label}</span>
                    <span className="text-sm font-black text-emerald-500">{stat.current} → {stat.projected} {stat.unit}</span>
                  </div>
                  <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden flex">
                    <div className="bg-emerald-500 h-full" style={{ width: `${(stat.current / stat.projected) * 100}%` }} />
                    <div className="bg-emerald-500/20 h-full w-full" />
                  </div>
                </div>
              ))}
            </div>
          </DashboardCard>

          <DashboardCard title="Efficiency Score" subtitle="Infrastructure Utilization">
            <div className="flex flex-col items-center py-6">
              <div className="relative w-44 h-44">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="10" />
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#10b981" strokeWidth="10" strokeDasharray="283" strokeDashoffset="60" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-black">78%</span>
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">OPTIMIZED</span>
                </div>
              </div>
              <p className="mt-8 text-center text-xs text-gray-500 leading-relaxed px-4">
                Current infrastructure is operating at <span className="text-emerald-500 font-bold">78% efficiency</span>. AI recommends expanding Sector 12 sorting facility to reach 95%.
              </p>
            </div>
          </DashboardCard>
        </div>
      </div>
    </Layout>
  );
};

export default Infrastructure;