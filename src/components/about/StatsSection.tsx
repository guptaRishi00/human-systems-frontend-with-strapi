import React from "react";
import { Users, Zap, CheckCircle, Clock } from "lucide-react";

const StatsSection = () => (
    <div className="bg-[#F9FBF8] py-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                <div className="space-y-2">
                    <div className="flex justify-center text-[#013228] mb-2">
                        <Users size={24} />
                    </div>
                    <p className="text-4xl font-extrabold text-[#013228] mb-1">
                        500+
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400">
                        Companies
                    </p>
                </div>
                <div className="space-y-2">
                    <div className="flex justify-center text-[#013228] mb-2">
                        <Zap size={24} />
                    </div>
                    <p className="text-4xl font-extrabold text-[#013228] mb-1">
                        50k+
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400">
                        Active Users
                    </p>
                </div>
                <div className="space-y-2">
                    <div className="flex justify-center text-[#013228] mb-2">
                        <CheckCircle size={24} />
                    </div>
                    <p className="text-4xl font-extrabold text-[#013228] mb-1">
                        99.9%
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400">
                        Uptime
                    </p>
                </div>
                <div className="space-y-2">
                    <div className="flex justify-center text-[#013228] mb-2">
                        <Clock size={24} />
                    </div>
                    <p className="text-4xl font-extrabold text-[#013228] mb-1">
                        24/7
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400">
                        Support
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default StatsSection;
