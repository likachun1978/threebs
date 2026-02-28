import { Language } from "@/contexts/LanguageContext";

interface SiteContent {
  nav: { about: string; solutions: string; contact: string };
  hero: {
    tag: string;
    headline: string;
    sub: string;
    cta: string;
  };
  whatWeBuild: {
    tag: string;
    headline: string;
    description: string;
    pillars: { title: string; desc: string }[];
  };
  capabilities: {
    tag: string;
    headline: string;
    items: { title: string; desc: string }[];
  };
  solutions: {
    tag: string;
    headline: string;
    items: { title: string; desc: string }[];
  };
  flagship: {
    tag: string;
    headline: string;
    description: string;
    points: string[];
  };
  whyThreeB: {
    tag: string;
    headline: string;
    items: { title: string; desc: string }[];
  };
  industries: {
    tag: string;
    headline: string;
    items: string[];
  };
  partnership: {
    headline: string;
    description: string;
    cta: string;
  };
  footer: {
    copyright: string;
    tagline: string;
  };
}

const content: Record<Language, SiteContent> = {
  en: {
    nav: { about: "About", solutions: "Solutions", contact: "Contact" },
    hero: {
      tag: "AI Execution Platform",
      headline: "Intelligence that operates.",
      sub: "3B Solutions builds the AI execution layer that powers care, communication, and commerce — at scale, in the real world.",
      cta: "Explore Partnership",
    },
    whatWeBuild: {
      tag: "The Platform",
      headline: "The AI Execution Layer",
      description: "We don't build tools. We build the operational intelligence that sits between decision and action — enabling enterprises to execute with precision, speed, and resilience across every domain.",
      pillars: [
        { title: "Perception", desc: "Continuous environmental awareness through multimodal sensing and real-time data ingestion." },
        { title: "Decision", desc: "Context-aware reasoning engines that adapt to operational complexity at every level." },
        { title: "Action", desc: "Autonomous execution pipelines that close the loop from insight to outcome." },
        { title: "Learning", desc: "Self-improving systems that compound operational knowledge over time." },
      ],
    },
    capabilities: {
      tag: "Core Capabilities",
      headline: "Built for operational scale",
      items: [
        { title: "Multimodal Intelligence", desc: "Unified processing of voice, vision, text, and sensor data for complete situational understanding." },
        { title: "Autonomous Orchestration", desc: "End-to-end workflow automation that coordinates resources, timing, and priorities without human bottlenecks." },
        { title: "Adaptive Learning", desc: "Models that continuously refine themselves from operational feedback, improving accuracy and efficiency with every cycle." },
        { title: "Enterprise Integration", desc: "Seamless deployment into existing infrastructure with minimal disruption and maximum interoperability." },
        { title: "Real-Time Decision Engine", desc: "Sub-second reasoning across complex, multi-variable operational environments." },
        { title: "Compliance & Governance", desc: "Built-in audit trails, access controls, and regulatory alignment for sensitive industries." },
      ],
    },
    solutions: {
      tag: "AI-Powered Solutions",
      headline: "One platform. Multiple outcomes.",
      items: [
        { title: "AI Elderly Monitoring", desc: "Enabling safety, dignity, and independence through continuous, non-intrusive AI oversight — supporting aging populations with intelligence, not surveillance." },
        { title: "AI Call Centre Operations", desc: "Always-on, consistent engagement powered by conversational AI — reducing latency, increasing resolution quality, and scaling without headcount." },
        { title: "AI-Enabled 3C Distribution", desc: "Data-driven execution across distribution channels — optimizing inventory, demand forecasting, and channel allocation in real time." },
        { title: "AI Logistics & Fulfilment", desc: "End-to-end orchestration of warehouse, shipping, and last-mile operations — transforming e-commerce fulfilment into a seamless, autonomous flow." },
      ],
    },
    flagship: {
      tag: "Flagship Application",
      headline: "AI for Elderly Care",
      description: "Our most advanced deployment demonstrates what AI execution means in practice: a system that watches without watching, responds without waiting, and learns without forgetting.",
      points: [
        "Continuous behavioural pattern recognition across living environments",
        "Predictive health deviation alerts before incidents occur",
        "Family and caregiver coordination through intelligent notification",
        "Dignity-first architecture — zero cameras, zero intrusion",
      ],
    },
    whyThreeB: {
      tag: "Why 3B",
      headline: "Engineered for the real world",
      items: [
        { title: "Execution, Not Analytics", desc: "We go beyond dashboards. Our AI takes action — coordinating, routing, escalating, and resolving in real time." },
        { title: "Vertically Integrated", desc: "From model training to operational deployment, we control the full stack. No fragmented vendor chains." },
        { title: "Domain-Hardened", desc: "Our models are trained on operational data from care, logistics, and communication — not general-purpose benchmarks." },
        { title: "Partnership-Ready", desc: "Built for integration into enterprise and government ecosystems — not as a product, but as infrastructure." },
      ],
    },
    industries: {
      tag: "Ecosystem",
      headline: "Industries we power",
      items: ["Healthcare & Elderly Care", "Telecommunications", "Consumer Electronics", "E-Commerce & Fulfilment", "Government & Public Services", "Logistics & Supply Chain"],
    },
    partnership: {
      headline: "Built for partnership.\nReady for scale.",
      description: "We work with strategic partners, investors, and enterprise collaborators who share our vision of AI-driven operational transformation.",
      cta: "Begin a Conversation",
    },
    footer: {
      copyright: "© 2025 3B Solutions Limited. All rights reserved.",
      tagline: "AI Execution Platform",
    },
  },
  "zh-TW": {
    nav: { about: "關於我們", solutions: "解決方案", contact: "聯繫" },
    hero: {
      tag: "AI 執行平台",
      headline: "驅動行動的智慧。",
      sub: "3B Solutions 打造 AI 執行層，賦能照護、通訊與商業在真實世界中規模化運作。",
      cta: "探索合作",
    },
    whatWeBuild: {
      tag: "平台架構",
      headline: "AI 執行層",
      description: "我們不做工具，我們構建連接決策與行動的運營智慧——讓企業在每一個領域都能以精準、速度和韌性執行。",
      pillars: [
        { title: "感知", desc: "透過多模態感測與即時數據接入，實現持續的環境感知能力。" },
        { title: "決策", desc: "具備情境感知的推理引擎，能應對各層級的運營複雜性。" },
        { title: "執行", desc: "自主執行管線，從洞察到結果形成完整閉環。" },
        { title: "學習", desc: "自我進化的系統，隨時間累積運營知識。" },
      ],
    },
    capabilities: {
      tag: "核心能力",
      headline: "為運營規模而生",
      items: [
        { title: "多模態智能", desc: "統一處理語音、影像、文字與感測器數據，建構完整的態勢理解。" },
        { title: "自主編排", desc: "端到端的工作流自動化，協調資源、時程與優先級。" },
        { title: "自適應學習", desc: "模型從運營回饋中持續自我優化，逐週期提升精準度與效率。" },
        { title: "企業整合", desc: "無縫部署至現有基礎設施，最小干擾，最大互通。" },
        { title: "即時決策引擎", desc: "在複雜多變數的運營環境中實現亞秒級推理。" },
        { title: "合規與治理", desc: "內建稽核軌跡、存取控制與法規對齊，適用於敏感產業。" },
      ],
    },
    solutions: {
      tag: "AI 驅動的解決方案",
      headline: "一個平台，多重成果。",
      items: [
        { title: "AI 長者監護", desc: "以持續、非侵入式的 AI 監測，守護安全、尊嚴與獨立——用智慧而非監控支援高齡化社會。" },
        { title: "AI 客服中心營運", desc: "由對話式 AI 驅動的全時、一致性服務——降低延遲、提高解決品質、無需增加人力即可規模化。" },
        { title: "AI 3C 通路配銷", desc: "以數據驅動的執行力貫穿所有通路——即時優化庫存、需求預測與通路配置。" },
        { title: "AI 物流與電商履約", desc: "倉儲、運輸與最後一哩全程編排——將電商履約轉化為無縫的自主流程。" },
      ],
    },
    flagship: {
      tag: "旗艦應用",
      headline: "AI 長者照護",
      description: "我們最先進的部署，展示了 AI 執行的真正意涵：一個看護而不打擾、回應而不等待、學習而不遺忘的系統。",
      points: [
        "在生活環境中持續識別行為模式",
        "在事故發生前發出預測性健康偏差警報",
        "透過智慧通知協調家人與照護者",
        "尊嚴優先架構——零攝影機、零侵擾",
      ],
    },
    whyThreeB: {
      tag: "為什麼選擇 3B",
      headline: "為真實世界而設計",
      items: [
        { title: "執行，而非分析", desc: "我們超越儀表板。我們的 AI 採取行動——協調、分派、升級、即時解決。" },
        { title: "垂直整合", desc: "從模型訓練到營運部署，我們掌控完整技術棧。無碎片化供應鏈。" },
        { title: "領域淬煉", desc: "我們的模型以照護、物流與通訊的真實營運數據訓練——並非通用基準。" },
        { title: "合作就緒", desc: "為整合至企業與政府生態系統而構建——不是產品，而是基礎設施。" },
      ],
    },
    industries: {
      tag: "生態系統",
      headline: "我們賦能的產業",
      items: ["醫療照護與長者照護", "電信通訊", "消費性電子", "電子商務與履約", "政府與公共服務", "物流與供應鏈"],
    },
    partnership: {
      headline: "為合作而生。\n為規模而準備。",
      description: "我們與認同 AI 驅動營運轉型願景的策略合作夥伴、投資者及企業協作者攜手共進。",
      cta: "開啟對話",
    },
    footer: {
      copyright: "© 2025 3B Solutions Limited. 版權所有。",
      tagline: "AI 執行平台",
    },
  },
  "zh-CN": {
    nav: { about: "关于我们", solutions: "解决方案", contact: "联系" },
    hero: {
      tag: "AI 执行平台",
      headline: "驱动行动的智慧。",
      sub: "3B Solutions 打造 AI 执行层，赋能照护、通信与商业在真实世界中规模化运作。",
      cta: "探索合作",
    },
    whatWeBuild: {
      tag: "平台架构",
      headline: "AI 执行层",
      description: "我们不做工具，我们构建连接决策与行动的运营智慧——让企业在每个领域都能以精准、速度和韧性执行。",
      pillars: [
        { title: "感知", desc: "通过多模态传感与实时数据接入，实现持续的环境感知能力。" },
        { title: "决策", desc: "具备情境感知的推理引擎，应对各层级的运营复杂性。" },
        { title: "执行", desc: "自主执行管线，从洞察到结果形成完整闭环。" },
        { title: "学习", desc: "自我进化的系统，随时间累积运营知识。" },
      ],
    },
    capabilities: {
      tag: "核心能力",
      headline: "为运营规模而生",
      items: [
        { title: "多模态智能", desc: "统一处理语音、视觉、文本与传感器数据，构建完整态势理解。" },
        { title: "自主编排", desc: "端到端工作流自动化，协调资源、时序与优先级。" },
        { title: "自适应学习", desc: "模型从运营反馈中持续优化，逐周期提升精准度与效率。" },
        { title: "企业集成", desc: "无缝部署至现有基础设施，最小干扰，最大互通。" },
        { title: "实时决策引擎", desc: "在复杂多变量运营环境中实现亚秒级推理。" },
        { title: "合规与治理", desc: "内建审计轨迹、访问控制与法规对齐，适用于敏感行业。" },
      ],
    },
    solutions: {
      tag: "AI 驱动的解决方案",
      headline: "一个平台，多重成果。",
      items: [
        { title: "AI 长者监护", desc: "以持续、非侵入式 AI 监测，守护安全、尊严与独立——用智慧而非监控支撑老龄化社会。" },
        { title: "AI 客服中心运营", desc: "由对话式 AI 驱动的全时、一致性服务——降低延迟、提高解决质量、无需增加人力即可规模化。" },
        { title: "AI 3C 渠道分销", desc: "以数据驱动的执行力贯穿所有渠道——实时优化库存、需求预测与渠道配置。" },
        { title: "AI 物流与电商履约", desc: "仓储、运输与最后一公里全程编排——将电商履约转化为无缝的自主流程。" },
      ],
    },
    flagship: {
      tag: "旗舰应用",
      headline: "AI 长者照护",
      description: "我们最先进的部署，展示了 AI 执行的真正含义：一个看护而不打扰、响应而不等待、学习而不遗忘的系统。",
      points: [
        "在生活环境中持续识别行为模式",
        "在事故发生前发出预测性健康偏差警报",
        "通过智能通知协调家人与照护者",
        "尊严优先架构——零摄像头、零侵扰",
      ],
    },
    whyThreeB: {
      tag: "为什么选择 3B",
      headline: "为真实世界而设计",
      items: [
        { title: "执行，而非分析", desc: "我们超越仪表盘。我们的 AI 采取行动——协调、分派、升级、实时解决。" },
        { title: "垂直整合", desc: "从模型训练到运营部署，我们掌控完整技术栈。无碎片化供应链。" },
        { title: "领域淬炼", desc: "我们的模型以照护、物流与通信的真实运营数据训练——而非通用基准。" },
        { title: "合作就绪", desc: "为整合至企业与政府生态系统而构建——不是产品，而是基础设施。" },
      ],
    },
    industries: {
      tag: "生态系统",
      headline: "我们赋能的产业",
      items: ["医疗照护与长者照护", "电信通信", "消费电子", "电子商务与履约", "政府与公共服务", "物流与供应链"],
    },
    partnership: {
      headline: "为合作而生。\n为规模而准备。",
      description: "我们与认同 AI 驱动运营转型愿景的战略合作伙伴、投资者及企业协作者携手共进。",
      cta: "开启对话",
    },
    footer: {
      copyright: "© 2025 3B Solutions Limited. 版权所有。",
      tagline: "AI 执行平台",
    },
  },
};

export const getContent = (lang: Language) => content[lang];
