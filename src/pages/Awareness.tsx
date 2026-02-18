"use client";

import React from 'react';
import Layout from '@/components/Layout';
import DashboardCard from '@/components/DashboardCard';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { 
  BookOpen, 
  Leaf, 
  AlertTriangle, 
  Activity, 
  Recycle, 
  Droplets, 
  Zap, 
  Stethoscope,
  ArrowRight,
  Info
} from 'lucide-react';

const processes = [
  {
    title: "Composting Process",
    category: "Wet Waste",
    icon: Droplets,
    color: "text-blue-400",
    steps: ["Collection", "Sorting", "Aerobic Digestion", "Curing", "Packaging"],
    impact: "Reduces landfill methane by 90%"
  },
  {
    title: "Plastic Recycling",
    category: "Dry Waste",
    icon: Recycle,
    color: "text-emerald-400",
    steps: ["Washing", "Shredding", "Melting", "Pelletizing", "Manufacturing"],
    impact: "Saves 80% energy vs virgin plastic"
  },
  {
    title: "E-Waste Disposal",
    category: "Specialized",
    icon: Zap,
    color: "text-amber-400",
    steps: ["Dismantling", "Crushing", "Separation", "Refining", "Metal Recovery"],
    impact: "Prevents toxic lead/mercury leaks"
  },
  {
    title: "Hospital Waste",
    category: "Critical",
    icon: Stethoscope,
    color: "text-red-400",
    steps: ["Segregation", "Autoclaving", "Incineration", "Safe Disposal", "Monitoring"],
    impact: "Eliminates bio-hazard risks"
  }
];

const Awareness = () => {
  return (
    <Layout>
      <div className="space-y-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-black tracking-tighter mb-2">AWARENESS HUB</h1>
          <p className="text-gray-500 font-medium">Understanding the science of waste management and its impact on Bharat 2047.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <DashboardCard className="lg:col-span-2" title="Why Waste Management Matters?">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
              <div className="space-y-6">
                <div className="p-6 rounded-3xl bg-red-500/5 border border-red-500/10">
                  <div className="flex items-center gap-3 mb-3">
                    <AlertTriangle className="text-red-500" size={20} />
                    <h4 className="text-sm font-black uppercase tracking-widest text-red-500">Environmental Damage</h4>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">Unmanaged waste leads to soil contamination, groundwater pollution, and massive greenhouse gas emissions from landfills.</p>
                </div>
                <div className="p-6 rounded-3xl bg-amber-500/5 border border-amber-500/10">
                  <div className="flex items-center gap-3 mb-3">
                    <Activity className="text-amber-500" size={20} />
                    <h4 className="text-sm font-black uppercase tracking-widest text-amber-500">Health Risks</h4>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">Illegal dumping sites are breeding grounds for diseases and release toxic microplastics into the food chain.</p>
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden border border-emerald-500/20 bg-[#050a05] flex items-center justify-center p-10">
                <div className="text-center">
                  <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
                    <Leaf className="text-emerald-500" size={40} />
                  </div>
                  <h4 className="text-xl font-black mb-2">The 2047 Vision</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">A zero-waste city where every gram of waste is converted into a resource, powering a circular economy.</p>
                </div>
              </div>
            </div>
          </DashboardCard>

          <DashboardCard title="Quick Facts">
            <div className="space-y-6 py-4">
              {[
                { label: 'Plastic Life', value: '450 Years', desc: 'Time for a PET bottle to decompose.' },
                { label: 'Paper Savings', value: '17 Trees', desc: 'Saved per ton of recycled paper.' },
                { label: 'Energy Recovery', value: '60%', desc: 'Energy saved by recycling aluminum.' },
              ].map((fact, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">{fact.label}</span>
                    <span className="text-lg font-black text-emerald-500">{fact.value}</span>
                  </div>
                  <p className="text-[10px] text-gray-600 font-medium">{fact.desc}</p>
                </div>
              ))}
            </div>
          </DashboardCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processes.map((proc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <DashboardCard className="h-full flex flex-col group">
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110", `bg-${proc.color.split('-')[1]}-500/10`)}>
                  <proc.icon className={proc.color} size={28} />
                </div>
                <h3 className="text-lg font-black mb-1 tracking-tight">{proc.title}</h3>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-6">{proc.category}</p>
                
                <div className="space-y-3 mb-8 flex-grow">
                  {proc.steps.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[8px] font-black text-gray-500">
                        {idx + 1}
                      </div>
                      <span className="text-xs font-bold text-gray-400">{step}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
                  <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-1">Impact</p>
                  <p className="text-[10px] text-gray-400 font-medium leading-tight">{proc.impact}</p>
                </div>
              </DashboardCard>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Awareness;