/**
 * Wireframe do Módulo Chat com IA
 * Design: Amplify v6.0 - Assistente Virtual Inteligente
 * Autor: João Moretti
 */

import { MessageSquare, Send, Mic, Paperclip, Bot, User, Sparkles, ThumbsUp, ThumbsDown, Copy, RefreshCw, Settings, HelpCircle, TrendingUp, Users, DollarSign, Calendar, ChevronRight, Zap, Brain, Target } from 'lucide-react';

export default function ChatAI() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center py-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl text-white">
        <h2 className="text-3xl font-bold mb-2">Chat com IA - Amplify Assistant</h2>
        <p className="text-cyan-100">Assistente virtual inteligente para ajudar em todas as suas dúvidas</p>
      </div>

      {/* 1. Interface Principal do Chat (Web) */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-cyan-600">1. Interface Principal do Chat (Web Dashboard)</h3>
        
        <div className="bg-white rounded-xl shadow-lg border overflow-hidden">
          <div className="flex h-[600px]">
            {/* Sidebar */}
            <div className="w-80 border-r bg-gray-50">
              {/* Header */}
              <div className="p-4 border-b bg-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Amplify AI</h4>
                      <p className="text-xs text-green-500 flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        Online
                      </p>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Settings className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
                <button className="w-full py-2 bg-cyan-600 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-cyan-700">
                  <Sparkles className="w-4 h-4" />
                  Nova Conversa
                </button>
              </div>
              
              {/* Conversas Recentes */}
              <div className="p-4">
                <p className="text-xs text-gray-500 font-medium mb-2">CONVERSAS RECENTES</p>
                <div className="space-y-2">
                  <div className="p-3 bg-cyan-50 border border-cyan-200 rounded-lg cursor-pointer">
                    <p className="font-medium text-sm text-gray-800 truncate">Como calcular ROI de campanhas?</p>
                    <p className="text-xs text-gray-500">Hoje, 14:32</p>
                  </div>
                  <div className="p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                    <p className="font-medium text-sm text-gray-800 truncate">Melhores práticas para briefing</p>
                    <p className="text-xs text-gray-500">Ontem, 16:45</p>
                  </div>
                  <div className="p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                    <p className="font-medium text-sm text-gray-800 truncate">Análise de influenciador @maria</p>
                    <p className="text-xs text-gray-500">15 Jan, 10:20</p>
                  </div>
                  <div className="p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                    <p className="font-medium text-sm text-gray-800 truncate">Sugestões de preço para Reels</p>
                    <p className="text-xs text-gray-500">14 Jan, 09:15</p>
                  </div>
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="p-4 border-t">
                <p className="text-xs text-gray-500 font-medium mb-2">AÇÕES RÁPIDAS</p>
                <div className="space-y-2">
                  <button className="w-full p-2 text-left text-sm hover:bg-gray-100 rounded-lg flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-cyan-600" />
                    Analisar performance
                  </button>
                  <button className="w-full p-2 text-left text-sm hover:bg-gray-100 rounded-lg flex items-center gap-2">
                    <Users className="w-4 h-4 text-cyan-600" />
                    Encontrar influenciadores
                  </button>
                  <button className="w-full p-2 text-left text-sm hover:bg-gray-100 rounded-lg flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-cyan-600" />
                    Calcular orçamento
                  </button>
                  <button className="w-full p-2 text-left text-sm hover:bg-gray-100 rounded-lg flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-cyan-600" />
                    Planejar campanha
                  </button>
                </div>
              </div>
            </div>
            
            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Amplify Assistant</h4>
                    <p className="text-xs text-gray-500">Powered by GPT-4 + Dados Amplify</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg" title="Ajuda">
                    <HelpCircle className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
              </div>
              
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {/* Welcome Message */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-none p-4 shadow-sm max-w-[80%]">
                    <p className="text-gray-800">Olá! 👋 Sou o Amplify Assistant, seu assistente de IA para marketing de influência. Posso ajudar você com:</p>
                    <ul className="mt-2 space-y-1 text-gray-600 text-sm">
                      <li>• Análise de influenciadores e métricas</li>
                      <li>• Cálculo de ROI e orçamentos</li>
                      <li>• Sugestões de estratégias de campanha</li>
                      <li>• Dúvidas sobre a plataforma</li>
                    </ul>
                    <p className="mt-2 text-gray-800">Como posso ajudar você hoje?</p>
                  </div>
                </div>
                
                {/* User Message */}
                <div className="flex gap-3 justify-end">
                  <div className="bg-cyan-600 text-white rounded-2xl rounded-tr-none p-4 shadow-sm max-w-[80%]">
                    <p>Como calcular o ROI de uma campanha de influenciadores? Tenho uma campanha com 5 influenciadores e quero entender se está valendo a pena.</p>
                  </div>
                  <div className="w-8 h-8 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-gray-600" />
                  </div>
                </div>
                
                {/* AI Response */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-none p-4 shadow-sm max-w-[80%]">
                    <p className="text-gray-800 mb-3">Ótima pergunta! O ROI (Return on Investment) em campanhas de influenciadores pode ser calculado de várias formas. Aqui está a fórmula básica:</p>
                    
                    <div className="bg-gray-100 rounded-lg p-3 mb-3 font-mono text-sm">
                      ROI = ((Receita Gerada - Custo da Campanha) / Custo da Campanha) × 100
                    </div>
                    
                    <p className="text-gray-800 mb-3">Para sua campanha com 5 influenciadores, você precisa considerar:</p>
                    
                    <div className="space-y-2 mb-3">
                      <div className="flex items-start gap-2">
                        <span className="w-5 h-5 bg-cyan-100 text-cyan-700 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                        <p className="text-sm text-gray-600"><strong>Custos:</strong> Pagamento aos influenciadores, produção de conteúdo, produtos enviados</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-5 h-5 bg-cyan-100 text-cyan-700 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                        <p className="text-sm text-gray-600"><strong>Receita direta:</strong> Vendas com cupons de desconto ou links rastreáveis</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-5 h-5 bg-cyan-100 text-cyan-700 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                        <p className="text-sm text-gray-600"><strong>Valor de mídia:</strong> Alcance × CPM médio do mercado</p>
                      </div>
                    </div>
                    
                    <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-3">
                      <p className="text-sm text-cyan-800 flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        <strong>Dica:</strong> Posso calcular o ROI da sua campanha automaticamente! Basta me dizer o nome da campanha ou compartilhar os dados.
                      </p>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 mt-3 pt-3 border-t">
                      <button className="p-1 hover:bg-gray-100 rounded" title="Útil">
                        <ThumbsUp className="w-4 h-4 text-gray-400" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded" title="Não útil">
                        <ThumbsDown className="w-4 h-4 text-gray-400" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded" title="Copiar">
                        <Copy className="w-4 h-4 text-gray-400" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded" title="Regenerar">
                        <RefreshCw className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Suggested Questions */}
                <div className="flex flex-wrap gap-2 ml-11">
                  <button className="px-3 py-1 bg-white border border-cyan-200 text-cyan-700 rounded-full text-sm hover:bg-cyan-50">
                    Calcular ROI da campanha "Verão 2026"
                  </button>
                  <button className="px-3 py-1 bg-white border border-cyan-200 text-cyan-700 rounded-full text-sm hover:bg-cyan-50">
                    Comparar com benchmark do mercado
                  </button>
                  <button className="px-3 py-1 bg-white border border-cyan-200 text-cyan-700 rounded-full text-sm hover:bg-cyan-50">
                    Exportar relatório de ROI
                  </button>
                </div>
              </div>
              
              {/* Input Area */}
              <div className="p-4 border-t bg-white">
                <div className="flex items-center gap-3">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Paperclip className="w-5 h-5 text-gray-500" />
                  </button>
                  <div className="flex-1 relative">
                    <input 
                      type="text" 
                      placeholder="Digite sua pergunta..." 
                      className="w-full px-4 py-3 border rounded-xl pr-24 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                      <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <Mic className="w-5 h-5 text-gray-500" />
                      </button>
                      <button className="p-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700">
                        <Send className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-400 text-center mt-2">Amplify AI pode cometer erros. Verifique informações importantes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Capacidades da IA */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-cyan-600">2. Capacidades do Amplify AI</h3>
        
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border">
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-cyan-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Análise Inteligente</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-cyan-500" /> Análise de perfil de influenciadores</li>
              <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-cyan-500" /> Detecção de fake followers</li>
              <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-cyan-500" /> Previsão de engajamento</li>
              <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-cyan-500" /> Análise de sentimento</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 border">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Recomendações</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-purple-500" /> Sugestão de influenciadores</li>
              <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-purple-500" /> Otimização de orçamento</li>
              <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-purple-500" /> Melhores horários para posts</li>
              <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-purple-500" /> Estratégias de campanha</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 border">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Automação</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-green-500" /> Geração de briefings</li>
              <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-green-500" /> Criação de relatórios</li>
              <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-green-500" /> Respostas automáticas</li>
              <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-green-500" /> Alertas inteligentes</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3. Chat Mobile */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-cyan-600">3. Chat com IA (PWA Mobile)</h3>
        
        <div className="flex gap-6 justify-center">
          {/* Tela 1: Chat Principal */}
          <div className="w-[280px] bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
            <div className="bg-white rounded-[2rem] overflow-hidden h-[580px] flex flex-col">
              {/* Header */}
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-4 text-white">
                <div className="flex items-center gap-3">
                  <button className="p-1">←</button>
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold">Amplify AI</h4>
                    <p className="text-xs text-cyan-100">Online • Responde em segundos</p>
                  </div>
                </div>
              </div>
              
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
                {/* AI Message */}
                <div className="flex gap-2">
                  <div className="w-7 h-7 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-none p-3 shadow-sm max-w-[85%]">
                    <p className="text-sm text-gray-800">Olá! 👋 Como posso ajudar você hoje?</p>
                  </div>
                </div>
                
                {/* User Message */}
                <div className="flex gap-2 justify-end">
                  <div className="bg-cyan-600 text-white rounded-2xl rounded-tr-none p-3 shadow-sm max-w-[85%]">
                    <p className="text-sm">Qual o melhor horário para postar no Instagram?</p>
                  </div>
                </div>
                
                {/* AI Response */}
                <div className="flex gap-2">
                  <div className="w-7 h-7 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-none p-3 shadow-sm max-w-[85%]">
                    <p className="text-sm text-gray-800 mb-2">Baseado na análise do seu público, os melhores horários são:</p>
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between bg-cyan-50 p-2 rounded">
                        <span>Segunda a Sexta</span>
                        <span className="font-bold text-cyan-700">12h - 14h</span>
                      </div>
                      <div className="flex justify-between bg-cyan-50 p-2 rounded">
                        <span>Sábado</span>
                        <span className="font-bold text-cyan-700">10h - 12h</span>
                      </div>
                      <div className="flex justify-between bg-cyan-50 p-2 rounded">
                        <span>Domingo</span>
                        <span className="font-bold text-cyan-700">19h - 21h</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Quick Suggestions */}
                <div className="flex flex-wrap gap-2">
                  <button className="px-3 py-1 bg-white border border-cyan-200 text-cyan-700 rounded-full text-xs">
                    Ver análise completa
                  </button>
                  <button className="px-3 py-1 bg-white border border-cyan-200 text-cyan-700 rounded-full text-xs">
                    Agendar post
                  </button>
                </div>
              </div>
              
              {/* Input */}
              <div className="p-3 border-t bg-white">
                <div className="flex items-center gap-2">
                  <button className="p-2">
                    <Paperclip className="w-5 h-5 text-gray-400" />
                  </button>
                  <input 
                    type="text" 
                    placeholder="Digite sua pergunta..." 
                    className="flex-1 px-3 py-2 bg-gray-100 rounded-full text-sm"
                  />
                  <button className="p-2">
                    <Mic className="w-5 h-5 text-gray-400" />
                  </button>
                  <button className="p-2 bg-cyan-600 rounded-full">
                    <Send className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tela 2: Ações Rápidas */}
          <div className="w-[280px] bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
            <div className="bg-white rounded-[2rem] overflow-hidden h-[580px]">
              {/* Header */}
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-4 text-white">
                <h4 className="font-bold text-center">O que você precisa?</h4>
              </div>
              
              {/* Quick Actions Grid */}
              <div className="p-4 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <button className="p-4 bg-cyan-50 rounded-xl text-center hover:bg-cyan-100 transition-colors">
                    <TrendingUp className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-800">Analisar Performance</p>
                  </button>
                  <button className="p-4 bg-purple-50 rounded-xl text-center hover:bg-purple-100 transition-colors">
                    <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-800">Encontrar Influencers</p>
                  </button>
                  <button className="p-4 bg-green-50 rounded-xl text-center hover:bg-green-100 transition-colors">
                    <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-800">Calcular Orçamento</p>
                  </button>
                  <button className="p-4 bg-orange-50 rounded-xl text-center hover:bg-orange-100 transition-colors">
                    <Calendar className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-800">Planejar Campanha</p>
                  </button>
                </div>
                
                <div className="border-t pt-4">
                  <p className="text-xs text-gray-500 font-medium mb-3">PERGUNTAS FREQUENTES</p>
                  <div className="space-y-2">
                    <button className="w-full p-3 bg-gray-50 rounded-lg text-left text-sm text-gray-700 hover:bg-gray-100">
                      Como calcular ROI de campanhas?
                    </button>
                    <button className="w-full p-3 bg-gray-50 rounded-lg text-left text-sm text-gray-700 hover:bg-gray-100">
                      Qual o preço médio por post?
                    </button>
                    <button className="w-full p-3 bg-gray-50 rounded-lg text-left text-sm text-gray-700 hover:bg-gray-100">
                      Como identificar fake followers?
                    </button>
                    <button className="w-full p-3 bg-gray-50 rounded-lg text-left text-sm text-gray-700 hover:bg-gray-100">
                      Melhores práticas para briefing
                    </button>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-4 text-white">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-8 h-8" />
                    <div>
                      <p className="font-bold">Dica do dia</p>
                      <p className="text-xs text-cyan-100">Micro-influenciadores têm 60% mais engajamento que mega-influenciadores!</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom Nav */}
              <div className="absolute bottom-3 left-3 right-3 bg-white border-t py-2 px-4 flex justify-around rounded-b-[2rem]">
                <button className="flex flex-col items-center text-gray-400">
                  <MessageSquare className="w-5 h-5" />
                  <span className="text-[10px]">Chat</span>
                </button>
                <button className="flex flex-col items-center text-cyan-600">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-[10px]">Ações</span>
                </button>
                <button className="flex flex-col items-center text-gray-400">
                  <HelpCircle className="w-5 h-5" />
                  <span className="text-[10px]">Ajuda</span>
                </button>
              </div>
            </div>
          </div>

          {/* Tela 3: Resultado de Análise */}
          <div className="w-[280px] bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
            <div className="bg-white rounded-[2rem] overflow-hidden h-[580px]">
              {/* Header */}
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-4 text-white">
                <div className="flex items-center gap-3">
                  <button className="p-1">←</button>
                  <h4 className="font-bold">Análise de Performance</h4>
                </div>
              </div>
              
              {/* Analysis Result */}
              <div className="p-4 space-y-4 overflow-y-auto h-[500px]">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-4 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800">Campanha Verão 2026</h4>
                  <p className="text-sm text-gray-500">Análise gerada por IA</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-green-50 rounded-xl p-3 text-center">
                    <p className="text-2xl font-bold text-green-600">5.2x</p>
                    <p className="text-xs text-gray-600">ROI</p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-3 text-center">
                    <p className="text-2xl font-bold text-blue-600">2.4M</p>
                    <p className="text-xs text-gray-600">Alcance</p>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-3 text-center">
                    <p className="text-2xl font-bold text-purple-600">4.2%</p>
                    <p className="text-xs text-gray-600">Engajamento</p>
                  </div>
                  <div className="bg-orange-50 rounded-xl p-3 text-center">
                    <p className="text-2xl font-bold text-orange-600">1,247</p>
                    <p className="text-xs text-gray-600">Conversões</p>
                  </div>
                </div>
                
                <div className="bg-white border rounded-xl p-4">
                  <h5 className="font-bold text-sm mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-600" />
                    Insights da IA
                  </h5>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      ROI 30% acima da média do mercado
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      Engajamento consistente em todos os posts
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">!</span>
                      Considere aumentar investimento em TikTok
                    </li>
                  </ul>
                </div>
                
                <button className="w-full py-3 bg-cyan-600 text-white rounded-xl font-medium">
                  Exportar Relatório
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
