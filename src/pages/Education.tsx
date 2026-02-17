"use client";

import React from 'react';
import Layout from '@/components/Layout';
import DashboardCard from '@/components/DashboardCard';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { 
  Droplets, 
  Recycle, 
  Zap, 
  Trash2, 
  ArrowRight,
  PlayCircle,
  Info
} from 'lucide-react';

const categories = [
  {
    title: "Wet Waste",
    icon: Droplets,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    items: ["Food Scraps", "Vegetable Peels", "Fruit Waste", "Garden Waste"],
    process: "Composting into organic fertilizer",
    steps: ["Collection", "Sorting", "Aerobic Digestion", "Curing", "Packaging"]
  },
  {
    title: "Dry Waste",
    icon: Recycle,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    items: ["Paper", "Cardboard", "Glass", "Metals"],
    process: "Material Recovery & Repurposing",
    steps: ["Sorting", "Cleaning", "Shredding", "Melting", "New Product"]
  },
  {
    title: "Plastic Waste",
    icon: Zap,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    items: ["PET Bottles", "LDPE Bags", "PVC Pipes", "Packaging"],
    process: "Recycling into plastic pellets",
    steps: ["Washing", "Flaking", "Extrusion", "Pelletizing", "Manufacturing"]
  },
  {
    title: "E-Waste",
    icon: Trash2,
    color: "text-red-400",
    bg: "bg-red-400/10",
    items: ["Old Phones", "Batteries", "Circuit Boards", "Cables"],
    process: "Precious Metal Extraction",
    steps: ["Dismantling", "Crushing", "Separation", "Refining", "Metal Recovery"]
  }
];

const Education = () => {
  return (
    <Layout>
      <div className="space-y-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">Waste Intelligence Academy</h1>
          <p className="text-gray-400 text-lg">Learn how to transform waste into wealth through smart segregation and advanced recycling processes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <DashboardCard className="h-full flex flex-col">
                <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-6", cat.bg)}>
                  <cat.icon className={cat.color} size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{cat.title}</h3>
                <p className="text-sm text-emerald-500/80 font-bold mb-4 uppercase tracking-wider">{cat.process}</p>
                
                <div className="space-y-2 mb-6 flex-grow">
                  {cat.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-1 h-1 bg-emerald-500 rounded-full" />
                      {item}
                    </div>
                  ))}
                </div>

                <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-bold hover:bg-emerald-500 hover:text-black transition-all flex items-center justify-center gap-2 group">
                  View Process <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </DashboardCard>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <DashboardCard className="lg:col-span-2" title="Animated Recycling Flow" subtitle="From Waste to Wealth">
            <div className="relative py-10">
              <div className="flex justify-between items-center relative">
                {/* Connector Line */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-emerald-500/20 -translate-y-1/2 z-0" />
                
                {['Collection', 'Sorting', 'Processing', 'Wealth'].map((step, i) => (
                  <div key={i} className="relative z-10 flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-black border-2 border-emerald-500 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                      <span className="text-xl font-bold text-emerald-500">{i + 1}</span>
                    </div>
                    <span className="text-sm font-bold">{step}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
                <div className="flex gap-4">
                  <Info className="text-emerald-500 shrink-0" size={24} />
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Our AI-powered sorting facilities use hyperspectral imaging to identify materials with 99.8% accuracy, ensuring maximum recovery of high-value recyclables.
                  </p>
                </div>
              </div>
            </div>
          </DashboardCard>

          <DashboardCard title="Awareness Videos" subtitle="Latest from the community">
            <div className="space-y-4">
              {[1, 2, 3].map((v) => (
                <div key={v} className="group cursor-pointer">
                  <div className="aspect-video rounded-xl bg-white/5 border border-white/10 relative overflow-hidden mb-2">
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                      <PlayCircle className="text-emerald-500" size={40} />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-[10px] font-bold">
                      04:2{v}
                    </div>
                  </div>
                  <h4 className="text-sm font-bold group-hover:text-emerald-400 transition-colors">The Future of Circular Economy in India</h4>
                  <p className="text-xs text-gray-500">12.4k views • 2 days ago</p>
                </div>
              ))}
            </div>
          </DashboardCard>
        </div>
      </div>
    </Layout>
  );
};

export default Education;