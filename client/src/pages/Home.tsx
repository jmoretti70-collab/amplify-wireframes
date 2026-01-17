/**
 * Home Page - Amplify Wireframes
 * Design: Gradiente Amplify (laranja-rosa), navegação por tabs, splash screen animado
 * Autor: João Moretti
 * Versão: 3.0 - Inclui Integrações, Relatórios White-Label e Aprovação de Conteúdo
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

type TabType = "web" | "mobile" | "analytics" | "onboarding" | "financial" | "integrations" | "reports" | "approval";

interface Tab {
  id: TabType;
  label: string;
  icon: string;
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
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex space-x-1 overflow-x-auto py-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3 px-3 font-medium transition-colors whitespace-nowrap flex items-center text-sm rounded-lg ${
                  activeTab === tab.id
                    ? "text-white bg-gradient-to-r from-orange-500 to-pink-500"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                }`}
              >
                <i className={`fas ${tab.icon} mr-2`}></i>
                {tab.label}
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
              <h4 className="font-semibold mb-4">Módulos do Sistema</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li><i className="fas fa-check text-orange-500 mr-2"></i>Dashboard da Agência</li>
                <li><i className="fas fa-check text-orange-500 mr-2"></i>Portal do Influenciador (PWA)</li>
                <li><i className="fas fa-check text-orange-500 mr-2"></i>Analytics e Relatórios</li>
                <li><i className="fas fa-check text-orange-500 mr-2"></i>Onboarding de Usuários</li>
                <li><i className="fas fa-check text-orange-500 mr-2"></i>Módulo Financeiro</li>
                <li><i className="fas fa-check text-orange-500 mr-2"></i>Integrações (APIs)</li>
                <li><i className="fas fa-check text-orange-500 mr-2"></i>Relatórios White-Label</li>
                <li><i className="fas fa-check text-orange-500 mr-2"></i>Aprovação de Conteúdo</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Informações do Projeto</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li><strong>Autor:</strong> João Moretti</li>
                <li><strong>Versão:</strong> 3.0</li>
                <li><strong>Data:</strong> {new Date().toLocaleDateString('pt-BR')}</li>
              </ul>
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
