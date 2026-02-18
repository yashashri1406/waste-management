"use client";

import React from 'react';
import Layout from '@/components/Layout';
import DashboardCard from '@/components/DashboardCard';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { 
  Recycle, 
  AlertTriangle, 
  ArrowRight,
  PlayCircle,
  Info,
  Skull,
  Globe,
  Lightbulb
} from 'lucide-react';

const Awareness = () => {
  return (
    <Layout>
      <div className="space-y-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-black mb-4">AWARENESS <span className="text-emerald-500">HUB</span></h1>
          <p className="text-gray-400 text-lg font-medium">Understanding the critical importance of waste management for our future.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <DashboardCard className="border-red-500/20" title="The Cost of Neglect" subtitle="What happens if we don't recycle?">
            <div className="space-y-6 py-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0">
                  <Skull className="text-red-500" size={24} />
                </div>
                <div>
                  <h4 className="font-black text-red-500 text-sm">HEALTH CRISIS</h4>
                  <p className="text-xs text-gray-400 mt-1">Unmanaged waste leads to groundwater contamination and respiratory diseases in urban centers.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                  <AlertTriangle className="text-amber-500" size={24} />
                </div>
                <div>
                  <h4 className="font-black text-amber-500 text-sm">LANDFILL OVERFLOW</h4>
                  <p className="text-xs text-gray-400 mt-1">By 2047, without recycling, our cities will require 10x more landfill space than currently available.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                  <Globe className="text-blue-500" size={24} />
                </div>
                <div>
                  <h4 className="font-black text-blue-500 text-sm">CLIMATE IMPACT</h4>
                  <p className="text-xs text-gray-400 mt-1">Methane from rotting waste is 25x more potent than CO2 in trapping heat in the atmosphere.</p>
                </div>
              </div>
            </div>
          </DashboardCard>

          <DashboardCard className="lg:col-span-2" title="The Recycling Journey" subtitle="How we transform waste into wealth">
            <div className="relative py-10">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-emerald-500/10 -translate-y-1/2" />
              <div className="flex justify-between relative z-10">
                {[
                  { label: 'Segregation', icon: Recycle },
                  { label: 'Collection', icon: Info },
                  { label: 'Processing', icon: Lightbulb },
                  { label: 'Wealth', icon: Globe }
                ].map((step, i) => (
                  <div key={i} className="flex flex-col items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-black border-2 border-emerald-500 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                      <step.icon className="text-emerald-500" size={24} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest">{step.label}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
                  <h4 className="font-black text-emerald-500 text-sm mb-2">STEP 1: SEGREGATION</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    The most critical step. Separating wet, dry, and hazardous waste at the source ensures 99% recovery rate at processing centers.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-blue-500/5 border border-blue-500/20">
                  <h4 className="font-black text-blue-500 text-sm mb-2">STEP 2: PROCESSING</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Wet waste becomes compost, dry waste becomes raw material for industries, and plastic becomes fuel or construction material.
                  </p>
                </div>
              </div>
            </div>
          </DashboardCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <DashboardCard title="Awareness Videos" subtitle="Learn the process">
            <div className="space-y-4">
              {[1, 2, 3].map((v) => (
                <div key={v} className="group cursor-pointer">
                  <div className="aspect-video rounded-xl bg-white/5 border border-white/10 relative overflow-hidden mb-2">
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                      <PlayCircle className="text-emerald-500" size={40} />
                    </div>
                  </div>
                  <h4 className="text-xs font-black group-hover:text-emerald-400 transition-colors">Recycling Process: From Bin to Product</h4>
                </div>
              ))}
            </div>
          </DashboardCard>

          <DashboardCard className="lg:col-span-2" title="Community Impact Stories" subtitle="Real results from smart waste management">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-sm font-medium text-gray-300 italic mb-4">
                  "By segregating our waste, our society earned ₹45,000 last month from compost sales and dry waste collection."
                </p>
                <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">- Secretary, Green Valley Society</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-sm font-medium text-gray-300 italic mb-4">
                  "The awareness hub helped us understand that our old electronics were poisoning the local soil. Now we use the E-waste center."
                </p>
                <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest">- Resident, Sector 12</p>
              </div>
            </div>
          </DashboardCard>
        </div>
      </div>
    </Layout>
  );
};

export default Awareness;