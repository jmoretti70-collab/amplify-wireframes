/**
 * Home Page - Amplify Wireframes
 * Design: Gradiente Amplify (laranja-rosa), navegação por tabs, splash screen animado
 * Autor: João Moretti
 * Versão: 7.0 - Inclui Contratos Digitais, Dashboard de Competidores e Gestão de Crises
 */

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SplashScreen from "@/components/SplashScreen";
import WebDashboard from "@/components/wireframes/WebDashboard";
import MobilePWA from "@/components/wireframes/MobilePWA";
import Analytics from "@/components/wireframes/Analytics";
import Onboarding from "@/components/wireframes/Onboarding";
import Financial from "@/components/wireframes/Financial";
import Integrations from "@/components/wireframes/Integrations";
import WhiteLabelReports from "@/components/wireframes/WhiteLabelReports";
import ContentApproval from "@/components/wireframes/ContentApproval";
import Notifications from "@/components/wireframes/Notifications";
import AffiliateProgram from "@/components/wireframes/AffiliateProgram";
import SocialListening from "@/components/wireframes/SocialListening";
import ProductSeeding from "@/components/wireframes/ProductSeeding";
import AIPredictive from "@/components/wireframes/AIPredictive";
import AmplifyAcademy from "@/components/wireframes/AmplifyAcademy";
import Marketplace from "@/components/wireframes/Marketplace";
import ChatAI from "@/components/wireframes/ChatAI";
import ROIComparative from "@/components/wireframes/ROIComparative";
import DigitalContracts from "@/components/wireframes/DigitalContracts";
import CompetitorDashboard from "@/components/wireframes/CompetitorDashboard";
import CrisisManagement from "@/components/wireframes/CrisisManagement";

type TabType = "web" | "mobile" | "analytics" | "onboarding" | "financial" | "integrations" | "reports" | "approval" | "notifications" | "affiliates" | "listening" | "seeding" | "ai" | "academy" | "marketplace" | "chatai" | "roi" | "contracts" | "competitors" | "crisis";

interface Tab {
  id: TabType;
  label: string;
  icon: string;
  isNew?: boolean;
}

const tabs: Tab[] = [
  { id: "web", label: "Web Dashboard", icon: "fa-desktop" },
  { id: "mobile", label: "PWA Mobile", icon: "fa-mobile-alt" },
  { id: "analytics", label: "Analytics", icon: "fa-chart-bar" },
  { id: "onboarding", label: "Onboarding", icon: "fa-user-plus" },
  { id: "financial", label: "Financeiro", icon: "fa-wallet" },
  { id: "integrations", label: "Integrações", icon: "fa-plug" },
  { id: "reports", label: "Relatórios", icon: "fa-file-alt" },
  { id: "approval", label: "Aprovação", icon: "fa-check-circle" },
  { id: "notifications", label: "Notificações", icon: "fa-bell" },
  { id: "affiliates", label: "Afiliados", icon: "fa-link" },
  { id: "listening", label: "Social Listening", icon: "fa-headphones" },
  { id: "seeding", label: "Seeding", icon: "fa-box" },
  { id: "ai", label: "IA Preditiva", icon: "fa-brain" },
  { id: "academy", label: "Academy", icon: "fa-graduation-cap" },
  { id: "marketplace", label: "Marketplace", icon: "fa-store" },
  { id: "chatai", label: "Chat IA", icon: "fa-robot" },
  { id: "roi", label: "ROI Comparativo", icon: "fa-chart-line" },
  { id: "contracts", label: "Contratos", icon: "fa-file-signature", isNew: true },
  { id: "competitors", label: "Competidores", icon: "fa-users", isNew: true },
  { id: "crisis", label: "Gestão de Crises", icon: "fa-exclamation-triangle", isNew: true },
];

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState<TabType>("web");

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "web":
        return <WebDashboard />;
      case "mobile":
        return <MobilePWA />;
      case "analytics":
        return <Analytics />;
      case "onboarding":
        return <Onboarding />;
      case "financial":
        return <Financial />;
      case "integrations":
        return <Integrations />;
      case "reports":
        return <WhiteLabelReports />;
      case "approval":
        return <ContentApproval />;
      case "notifications":
        return <Notifications />;
      case "affiliates":
        return <AffiliateProgram />;
      case "listening":
        return <SocialListening />;
      case "seeding":
        return <ProductSeeding />;
      case "ai":
        return <AIPredictive />;
      case "academy":
        return <AmplifyAcademy />;
      case "marketplace":
        return <Marketplace />;
      case "chatai":
        return <ChatAI />;
      case "roi":
        return <ROIComparative />;
      case "contracts":
        return <DigitalContracts />;
      case "competitors":
        return <CompetitorDashboard />;
      case "crisis":
        return <CrisisManagement />;
      default:
        return <WebDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Splash Screen */}
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      </AnimatePresence>

      {/* Header */}
      <header className="amplify-gradient text-white py-6 px-8">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img src="/images/amplify_logo.png" alt="Amplify Logo" className="h-12 mr-4" />
            <div>
              <h1 className="text-3xl font-bold">Wireframes - Amplify</h1>
              <p className="text-orange-100 mt-1">Plataforma de Gestão de Influenciadores Digitais</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-orange-100 text-sm">Projeto por</p>
            <p className="font-semibold">João Moretti</p>
            <p className="text-orange-200 text-xs mt-1">Versão 7.0</p>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white shadow-md sticky top-0 z-40 border-b border-gray-200">
        <div className="container mx-auto px-2">
          <div className="flex flex-wrap justify-center gap-1 py-2 max-h-[120px] overflow-y-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-2.5 font-medium transition-all whitespace-nowrap flex items-center text-xs rounded-md relative border ${
                  activeTab === tab.id
                    ? "text-white bg-gradient-to-r from-orange-500 to-pink-500 border-transparent shadow-md"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-50 border-gray-200 bg-white"
                }`}
              >
                <i className={`fas ${tab.icon} mr-1.5 text-[10px]`}></i>
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                {tab.isNew && (
                  <span className="ml-1 px-1 py-0.5 text-[8px] bg-green-500 text-white rounded font-bold">
                    NEW
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img src="/images/amplify_logo.png" alt="Amplify" className="h-10 mb-4" />
              <p className="text-gray-400 text-sm">
                Plataforma completa para gestão de influenciadores digitais e campanhas de marketing de influência.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Módulos do Sistema (20)</h4>
              <ul className="text-gray-400 text-sm space-y-1">
                <li><i className="fas fa-check text-orange-500 mr-2"></i>Dashboard da Agência</li>
                <li><i className="fas fa-check text-orange-500 mr-2"></i>Portal do Influenciador (PWA)</li>
                <li><i className="fas fa-check text-orange-500 mr-2"></i>Analytics e Relatórios</li>
                <li><i className="fas fa-check text-orange-500 mr-2"></i>Onboarding de Usuários</li>
                <li><i className="fas fa-check text-orange-500 mr-2"></i>Módulo Financeiro</li>
                <li><i className="fas fa-check text-orange-500 mr-2"></i>Integrações (APIs)</li>
                <li><i className="fas fa-check text-orange-500 mr-2"></i>Relatórios White-Label</li>
                <li><i className="fas fa-check text-orange-500 mr-2"></i>Aprovação de Conteúdo</li>
                <li><i className="fas fa-check text-orange-500 mr-2"></i>Central de Notificações</li>
                <li><i className="fas fa-check text-orange-500 mr-2"></i>Programa de Afiliados</li>
                <li><i className="fas fa-check text-orange-500 mr-2"></i>Social Listening</li>
                <li><i className="fas fa-check text-orange-500 mr-2"></i>Seeding de Produtos</li>
                <li><i className="fas fa-check text-orange-500 mr-2"></i>IA para Descoberta Preditiva</li>
                <li><i className="fas fa-check text-orange-500 mr-2"></i>Amplify Academy</li>
                <li><i className="fas fa-check text-orange-500 mr-2"></i>Marketplace de Oportunidades</li>
                <li><i className="fas fa-check text-orange-500 mr-2"></i>Chat com IA (Amplify Assistant)</li>
                <li><i className="fas fa-check text-orange-500 mr-2"></i>Dashboard ROI Comparativo</li>
                <li><i className="fas fa-check text-green-500 mr-2"></i>Contratos Digitais</li>
                <li><i className="fas fa-check text-green-500 mr-2"></i>Dashboard de Competidores</li>
                <li><i className="fas fa-check text-green-500 mr-2"></i>Gestão de Crises</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Informações do Projeto</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li><strong>Autor:</strong> João Moretti</li>
                <li><strong>Versão:</strong> 7.0</li>
                <li><strong>Data:</strong> {new Date().toLocaleDateString('pt-BR')}</li>
                <li><strong>Total de Telas:</strong> 85+</li>
              </ul>
              <div className="mt-4 p-3 bg-gray-700 rounded-lg">
                <p className="text-xs text-gray-300">
                  <strong className="text-green-400">Novidades v7.0:</strong><br/>
                  • Contratos Digitais (Assinatura Eletrônica)<br/>
                  • Dashboard de Competidores<br/>
                  • Gestão de Crises de Reputação
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Amplify - Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
