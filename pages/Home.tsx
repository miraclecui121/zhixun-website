import React, { useState } from 'react';
import { Section } from '../components/Section';
import { SERVICES, VALUES, CASE_STUDIES, ADVANTAGES } from '../constants';
import { ArrowRight, ChevronRight, PlayCircle, Database, Sparkles, Globe, Users } from 'lucide-react';
import { CaseModal } from '../components/CaseModal';
import { CaseStudy } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface HomeProps {
  onOpenContact: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenContact }) => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <section id="hero" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-900">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-ding-900/80"></div>
        
        {/* Floating Abstract 3D Elements (CSS) */}
        <div className="absolute right-0 top-1/4 w-1/2 h-full pointer-events-none hidden lg:block">
             <div className="relative w-full h-full perspective-1000">
                <div className="absolute top-10 right-20 w-64 h-64 bg-ding-500/20 rounded-3xl rotate-12 backdrop-blur-3xl animate-pulse"></div>
                <div className="absolute top-40 right-60 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 border border-white/10 rounded-full flex items-center justify-center">
                    <div className="w-60 h-60 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
                </div>
             </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-ding-200 text-sm mb-6">
              <Sparkles size={14} />
              <span>AI驱动的企业数智化转型专家</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
              AI赋能企业 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ding-400 to-cyan-300">
                数智化应用解决方案
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              智讯光年 —— 深度赋能企业数智化的全面跃迁。通过"培训 + 咨询 + 工具 + 陪跑"四位一体模式，帮助企业实现业务增长和组织革新。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onOpenContact}
                className="px-8 py-4 bg-ding-600 hover:bg-ding-500 text-white font-semibold rounded-full shadow-lg shadow-ding-500/40 transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                免费咨询方案 <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => document.getElementById('cases')?.scrollIntoView({behavior: 'smooth'})}
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/20 font-semibold rounded-full backdrop-blur-sm transition-all flex items-center justify-center gap-2"
              >
                 <PlayCircle size={20} /> 查看落地案例
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- STATS / INTRO --- */}
      <div className="bg-white border-b border-slate-100">
         <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
                { num: '10+', text: '覆盖核心行业' },
                { num: '200+', text: '企业通用套件' },
                { num: '50+', text: '行业场景定制' },
                { num: '100%', text: '交付满意度' },
            ].map((stat, idx) => (
                <div key={idx} className="text-center">
                    <div className="text-3xl font-bold text-slate-900 mb-1">{stat.num}</div>
                    <div className="text-sm text-slate-500 uppercase tracking-wide">{stat.text}</div>
                </div>
            ))}
         </div>
      </div>

      {/* --- ABOUT / VALUES --- */}
      <Section id="about" title="我们是谁" subtitle="我们的使命是让每个企业都能从数智化中获得业绩增长">
        <div className="grid md:grid-cols-3 gap-8">
            {VALUES.map((val, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group relative bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                    <div className={`absolute top-0 left-0 w-full h-1 ${val.color}`}></div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{val.title}</h3>
                    <p className="text-slate-500 mb-6 font-medium">{val.desc}</p>
                    <ul className="space-y-3">
                        {val.behavior.map((b, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                <div className={`w-1.5 h-1.5 mt-1.5 rounded-full ${val.color.replace('bg-', 'bg-opacity-50 bg-')}`}></div>
                                {b}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            ))}
        </div>
      </Section>

      {/* --- SERVICES --- */}
      <Section id="services" className="bg-slate-50" title="全周期服务体系" subtitle="平台 + 应用 + 服务，三位一体赋能最佳路径">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center h-full"
                >
                    <div className="w-14 h-14 bg-ding-50 text-ding-600 rounded-2xl flex items-center justify-center mb-5">
                        {service.icon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-3">{service.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                        {service.description}
                    </p>
                </motion.div>
            ))}
        </div>
        
        {/* Advantages Grid */}
        <div className="mt-20">
            <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-slate-800">为什么选择智讯光年?</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                {ADVANTAGES.map((adv, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                        <div className="text-ding-500 shrink-0 mt-1">
                            {adv.icon}
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800 mb-1">{adv.title}</h4>
                            <p className="text-sm text-slate-500">{adv.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </Section>

      {/* --- SOLUTIONS / SCENARIOS --- */}
      <Section id="solutions" title="典型应用场景" subtitle="激活沉睡数字资产，建立企业智能化应用新范式">
         <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                {[
                    { title: '知识管理', icon: <Database className="text-blue-500" />, items: ['文档萃取', '制度问答', '知识检索'], color: 'bg-blue-50' },
                    { title: '办公提效', icon: <Sparkles className="text-purple-500" />, items: ['财务智能', '数据分析', '写作助手'], color: 'bg-purple-50' },
                    { title: '生产研发', icon: <Globe className="text-cyan-500" />, items: ['研发助手', '情报分析', '设备运检'], color: 'bg-cyan-50' },
                    { title: '企业服务', icon: <Users className="text-orange-500" />, items: ['全渠道接入', '智能客服', '智能工单'], color: 'bg-orange-50' },
                ].map((scene, idx) => (
                    <div key={idx} className="p-8 hover:bg-slate-50 transition-colors group">
                        <div className={`w-12 h-12 ${scene.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                            {React.cloneElement(scene.icon as React.ReactElement, { size: 24 })}
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-4">{scene.title}</h3>
                        <div className="flex flex-wrap gap-2">
                            {scene.items.map((item, i) => (
                                <span key={i} className="px-3 py-1 bg-white border border-slate-200 text-xs text-slate-600 rounded-full">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
         </div>
      </Section>

      {/* --- CASES --- */}
      <Section id="cases" className="bg-slate-900 text-white" title="企业落地最佳实践" subtitle="我们已服务千行百业客户，不仅提供技术，更提供业务价值">
        <div className="grid md:grid-cols-3 gap-8">
            {CASE_STUDIES.map((study) => (
                <motion.div 
                    key={study.id}
                    whileHover={{ y: -10 }}
                    className="bg-slate-800 rounded-xl overflow-hidden cursor-pointer group border border-slate-700"
                    onClick={() => setSelectedCase(study)}
                >
                    <div className="h-48 overflow-hidden relative">
                         <img 
                            src={study.image} 
                            alt={study.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60" 
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                         <div className="absolute bottom-4 left-4 right-4">
                            <span className="text-xs font-bold text-ding-400 uppercase tracking-wider bg-slate-900/50 backdrop-blur-sm px-2 py-1 rounded-md">
                                {study.industry}
                            </span>
                         </div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                        <p className="text-slate-400 text-sm mb-4 line-clamp-2">{study.subtitle}</p>
                        <div className="flex items-center text-ding-400 text-sm font-medium group-hover:translate-x-2 transition-transform">
                            查看详情 <ChevronRight size={16} />
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </Section>

      {/* --- CTA --- */}
      <section className="py-20 bg-gradient-to-br from-ding-600 to-ding-800 text-white text-center px-4">
         <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">准备好开启数智化转型之旅了吗？</h2>
            <p className="text-ding-100 mb-10 text-lg">
                预约专家顾问，获取为您企业定制的AI落地解决方案。
            </p>
            <button 
                onClick={onOpenContact}
                className="px-10 py-4 bg-white text-ding-700 font-bold rounded-full shadow-xl hover:bg-ding-50 transition-colors text-lg"
            >
                立即免费咨询
            </button>
         </div>
      </section>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedCase && (
            <CaseModal data={selectedCase} onClose={() => setSelectedCase(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};