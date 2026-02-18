"use client";

import React, { useState } from 'react';
import Layout from '@/components/Layout';
import DashboardCard from '@/components/DashboardCard';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Truck, 
  MapPin, 
  Search,
  CheckCircle2,
  AlertCircle,
  Stethoscope,
  Droplets,
  Recycle,
  Zap,
  Activity
} from 'lucide-react';

const collectionData = [
  { area: 'Sector 12, Dwarka', vehicle: 'VB-TRK-402', driver: 'Amit Kumar', time: '07:00 AM', status: 'Completed', types: ['Wet', 'Dry', 'Plastic', 'E-Waste', 'Hospital'] },
  { area: 'Sector 10, Dwarka', vehicle: 'VB-TRK-405', driver: 'Rajesh Singh', time: '07:30 AM', status: 'On Route', types: ['Wet', 'Dry', 'Plastic', 'E-Waste', 'Hospital'] },
  { area: 'Sector 18, Dwarka', vehicle: 'VB-TRK-408', driver: 'Suresh Pal', time: '08:00 AM', status: 'Delayed', types: ['Wet', 'Dry', 'Plastic', 'E-Waste', 'Hospital'] },
  { area: 'Medical District', vehicle: 'VB-MED-101', driver: 'Vikram Dev', time: '06:00 AM', status: 'Completed', types: ['Hospital'] },
  { area: 'Pocket 4, Sector 12', vehicle: 'VB-TRK-412', driver: 'Mohit Rao', time: '08:30 AM', status: 'On Route', types: ['Wet', 'Dry', 'Plastic', 'E-Waste', 'Hospital'] },
];

const Schedule = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black tracking-tighter mb-2">COLLECTION SCHEDULE</h1>
            <p className="text-gray-500 font-medium">Daily multi-waste collection system for all sectors.</p>
          </div>
          
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input 
              type="text" 
              placeholder="Search by locality..." 
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-emerald-500/50 transition-all font-bold text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <DashboardCard className="lg:col-span-2" title="Daily Fleet Deployment" subtitle="Real-time vehicle assignment data">
            <div className="overflow-x-auto mt-6">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="pb-4 text-[10px] font-black text-gray-500 uppercase tracking-widest">Area / Locality</th>
                    <th className="pb-4 text-[10px] font-black text-gray-500 uppercase tracking-widest">Vehicle & Driver</th>
                    <th className="pb-4 text-[10px] font-black text-gray-500 uppercase tracking-widest">Arrival</th>
                    <th className="pb-4 text-[10px] font-black text-gray-500 uppercase tracking-widest">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {collectionData.map((item, i) => (
                    <tr key={i} className="group hover:bg-white/5 transition-colors">
                      <td className="py-5">
                        <div className="flex flex-col">
                          <span className="font-bold text-sm">{item.area}</span>
                          <div className="flex gap-1 mt-1">
                            {item.types.map((t, idx) => (
                              <span key={idx} className="text-[8px] font-black px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-500 uppercase">{t}</span>
                            ))}
                          </div>
                        </div>
                      </td>
                      <td className="py-5">
                        <div className="flex flex-col">
                          <span className="font-bold text-sm">{item.vehicle}</span>
                          <span className="text-[10px] text-gray-500">{item.driver}</span>
                        </div>
                      </td>
                      <td className="py-5">
                        <div className="flex items-center gap-2 font-bold text-sm">
                          <Clock size={14} className="text-emerald-500" /> {item.time}
                        </div>
                      </td>
                      <td className="py-5">
                        <span className={cn(
                          "text-[10px] font-black px-2.5 py-1 rounded-lg uppercase tracking-widest",
                          item.status === 'Completed' ? "bg-emerald-500/10 text-emerald-500" :
                          item.status === 'On Route' ? "bg-blue-500/10 text-blue-500" :
                          "bg-red-500/10 text-red-500"
                        )}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </DashboardCard>

          <div className="space-y-6">
            <DashboardCard title="Route Map Preview" subtitle="Vehicle ID: VB-TRK-405">
              <div className="aspect-square rounded-3xl bg-[#0a150a] relative overflow-hidden mb-6 border border-white/5">
                <div className="absolute inset-0 opacity-20">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M10,10 L90,10 L90,90 L10,90 Z" fill="none" stroke="#10b981" strokeWidth="0.5" />
                    <path d="M10,50 L90,50 M50,10 L50,90" fill="none" stroke="#10b981" strokeWidth="0.5" />
                  </svg>
                </div>
                <motion.div 
                  animate={{ 
                    x: [20, 50, 50, 80],
                    y: [20, 20, 60, 60]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute w-8 h-8 bg-emerald-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.5)]"
                >
                  <Truck size={16} className="text-black" />
                </motion.div>
                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                  <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">ETA: 14 MINS</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="p-2 rounded-lg bg-emerald-500/10">
                    <MapPin className="text-emerald-500" size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-gray-500">Current Location</p>
                    <p className="text-sm font-bold">Sector 11 Main Road</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <CheckCircle2 className="text-blue-500" size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-gray-500">Next Stop</p>
                    <p className="text-sm font-bold">Pocket 4, Sector 12</p>
                  </div>
                </div>
              </div>
            </DashboardCard>

            <DashboardCard className="bg-emerald-500/5 border-emerald-500/20">
              <div className="flex gap-4">
                <AlertCircle className="text-emerald-500 shrink-0" size={24} />
                <div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-emerald-500">Daily Protocol</h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">All 5 waste categories are collected daily. Ensure segregation is maintained for efficient processing.</p>
                </div>
              </div>
            </DashboardCard>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Schedule;