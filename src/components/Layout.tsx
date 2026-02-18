"use client";

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from "next-themes";
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
  User,
  Sun,
  Moon
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
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-emerald-500/30 transition-colors duration-300">
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed left-0 top-0 h-full z-50 transition-all duration-300 border-r border-border bg-card/40 backdrop-blur-2xl flex flex-col",
          isSidebarOpen ? "w-72" : "w-0 -translate-x-full lg:w-20 lg:translate-x-0"
        )}
      >
        <div className="p-6 flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.4)]">
            <Leaf className="text-black" size={24} />
          </div>
          {isSidebarOpen && (
            <div className="flex flex-col">
              <span className="font-black text-lg tracking-tighter leading-none text-emerald-500">
                VIKSIT BHARAT
              </span>
              <span className="text-[10px] font-bold text-muted-foreground tracking-[0.2em] uppercase">
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
                  ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20" 
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              )}
            >
              {location.pathname === item.path && (
                <div className="absolute left-0 top-0 w-1 h-full bg-emerald-500" />
              )}
              <item.icon size={20} className={cn(
                "transition-transform duration-300 group-hover:scale-110 shrink-0",
                location.pathname === item.path ? "text-emerald-500" : "text-muted-foreground"
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
              <p className="text-[10px] text-muted-foreground leading-tight">Encrypted connection to Central Governance Hub.</p>
            </div>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className={cn(
        "transition-all duration-300 min-h-screen",
        isSidebarOpen ? "lg:pl-72" : "lg:pl-20"
      )}>
        {/* Top Navbar */}
        <header className="h-24 border-b border-border bg-background/60 backdrop-blur-md flex items-center justify-between px-6 lg:px-10 sticky top-0 z-40">
          <div className="flex items-center gap-4 flex-grow max-w-2xl">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-3 hover:bg-accent rounded-xl transition-colors text-muted-foreground hover:text-foreground"
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            
            <div className="relative flex-grow hidden md:block">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-emerald-500/40" size={20} />
              <input 
                type="text" 
                placeholder="Search city nodes..." 
                className="w-full bg-accent/50 border border-border rounded-2xl py-3 pl-16 pr-6 focus:outline-none focus:border-emerald-500/50 transition-all font-bold text-sm"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4 lg:gap-8">
            <button 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-3 text-muted-foreground hover:text-foreground transition-colors bg-accent/50 rounded-xl border border-border"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button className="relative p-3 text-muted-foreground hover:text-foreground transition-colors bg-accent/50 rounded-xl border border-border">
              <Bell size={20} />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-emerald-500 rounded-full border-2 border-background animate-pulse" />
            </button>
            
            <div className="flex items-center gap-4 pl-4 lg:pl-8 border-l border-border">
              <div className="text-right hidden lg:block">
                <p className="text-xs font-black uppercase tracking-tighter">Admin Node 01</p>
                <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest">Gov-Intel-Auth</p>
              </div>
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                <User size={24} />
              </div>
            </div>
          </div>
        </header>

        <div className="p-6 lg:p-10 max-w-[1600px] mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;