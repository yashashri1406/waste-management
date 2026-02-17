"use client";

import React from 'react';
import Layout from '@/components/Layout';
import DashboardCard from '@/components/DashboardCard';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, 
  Search, 
  Filter, 
  CheckCircle2, 
  ArrowUpRight,
  Tag,
  Truck
} from 'lucide-react';

const products = [
  { name: "Organic Compost (5kg)", price: "₹249", category: "Compost", rating: 4.8, image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&q=80&w=200" },
  { name: "Recycled Plastic Pellets", price: "₹85/kg", category: "Raw Material", rating: 4.9, image: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?auto=format&fit=crop&q=80&w=200" },
  { name: "Eco-Friendly Planters", price: "₹599", category: "Home Decor", rating: 4.7, image: "https://images.unsplash.com/photo-1485841890310-6a055c88698a?auto=format&fit=crop&q=80&w=200" },
  { name: "Recycled Paper Notebooks", price: "₹120", category: "Stationery", rating: 4.6, image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=200" },
];

const Marketplace = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">Circular Marketplace</h1>
            <p className="text-gray-400">Buy recycled products or sell your waste to verified vendors.</p>
          </div>
          
          <div className="flex gap-3">
            <button className="bg-emerald-500 text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform flex items-center gap-2">
              <Tag size={18} /> Sell Waste
            </button>
            <button className="bg-white/5 border border-white/10 px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">
              Vendor Portal
            </button>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input 
              type="text" 
              placeholder="Search for recycled products, compost, or vendors..." 
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-emerald-500/50 transition-colors"
            />
          </div>
          <button className="bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-colors">
            <Filter size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <DashboardCard className="p-0 group cursor-pointer">
                <div className="aspect-square overflow-hidden relative">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1">
                    <CheckCircle2 size={12} className="text-emerald-500" /> VERIFIED
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest mb-1">{product.category}</p>
                  <h3 className="font-bold mb-2 group-hover:text-emerald-400 transition-colors">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">{product.price}</span>
                    <button className="p-2 bg-emerald-500/10 text-emerald-500 rounded-lg hover:bg-emerald-500 hover:text-black transition-all">
                      <ShoppingBag size={18} />
                    </button>
                  </div>
                </div>
              </DashboardCard>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <DashboardCard className="lg:col-span-2" title="Active Orders & Tracking">
            <div className="space-y-4">
              {[1, 2].map((order) => (
                <div key={order} className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                      <Truck className="text-emerald-500" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold">Order #VB-2047-{order}</h4>
                      <p className="text-xs text-gray-500">2 items • Out for delivery</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-emerald-500">Arriving Today</p>
                    <button className="text-[10px] font-bold text-gray-400 hover:text-white flex items-center gap-1 ml-auto">
                      TRACK <ArrowUpRight size={10} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </DashboardCard>

          <DashboardCard title="Vendor Verification" subtitle="Trust & Safety">
            <div className="flex flex-col items-center text-center py-4">
              <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4 border-2 border-emerald-500/20">
                <ShieldCheck className="text-emerald-500" size={40} />
              </div>
              <h4 className="font-bold mb-2">Become a Verified Vendor</h4>
              <p className="text-xs text-gray-400 mb-6">Join 500+ verified recycling partners and start trading waste-to-wealth products.</p>
              <button className="w-full py-3 rounded-xl bg-emerald-500 text-black font-bold hover:scale-105 transition-transform">
                Apply Now
              </button>
            </div>
          </DashboardCard>
        </div>
      </div>
    </Layout>
  );
};

export default Marketplace;