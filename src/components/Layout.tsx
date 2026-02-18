"use client";

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Calendar, 
  BookOpen, 
  Map as MapIcon, 
  Database, 
  Building2, 
  Trophy, 
  AlertTriangle, 
  BarChart3,
  Menu,
  X,
  Bell,
  Leaf,
  ShieldCheck,
  Activity
} from 'lucide-react';
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutDashboard, label: 'Digital Twin', path: '/' },
  { icon: Building2, label: 'Infrastructure', path: '/infrastructure' },
  { icon: Calendar, label: 'Collection Schedule', path: '/schedule' },
  { icon: MapIcon, label: 'Interactive Map', path: '/map' },
  { icon: BookOpen, label: 'Awareness Hub', path: '/awareness' },
  { icon: Database, label: 'Recycling Centres', path: '/centers' },
  { icon: Activity, label: 'Resource Utilization', path: '/resources' },
  { icon: Trophy, label: 'Green Achievements', path: '/achievements' },
  { icon: AlertTriangle, label: 'Report Dumping', path: '/report' },
  { icon: BarChart3, label: 'Impact Analysis', path: '/impact' },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#020502] text-white font-sans selection:bg-emerald-500/30">
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed left-0 top-0 h-full z-50 transition-all duration-300 border-r border-emerald-900/20 bg-black/40 backdrop-blur-2xl",
          isSidebarOpen ? "w-72" : "w-20"
        )}
      >
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.4)]">
            <Leaf className="text-black" size={24} />
          </div>
          {isSidebarOpen && (
            <div className="flex flex-col">
              <span className="font-black text-lg tracking-tighter leading-none text-emerald-400">
                GREENGRID 2047
              </span>
              <span className="text-[10px] font-bold text-emerald-700 tracking-[0.2em] uppercase">
                Viksit Bharat
              </span>
            </div>
          )}
        </div>

        <nav className="mt-8 px-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 group relative overflow-hidden",
                location.pathname === item.path 
                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                  : "text-gray-500 hover:bg-white/5 hover:text-gray-200"
              )}
            >
              {location.pathname === item.path && (
                <div className="absolute left-0 top-0 w-1 h-full bg-emerald-500" />
              )}
              <item.icon size={20} className={cn(
                "transition-transform duration-300 group-hover:scale-110",
                location.pathname === item.path ? "text-emerald-400" : "text-gray-600"
              )} />
              {isSidebarOpen && <span className="font-bold text-xs uppercase tracking-wider">{item.label}</span>}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-8 left-0 w-full px-6">
          {isSidebarOpen && (
            <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="text-emerald-500" size={16} />
                <span className="text-[10px] font-black text-emerald-500 uppercase">Gov-Secure Node</span>
              </div>
              <p className="text-[10px] text-gray-500 leading-tight">Encrypted connection to Central Governance Hub.</p>
            </div>
          )}
        </div>

        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute top-1/2 -right-3 w-6 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform z-50"
        >
          {isSidebarOpen ? <X size={14} /> : <Menu size={14} />}
        </button>
      </aside>

      {/* Main Content */}
      <main className={cn(
        "transition-all duration-300 min-h-screen",
        isSidebarOpen ? "pl-72" : "pl-20"
      )}>
        {/* Top Navbar */}
        <header className="h-20 border-b border-emerald-900/10 bg-black/20 backdrop-blur-md flex items-center justify-between px-10 sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <div className="h-8 w-[2px] bg-emerald-500/30" />
            <div>
              <h2 className="text-[10px] font-black text-emerald-500/60 uppercase tracking-[0.3em]">Digital Waste Governance</h2>
              <h1 className="text-lg font-black tracking-tight">COMMAND CENTER <span className="text-emerald-500">01</span></h1>
            </div>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 bg-emerald-500/5 px-5 py-2.5 rounded-full border border-emerald-500/10">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
              <span className="text-[10px] font-black text-emerald-400 tracking-widest">SYSTEM STATUS: OPTIMAL</span>
            </div>
            
            <div className="flex items-center gap-6">
              <button className="relative p-2 text-gray-500 hover:text-emerald-400 transition-colors">
                <Bell size={20} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-black" />
              </button>
              
              <div className="flex items-center gap-4 pl-6 border-l border-emerald-900/20">
                <div className="text-right hidden lg:block">
                  <p className="text-xs font-black uppercase tracking-tighter">Officer R. Sharma</p>
                  <p className="text-[10px] text-emerald-500/70 font-bold">Governance ID: 2047-IND-01</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 border border-emerald-500/30 shadow-lg" />
              </div>
            </div>
          </div>
        </header>

        <div className="p-10 max-w-[1600px] mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;