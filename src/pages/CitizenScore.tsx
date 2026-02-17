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
  Download, 
  TrendingUp,
  Users,
  Star,
  Droplets,
  Zap
} from 'lucide-react';

const leaderboard = [
  { name: "Green Valley Society", score: 9840, rank: 1, trend: "up" },
  { name: "Skyline Apartments", score: 9210, rank: 2, trend: "up" },
  { name: "Lotus Residency", score: 8950, rank: 3, trend: "down" },
  { name: "Emerald Heights", score: 8720, rank: 4, trend: "stable" },
];

const CitizenScore = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <DashboardCard className="lg:col-span-2" title="Your Sustainability Profile" subtitle="Green Credit Score: 842">
            <div className="flex flex-col md:flex-row items-center gap-10 py-6">
              <div className="relative w-48 h-48">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="10" />
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#10b981" strokeWidth="10" strokeDasharray="283" strokeDashoffset="45" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-black text-emerald-500">842</span>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">PLATINUM</span>
                </div>
              </div>
              
              <div className="flex-grow grid grid-cols-2 gap-4 w-full">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-xs text-gray-500 font-bold mb-1">SEGREGATION</p>
                  <p className="text-xl font-bold">94%</p>
                  <div className="w-full bg-white/10 h-1 mt-2 rounded-full">
                    <div className="bg-emerald-500 h-full w-[94%]" />
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-xs text-gray-500 font-bold mb-1">RECYCLING</p>
                  <p className="text-xl font-bold">72%</p>
                  <div className="w-full bg-white/10 h-1 mt-2 rounded-full">
                    <div className="bg-blue-500 h-full w-[72%]" />
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-xs text-gray-500 font-bold mb-1">COMMUNITY</p>
                  <p className="text-xl font-bold">128</p>
                  <p className="text-[10px] text-emerald-500 font-bold mt-1">+12 this month</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-xs text-gray-500 font-bold mb-1">IMPACT</p>
                  <p className="text-xl font-bold">2.4t</p>
                  <p className="text-[10px] text-blue-500 font-bold mt-1">CO2 Saved</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex gap-4">
              <button className="flex-grow py-4 rounded-2xl bg-emerald-500 text-black font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
                <Download size={20} /> Download Green Certificate
              </button>
              <button className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 font-bold hover:bg-white/10 transition-colors">
                Share Impact
              </button>
            </div>
          </DashboardCard>

          <DashboardCard title="Badges & Achievements">
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Leaf, label: "Eco Warrior", color: "text-emerald-500" },
                { icon: Award, label: "Top Segregator", color: "text-amber-500" },
                { icon: Star, label: "Early Adopter", color: "text-blue-500" },
                { icon: Users, label: "Community Hero", color: "text-purple-500" },
                { icon: Trophy, label: "Zero Waste", color: "text-red-500" },
                { icon: TrendingUp, label: "Impact Maker", color: "text-teal-500" },
              ].map((badge, i) => (
                <div key={i} className="flex flex-col items-center gap-2 group cursor-help">
                  <div className={cn("w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform", badge.color)}>
                    <badge.icon size={24} />
                  </div>
                  <span className="text-[10px] font-bold text-center text-gray-500">{badge.label}</span>
                </div>
              ))}
            </div>
          </DashboardCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <DashboardCard className="lg:col-span-2" title="Society Leaderboard" subtitle="Top performing communities in New Delhi">
            <div className="space-y-4 mt-4">
              {leaderboard.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center font-bold",
                      i === 0 ? "bg-amber-500 text-black" : "bg-white/10 text-white"
                    )}>
                      #{item.rank}
                    </div>
                    <div>
                      <h4 className="font-bold">{item.name}</h4>
                      <p className="text-xs text-gray-500">1,240 Residents</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-black text-emerald-500">{item.score.toLocaleString()}</p>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">CREDITS</p>
                  </div>
                </div>
              ))}
            </div>
          </DashboardCard>

          <DashboardCard title="Monthly Impact" subtitle="Your contribution to Bharat 2047">
            <div className="space-y-6 py-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <Leaf className="text-emerald-500" size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold">12 Trees Planted</p>
                  <p className="text-xs text-gray-500">Equivalent CO2 offset this month</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                  <Droplets className="text-blue-500" size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold">450L Water Saved</p>
                  <p className="text-xs text-gray-500">Through recycled paper usage</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                  <Zap className="text-amber-500" size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold">84kWh Energy Saved</p>
                  <p className="text-xs text-gray-500">By recycling aluminum & plastic</p>
                </div>
              </div>
            </div>
          </DashboardCard>
        </div>
      </div>
    </Layout>
  );
};

export default CitizenScore;