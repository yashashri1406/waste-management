"use client";

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Calendar, 
  Lightbulb, 
  MapPin, 
  Recycle, 
  Trophy, 
  AlertTriangle, 
  ShieldCheck,
  Menu,
  X,
  Bell,
  Leaf,
  Map as MapIcon,
  BarChart3,
  Activity
} from 'lucide-react';
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutDashboard, label: 'Digital Twin', path: '/' },
  { icon: MapIcon, label: 'MAP', path: '/map' },
  { icon: Calendar, label: 'Collection Schedule', path: '/schedule' },
  { icon: Lightbulb, label: 'Awareness Hub', path: '/awareness' },
  { icon: MapPin, label: 'Recycling Centers', path: '/centers' },
  { icon: Recycle, label: 'Circular Economy', path: '/circular-economy' },
  { icon: Activity, label: 'AI Recommendations', path: '/recommendations' },
  { icon: BarChart3, label: 'Impact', path: '/impact' },
  { icon: Trophy, label: 'Green Credits', path: '/credits' },
  { icon: AlertTriangle, label: 'Report Dumping', path: '/report' },
  { icon: ShieldCheck, label: 'Governance', path: '/admin' },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#050a05] text-white font-sans selection:bg-emerald-500/30">
      <aside 
        className={cn(
          "fixed left-0 top-0 h-full z-50 transition-all duration-300 border-r border-emerald-900/30 bg-black/40 backdrop-blur-xl",
          isSidebarOpen ? "w-64" : "w-20"
        )}
      >
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.4)]">
            <Leaf className="text-black" size={24} />
          </div>
          {isSidebarOpen && (
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                VIKSIT BHARAT
              </span>
              <span className="text-[10px] text-emerald-500/60 font-bold">WASTE INTEL 2047</span>
            </div>
          )}
        </div>

        <nav className="mt-4 px-3 space-y-1 overflow-y-auto max-h-[calc(100vh-120px)] scrollbar-hide">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 group",
                location.pathname === item.path 
                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              )}
            >
              <item.icon size={20} className={cn(
                "transition-transform duration-200 group-hover:scale-110",
                location.pathname === item.path ? "text-emerald-400" : "text-gray-500"
              )} />
              {isSidebarOpen && <span className="font-medium text-xs">{item.label}</span>}
            </Link>
          ))}
        </nav>

        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute bottom-6 right-[-12px] w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform"
        >
          {isSidebarOpen ? <X size={14} /> : <Menu size={14} />}
        </button>
      </aside>

      <main className={cn(
        "transition-all duration-300 min-h-screen",
        isSidebarOpen ? "pl-64" : "pl-20"
      )}>
        <header className="h-20 border-b border-emerald-900/20 bg-black/20 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-40">
          <div>
            <h2 className="text-[10px] font-bold text-emerald-500/80 uppercase tracking-widest">National Smart Infrastructure</h2>
            <h1 className="text-xl font-black tracking-tight">WASTE <span className="text-emerald-500">INTELLIGENCE</span> PLATFORM</h1>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-bold text-emerald-400">NODE: NEW DELHI-01</span>
            </div>
            
            <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-black" />
            </button>
            
            <div className="flex items-center gap-3 pl-4 border-l border-emerald-900/30">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold">Admin Node 01</p>
                <p className="text-[10px] text-emerald-500/70 font-bold">GOV-INTEL-AUTH</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 border-2 border-emerald-500/30" />
            </div>
          </div>
        </header>

        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;