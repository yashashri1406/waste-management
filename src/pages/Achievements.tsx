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
  Star, 
  TrendingUp, 
  Users, 
  ShieldCheck,
  Medal
} from 'lucide-react';

const rankings = [
  { name: "Green Valley Society", score: 9840, level: "Gold", rank: 1 },
  { name: "Skyline Apartments", score: 9210, level: "Gold", rank: 2 },
  { name: "Lotus Residency", score: 8450, level: "Silver", rank: 3 },
  { name: "Emerald Heights", score: 7920, level: "Silver", rank: 4 },
];

const Achievements = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-black tracking-tighter mb-2">GREEN ACHIEVEMENTS</h1>
          <p className="text-gray-500 font-medium">Recognition for sustainable excellence in the community.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <DashboardCard className="lg:col-span-2" title="Sustainability Profile" subtitle="Current Level: Platinum">
            <div className="flex flex-col md:flex-row items-center gap-12 py-8">
              <div className="relative w-52 h-52">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#10b981" strokeWidth="8" strokeDasharray="283" strokeDashoffset="45" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Medal className="text-emerald-500 mb-2" size={40} />
                  <span className="text-3xl font-black">842</span>
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">POINTS</span>
                </div>
              </div>
              
              <div className="flex-grow grid grid-cols-2 gap-6 w-full">
                <div className="p-5 rounded-3xl bg-white/5 border border-white/5">
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Segregation</p>
                  <p className="text-2xl font-black">94%</p>
                  <div className="w-full bg-white/10 h-1 mt-3 rounded-full">
                    <div className="bg-emerald-500 h-full w-[94%]" />
                  </div>
                </div>
                <div className="p-5 rounded-3xl bg-white/5 border border-white/5">
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Area Rank</p>
                  <p className="text-2xl font-black">#12</p>
                  <p className="text-[10px] text-emerald-500 font-bold mt-1">Top 5% in Ward</p>
                </div>
                <div className="p-5 rounded-3xl bg-white/5 border border-white/5">
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Impact</p>
                  <p className="text-2xl font-black">2.4t</p>
                  <p className="text-[10px] text-blue-500 font-bold mt-1">CO2 Offset</p>
                </div>
                <div className="p-5 rounded-3xl bg-white/5 border border-white/5">
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Badges</p>
                  <p className="text-2xl font-black">18</p>
                  <p className="text-[10px] text-amber-500 font-bold mt-1">+3 this month</p>
                </div>
              </div>
            </div>
          </DashboardCard>

          <DashboardCard title="Monthly Badges">
            <div className="grid grid-cols-3 gap-4 py-4">
              {[
                { icon: Leaf, label: "Eco Warrior", color: "text-emerald-500" },
                { icon: Award, label: "Top Segregator", color: "text-amber-500" },
                { icon: Star, label: "Early Adopter", color: "text-blue-500" },
                { icon: Users, label: "Community Hero", color: "text-purple-500" },
                { icon: Trophy, label: "Zero Waste", color: "text-red-500" },
                { icon: ShieldCheck, label: "Verified", color: "text-teal-500" },
              ].map((badge, i) => (
                <div key={i} className="flex flex-col items-center gap-2 group cursor-help">
                  <div className={cn("w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover:scale-110 group-hover:border-emerald-500/30", badge.color)}>
                    <badge.icon size={28} />
                  </div>
                  <span className="text-[8px] font-black text-center text-gray-500 uppercase tracking-widest">{badge.label}</span>
                </div>
              ))}
            </div>
          </DashboardCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <DashboardCard className="lg:col-span-2" title="Area Performance Ranking" subtitle="Top performing localities in New Delhi">
            <div className="space-y-4 mt-6">
              {rankings.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-5 rounded-3xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-all">
                  <div className="flex items-center gap-6">
                    <div className={cn(
                      "w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg",
                      i === 0 ? "bg-amber-500 text-black" : "bg-white/10 text-white"
                    )}>
                      #{item.rank}
                    </div>
                    <div>
                      <h4 className="font-black tracking-tight">{item.name}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={cn(
                          "text-[8px] font-black px-2 py-0.5 rounded uppercase tracking-widest",
                          item.level === 'Gold' ? "bg-amber-500/10 text-amber-500" : "bg-gray-500/10 text-gray-400"
                        )}>
                          {item.level} LEVEL
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-emerald-500">{item.score.toLocaleString()}</p>
                    <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest">POINTS</p>
                  </div>
                </div>
              ))}
            </div>
          </DashboardCard>

          <DashboardCard title="Sustainability Levels">
            <div className="space-y-8 py-4">
              {[
                { label: 'Bronze', points: '0 - 250', color: 'bg-amber-700' },
                { label: 'Silver', points: '251 - 500', color: 'bg-gray-400' },
                { label: 'Gold', points: '501 - 750', color: 'bg-amber-500' },
                { label: 'Platinum', points: '751+', color: 'bg-emerald-500' },
              ].map((level, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className={cn("w-3 h-12 rounded-full", level.color)} />
                  <div>
                    <p className="text-sm font-black uppercase tracking-widest">{level.label}</p>
                    <p className="text-[10px] text-gray-500 font-bold">{level.points} Points Required</p>
                  </div>
                  {level.label === 'Platinum' && (
                    <div className="ml-auto">
                      <CheckCircle2 className="text-emerald-500" size={20} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </DashboardCard>
        </div>
      </div>
    </Layout>
  );
};

export default Achievements;