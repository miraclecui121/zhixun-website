import React from 'react';
import { 
  Lightbulb, 
  Target, 
  Users, 
  Briefcase, 
  Cpu, 
  BarChart3, 
  ShieldCheck, 
  Zap, 
  BookOpen,
  Search,
  FileText,
  MessageSquare
} from 'lucide-react';
import { CaseStudy, ServiceItem, ValueProp } from './types';

export const NAV_ITEMS = [
  { label: '首页', href: '#hero' },
  { label: '关于我们', href: '#about' },
  { label: '核心服务', href: '#services' },
  { label: '解决方案', href: '#solutions' },
  { label: '成功案例', href: '#cases' },
];

export const VALUES: ValueProp[] = [
  {
    title: "诚实守信",
    desc: "基于长期价值做决策",
    behavior: [
      "绝不造假",
      "重视信用，对客户负责到底",
      "做时间的朋友，事事有结果",
      "不犯重复性错误"
    ],
    color: "bg-blue-500"
  },
  {
    title: "激情创新",
    desc: "因我们的出现而变得更好",
    behavior: [
      "透明开放，坦诚沟通",
      "建设性反馈",
      "成为重要的网络节点"
    ],
    color: "bg-indigo-500"
  },
  {
    title: "合作共赢",
    desc: "把客户当自己人",
    behavior: [
      "时刻和客户站在一起",
      "深度服务，解决问题",
      "共同成长，保障客户利益"
    ],
    color: "bg-cyan-500"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    title: "咨询服务",
    description: "调研、访谈、7天设计数字化方案，提供企业数字化认知内训与游学。",
    icon: <MessageSquare className="w-6 h-6" />
  },
  {
    title: "交付服务",
    description: "产品共创设计，全代码/低代码开发，系统集成与数据打通。",
    icon: <Cpu className="w-6 h-6" />
  },
  {
    title: "陪跑服务",
    description: "1+3+7+365 模式：1次内训 + 3次深度访谈 + 7天方案 + 1年深度服务。",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "AI专属定制",
    description: "企业专属AI能力定制开发，打造知识助手、智能问答等AI Agent。",
    icon: <Zap className="w-6 h-6" />
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-chemical',
    title: '中化五环公司',
    subtitle: '国内首个工程领域大模型应用平台',
    industry: '央国企 / 化工',
    description: '针对通用模型难以理解行业特定知识的痛点，自建大模型平台，整合行业知识，实现统一训练和算法优化。',
    painPoints: [
      '通用模型无法适配专业性强的复杂场景',
      '缺乏技术人员和领域化能力',
      '内部知识分散、管理困难',
      '投标书写作耗时长、易出错'
    ],
    solutions: [
      '统一接入私有化大模型 (DeepSeek, Qwen等)',
      '构建智能知识库与对话式知识问答',
      '开发投标助手：自动分析招标文件并编写标书'
    ],
    results: [
      '大模型应用开发效率提升 50+%',
      '企业知识搜寻效率提升 50+%',
      '知识库运营工作量降低 70+%',
      '投标文件生成时间减少 70+%'
    ],
    image: 'https://picsum.photos/800/600?random=1'
  },
  {
    id: 'case-construction',
    title: '某大型工程局',
    subtitle: 'AI工业运检解决方案',
    industry: '建筑 / 工程',
    description: '运用AI大模型能力强化工程智能运维系统，减少非结构化数据抽取和整治方案撰写的人工投入。',
    painPoints: [
      '数字化建设依托大量人工，智能化程度低',
      '预警处理方案依赖专家，时效性低'
    ],
    solutions: [
      '领域化大模型训练：提升术语理解与推理能力',
      '信息抽取分析：结构化施工与预警信息',
      '方案智能生成：自动生成预警分析报告与整治方案'
    ],
    results: [
      '报告生成效率提升 70+%',
      '信息抽取准确率 90+%',
      '非结构化数据抽取效率提升 80+%'
    ],
    image: 'https://picsum.photos/800/600?random=2'
  },
  {
    id: 'case-certification',
    title: '北京国建联信',
    subtitle: '知识应用升级，唤醒沉睡知识',
    industry: '认证 / 研究院',
    description: '依托大模型技术，对数十万专业认证文档进行碎片化与向量化处理，开发智能问答与写作应用。',
    painPoints: [
      '数十万专业文档管理不规范，检索效率低',
      '专家经验难传承，重复劳动耗资源',
      '跨部门协作壁垒'
    ],
    solutions: [
      '高性能算力资源与Qwen+DS双模部署',
      '知识治理：自动去重、分类、打标签',
      '文档审校：智能检测错字、敏感词、合规性'
    ],
    results: [
      '知识获取效率提升 80+%',
      '报告写作效率提升 75%',
      '员工使用知识库频率提升 60%'
    ],
    image: 'https://picsum.photos/800/600?random=3'
  }
];

export const ADVANTAGES = [
  {
    title: "通用场景产品化",
    desc: "AI知识库、智能写作、智能问数、文档审校，快速部署。",
    icon: <BoxIcon />
  },
  {
    title: "服务场景专业化",
    desc: "智能客服、工单、陪练，覆盖客户体验与员工提效。",
    icon: <HeadphonesIcon />
  },
  {
    title: "垂类咨询开发一体",
    desc: "深耕央国企、金融、政务等10+行业，提供MCP市场套件。",
    icon: <LayersIcon />
  },
  {
    title: "陪伴式开发服务",
    desc: "授人以渔，建立运营体系，培养企业内部AI人才。",
    icon: <HandshakeIcon />
  }
];

// Simple SVG Icons for Advantages
function BoxIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
  )
}
function HeadphonesIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>
  )
}
function LayersIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
  )
}
function HandshakeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17 2 2a6 6 0 0 0 8-8.02 3 3 0 0 0-3-3"/><path d="m11 17 2 2a6 6 0 0 1-8 8.02 3 3 0 0 1-3-3"/><line x1="11" y1="17" x2="11.01" y2="17"/><path d="m13 13 8-8"/><path d="M21 21v-6a6 6 0 0 0-6-6h-6"/></svg>
  )
}
