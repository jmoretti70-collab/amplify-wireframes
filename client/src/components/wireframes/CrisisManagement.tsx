import { AlertTriangle, Shield, MessageCircle, Clock, Users, TrendingDown, TrendingUp, Bell, FileText, CheckCircle, XCircle, AlertCircle, Phone, Mail, Globe, Activity, Eye, Zap, Target, BarChart3, ArrowRight, RefreshCw } from 'lucide-react';

export default function CrisisManagement() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-2">Gestão de Crises</h2>
        <p className="text-red-100">Alertas e plano de ação para situações de reputação negativa</p>
      </div>

      {/* 1. Dashboard de Monitoramento */}
      <div>
        <h3 className="text-xl font-semibold text-red-600 mb-4">1. Dashboard de Monitoramento de Crises</h3>
        <div className="bg-white rounded-xl shadow-lg p-6 border">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h4 className="text-xl font-bold text-gray-800">Centro de Comando</h4>
              <p className="text-gray-500 text-sm">Monitoramento em tempo real de reputação</p>
            </div>
            <div className="flex gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium">Sistema Ativo</span>
              </div>
              <button className="px-4 py-2 bg-red-600 text-white rounded-lg flex items-center gap-2 hover:bg-red-700">
                <AlertTriangle size={18} />
                Declarar Crise
              </button>
            </div>
          </div>

          {/* Status Cards */}
          <div className="grid grid-cols-5 gap-4 mb-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 text-center border border-green-200">
              <Shield className="mx-auto text-green-600 mb-2" size={24} />
              <p className="text-2xl font-bold text-green-700">Estável</p>
              <p className="text-xs text-green-600">Status Geral</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center border border-blue-200">
              <Activity className="mx-auto text-blue-600 mb-2" size={24} />
              <p className="text-2xl font-bold text-blue-700">87</p>
              <p className="text-xs text-blue-600">Sentiment Score</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-4 text-center border border-yellow-200">
              <Eye className="mx-auto text-yellow-600 mb-2" size={24} />
              <p className="text-2xl font-bold text-yellow-700">3</p>
              <p className="text-xs text-yellow-600">Alertas Ativos</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 text-center border border-purple-200">
              <MessageCircle className="mx-auto text-purple-600 mb-2" size={24} />
              <p className="text-2xl font-bold text-purple-700">1,247</p>
              <p className="text-xs text-purple-600">Menções Hoje</p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 text-center border border-gray-200">
              <Clock className="mx-auto text-gray-600 mb-2" size={24} />
              <p className="text-2xl font-bold text-gray-700">15min</p>
              <p className="text-xs text-gray-600">Tempo Médio Resposta</p>
            </div>
          </div>

          {/* Gráfico de Sentimento */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-4">
              <h5 className="font-semibold text-gray-800 mb-4">Evolução do Sentimento (24h)</h5>
              <div className="h-40 flex items-end justify-between gap-1">
                {[75, 78, 82, 80, 85, 83, 88, 85, 87, 84, 86, 87].map((value, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center">
                    <div 
                      className={`w-full rounded-t ${value >= 80 ? 'bg-green-500' : value >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`}
                      style={{height: `${value}%`}}
                    ></div>
                    <span className="text-xs text-gray-400 mt-1">{i * 2}h</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <h5 className="font-semibold text-gray-800 mb-4">Distribuição de Menções</h5>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600 flex-1">Positivas</span>
                  <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{width: '65%'}}></div>
                  </div>
                  <span className="text-sm font-medium">65%</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  <span className="text-sm text-gray-600 flex-1">Neutras</span>
                  <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gray-400 rounded-full" style={{width: '25%'}}></div>
                  </div>
                  <span className="text-sm font-medium">25%</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-600 flex-1">Negativas</span>
                  <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 rounded-full" style={{width: '10%'}}></div>
                  </div>
                  <span className="text-sm font-medium">10%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Alertas de Crise */}
      <div>
        <h3 className="text-xl font-semibold text-red-600 mb-4">2. Central de Alertas</h3>
        <div className="bg-white rounded-xl shadow-lg p-6 border">
          <div className="flex justify-between items-center mb-4">
            <h5 className="font-semibold text-gray-800">Alertas Ativos</h5>
            <button className="text-sm text-gray-600 hover:text-gray-800">Configurar Alertas</button>
          </div>

          <div className="space-y-4">
            {/* Alerta Crítico */}
            <div className="border-2 border-red-500 bg-red-50 rounded-xl p-4 animate-pulse">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 bg-red-500 text-white text-xs rounded-full font-bold">CRÍTICO</span>
                        <span className="text-sm text-gray-500">há 15 minutos</span>
                      </div>
                      <h5 className="font-bold text-gray-800 text-lg">Campanha @mariaalves - Comentários Negativos em Alta</h5>
                      <p className="text-gray-600 text-sm mt-1">
                        Detectamos um aumento de 340% em comentários negativos nos últimos 30 minutos. 
                        Hashtag #boicote está sendo usada em 45 posts.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <button className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700">
                      Ativar Protocolo de Crise
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                      Ver Detalhes
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                      Silenciar
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Alerta Moderado */}
            <div className="border border-yellow-400 bg-yellow-50 rounded-xl p-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 bg-yellow-500 text-white text-xs rounded-full font-bold">MODERADO</span>
                        <span className="text-sm text-gray-500">há 2 horas</span>
                      </div>
                      <h5 className="font-bold text-gray-800">Influenciador @pedrotech - Polêmica em Entrevista</h5>
                      <p className="text-gray-600 text-sm mt-1">
                        Declaração controversa em podcast está gerando repercussão. 127 menções negativas identificadas.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg text-sm font-medium hover:bg-yellow-700">
                      Monitorar
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                      Preparar Resposta
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Alerta Baixo */}
            <div className="border border-blue-300 bg-blue-50 rounded-xl p-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bell className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 bg-blue-500 text-white text-xs rounded-full font-bold">BAIXO</span>
                    <span className="text-sm text-gray-500">há 5 horas</span>
                  </div>
                  <h5 className="font-bold text-gray-800">Menção em Veículo de Mídia</h5>
                  <p className="text-gray-600 text-sm mt-1">
                    Portal de notícias mencionou campanha da Fashion Brand X. Sentimento neutro.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Plano de Ação */}
      <div>
        <h3 className="text-xl font-semibold text-red-600 mb-4">3. Plano de Ação de Crise</h3>
        <div className="bg-white rounded-xl shadow-lg p-6 border">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h4 className="text-lg font-bold text-gray-800">Protocolo de Crise Ativo</h4>
              <p className="text-gray-500 text-sm">Campanha @mariaalves - Fashion Brand X</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">Em Andamento</span>
              <span className="text-sm text-gray-500">Iniciado há 15 min</span>
            </div>
          </div>

          {/* Timeline de Ações */}
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            <div className="space-y-6">
              {/* Etapa 1 - Concluída */}
              <div className="flex gap-4 relative">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center z-10">
                  <CheckCircle className="text-white" size={24} />
                </div>
                <div className="flex-1 bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-semibold text-gray-800">1. Identificação e Avaliação</h5>
                      <p className="text-sm text-gray-600 mt-1">Crise identificada e classificada como nível crítico</p>
                    </div>
                    <span className="text-xs text-green-600 font-medium">Concluído</span>
                  </div>
                  <div className="mt-2 text-xs text-gray-500">Responsável: Sistema Automático • 14:32</div>
                </div>
              </div>

              {/* Etapa 2 - Concluída */}
              <div className="flex gap-4 relative">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center z-10">
                  <CheckCircle className="text-white" size={24} />
                </div>
                <div className="flex-1 bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-semibold text-gray-800">2. Notificação da Equipe</h5>
                      <p className="text-sm text-gray-600 mt-1">Equipe de crise notificada via SMS, WhatsApp e Email</p>
                    </div>
                    <span className="text-xs text-green-600 font-medium">Concluído</span>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded">João Silva ✓</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded">Ana Costa ✓</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded">Cliente ✓</span>
                  </div>
                </div>
              </div>

              {/* Etapa 3 - Em Andamento */}
              <div className="flex gap-4 relative">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center z-10 animate-pulse">
                  <RefreshCw className="text-white animate-spin" size={24} />
                </div>
                <div className="flex-1 bg-yellow-50 border border-yellow-300 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-semibold text-gray-800">3. Pausar Publicações</h5>
                      <p className="text-sm text-gray-600 mt-1">Pausando todas as publicações agendadas da campanha</p>
                    </div>
                    <span className="text-xs text-yellow-600 font-medium">Em Andamento</span>
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Progresso</span>
                      <span>3/5 posts pausados</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500 rounded-full" style={{width: '60%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Etapa 4 - Pendente */}
              <div className="flex gap-4 relative">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center z-10">
                  <Clock className="text-white" size={24} />
                </div>
                <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-semibold text-gray-800">4. Preparar Comunicado Oficial</h5>
                      <p className="text-sm text-gray-600 mt-1">Redigir nota de esclarecimento para publicação</p>
                    </div>
                    <span className="text-xs text-gray-500 font-medium">Pendente</span>
                  </div>
                  <button className="mt-3 px-4 py-2 bg-gray-200 text-gray-600 rounded-lg text-sm hover:bg-gray-300">
                    Iniciar Redação
                  </button>
                </div>
              </div>

              {/* Etapa 5 - Pendente */}
              <div className="flex gap-4 relative">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center z-10">
                  <MessageCircle className="text-white" size={24} />
                </div>
                <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-800">5. Responder Comentários Críticos</h5>
                  <p className="text-sm text-gray-600 mt-1">Responder individualmente os comentários mais relevantes</p>
                </div>
              </div>

              {/* Etapa 6 - Pendente */}
              <div className="flex gap-4 relative">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center z-10">
                  <BarChart3 className="text-white" size={24} />
                </div>
                <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-800">6. Monitorar e Avaliar Impacto</h5>
                  <p className="text-sm text-gray-600 mt-1">Acompanhar evolução do sentimento e gerar relatório</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Equipe de Crise */}
      <div>
        <h3 className="text-xl font-semibold text-red-600 mb-4">4. Equipe de Resposta a Crises</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl shadow-lg p-6 border">
            <h5 className="font-semibold text-gray-800 mb-4">Contatos de Emergência</h5>
            <div className="space-y-3">
              <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">JS</div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">João Silva</p>
                  <p className="text-sm text-gray-500">Gerente de Crises</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200">
                    <Phone size={18} />
                  </button>
                  <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200">
                    <Mail size={18} />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">AC</div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">Ana Costa</p>
                  <p className="text-sm text-gray-500">Diretora de Comunicação</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200">
                    <Phone size={18} />
                  </button>
                  <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200">
                    <Mail size={18} />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">CL</div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">Cliente - Fashion Brand X</p>
                  <p className="text-sm text-gray-500">Contato Principal</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200">
                    <Phone size={18} />
                  </button>
                  <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200">
                    <Mail size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border">
            <h5 className="font-semibold text-gray-800 mb-4">Templates de Resposta</h5>
            <div className="space-y-3">
              <div className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <div className="flex items-center gap-2 mb-1">
                  <FileText className="text-gray-400" size={16} />
                  <p className="font-medium text-gray-800">Pedido de Desculpas Formal</p>
                </div>
                <p className="text-xs text-gray-500">Para situações de erro grave da marca ou influenciador</p>
              </div>
              <div className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <div className="flex items-center gap-2 mb-1">
                  <FileText className="text-gray-400" size={16} />
                  <p className="font-medium text-gray-800">Esclarecimento de Mal-entendido</p>
                </div>
                <p className="text-xs text-gray-500">Para situações de informação incorreta ou fora de contexto</p>
              </div>
              <div className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <div className="flex items-center gap-2 mb-1">
                  <FileText className="text-gray-400" size={16} />
                  <p className="font-medium text-gray-800">Nota de Posicionamento</p>
                </div>
                <p className="text-xs text-gray-500">Para temas polêmicos que exigem posicionamento claro</p>
              </div>
              <div className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <div className="flex items-center gap-2 mb-1">
                  <FileText className="text-gray-400" size={16} />
                  <p className="font-medium text-gray-800">Encerramento de Parceria</p>
                </div>
                <p className="text-xs text-gray-500">Para situações que exigem término do contrato</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Mobile - Alertas */}
      <div>
        <h3 className="text-xl font-semibold text-red-600 mb-4">5. Alertas Mobile (Gestão de Crises)</h3>
        <div className="flex justify-center gap-6">
          {/* Tela de Alerta Push */}
          <div className="w-72 bg-gray-900 rounded-3xl p-2 shadow-xl">
            <div className="bg-white rounded-2xl overflow-hidden h-[580px]">
              {/* Status Bar */}
              <div className="bg-gray-100 px-4 py-2 flex justify-between items-center text-xs text-gray-600">
                <span>14:47</span>
                <span>🔋 85%</span>
              </div>

              {/* Notificação Push */}
              <div className="p-4">
                <div className="bg-red-500 rounded-2xl p-4 text-white mb-4 shadow-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <AlertTriangle size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-sm">ALERTA CRÍTICO</p>
                      <p className="text-xs text-red-200">Amplify • Agora</p>
                    </div>
                  </div>
                  <p className="text-sm">
                    Crise detectada na campanha @mariaalves. Aumento de 340% em comentários negativos.
                  </p>
                  <div className="flex gap-2 mt-3">
                    <button className="flex-1 py-2 bg-white text-red-600 rounded-lg text-sm font-medium">
                      Ver Detalhes
                    </button>
                    <button className="flex-1 py-2 bg-white/20 text-white rounded-lg text-sm font-medium">
                      Ativar Protocolo
                    </button>
                  </div>
                </div>

                {/* Lista de Alertas */}
                <h5 className="font-semibold text-gray-800 mb-3">Alertas Recentes</h5>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-3 bg-red-50 border border-red-200 rounded-xl">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                      <AlertTriangle className="text-white" size={18} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800">Crise @mariaalves</p>
                      <p className="text-xs text-gray-500">Crítico • há 15 min</p>
                    </div>
                    <ArrowRight className="text-gray-400" size={18} />
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded-xl">
                    <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                      <AlertCircle className="text-white" size={18} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800">Polêmica @pedrotech</p>
                      <p className="text-xs text-gray-500">Moderado • há 2h</p>
                    </div>
                    <ArrowRight className="text-gray-400" size={18} />
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-xl">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="text-white" size={18} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800">Crise resolvida</p>
                      <p className="text-xs text-gray-500">TechStore • ontem</p>
                    </div>
                    <ArrowRight className="text-gray-400" size={18} />
                  </div>
                </div>
              </div>

              {/* Bottom Nav */}
              <div className="absolute bottom-2 left-2 right-2 bg-white border-t p-3 flex justify-around rounded-b-2xl">
                <button className="flex flex-col items-center text-red-600 text-xs">
                  <Bell size={20} />
                  Alertas
                </button>
                <button className="flex flex-col items-center text-gray-400 text-xs">
                  <Activity size={20} />
                  Monitor
                </button>
                <button className="flex flex-col items-center text-gray-400 text-xs">
                  <Users size={20} />
                  Equipe
                </button>
              </div>
            </div>
          </div>

          {/* Tela de Detalhes da Crise */}
          <div className="w-72 bg-gray-900 rounded-3xl p-2 shadow-xl">
            <div className="bg-white rounded-2xl overflow-hidden h-[580px]">
              {/* Header */}
              <div className="bg-red-600 text-white p-4">
                <div className="flex items-center gap-3 mb-2">
                  <button className="p-1">←</button>
                  <div className="flex-1">
                    <h4 className="font-semibold">Detalhes da Crise</h4>
                    <p className="text-xs text-red-200">@mariaalves • Fashion Brand X</p>
                  </div>
                  <span className="px-2 py-1 bg-white/20 rounded-full text-xs">Ativa</span>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-4 overflow-y-auto" style={{maxHeight: '420px'}}>
                {/* Métricas */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-red-50 rounded-lg p-3 text-center">
                    <p className="text-xl font-bold text-red-600">-340%</p>
                    <p className="text-xs text-gray-500">Sentimento</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <p className="text-xl font-bold text-gray-800">847</p>
                    <p className="text-xs text-gray-500">Menções Neg.</p>
                  </div>
                </div>

                {/* Ações Rápidas */}
                <h5 className="font-semibold text-gray-800 mb-2 text-sm">Ações Rápidas</h5>
                <div className="space-y-2 mb-4">
                  <button className="w-full py-2 bg-red-600 text-white rounded-lg text-sm font-medium flex items-center justify-center gap-2">
                    <Zap size={16} />
                    Pausar Todas Publicações
                  </button>
                  <button className="w-full py-2 border border-gray-300 rounded-lg text-sm text-gray-700 flex items-center justify-center gap-2">
                    <Phone size={16} />
                    Ligar para Equipe
                  </button>
                  <button className="w-full py-2 border border-gray-300 rounded-lg text-sm text-gray-700 flex items-center justify-center gap-2">
                    <FileText size={16} />
                    Usar Template de Resposta
                  </button>
                </div>

                {/* Timeline */}
                <h5 className="font-semibold text-gray-800 mb-2 text-sm">Progresso</h5>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-xs text-gray-600">Identificação</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-xs text-gray-600">Equipe notificada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RefreshCw className="text-yellow-500 animate-spin" size={16} />
                    <span className="text-xs text-gray-600">Pausando posts...</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="text-gray-300" size={16} />
                    <span className="text-xs text-gray-400">Comunicado oficial</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
