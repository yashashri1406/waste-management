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
  Activity,
  Search,
  User
} from 'lucide-react';
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutDashboard, label: 'Digital Twin', path: '/' },
  { icon: MapIcon, label: 'Interactive Map', path: '/map' },
  { icon: Calendar, label: 'Collection Schedule', path: '/schedule' },
  { icon: Building2, label: 'Infrastructure', path: '/infrastructure' },
  { icon: Database, label: 'Recycling Centres', path: '/centers' },
  { icon: Activity, label: 'Resource Utilization', path: '/resources' },
  { icon: Trophy, label: 'Green Achievements', path: '/achievements' },
  { icon: AlertTriangle, label: 'Report Dumping', path: '/report' },
  { icon: BookOpen, label: 'Awareness Hub', path: '/awareness' },
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
          "fixed left-0 top-0 h-full z-50 transition-all duration-300 border-r border-emerald-900/20 bg-black/40 backdrop-blur-2xl flex flex-col",
          isSidebarOpen ? "w-72" : "w-20"
        )}
      >
        <div className="p-6 flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.4)]">
            <Leaf className="text-black" size={24} />
          </div>
          {isSidebarOpen && (
            <div className="flex flex-col">
              <span className="font-black text-lg tracking-tighter leading-none text-emerald-400">
                VIKSIT BHARAT
              </span>
              <span className="text-[10px] font-bold text-emerald-700 tracking-[0.2em] uppercase">
                Waste Intel 2047
              </span>
            </div>
          )}
        </div>

        <nav className="mt-4 px-4 space-y-1 flex-grow overflow-y-auto scrollbar-none">
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
                "transition-transform duration-300 group-hover:scale-110 shrink-0",
                location.pathname === item.path ? "text-emerald-400" : "text-gray-600"
              )} />
              {isSidebarOpen && <span className="font-bold text-xs uppercase tracking-wider truncate">{item.label}</span>}
            </Link>
          ))}
        </nav>

        <div className="p-6 shrink-0">
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
      </aside>

      {/* Main Content */}
      <main className={cn(
        "transition-all duration-300 min-h-screen",
        isSidebarOpen ? "pl-72" : "pl-20"
      )}>
        {/* Top Navbar */}
        <header className="h-24 border-b border-emerald-900/10 bg-black/20 backdrop-blur-md flex items-center justify-between px-10 sticky top-0 z-40">
          <div className="flex items-center gap-6 flex-grow max-w-3xl">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-500 hover:bg-emerald-500/20 transition-all shrink-0"
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            
            <div className="flex-grow relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-emerald-500/40" size={20} />
              <input 
                type="text" 
                placeholder="Search city nodes, recycling centers, or reports..." 
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-16 pr-6 focus:outline-none focus:border-emerald-500/50 transition-all font-bold text-sm text-emerald-500/80 placeholder:text-emerald-500/20"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-8">
            <button className="relative p-3 text-emerald-500/60 hover:text-emerald-400 transition-colors bg-white/5 rounded-xl border border-white/10">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-emerald-500 rounded-full border-2 border-black animate-pulse" />
            </button>
            
            <div className="flex items-center gap-4 pl-8 border-l border-emerald-900/20">
              <div className="text-right hidden lg:block">
                <p className="text-xs font-black uppercase tracking-tighter">Admin Node 01</p>
                <p className="text-[10px] text-emerald-500/40 font-bold uppercase tracking-widest">Gov-Intel-Auth</p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                <User size={24} />
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