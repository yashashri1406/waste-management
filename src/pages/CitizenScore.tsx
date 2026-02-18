"use client";

import React from 'react';
import Layout from '@/components/Layout';
import DashboardCard from '@/components/DashboardCard';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { 
  Trophy, 
  Leaf, 
  Award, 
  TrendingUp,
  Users,
  Star,
  Droplets,
  Zap,
  CheckCircle2
} from 'lucide-react';

const achievements = [
  { name: "Eco Warrior", description: "Segregated 100kg of waste correctly.", icon: Leaf, color: "text-emerald-500", bg: "bg-emerald-500/10", unlocked: true },
  { name: "Zero Waste Hero", description: "Zero landfill waste for 30 days.", icon: Trophy, color: "text-amber-500", bg: "bg-amber-500/10", unlocked: true },
  { name: "Community Leader", description: "Referred 10 neighbors to the platform.", icon: Users, color: "text-blue-500", bg: "bg-blue-500/10", unlocked: false },
  { name: "Compost Master", description: "Produced 50kg of Grade A compost.", icon: Award, color: "text-purple-500", bg: "bg-purple-500/10", unlocked: false },
];

const CitizenScore = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <DashboardCard className="lg:col-span-2" title="Sustainability Achievements" subtitle="Green Credit Score: 842">
            <div className="flex flex-col md:flex-row items-center gap-10 py-6">
              <div className="relative w-48 h-48">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="10" />
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#10b981" strokeWidth="10" strokeDasharray="283" strokeDashoffset="45" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-black text-emerald-500">842</span>
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">PLATINUM TIER</span>
                </div>
              </div>
              
              <div className="flex-grow grid grid-cols-2 gap-4 w-full">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-[10px] text-gray-500 font-black mb-1 uppercase tracking-widest">SEGREGATION</p>
                  <p className="text-xl font-black">94%</p>
                  <div className="w-full bg-white/10 h-1 mt-2 rounded-full">
                    <div className="bg-emerald-500 h-full w-[94%]" />
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-[10px] text-gray-500 font-black mb-1 uppercase tracking-widest">RECYCLING</p>
                  <p className="text-xl font-black">72%</p>
                  <div className="w-full bg-white/10 h-1 mt-2 rounded-full">
                    <div className="bg-blue-500 h-full w-[72%]" />
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-[10px] text-gray-500 font-black mb-1 uppercase tracking-widest">ACHIEVEMENTS</p>
                  <p className="text-xl font-black">12 / 24</p>
                  <p className="text-[10px] text-emerald-500 font-bold mt-1">+2 this month</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-[10px] text-gray-500 font-black mb-1 uppercase tracking-widest">IMPACT</p>
                  <p className="text-xl font-black">2.4t</p>
                  <p className="text-[10px] text-blue-500 font-bold mt-1">CO2 Saved</p>
                </div>
              </div>
            </div>
          </DashboardCard>

          <DashboardCard title="Next Milestone">
            <div className="flex flex-col items-center text-center py-4">
              <div className="w-20 h-20 rounded-full bg-white/5 border-2 border-dashed border-white/20 flex items-center justify-center mb-4">
                <Star className="text-gray-500" size={32} />
              </div>
              <h4 className="font-black mb-2">DIAMOND TIER</h4>
              <p className="text-xs text-gray-400 mb-6">Reach 1,000 credits to unlock exclusive community rewards and priority compost delivery.</p>
              <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden mb-2">
                <div className="bg-emerald-500 h-full w-[84%]" />
              </div>
              <p className="text-[10px] font-black text-emerald-500">158 CREDITS TO GO</p>
            </div>
          </DashboardCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((ach, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <DashboardCard className={cn("h-full flex flex-col items-center text-center", !ach.unlocked && "opacity-50 grayscale")}>
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-4", ach.bg)}>
                  <ach.icon className={ach.color} size={32} />
                </div>
                <h3 className="font-black text-sm mb-2">{ach.name}</h3>
                <p className="text-[10px] text-gray-500 font-medium mb-4">{ach.description}</p>
                {ach.unlocked ? (
                  <div className="mt-auto flex items-center gap-1 text-[10px] font-black text-emerald-500 uppercase">
                    <CheckCircle2 size={12} /> Unlocked
                  </div>
                ) : (
                  <div className="mt-auto text-[10px] font-black text-gray-500 uppercase">
                    Locked
                  </div>
                )}
              </DashboardCard>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CitizenScore;