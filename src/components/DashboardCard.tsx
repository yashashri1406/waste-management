"use client";

import React from 'react';
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

const DashboardCard = ({ children, className, title, subtitle }: DashboardCardProps) => {
  return (
    <div className={cn(
      "bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 overflow-hidden relative group",
      className
    )}>
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {(title || subtitle) && (
        <div className="mb-6 relative z-10">
          {title && <h3 className="text-lg font-bold text-white/90">{title}</h3>}
          {subtitle && <p className="text-sm text-emerald-500/60 font-medium">{subtitle}</p>}
        </div>
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default DashboardCard;