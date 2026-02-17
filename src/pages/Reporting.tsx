"use client";

import React, { useState } from 'react';
import Layout from '@/components/Layout';
import DashboardCard from '@/components/DashboardCard';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { 
  Camera, 
  MapPin, 
  AlertTriangle, 
  CheckCircle2, 
  Clock,
  Upload,
  X
} from 'lucide-react';
import { showSuccess } from '@/utils/toast';

const Reporting = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      showSuccess("Report submitted successfully! Our team is on the way.");
      setStep(1);
    }, 2000);
  };

  return (
    <Layout>
      <div className="space-y-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-2">Report Illegal Dumping</h1>
          <p className="text-gray-400">Help us keep the city clean. Report waste accumulation or illegal dumping in your area.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <DashboardCard className="lg:col-span-2" title="New Report Form">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400">Waste Type</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-emerald-500/50 transition-colors appearance-none">
                    <option>General Waste</option>
                    <option>Construction Debris</option>
                    <option>E-Waste</option>
                    <option>Hazardous Waste</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400">Severity Level</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-emerald-500/50 transition-colors appearance-none">
                    <option>Low (Small pile)</option>
                    <option>Medium (Blocking path)</option>
                    <option>High (Large accumulation)</option>
                    <option>Critical (Hazardous/Toxic)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500" size={20} />
                  <input 
                    type="text" 
                    placeholder="Detecting location..." 
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    defaultValue="Sector 12, Dwarka, New Delhi"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400">Upload Evidence</label>
                <div className="border-2 border-dashed border-white/10 rounded-2xl p-10 flex flex-col items-center justify-center gap-4 hover:border-emerald-500/30 transition-colors cursor-pointer group">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Camera className="text-emerald-500" size={32} />
                  </div>
                  <div className="text-center">
                    <p className="font-bold">Click to take photo or upload</p>
                    <p className="text-xs text-gray-500">JPG, PNG up to 10MB</p>
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                disabled={isUploading}
                className="w-full py-4 rounded-2xl bg-emerald-500 text-black font-black text-lg hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:scale-100"
              >
                {isUploading ? "SUBMITTING REPORT..." : "SUBMIT REPORT"}
              </button>
            </form>
          </DashboardCard>

          <div className="space-y-6">
            <DashboardCard title="Recent Reports Status">
              <div className="space-y-4">
                {[
                  { id: "R-842", status: "Resolved", time: "2h ago", icon: CheckCircle2, color: "text-emerald-500" },
                  { id: "R-841", status: "In Progress", time: "5h ago", icon: Clock, color: "text-blue-500" },
                  { id: "R-840", status: "Pending", time: "1d ago", icon: AlertTriangle, color: "text-amber-500" },
                ].map((report, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <report.icon className={report.color} size={20} />
                      <div>
                        <h4 className="text-sm font-bold">Report #{report.id}</h4>
                        <p className="text-[10px] text-gray-500 uppercase font-bold">{report.time}</p>
                      </div>
                    </div>
                    <span className={cn("text-[10px] font-black px-2 py-1 rounded-lg bg-white/5", report.color)}>
                      {report.status.toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            </DashboardCard>

            <DashboardCard title="Illegal Dumping Heatmap">
              <div className="aspect-square rounded-2xl bg-[#0a150a] relative overflow-hidden">
                {/* Mock Heatmap */}
                <div className="absolute inset-0 opacity-50">
                  <div className="absolute top-1/4 left-1/3 w-20 h-20 bg-red-500/40 blur-3xl rounded-full" />
                  <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-amber-500/30 blur-3xl rounded-full" />
                  <div className="absolute top-1/2 right-1/2 w-16 h-16 bg-red-500/50 blur-3xl rounded-full" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Live Heatmap View</p>
                </div>
              </div>
              <p className="mt-4 text-xs text-gray-400 text-center">
                Red zones indicate high frequency of reported illegal dumping.
              </p>
            </DashboardCard>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Reporting;