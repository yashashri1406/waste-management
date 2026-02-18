"use client";

import React from 'react';
import Layout from '@/components/Layout';
import DashboardCard from '@/components/DashboardCard';
import { motion } from 'framer-motion';
import { 
  Leaf, 
  TrendingUp, 
  DollarSign, 
  Info, 
  CheckCircle2,
  ArrowUpRight,
  Recycle,
  Lightbulb
} from 'lucide-react';

const CircularEconomy = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-black mb-2">CIRCULAR <span className="text-emerald-500">ECONOMY</span></h1>
            <p className="text-gray-400 font-medium">Transforming waste into wealth for the city and its citizens.</p>
          </div>
          
          <div className="flex gap-3">
            <div className="bg-emerald-500/10 border border-emerald-500/20 px-6 py-3 rounded-xl">
              <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">City Profit (Q1)</p>
              <p className="text-xl font-black">₹12.4 Cr</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <DashboardCard className="lg:col-span-2" title="The Power of Compost" subtitle="Waste-to-Wealth Transformation">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
              <div className="space-y-6">
                <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
                  <h4 className="font-black text-emerald-500 text-sm mb-2 flex items-center gap-2">
                    <Leaf size={18} /> ADVANTAGES FOR PEOPLE
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "100% Organic fertilizer for home gardens",
                      "Reduces household waste by 60%",
                      "Eliminates foul odors from bins",
                      "Earn Green Credits for every kg produced"
                    ].map((item, i) => (
                      <li key={i} className="text-xs text-gray-400 flex items-center gap-2">
                        <CheckCircle2 size={12} className="text-emerald-500" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-5 rounded-2xl bg-blue-500/5 border border-blue-500/20">
                  <h4 className="font-black text-blue-500 text-sm mb-2 flex items-center gap-2">
                    <TrendingUp size={18} /> CITY & GOV PROFITS
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Reduced landfill management costs",
                      "Revenue from bulk compost sales to farmers",
                      "Carbon credit earnings on global markets",
                      "Job creation in processing facilities"
                    ].map((item, i) => (
                      <li key={i} className="text-xs text-gray-400 flex items-center gap-2">
                        <CheckCircle2 size={12} className="text-blue-500" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-black/40 rounded-2xl border border-white/5 p-6 flex flex-col justify-between">
                <div>
                  <h4 className="font-black text-white text-sm mb-4">COMPOST AVAILABILITY</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-400">Sector 12 Hub</span>
                      <span className="text-xs font-black text-emerald-500">AVAILABLE (1.2 Tons)</span>
                    </div>
                    <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[80%]" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-400">Dwarka MRF</span>
                      <span className="text-xs font-black text-amber-500">LOW STOCK (200kg)</span>
                    </div>
                    <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-amber-500 h-full w-[20%]" />
                    </div>
                  </div>
                </div>
                <button className="w-full py-4 rounded-xl bg-emerald-500 text-black font-black text-xs hover:scale-[1.02] transition-transform mt-8">
                  REQUEST COMPOST FOR SOCIETY
                </button>
              </div>
            </div>
          </DashboardCard>

          <DashboardCard title="Dry Waste Repurposing" subtitle="Source of Income">
            <div className="space-y-6 py-4">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 group hover:border-emerald-500/30 transition-all">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 bg-emerald-500/10 rounded-xl">
                    <Recycle className="text-emerald-500" size={20} />
                  </div>
                  <h4 className="font-black text-sm">PAPER MAKING</h4>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">
                  Dry paper waste is collected and processed into high-quality recycled paper. This initiative provides direct income to 200+ local vendors.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black text-emerald-500">PROFIT: ₹8.5L / MONTH</span>
                  <ArrowUpRight size={14} className="text-gray-500" />
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 group hover:border-blue-500/30 transition-all">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 bg-blue-500/10 rounded-xl">
                    <Lightbulb className="text-blue-500" size={20} />
                  </div>
                  <h4 className="font-black text-sm">PLASTIC TO FUEL</h4>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">
                  Non-recyclable plastics are converted into industrial fuel, reducing the city's energy costs by 12% annually.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black text-blue-500">SAVINGS: ₹2.4 Cr / YEAR</span>
                  <ArrowUpRight size={14} className="text-gray-500" />
                </div>
              </div>
            </div>
          </DashboardCard>
        </div>
      </div>
    </Layout>
  );
};

export default CircularEconomy;