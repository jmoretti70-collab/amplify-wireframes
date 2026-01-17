/**
 * Social Listening - Wireframes
 * Design: Amplify Platform - Monitoramento de menções e análise de sentimento
 * Autor: João Moretti
 */

import { Search, TrendingUp, MessageCircle, Heart, Share2, AlertTriangle, Smile, Meh, Frown, Hash, AtSign, Globe, Filter, Download, Bell, Users, BarChart3, PieChart, Calendar, RefreshCw, Eye, ExternalLink, Zap } from 'lucide-react';

export default function SocialListening() {
  return (
    <div className="space-y-12 pb-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Dashboard de Social Listening</h2>
        <p className="text-gray-600">Monitoramento de menções e análise de sentimento em tempo real</p>
      </div>

      {/* 1. Dashboard Principal */}
      <section>
        <h3 className="text-lg font-semibold text-orange-600 mb-4">1. Dashboard de Monitoramento</h3>
        <div className="bg-white rounded-xl shadow-lg p-6 border">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h4 className="text-xl font-bold text-gray-800">Social Listening</h4>
              <p className="text-gray-500 text-sm">Monitorando: Fashion Brand X, TechStore, GymLife</p>
            </div>
            <div className="flex gap-2">
              <select className="border rounded-lg px-3 py-2 text-sm">
                <option>Últimos 7 dias</option>
                <option>Últimos 30 dias</option>
                <option>Últimos 90 dias</option>
              </select>
              <button className="px-4 py-2 border rounded-lg text-gray-600 flex items-center gap-2">
                <RefreshCw size={16} />
                Atualizar
              </button>
              <button className="px-4 py-2 bg-orange-500 text-white rounded-lg flex items-center gap-2">
                <Bell size={16} />
                Configurar Alertas
              </button>
            </div>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-5 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4">
              <div className="flex items-center gap-2 text-blue-600 mb-2">
                <MessageCircle size={20} />
                <span className="text-sm font-medium">Menções Totais</span>
              </div>
              <p className="text-2xl font-bold text-blue-700">24.847</p>
              <p className="text-xs text-blue-600 mt-1">↑ 18% vs período anterior</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4">
              <div className="flex items-center gap-2 text-green-600 mb-2">
                <Smile size={20} />
                <span className="text-sm font-medium">Sentimento Positivo</span>
              </div>
              <p className="text-2xl font-bold text-green-700">68%</p>
              <p className="text-xs text-green-600 mt-1">↑ 5% vs período anterior</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4">
              <div className="flex items-center gap-2 text-purple-600 mb-2">
                <Users size={20} />
                <span className="text-sm font-medium">Alcance Potencial</span>
              </div>
              <p className="text-2xl font-bold text-purple-700">12.4M</p>
              <p className="text-xs text-purple-600 mt-1">Audiência impactada</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4">
              <div className="flex items-center gap-2 text-orange-600 mb-2">
                <TrendingUp size={20} />
                <span className="text-sm font-medium">Share of Voice</span>
              </div>
              <p className="text-2xl font-bold text-orange-700">23%</p>
              <p className="text-xs text-orange-600 mt-1">vs concorrentes</p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4">
              <div className="flex items-center gap-2 text-red-600 mb-2">
                <AlertTriangle size={20} />
                <span className="text-sm font-medium">Alertas Ativos</span>
              </div>
              <p className="text-2xl font-bold text-red-700">3</p>
              <p className="text-xs text-red-600 mt-1">Requer atenção</p>
            </div>
          </div>

          {/* Gráficos */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            {/* Menções ao Longo do Tempo */}
            <div className="col-span-2 border rounded-xl p-4">
              <h5 className="font-semibold text-gray-700 mb-3">Menções ao Longo do Tempo</h5>
              <div className="h-[200px] flex items-end gap-1">
                {Array.from({ length: 30 }, (_, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-gradient-to-t from-blue-500 to-blue-300 rounded-t"
                      style={{ height: `${Math.random() * 80 + 20}%` }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>18 Dez</span>
                <span>25 Dez</span>
                <span>01 Jan</span>
                <span>08 Jan</span>
                <span>17 Jan</span>
              </div>
            </div>

            {/* Análise de Sentimento */}
            <div className="border rounded-xl p-4">
              <h5 className="font-semibold text-gray-700 mb-3">Análise de Sentimento</h5>
              <div className="flex justify-center mb-4">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="64" cy="64" r="56" fill="none" stroke="#e5e7eb" strokeWidth="12" />
                    <circle cx="64" cy="64" r="56" fill="none" stroke="#22c55e" strokeWidth="12" strokeDasharray="352" strokeDashoffset="113" />
                    <circle cx="64" cy="64" r="56" fill="none" stroke="#eab308" strokeWidth="12" strokeDasharray="352" strokeDashoffset="282" />
                    <circle cx="64" cy="64" r="56" fill="none" stroke="#ef4444" strokeWidth="12" strokeDasharray="352" strokeDashoffset="317" />
                  </svg>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Smile className="text-green-500" size={16} />
                    <span className="text-sm">Positivo</span>
                  </div>
                  <span className="font-semibold text-green-600">68%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Meh className="text-yellow-500" size={16} />
                    <span className="text-sm">Neutro</span>
                  </div>
                  <span className="font-semibold text-yellow-600">22%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Frown className="text-red-500" size={16} />
                    <span className="text-sm">Negativo</span>
                  </div>
                  <span className="font-semibold text-red-600">10%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Fontes e Hashtags */}
          <div className="grid grid-cols-3 gap-6">
            {/* Por Plataforma */}
            <div className="border rounded-xl p-4">
              <h5 className="font-semibold text-gray-700 mb-3">Por Plataforma</h5>
              <div className="space-y-3">
                {[
                  { platform: 'Instagram', mentions: 12450, color: 'bg-pink-500', percent: 50 },
                  { platform: 'TikTok', mentions: 7234, color: 'bg-black', percent: 29 },
                  { platform: 'Twitter/X', mentions: 3128, color: 'bg-blue-400', percent: 13 },
                  { platform: 'YouTube', mentions: 1547, color: 'bg-red-500', percent: 6 },
                  { platform: 'LinkedIn', mentions: 488, color: 'bg-blue-700', percent: 2 },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span>{item.platform}</span>
                      <span className="text-gray-500">{item.mentions.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.percent}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trending Hashtags */}
            <div className="border rounded-xl p-4">
              <h5 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <Hash size={16} />
                Trending Hashtags
              </h5>
              <div className="space-y-2">
                {[
                  { tag: '#VeraoFashion', count: 4521, trend: '+45%' },
                  { tag: '#ModaSustentavel', count: 3287, trend: '+32%' },
                  { tag: '#LookDoDia', count: 2845, trend: '+18%' },
                  { tag: '#FashionBrandX', count: 2156, trend: '+67%' },
                  { tag: '#Tendencias2026', count: 1892, trend: '+25%' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-blue-600">{item.tag}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">{item.count}</span>
                      <span className="text-xs text-green-500">{item.trend}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Influenciadores Orgânicos */}
            <div className="border rounded-xl p-4">
              <h5 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <Zap size={16} className="text-yellow-500" />
                Influenciadores Orgânicos
              </h5>
              <p className="text-xs text-gray-500 mb-3">Mencionaram sua marca espontaneamente</p>
              <div className="space-y-2">
                {[
                  { name: 'Carolina Style', handle: '@carolstyle', followers: '125K', mentions: 8 },
                  { name: 'Fashion Tips BR', handle: '@fashiontipsbr', followers: '89K', mentions: 5 },
                  { name: 'Moda & Cia', handle: '@modaecia', followers: '67K', mentions: 4 },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-2 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.handle} • {item.followers}</p>
                    </div>
                    <button className="text-xs bg-orange-500 text-white px-2 py-1 rounded">Convidar</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Feed de Menções */}
      <section>
        <h3 className="text-lg font-semibold text-orange-600 mb-4">2. Feed de Menções em Tempo Real</h3>
        <div className="bg-white rounded-xl shadow-lg p-6 border">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <h4 className="font-bold text-gray-800">Menções Recentes</h4>
              <div className="flex items-center gap-1 text-green-500 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Ao vivo
              </div>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 border rounded-lg text-sm flex items-center gap-1">
                <Filter size={14} />
                Filtros
              </button>
              <select className="border rounded-lg px-3 py-1.5 text-sm">
                <option>Todas as plataformas</option>
                <option>Instagram</option>
                <option>TikTok</option>
                <option>Twitter/X</option>
              </select>
              <select className="border rounded-lg px-3 py-1.5 text-sm">
                <option>Todos os sentimentos</option>
                <option>Positivo</option>
                <option>Neutro</option>
                <option>Negativo</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            {/* Menção Positiva */}
            <div className="border rounded-xl p-4 border-l-4 border-l-green-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold">Ana Beatriz</span>
                    <span className="text-gray-500 text-sm">@anabeatriz_style</span>
                    <span className="text-xs bg-pink-100 text-pink-600 px-2 py-0.5 rounded">Instagram</span>
                    <Smile className="text-green-500 ml-auto" size={18} />
                  </div>
                  <p className="text-gray-700 mb-2">
                    Gente, vocês precisam conhecer a nova coleção da <span className="text-blue-600">@FashionBrandX</span>! 
                    Amei tudo, qualidade incrível e preço justo 😍✨ #VeraoFashion #ModaSustentavel
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1"><Heart size={14} /> 2.4K</span>
                    <span className="flex items-center gap-1"><MessageCircle size={14} /> 156</span>
                    <span className="flex items-center gap-1"><Share2 size={14} /> 89</span>
                    <span className="flex items-center gap-1"><Eye size={14} /> 45K alcance</span>
                    <span className="ml-auto">Há 5 min</span>
                  </div>
                </div>
                <button className="text-orange-500 text-sm">Responder</button>
              </div>
            </div>

            {/* Menção Negativa */}
            <div className="border rounded-xl p-4 border-l-4 border-l-red-500 bg-red-50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold">Carlos Mendes</span>
                    <span className="text-gray-500 text-sm">@carlosm</span>
                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded">Twitter/X</span>
                    <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded ml-2">Alerta</span>
                    <Frown className="text-red-500 ml-auto" size={18} />
                  </div>
                  <p className="text-gray-700 mb-2">
                    Péssima experiência com <span className="text-blue-600">@TechStore</span>. 
                    Comprei um produto há 15 dias e até agora não recebi. Suporte não responde! 😤
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1"><Heart size={14} /> 45</span>
                    <span className="flex items-center gap-1"><MessageCircle size={14} /> 23</span>
                    <span className="flex items-center gap-1"><Share2 size={14} /> 12</span>
                    <span className="ml-auto">Há 12 min</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <button className="text-red-500 text-sm border border-red-500 px-3 py-1 rounded">Urgente</button>
                  <button className="text-orange-500 text-sm">Responder</button>
                </div>
              </div>
            </div>

            {/* Menção Neutra */}
            <div className="border rounded-xl p-4 border-l-4 border-l-yellow-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold">Fitness Journal</span>
                    <span className="text-gray-500 text-sm">@fitnessjournal</span>
                    <span className="text-xs bg-black text-white px-2 py-0.5 rounded">TikTok</span>
                    <Meh className="text-yellow-500 ml-auto" size={18} />
                  </div>
                  <p className="text-gray-700 mb-2">
                    Testando os novos suplementos da <span className="text-blue-600">@GymLife</span>. 
                    Vou dar minha opinião completa em breve! #Fitness #Suplementos
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1"><Heart size={14} /> 8.7K</span>
                    <span className="flex items-center gap-1"><MessageCircle size={14} /> 342</span>
                    <span className="flex items-center gap-1"><Share2 size={14} /> 156</span>
                    <span className="flex items-center gap-1"><Eye size={14} /> 125K views</span>
                    <span className="ml-auto">Há 25 min</span>
                  </div>
                </div>
                <button className="text-orange-500 text-sm">Monitorar</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Configuração de Alertas */}
      <section>
        <h3 className="text-lg font-semibold text-orange-600 mb-4">3. Configuração de Alertas</h3>
        <div className="bg-white rounded-xl shadow-lg p-6 border">
          <div className="flex items-center justify-between mb-6">
            <h4 className="font-bold text-gray-800">Alertas de Monitoramento</h4>
            <button className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm">+ Novo Alerta</button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Alertas Ativos */}
            <div>
              <h5 className="font-semibold text-gray-700 mb-3">Alertas Ativos</h5>
              <div className="space-y-3">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="text-red-500" size={18} />
                      <span className="font-medium">Menções Negativas</span>
                    </div>
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">Ativo</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Alertar quando sentimento negativo {'>'} 20% em 1 hora</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>Canal: Push + Email</span>
                    <span>•</span>
                    <span>Disparos: 3 esta semana</span>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="text-purple-500" size={18} />
                      <span className="font-medium">Pico de Menções</span>
                    </div>
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">Ativo</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Alertar quando menções aumentarem 50% vs média</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>Canal: Push</span>
                    <span>•</span>
                    <span>Disparos: 1 esta semana</span>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Users className="text-blue-500" size={18} />
                      <span className="font-medium">Influenciador Relevante</span>
                    </div>
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">Ativo</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Alertar quando perfil com +100K seguidores mencionar</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>Canal: Push + Email + SMS</span>
                    <span>•</span>
                    <span>Disparos: 5 esta semana</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Criar Novo Alerta */}
            <div className="border rounded-xl p-4 bg-gray-50">
              <h5 className="font-semibold text-gray-700 mb-4">Criar Novo Alerta</h5>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-600 mb-1 block">Tipo de Alerta</label>
                  <select className="w-full border rounded-lg px-3 py-2">
                    <option>Sentimento negativo</option>
                    <option>Pico de menções</option>
                    <option>Palavra-chave específica</option>
                    <option>Influenciador relevante</option>
                    <option>Concorrente mencionado</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-gray-600 mb-1 block">Condição</label>
                  <div className="flex gap-2">
                    <select className="flex-1 border rounded-lg px-3 py-2">
                      <option>Maior que</option>
                      <option>Menor que</option>
                      <option>Igual a</option>
                    </select>
                    <input type="number" placeholder="20" className="w-20 border rounded-lg px-3 py-2" />
                    <select className="flex-1 border rounded-lg px-3 py-2">
                      <option>%</option>
                      <option>menções</option>
                      <option>seguidores</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-sm text-gray-600 mb-1 block">Canais de Notificação</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" checked className="w-4 h-4" readOnly />
                      <span className="text-sm">Push</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" checked className="w-4 h-4" readOnly />
                      <span className="text-sm">Email</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" readOnly />
                      <span className="text-sm">SMS</span>
                    </label>
                  </div>
                </div>
                <button className="w-full py-2 bg-orange-500 text-white rounded-lg">Criar Alerta</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Comparativo com Concorrentes */}
      <section>
        <h3 className="text-lg font-semibold text-orange-600 mb-4">4. Análise Competitiva</h3>
        <div className="bg-white rounded-xl shadow-lg p-6 border">
          <h4 className="font-bold text-gray-800 mb-4">Share of Voice - Comparativo</h4>
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              { brand: 'Fashion Brand X', share: 23, mentions: 24847, sentiment: 68, color: 'bg-orange-500' },
              { brand: 'Concorrente A', share: 31, mentions: 33521, sentiment: 62, color: 'bg-blue-500' },
              { brand: 'Concorrente B', share: 28, mentions: 30245, sentiment: 71, color: 'bg-green-500' },
              { brand: 'Concorrente C', share: 18, mentions: 19432, sentiment: 58, color: 'bg-purple-500' },
            ].map((item, i) => (
              <div key={i} className={`border rounded-xl p-4 ${i === 0 ? 'border-orange-500 bg-orange-50' : ''}`}>
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-3 h-3 rounded-full ${item.color}`} />
                  <span className="font-semibold text-sm">{item.brand}</span>
                  {i === 0 && <span className="text-xs bg-orange-500 text-white px-2 py-0.5 rounded ml-auto">Você</span>}
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-xs text-gray-500">Share of Voice</p>
                    <p className="text-xl font-bold">{item.share}%</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Menções</p>
                    <p className="font-semibold">{item.mentions.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Sentimento Positivo</p>
                    <p className="font-semibold text-green-600">{item.sentiment}%</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
