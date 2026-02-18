"use client";

import React from 'react';
import Layout from '@/components/Layout';
import DashboardCard from '@/components/DashboardCard';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { 
  MapPin, 
  Navigation, 
  Phone, 
  Recycle, 
  Stethoscope, 
  Droplets, 
  Zap,
  ShieldCheck,
  BarChart3,
  Search,
  Filter
} from 'lucide-react';

const centers = [
  {
    name: "Dwarka Material Recovery Facility",
    location: "Sector 18, Dwarka",
    types: ["Plastic", "Paper", "Metal"],
    capacity: "50 Tons/Day",
    currentLoad: 72,
    method: "Shredding & Baling",
    compliance: "ISO 14001 Certified",
    safety: "High-Grade PPE Protocol"
  },
  {
    name: "Green Earth Composting Hub",
    location: "Sector 12, Dwarka",
    types: ["Wet Waste", "Garden Waste"],
    capacity: "20 Tons/Day",
    currentLoad: 45,
    method: "Aerobic Digestion",
    compliance: "SWM Rules 2016",
    safety: "Bio-Filter Odor Control"
  },
  {
    name: "Medical Waste Treatment Center",
    location: "Industrial Area, Phase 1",
    types: ["Hospital Waste"],
    capacity: "15 Tons/Day",
    currentLoad: 88,
    method: "Incineration & Autoclaving",
    compliance: "BMW Rules 2016",
    safety: "Level 4 Bio-Containment"
  },
  {
    name: "E-Waste Recovery Node",
    location: "Sector 10, Dwarka",
    types: ["Electronics", "Batteries"],
    capacity: "10 Tons/Day",
    currentLoad: 30,
    method: "Manual Dismantling",
    compliance: "E-Waste Rules 2022",
    safety: "Lead-Safe Environment"
  }
];

const Centers = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black tracking-tighter mb-2">RECYCLING CENTRES</h1>
            <p className="text-gray-500 font-medium">Verified waste processing and material recovery facilities.</p>
          </div>
          
          <div className="flex gap-3">
            <div className="bg-emerald-500/5 border border-emerald-500/10 px-5 py-2.5 rounded-2xl flex items-center gap-3">
              <BarChart3 size={16} className="text-emerald-500" />
              <span className="text-[10px] font-black tracking-widest">CITY RECYCLED: 1,284 TONS</span>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input 
              type="text" 
              placeholder="Search by location or waste type..." 
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-emerald-500/50 transition-all font-bold text-sm"
            />
          </div>
          <button className="bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-colors">
            <Filter size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {centers.map((center, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <DashboardCard className="group">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-full md:w-48 h-48 rounded-3xl bg-[#0a150a] flex items-center justify-center border border-white/5 shrink-0 relative overflow-hidden">
                    <Recycle className="text-emerald-500/10" size={80} />
                    <div className="absolute bottom-4 left-0 w-full px-4">
                      <div className="flex justify-between text-[8px] font-black text-gray-500 uppercase mb-1">
                        <span>Load</span>
                        <span>{center.currentLoad}%</span>
                      </div>
                      <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                        <div className={cn(
                          "h-full",
                          center.currentLoad > 80 ? "bg-red-500" : "bg-emerald-500"
                        )} style={{ width: `${center.currentLoad}%` }} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-black tracking-tight group-hover:text-emerald-400 transition-colors">{center.name}</h3>
                      <div className="flex items-center gap-1 text-emerald-500">
                        <ShieldCheck size={14} />
                        <span className="text-[8px] font-black uppercase tracking-widest">VERIFIED</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-xs font-bold text-gray-500 mb-4">
                      <MapPin size={14} className="text-emerald-500" /> {center.location}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest mb-1">Method</p>
                        <p className="text-xs font-bold">{center.method}</p>
                      </div>
                      <div>
                        <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest mb-1">Capacity</p>
                        <p className="text-xs font-bold">{center.capacity}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {center.types.map((type, idx) => (
                        <span key={idx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                          {type}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <button className="flex-grow py-3 rounded-xl bg-emerald-500 text-black font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
                        <Navigation size={14} /> GET DIRECTIONS
                      </button>
                      <button className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <Phone size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </DashboardCard>
            </motion.div>
          ))}
        </div>

        <DashboardCard title="Center Performance Comparison" subtitle="Efficiency and compliance metrics">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
            <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
              <h4 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-4">Top Performer</h4>
              <p className="text-lg font-black mb-1">Dwarka MRF</p>
              <p className="text-[10px] text-emerald-500 font-bold">98.4% Compliance Score</p>
            </div>
            <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
              <h4 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-4">Highest Load</h4>
              <p className="text-lg font-black mb-1">Medical Waste Center</p>
              <p className="text-[10px] text-red-500 font-bold">88% Capacity Utilization</p>
            </div>
            <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
              <h4 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-4">Most Improved</h4>
              <p className="text-lg font-black mb-1">Green Earth Hub</p>
              <p className="text-[10px] text-blue-500 font-bold">+15% Processing Speed</p>
            </div>
          </div>
        </DashboardCard>
      </div>
    </Layout>
  );
};

export default Centers;