import React from "react";
import { Users, Zap, CheckCircle, Clock } from "lucide-react";

export default function StatsSection({ data }: { data?: any }) {
  const { cards } = data || {};

  const staticStats = [
    { num: "500+", label: "Companies", icon: <Users size={24} /> },
    { num: "50k+", label: "Active Users", icon: <Zap size={24} /> },
    { num: "99.9%", label: "Uptime", icon: <CheckCircle size={24} /> },
    { num: "24/7", label: "Support", icon: <Clock size={24} /> },
  ];

  const displayStats = cards && cards.length > 0 ? cards : staticStats;

  return (
    <div className="bg-[#F9FBF8] py-16 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {displayStats.map((stat: any, i: number) => {
            const iconIndex = i % staticStats.length;
            return (
              <div key={i} className="space-y-2">
                <div className="flex justify-center text-[#013228] mb-2">
                  {staticStats[iconIndex].icon}
                </div>
                <p className="text-4xl font-extrabold text-[#013228] mb-1">
                  {stat.title || stat.num}
                </p>
                <p className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400">
                  {stat.description || stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
