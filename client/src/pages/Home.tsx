/**
 * Home Page - Amplify Wireframes
 * Design: Gradiente Amplify (laranja-rosa), navegação por tabs, splash screen animado
 */

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SplashScreen from "@/components/SplashScreen";
import WebDashboard from "@/components/wireframes/WebDashboard";
import MobilePWA from "@/components/wireframes/MobilePWA";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState<"web" | "mobile">("web");

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Splash Screen */}
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      </AnimatePresence>

      {/* Header */}
      <header className="amplify-gradient text-white py-6 px-8">
        <div className="container mx-auto flex items-center">
          <img src="/images/amplify_logo.png" alt="Amplify Logo" className="h-12 mr-4" />
          <div>
            <h1 className="text-3xl font-bold">Wireframes - Amplify</h1>
            <p className="text-orange-100 mt-1">Protótipos de baixa fidelidade para Web Dashboard e PWA Mobile</p>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab("web")}
              className={`py-4 px-2 font-medium transition-colors ${
                activeTab === "web"
                  ? "border-b-3 border-orange-500 text-orange-500"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              style={{ borderBottomWidth: activeTab === "web" ? "3px" : "0" }}
            >
              <i className="fas fa-desktop mr-2"></i>Web Dashboard
            </button>
            <button
              onClick={() => setActiveTab("mobile")}
              className={`py-4 px-2 font-medium transition-colors ${
                activeTab === "mobile"
                  ? "border-b-3 border-orange-500 text-orange-500"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              style={{ borderBottomWidth: activeTab === "mobile" ? "3px" : "0" }}
            >
              <i className="fas fa-mobile-alt mr-2"></i>PWA Mobile
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {activeTab === "web" ? (
            <motion.div
              key="web"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <WebDashboard />
            </motion.div>
          ) : (
            <motion.div
              key="mobile"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <MobilePWA />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <img src="/images/amplify_logo.png" alt="Amplify" className="h-10 mx-auto mb-4" />
          <p className="text-gray-400">
            Projeto de Plataforma de Gestão de Influenciadores Digitais
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Autor: João Moretti • {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
