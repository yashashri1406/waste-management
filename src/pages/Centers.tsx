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
  ShieldAlert,
  BarChart3,
  Search,
  Filter
} from 'lucide-react';

const centers = [
  {
    name: "Dwarka Material Recovery Facility",
    address: "Sector 18, Dwarka, New Delhi",
    distance: "1.2 km",
    types: ["Plastic", "Paper", "Metal"],
    recycledVolume: "12.4 Tons/Day",
    status: "Open",
    isHospital: false
  },
  {
    name: "AIIMS Bio-Hazard Processing Node",
    address: "Ansari Nagar, New Delhi",
    distance: "4.5 km",
    types: ["Medical Waste", "Chemicals"],
    recycledVolume: "2.8 Tons/Day",
    status: "Open",
    isHospital: true,
    careInfo: "High-temperature incineration & Autoclave sterilization. Restricted access."
  },
  {
    name: "Community Composting Hub",
    address: "Sector 12, Dwarka, New Delhi",
    distance: "0.8 km",
    types: ["Wet Waste", "Garden Waste"],
    recycledVolume: "5.2 Tons/Day",
    status: "Open",
    isHospital: false
  },
  {
    name: "Max Healthcare Waste Center",
    address: "Saket, New Delhi",
    distance: "6.2 km",
    types: ["Medical Waste", "Sharps"],
    recycledVolume: "1.5 Tons/Day",
    status: "Open",
    isHospital: true,
    careInfo: "Specialized sharps disposal and chemical neutralization. 24/7 monitoring."
  }
];

const Centers = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-black mb-2">RECYCLING <span className="text-emerald-500">CENTERS</span></h1>
            <p className="text-gray-400 font-medium">Verified processing facilities including specialized Hospital Waste nodes.</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-white/5 border border-white/10 px-6 py-3 rounded-xl font-black text-xs hover:bg-white/10 transition-colors flex items-center gap-2">
              <MapPin size={18} /> VIEW ON MAP
            </button>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input 
              type="text" 
              placeholder="Search by location or waste type..." 
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-emerald-500/50 transition-all"
            />
          </div>
          <button className="bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-colors">
            <Filter size={20} />
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
              <DashboardCard className={cn("group", center.isHospital && "border-red-500/30 bg-red-500/5")}>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className={cn(
                    "w-full md:w-40 h-40 rounded-2xl flex items-center justify-center border border-white/5 shrink-0",
                    center.isHospital ? "bg-red-500/10" : "bg-[#0a150a]"
                  )}>
                    {center.isHospital ? (
                      <Stethoscope className="text-red-500" size={48} />
                    ) : (
                      <Recycle className="text-emerald-500" size={48} />
                    )}
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-black group-hover:text-emerald-400 transition-colors">{center.name}</h3>
                      {center.isHospital && (
                        <span className="text-[8px] font-black px-2 py-1 rounded-lg bg-red-500 text-white flex items-center gap-1">
                          <ShieldAlert size={10} /> BIO-HAZARD
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-4 font-bold">
                      <MapPin size={14} /> {center.address} • <span className="text-emerald-500">{center.distance}</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                        <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest mb-1">Recycled Volume</p>
                        <p className="text-sm font-black text-emerald-500">{center.recycledVolume}</p>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                        <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest mb-1">Waste Types</p>
                        <p className="text-[10px] font-bold text-white">{center.types.join(", ")}</p>
                      </div>
                    </div>

                    {center.isHospital && (
                      <div className="mb-6 p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                        <p className="text-[8px] font-black text-red-500 uppercase tracking-widest mb-1">Care & Safety Info</p>
                        <p className="text-[10px] font-medium text-gray-300">{center.careInfo}</p>
                      </div>
                    )}
                    
                    <div className="flex gap-3">
                      <button className="flex-grow py-3 rounded-xl bg-emerald-500 text-black font-black text-xs flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
                        <Navigation size={16} /> GET DIRECTIONS
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
      </div>
    </Layout>
  );
};

export default Centers;