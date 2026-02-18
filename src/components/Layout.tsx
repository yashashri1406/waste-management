"use client";

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Truck, 
  BookOpen, 
  Database, 
  ShoppingBag, 
  BarChart3, 
  Lightbulb, 
  Award, 
  AlertTriangle, 
  ShieldCheck,
  Search,
  Bell,
  User,
  Leaf,
  Menu,
  X
} from 'lucide-react';
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutDashboard, label: 'Digital Twin', path: '/' },
  { icon: Truck, label: 'Collection', path: '/schedule' },
  { icon: BookOpen, label: 'Education', path: '/awareness' },
  { icon: Database, label: 'Centers', path: '/centers' },
  { icon: ShoppingBag, label: 'Marketplace', path: '/resources' },
  { icon: BarChart3, label: 'Intelligence', path: '/impact' },
  { icon: Lightbulb, label: 'AI Insights', path: '/infrastructure' },
  { icon: Award, label: 'Green Credits', path: '/achievements' },
  { icon: AlertTriangle, label: 'Reporting', path: '/report' },
  { icon: ShieldCheck, label: 'Governance', path: '/governance' },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[#020502] text-white font-sans selection:bg-emerald-500/30 flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className={cn(
          "h-full border-r border-white/5 bg-[#050a05] transition-all duration-300 flex flex-col z-50",
          isSidebarOpen ? "w-72" : "w-20"
        )}>
          <div className="p-8 flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <Leaf className="text-black" size={28} />
            </div>
            {isSidebarOpen && (
              <div className="flex flex-col">
                <span className="font-black text-xl tracking-tighter leading-none">VIKSIT BHARAT</span>
                <span className="text-[10px] font-bold text-emerald-500/60 tracking-widest uppercase mt-1">WASTE INTEL 2047</span>
              </div>
            )}
          </div>

          <nav className="mt-8 px-4 space-y-2 flex-grow overflow-y-auto scrollbar-none">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 group",
                  location.pathname === item.path 
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                    : "text-gray-500 hover:text-gray-200 hover:bg-white/5"
                )}
              >
                <item.icon size={22} className={cn(
                  "shrink-0",
                  location.pathname === item.path ? "text-emerald-400" : "text-gray-600"
                )} />
                {isSidebarOpen && <span className="font-bold text-sm tracking-tight">{item.label}</span>}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Header */}
          <header className="h-24 flex items-center justify-between px-12 border-b border-white/5 bg-[#020502]/80 backdrop-blur-xl z-40">
            <div className="flex-grow max-w-3xl relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-emerald-500/30" size={20} />
              <input 
                type="text" 
                placeholder="Search city nodes, recycling centers, or reports..." 
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-16 pr-6 focus:outline-none focus:border-emerald-500/50 transition-all font-bold text-sm text-emerald-500/80 placeholder:text-emerald-500/10"
              />
            </div>
            
            <div className="flex items-center gap-10">
              <button className="relative p-2 text-emerald-500/60 hover:text-emerald-400 transition-colors">
                <Bell size={24} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-emerald-500 rounded-full border-2 border-black" />
              </button>
              
              <div className="flex items-center gap-4 pl-10 border-l border-white/5">
                <div className="text-right">
                  <p className="text-sm font-black uppercase tracking-tighter">Admin Node 01</p>
                  <p className="text-[10px] text-emerald-500/40 font-bold uppercase tracking-widest">GOV-INTEL-AUTH</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                  <User size={24} />
                </div>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 overflow-y-auto p-12 bg-[#020502]">
            <div className="max-w-[1600px] mx-auto">
              {children}
            </div>
          </main>

          {/* System Messages Footer */}
          <footer className="h-16 border-t border-white/5 bg-[#050a05] flex items-center px-12 justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 flex items-center justify-center">
                  <div className="w-1 h-1 bg-gray-500 rounded-full" />
                  <div className="w-1 h-1 bg-gray-500 rounded-full mx-0.5" />
                  <div className="w-1 h-1 bg-gray-500 rounded-full" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-white">System Messages</span>
              </div>
              <p className="text-[10px] font-mono text-emerald-500/40">
                [0] GET https://images.unsplash.com/photo-1526778548025-fa2f45...
              </p>
            </div>
            <button className="text-white">
              <X size={16} />
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Layout;