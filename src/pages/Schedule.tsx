"use client";

import React from 'react';
import Layout from '@/components/Layout';
import DashboardCard from '@/components/DashboardCard';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Truck, 
  MapPin, 
  Bell,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

const scheduleData = [
  { day: 'Monday', type: 'Wet Waste', time: '07:00 AM - 09:00 AM', status: 'Completed', color: 'text-blue-400', bg: 'bg-blue-400/10' },
  { day: 'Tuesday', type: 'Dry Waste', time: '07:30 AM - 09:30 AM', status: 'Scheduled', color: 'text-amber-400', bg: 'bg-amber-400/10' },
  { day: 'Wednesday', type: 'Plastic Waste', time: '08:00 AM - 10:00 AM', status: 'Scheduled', color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
  { day: 'Thursday', type: 'Wet Waste', time: '07:00 AM - 09:00 AM', status: 'Scheduled', color: 'text-blue-400', bg: 'bg-blue-400/10' },
  { day: 'Friday', type: 'E-Waste', time: '09:00 AM - 12:00 PM', status: 'Scheduled', color: 'text-red-400', bg: 'bg-red-400/10' },
];

const Schedule = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">Collection Schedule</h1>
            <p className="text-gray-400">Real-time tracking of waste collection vehicles in your sector.</p>
          </div>
          <button className="bg-emerald-500 text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform flex items-center gap-2">
            <Bell size={18} /> Notify Me
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <DashboardCard className="lg:col-span-2" title="Weekly Routine" subtitle="Sector 12, Dwarka">
            <div className="space-y-4 mt-4">
              {scheduleData.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", item.bg)}>
                      <CalendarIcon className={item.color} size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.day}</h4>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock size={14} /> {item.time}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-8">
                    <div className="text-right hidden sm:block">
                      <p className={cn("text-sm font-bold", item.color)}>{item.type}</p>
                      <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">CATEGORY</p>
                    </div>
                    <div className={cn(
                      "px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest",
                      item.status === 'Completed' ? "bg-emerald-500/20 text-emerald-500" : "bg-white/10 text-gray-400"
                    )}>
                      {item.status}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </DashboardCard>

          <div className="space-y-6">
            <DashboardCard title="Live Vehicle Tracking" subtitle="Vehicle ID: VB-TRK-402">
              <div className="aspect-square rounded-2xl bg-[#0a150a] relative overflow-hidden mb-6">
                {/* Mock Map */}
                <div className="absolute inset-0 opacity-30">
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
                  className="absolute w-6 h-6 bg-emerald-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                >
                  <Truck size={14} className="text-black" />
                </motion.div>
                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                  <p className="text-[10px] font-bold text-emerald-500">ETA: 12 MINS</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                  <MapPin className="text-emerald-500" size={18} />
                  <div>
                    <p className="text-xs font-bold">Current Location</p>
                    <p className="text-[10px] text-gray-500">Sector 11 Main Road</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                  <CheckCircle2 className="text-blue-500" size={18} />
                  <div>
                    <p className="text-xs font-bold">Next Stop</p>
                    <p className="text-[10px] text-gray-500">Pocket 4, Sector 12</p>
                  </div>
                </div>
              </div>
            </DashboardCard>

            <DashboardCard className="bg-amber-500/5 border-amber-500/20">
              <div className="flex gap-4">
                <AlertCircle className="text-amber-500 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-amber-500">Holiday Notice</h4>
                  <p className="text-xs text-gray-400 mt-1">Collection will be delayed by 2 hours this Sunday due to the local festival parade.</p>
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