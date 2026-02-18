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
  AlertCircle,
  Droplets,
  Recycle,
  Zap,
  Stethoscope
} from 'lucide-react';

const dailySchedule = [
  { type: 'Wet Waste', time: '06:00 AM - 08:00 AM', vehicle: 'VB-WET-101', area: 'Sector 12, Pocket A', color: 'text-blue-400', bg: 'bg-blue-400/10', icon: Droplets },
  { type: 'Dry Waste', time: '08:30 AM - 10:30 AM', vehicle: 'VB-DRY-204', area: 'Sector 12, Pocket B', color: 'text-amber-400', bg: 'bg-amber-400/10', icon: Recycle },
  { type: 'Plastic Waste', time: '11:00 AM - 01:00 PM', vehicle: 'VB-PLT-302', area: 'Sector 12, Main Market', color: 'text-emerald-400', bg: 'bg-emerald-400/10', icon: Zap },
  { type: 'Hospital Waste', time: '02:00 PM - 04:00 PM', vehicle: 'VB-MED-001', area: 'City Hospital Zone', color: 'text-red-400', bg: 'bg-red-400/10', icon: Stethoscope },
];

const Schedule = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-black mb-2">COLLECTION <span className="text-emerald-500">SCHEDULE</span></h1>
            <p className="text-gray-400 font-medium">All waste types are collected daily. Track your assigned vehicles.</p>
          </div>
          <button className="bg-emerald-500 text-black px-6 py-3 rounded-xl font-black text-xs hover:scale-105 transition-transform flex items-center gap-2">
            <Bell size={16} /> NOTIFY MY SECTOR
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <DashboardCard className="lg:col-span-2" title="Daily Routine" subtitle="Sector 12, Dwarka - Active Today">
            <div className="space-y-4 mt-4">
              {dailySchedule.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", item.bg)}>
                      <item.icon className={item.color} size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-lg">{item.type}</h4>
                      <div className="flex items-center gap-2 text-xs text-gray-500 font-bold">
                        <Clock size={14} /> {item.time}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-8">
                    <div className="text-right hidden sm:block">
                      <p className="text-sm font-black text-white">{item.vehicle}</p>
                      <p className="text-[10px] text-emerald-500 font-black uppercase tracking-widest">ASSIGNED VEHICLE</p>
                    </div>
                    <div className="text-right hidden md:block">
                      <p className="text-sm font-black text-gray-400">{item.area}</p>
                      <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">TARGET AREA</p>
                    </div>
                    <div className="px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-500 text-[10px] font-black uppercase">
                      DAILY
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </DashboardCard>

          <div className="space-y-6">
            <DashboardCard title="Live Vehicle Assignment" subtitle="Vehicle ID: VB-MED-001">
              <div className="aspect-square rounded-2xl bg-[#0a150a] relative overflow-hidden mb-6 border border-white/5">
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
                  className="absolute w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.5)]"
                >
                  <Stethoscope size={16} className="text-white" />
                </motion.div>
                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                  <p className="text-[10px] font-black text-red-500 uppercase">HOSPITAL WASTE ROUTE</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                  <MapPin className="text-emerald-500" size={18} />
                  <div>
                    <p className="text-xs font-black">Current Location</p>
                    <p className="text-[10px] text-gray-500 font-bold">AIIMS Trauma Center Node</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                  <CheckCircle2 className="text-blue-500" size={18} />
                  <div>
                    <p className="text-xs font-black">Next Stop</p>
                    <p className="text-[10px] text-gray-500 font-bold">Safdarjung Hospital Zone</p>
                  </div>
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