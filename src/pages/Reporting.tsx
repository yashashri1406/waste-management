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
  X,
  Info
} from 'lucide-react';
import { showSuccess } from '@/utils/toast';

const Reporting = () => {
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      showSuccess("Report submitted successfully! Governance team notified.");
    }, 2000);
  };

  return (
    <Layout>
      <div className="space-y-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-black tracking-tighter mb-2">REPORT ILLEGAL DUMPING</h1>
          <p className="text-gray-500 font-medium">Help us maintain the zero-waste vision of Bharat 2047.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <DashboardCard className="lg:col-span-2" title="New Incident Report">
            <form onSubmit={handleSubmit} className="space-y-8 py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Waste Type</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-emerald-500/50 transition-all appearance-none font-bold text-sm">
                    <option>General Waste</option>
                    <option>Construction Debris</option>
                    <option>E-Waste</option>
                    <option>Hospital Waste</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Severity Level</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-emerald-500/50 transition-all appearance-none font-bold text-sm">
                    <option>Low (Small pile)</option>
                    <option>Medium (Blocking path)</option>
                    <option>High (Large accumulation)</option>
                    <option>Critical (Hazardous)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500" size={20} />
                  <input 
                    type="text" 
                    placeholder="Detecting location..." 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-emerald-500/50 transition-all font-bold text-sm"
                    defaultValue="Sector 12, Dwarka, New Delhi"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Upload Evidence</label>
                <div className="border-2 border-dashed border-white/10 rounded-[2rem] p-12 flex flex-col items-center justify-center gap-4 hover:border-emerald-500/30 transition-all cursor-pointer group bg-white/5">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform border border-emerald-500/20">
                    <Camera className="text-emerald-500" size={32} />
                  </div>
                  <div className="text-center">
                    <p className="font-black text-sm uppercase tracking-widest">Click to take photo or upload</p>
                    <p className="text-[10px] text-gray-500 font-bold mt-1">JPG, PNG up to 10MB</p>
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                disabled={isUploading}
                className="w-full py-5 rounded-2xl bg-emerald-500 text-black font-black text-sm uppercase tracking-widest hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:scale-100 shadow-xl shadow-emerald-500/20"
              >
                {isUploading ? "SUBMITTING REPORT..." : "SUBMIT INCIDENT REPORT"}
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
                  <div key={i} className="p-5 rounded-3xl bg-white/5 border border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <report.icon className={report.color} size={20} />
                      <div>
                        <h4 className="text-xs font-black">Report #{report.id}</h4>
                        <p className="text-[8px] text-gray-500 uppercase font-black tracking-widest">{report.time}</p>
                      </div>
                    </div>
                    <span className={cn("text-[8px] font-black px-2 py-1 rounded bg-white/5 uppercase tracking-widest", report.color)}>
                      {report.status}
                    </span>
                  </div>
                ))}
              </div>
            </DashboardCard>

            <DashboardCard title="Illegal Dumping Heatmap">
              <div className="aspect-square rounded-3xl bg-[#0a150a] relative overflow-hidden border border-white/5">
                <div className="absolute inset-0 opacity-40">
                  <div className="absolute top-1/4 left-1/3 w-24 h-24 bg-red-500/40 blur-3xl rounded-full" />
                  <div className="absolute bottom-1/3 right-1/4 w-36 h-36 bg-amber-500/30 blur-3xl rounded-full" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em]">Live Heatmap View</p>
                </div>
              </div>
              <div className="mt-6 p-4 rounded-2xl bg-red-500/5 border border-red-500/10 flex gap-3">
                <Info className="text-red-500 shrink-0" size={16} />
                <p className="text-[10px] text-gray-500 leading-relaxed">Red zones indicate high frequency of reported illegal dumping. Governance teams are prioritized for these areas.</p>
              </div>
            </DashboardCard>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Reporting;