import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-8 h-8 flex items-center justify-center">
        {/* Abstract Red Pin/Eye shape from PDF Logo */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-700 rounded-full opacity-20 blur-sm animate-pulse"></div>
        <svg viewBox="0 0 100 100" className="w-full h-full text-red-600 fill-current">
          <path d="M50 10 C30 10 15 25 15 45 C15 65 30 80 50 95 C70 80 85 65 85 45 C85 25 70 10 50 10 Z M50 60 C42 60 35 53 35 45 C35 37 42 30 50 30 C58 30 65 37 65 45 C65 53 58 60 50 60 Z" />
          <circle cx="50" cy="45" r="12" className="text-white fill-current" />
        </svg>
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="text-xl font-bold tracking-tight leading-none text-slate-800">
          智讯<span className="text-ding-500 mx-0.5">|</span>光年
        </h1>
        <span className="text-[0.6rem] text-slate-500 tracking-widest uppercase">Zhixun Guangnian</span>
      </div>
    </div>
  );
};