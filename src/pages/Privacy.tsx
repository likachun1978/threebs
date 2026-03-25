import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

const privacyContent = {
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: March 2026",
    sections: [
      {
        heading: "1. Introduction",
        body: "3B Solutions Limited (\"we\", \"us\", or \"our\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website."
      },
      {
        heading: "2. Information We Collect",
        body: "We may collect information that you voluntarily provide to us when you contact us, such as your name, email address, and any message content. We also automatically collect certain technical information including your IP address, browser type, and operating system for analytics purposes."
      },
      {
        heading: "3. How We Use Your Information",
        body: "We use the information we collect to respond to your inquiries, improve our website and services, communicate with you about partnerships or business opportunities, and comply with legal obligations."
      },
      {
        heading: "4. Cookies and Tracking",
        body: "Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie preferences through your browser settings."
      },
      {
        heading: "5. Data Sharing",
        body: "We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website, subject to confidentiality agreements."
      },
      {
        heading: "6. Data Security",
        body: "We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction."
      },
      {
        heading: "7. Your Rights",
        body: "You have the right to access, correct, or delete your personal data. You may also object to or restrict certain processing of your data. To exercise these rights, please contact us using the details below."
      },
      {
        heading: "8. Contact Us",
        body: "If you have any questions about this Privacy Policy, please contact us at: info@3bs.com.hk"
      },
    ],
  },
  "zh-TW": {
    title: "私隱政策",
    lastUpdated: "最後更新：2026年3月",
    sections: [
      {
        heading: "1. 簡介",
        body: "3B Solutions Limited（「我們」）致力於保護您的私隱。本私隱政策說明我們在您瀏覽本網站時如何收集、使用、披露及保障您的資訊。"
      },
      {
        heading: "2. 我們收集的資訊",
        body: "我們可能會收集您在聯繫我們時自願提供的資訊，例如您的姓名、電郵地址及任何訊息內容。我們亦會自動收集某些技術資訊，包括您的 IP 地址、瀏覽器類型及作業系統，以作分析用途。"
      },
      {
        heading: "3. 我們如何使用您的資訊",
        body: "我們使用所收集的資訊來回應您的查詢、改善我們的網站和服務、就合作或商業機會與您溝通，以及遵守法律義務。"
      },
      {
        heading: "4. Cookies 及追蹤技術",
        body: "本網站可能使用 cookies 及類似追蹤技術以提升您的瀏覽體驗。您可透過瀏覽器設定控制 cookie 偏好。"
      },
      {
        heading: "5. 資料分享",
        body: "我們不會出售、交易或出租您的個人資訊予第三方。我們可能會在保密協議下與協助我們營運網站的可信服務提供者分享資訊。"
      },
      {
        heading: "6. 資料安全",
        body: "我們實施適當的技術及組織措施，以保護您的個人資訊免受未經授權的訪問、更改、披露或銷毀。"
      },
      {
        heading: "7. 您的權利",
        body: "您有權訪問、更正或刪除您的個人資料。您亦可反對或限制對您資料的某些處理。如需行使這些權利，請透過以下方式聯繫我們。"
      },
      {
        heading: "8. 聯繫我們",
        body: "如您對本私隱政策有任何疑問，請透過以下方式聯繫我們：info@3bs.com.hk"
      },
    ],
  },
  "zh-CN": {
    title: "隐私政策",
    lastUpdated: "最后更新：2026年3月",
    sections: [
      {
        heading: "1. 简介",
        body: "3B Solutions Limited（"我们"）致力于保护您的隐私。本隐私政策说明我们在您浏览本网站时如何收集、使用、披露及保障您的信息。"
      },
      {
        heading: "2. 我们收集的信息",
        body: "我们可能会收集您在联系我们时自愿提供的信息，例如您的姓名、电邮地址及任何消息内容。我们也会自动收集某些技术信息，包括您的 IP 地址、浏览器类型及操作系统，以作分析用途。"
      },
      {
        heading: "3. 我们如何使用您的信息",
        body: "我们使用所收集的信息来回应您的查询、改善我们的网站和服务、就合作或商业机会与您沟通，以及遵守法律义务。"
      },
      {
        heading: "4. Cookies 及追踪技术",
        body: "本网站可能使用 cookies 及类似追踪技术以提升您的浏览体验。您可通过浏览器设置控制 cookie 偏好。"
      },
      {
        heading: "5. 数据分享",
        body: "我们不会出售、交易或出租您的个人信息予第三方。我们可能会在保密协议下与协助我们运营网站的可信服务提供者分享信息。"
      },
      {
        heading: "6. 数据安全",
        body: "我们实施适当的技术及组织措施，以保护您的个人信息免受未经授权的访问、更改、披露或销毁。"
      },
      {
        heading: "7. 您的权利",
        body: "您有权访问、更正或删除您的个人数据。您也可反对或限制对您数据的某些处理。如需行使这些权利，请通过以下方式联系我们。"
      },
      {
        heading: "8. 联系我们",
        body: "如您对本隐私政策有任何疑问，请通过以下方式联系我们：info@3bs.com.hk"
      },
    ],
  },
};

const Privacy = () => {
  const { language } = useLanguage();
  const c = privacyContent[language];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{c.title}</h1>
        <p className="text-sm text-muted-foreground mb-10">{c.lastUpdated}</p>
        <div className="space-y-8">
          {c.sections.map((s, i) => (
            <section key={i}>
              <h2 className="text-lg font-semibold mb-2">{s.heading}</h2>
              <p className="text-muted-foreground leading-relaxed">{s.body}</p>
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Privacy;
