import React from 'react';
import { X, TrendingUp, CheckCircle2, AlertTriangle } from 'lucide-react';
import { CaseStudy } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface CaseModalProps {
  data: CaseStudy | null;
  onClose: () => void;
}

export const CaseModal: React.FC<CaseModalProps> = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[90vh] md:h-auto md:max-h-[90vh] flex flex-col overflow-hidden"
      >
        {/* Header Image Area */}
        <div className="h-48 md:h-64 relative shrink-0">
          <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent flex flex-col justify-end p-6 md:p-8">
            <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-ding-500 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                    {data.industry}
                </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">{data.title}</h2>
            <p className="text-slate-200 text-lg md:text-xl">{data.subtitle}</p>
          </div>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full backdrop-blur-md transition-all"
          >
            <X />
          </button>
        </div>

        {/* Content Scrollable */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 custom-scrollbar">
          
          <div className="prose max-w-none text-slate-600">
            <p className="text-lg leading-relaxed">{data.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Pain Points */}
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <h3 className="flex items-center gap-2 text-red-800 font-bold mb-4 text-lg">
                <AlertTriangle className="w-5 h-5" />
                业务痛点
              </h3>
              <ul className="space-y-3">
                {data.painPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-red-700/80 text-sm md:text-base">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-red-400 rounded-full shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h3 className="flex items-center gap-2 text-blue-800 font-bold mb-4 text-lg">
                <CheckCircle2 className="w-5 h-5" />
                解决方案
              </h3>
              <ul className="space-y-3">
                {data.solutions.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-blue-700/80 text-sm md:text-base">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Results */}
          <div className="border-t border-slate-100 pt-8">
             <h3 className="flex items-center gap-2 text-slate-800 font-bold mb-6 text-xl">
                <TrendingUp className="w-6 h-6 text-green-500" />
                业务效果
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {data.results.map((result, idx) => {
                  // Extract number for emphasis
                  const match = result.match(/(\d+\+?%?)(.*)/);
                  const number = match ? match[1] : '';
                  const text = match ? match[2] : result;
                  
                  return (
                    <div key={idx} className="bg-white border border-slate-100 shadow-sm p-4 rounded-xl text-center hover:shadow-md transition-all">
                        <div className="text-2xl md:text-3xl font-black text-ding-600 mb-1">{number || result}</div>
                        {number && <div className="text-xs text-slate-500">{text}</div>}
                    </div>
                  )
                })}
              </div>
          </div>

        </div>
        
        {/* Footer Action */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end">
            <button 
                onClick={onClose}
                className="px-6 py-2 bg-white border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors mr-3"
            >
                关闭
            </button>
             <button className="px-6 py-2 bg-ding-600 text-white font-medium rounded-lg hover:bg-ding-700 shadow-lg shadow-ding-500/20 transition-colors">
                咨询类似案例
            </button>
        </div>
      </motion.div>
    </div>
  );
};