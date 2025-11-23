import React from 'react';
import { Logo } from './Logo';
import { MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="bg-white/10 p-3 rounded-lg inline-block w-fit">
               <Logo className="text-white" />
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              智讯光年 —— 深度赋能企业数智化的全面跃迁。
              让每个企业都能从数智化中获得业绩增长。
            </p>
          </div>

          {/* Addresses */}
          <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-ding-500 rounded-full"></span>
                北京总部
              </h3>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-ding-500 shrink-0 mt-0.5" />
                <span>北京市东城区苏州胡同61号盛和文创园4层</span>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-ding-500 rounded-full"></span>
                天津分公司
              </h3>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-ding-500 shrink-0 mt-0.5" />
                <span>天津市东丽区一经路财智大厦9-910</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {currentYear} 智讯光年 All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">隐私政策</a>
            <a href="#" className="hover:text-white transition-colors">服务条款</a>
          </div>
        </div>
      </div>
    </footer>
  );
};