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
  Clock, 
  Recycle, 
  Zap, 
  Trash2, 
  Droplets,
  Search,
  Filter
} from 'lucide-react';

const centers = [
  {
    name: "Dwarka Material Recovery Facility",
    address: "Sector 18, Dwarka, New Delhi",
    distance: "1.2 km",
    types: ["Plastic", "Paper", "Metal"],
    status: "Open",
    rating: 4.8
  },
  {
    name: "Green Earth E-Waste Center",
    address: "Sector 10, Dwarka, New Delhi",
    distance: "2.5 km",
    types: ["E-Waste", "Batteries"],
    status: "Open",
    rating: 4.9
  },
  {
    name: "Community Composting Hub",
    address: "Sector 12, Dwarka, New Delhi",
    distance: "0.8 km",
    types: ["Wet Waste", "Garden Waste"],
    status: "Closing Soon",
    rating: 4.7
  },
  {
    name: "Hazardous Waste Disposal",
    address: "Industrial Area, Phase 1",
    distance: "5.4 km",
    types: ["Chemicals", "Medical"],
    status: "Open",
    rating: 4.5
  }
];

const Centers = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">Recycling Centers</h1>
            <p className="text-gray-400">Find verified waste processing and material recovery facilities near you.</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-white/5 border border-white/10 px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors flex items-center gap-2">
              <MapPin size={18} /> View on Map
            </button>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input 
              type="text" 
              placeholder="Search by location or waste type..." 
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-emerald-500/50 transition-colors"
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
              <DashboardCard className="group">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-40 h-40 rounded-2xl bg-[#0a150a] flex items-center justify-center border border-white/5 shrink-0">
                    <Recycle className="text-emerald-500/20" size={64} />
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold group-hover:text-emerald-400 transition-colors">{center.name}</h3>
                      <span className={cn(
                        "text-[10px] font-black px-2 py-1 rounded-lg",
                        center.status === 'Open' ? "bg-emerald-500/10 text-emerald-500" : "bg-amber-500/10 text-amber-500"
                      )}>
                        {center.status.toUpperCase()}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <MapPin size={14} /> {center.address} • <span className="text-emerald-500 font-bold">{center.distance}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {center.types.map((type, idx) => (
                        <span key={idx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-gray-400">
                          {type}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <button className="flex-grow py-3 rounded-xl bg-emerald-500 text-black font-bold text-sm flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
                        <Navigation size={16} /> Get Directions
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

        <DashboardCard title="Waste Acceptance Guidelines" subtitle="Ensure your waste is ready for processing">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <Droplets className="text-blue-500" size={20} />
                </div>
                <h4 className="font-bold">Wet Waste</h4>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">Must be drained of excess liquid. No plastic liners or non-biodegradable bags allowed in composting bins.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber-500/10">
                  <Recycle className="text-amber-500" size={20} />
                </div>
                <h4 className="font-bold">Dry Waste</h4>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">Should be clean and dry. Rinse food containers before disposal to prevent contamination of recyclables.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-red-500/10">
                  <Zap className="text-red-500" size={20} />
                </div>
                <h4 className="font-bold">E-Waste</h4>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">Do not dismantle batteries or electronics. Keep screens intact to prevent hazardous chemical leaks.</p>
            </div>
          </div>
        </DashboardCard>
      </div>
    </Layout>
  );
};

export default Centers;