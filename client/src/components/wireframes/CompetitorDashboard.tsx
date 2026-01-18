import { Target, TrendingUp, TrendingDown, Users, Eye, Heart, MessageCircle, Share2, BarChart3, PieChart, Activity, Search, Filter, Download, Bell, Plus, Minus, ArrowUp, ArrowDown, Globe, Instagram, Youtube } from 'lucide-react';

export default function CompetitorDashboard() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-2">Dashboard de Competidores</h2>
        <p className="text-slate-300">Análise comparativa de campanhas de concorrentes no mesmo nicho</p>
      </div>

      {/* 1. Visão Geral Competitiva */}
      <div>
        <h3 className="text-xl font-semibold text-slate-700 mb-4">1. Visão Geral Competitiva</h3>
        <div className="bg-white rounded-xl shadow-lg p-6 border">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h4 className="text-xl font-bold text-gray-800">Análise de Mercado</h4>
              <p className="text-gray-500 text-sm">Comparativo com principais concorrentes do nicho Moda & Lifestyle</p>
            </div>
            <div className="flex gap-3">
              <select className="px-4 py-2 border rounded-lg text-gray-600">
                <option>Últimos 30 dias</option>
                <option>Últimos 90 dias</option>
                <option>Este ano</option>
              </select>
              <button className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2 text-gray-600 hover:bg-gray-50">
                <Filter size={18} />
                Filtros
              </button>
              <button className="px-4 py-2 bg-slate-800 text-white rounded-lg flex items-center gap-2 hover:bg-slate-900">
                <Plus size={18} />
                Adicionar Competidor
              </button>
            </div>
          </div>

          {/* Market Share */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-white">
              <div className="flex justify-between items-start mb-2">
                <Target size={24} />
                <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">Sua Posição</span>
              </div>
              <p className="text-3xl font-bold">#2</p>
              <p className="text-sm text-blue-100">no mercado de Moda</p>
              <div className="flex items-center gap-1 mt-2 text-xs">
                <ArrowUp size={12} />
                <span>Subiu 1 posição</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-4 text-white">
              <div className="flex justify-between items-start mb-2">
                <PieChart size={24} />
              </div>
              <p className="text-3xl font-bold">23%</p>
              <p className="text-sm text-purple-100">Market Share</p>
              <div className="flex items-center gap-1 mt-2 text-xs">
                <ArrowUp size={12} />
                <span>+3% vs mês anterior</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4 text-white">
              <div className="flex justify-between items-start mb-2">
                <Users size={24} />
              </div>
              <p className="text-3xl font-bold">847</p>
              <p className="text-sm text-green-100">Influenciadores Ativos</p>
              <div className="flex items-center gap-1 mt-2 text-xs">
                <ArrowUp size={12} />
                <span>+12% vs concorrência</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-4 text-white">
              <div className="flex justify-between items-start mb-2">
                <Activity size={24} />
              </div>
              <p className="text-3xl font-bold">4.8x</p>
              <p className="text-sm text-orange-100">ROI Médio</p>
              <div className="flex items-center gap-1 mt-2 text-xs">
                <ArrowUp size={12} />
                <span>Acima da média (3.2x)</span>
              </div>
            </div>
          </div>

          {/* Tabela de Competidores */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Competidor</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600">Campanhas Ativas</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600">Influenciadores</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600">Alcance Total</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600">Engajamento</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600">Share of Voice</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600">Tendência</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-blue-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">A</div>
                      <div>
                        <p className="font-semibold text-gray-800">Amplify (Você)</p>
                        <p className="text-xs text-gray-500">Sua agência</p>
                      </div>
                    </div>
                  </td>
                  <td className="text-center py-3 px-4 font-semibold">24</td>
                  <td className="text-center py-3 px-4 font-semibold">847</td>
                  <td className="text-center py-3 px-4 font-semibold">45.2M</td>
                  <td className="text-center py-3 px-4">
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">4.2%</span>
                  </td>
                  <td className="text-center py-3 px-4">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="w-[23%] h-full bg-blue-500"></div>
                      </div>
                      <span className="text-sm font-medium">23%</span>
                    </div>
                  </td>
                  <td className="text-center py-3 px-4">
                    <span className="flex items-center justify-center gap-1 text-green-600">
                      <TrendingUp size={16} />
                      +5%
                    </span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center text-white font-bold">C1</div>
                      <div>
                        <p className="font-semibold text-gray-800">Competitor Alpha</p>
                        <p className="text-xs text-gray-500">Líder de mercado</p>
                      </div>
                    </div>
                  </td>
                  <td className="text-center py-3 px-4">32</td>
                  <td className="text-center py-3 px-4">1,245</td>
                  <td className="text-center py-3 px-4">68.5M</td>
                  <td className="text-center py-3 px-4">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">3.8%</span>
                  </td>
                  <td className="text-center py-3 px-4">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="w-[31%] h-full bg-purple-500"></div>
                      </div>
                      <span className="text-sm font-medium">31%</span>
                    </div>
                  </td>
                  <td className="text-center py-3 px-4">
                    <span className="flex items-center justify-center gap-1 text-red-600">
                      <TrendingDown size={16} />
                      -2%
                    </span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold">C2</div>
                      <div>
                        <p className="font-semibold text-gray-800">Competitor Beta</p>
                        <p className="text-xs text-gray-500">Crescimento rápido</p>
                      </div>
                    </div>
                  </td>
                  <td className="text-center py-3 px-4">18</td>
                  <td className="text-center py-3 px-4">562</td>
                  <td className="text-center py-3 px-4">28.3M</td>
                  <td className="text-center py-3 px-4">
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-sm">4.5%</span>
                  </td>
                  <td className="text-center py-3 px-4">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="w-[18%] h-full bg-green-500"></div>
                      </div>
                      <span className="text-sm font-medium">18%</span>
                    </div>
                  </td>
                  <td className="text-center py-3 px-4">
                    <span className="flex items-center justify-center gap-1 text-green-600">
                      <TrendingUp size={16} />
                      +8%
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 2. Análise de Campanhas Concorrentes */}
      <div>
        <h3 className="text-xl font-semibold text-slate-700 mb-4">2. Análise de Campanhas Concorrentes</h3>
        <div className="bg-white rounded-xl shadow-lg p-6 border">
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-lg font-bold text-gray-800">Campanhas Detectadas</h4>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Buscar campanha..." 
                  className="pl-10 pr-4 py-2 border rounded-lg text-sm"
                />
              </div>
              <button className="px-4 py-2 border rounded-lg text-gray-600 flex items-center gap-2">
                <Bell size={16} />
                Criar Alerta
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Campanha 1 */}
            <div className="border rounded-xl p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 font-bold">CA</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Lançamento Coleção Inverno</h5>
                    <p className="text-sm text-gray-500">Competitor Alpha</p>
                  </div>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Ativa</span>
              </div>
              
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-gray-50 rounded-lg p-2 text-center">
                  <p className="text-lg font-bold text-gray-800">15</p>
                  <p className="text-xs text-gray-500">Influenciadores</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2 text-center">
                  <p className="text-lg font-bold text-gray-800">12.5M</p>
                  <p className="text-xs text-gray-500">Alcance</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2 text-center">
                  <p className="text-lg font-bold text-gray-800">3.9%</p>
                  <p className="text-xs text-gray-500">Engajamento</p>
                </div>
              </div>

              <div className="flex gap-2 mb-3">
                <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded-full flex items-center gap-1">
                  <Instagram size={12} /> Instagram
                </span>
                <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full flex items-center gap-1">
                  <Youtube size={12} /> YouTube
                </span>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-xs text-gray-500">Detectada há 3 dias</p>
                <button className="text-sm text-slate-600 hover:text-slate-800 font-medium">Ver Detalhes →</button>
              </div>
            </div>

            {/* Campanha 2 */}
            <div className="border rounded-xl p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-bold">CB</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Black Friday Antecipada</h5>
                    <p className="text-sm text-gray-500">Competitor Beta</p>
                  </div>
                </div>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">Planejada</span>
              </div>
              
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-gray-50 rounded-lg p-2 text-center">
                  <p className="text-lg font-bold text-gray-800">8</p>
                  <p className="text-xs text-gray-500">Influenciadores</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2 text-center">
                  <p className="text-lg font-bold text-gray-800">~5M</p>
                  <p className="text-xs text-gray-500">Alcance Est.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2 text-center">
                  <p className="text-lg font-bold text-gray-800">-</p>
                  <p className="text-xs text-gray-500">Engajamento</p>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-2 mb-3">
                <p className="text-xs text-yellow-700">
                  <strong>Insight:</strong> Campanha detectada através de posts de recrutamento. Início previsto: 15 Nov.
                </p>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-xs text-gray-500">Detectada há 1 dia</p>
                <button className="text-sm text-slate-600 hover:text-slate-800 font-medium">Ver Detalhes →</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Comparativo de Influenciadores */}
      <div>
        <h3 className="text-xl font-semibold text-slate-700 mb-4">3. Influenciadores em Comum / Exclusivos</h3>
        <div className="grid grid-cols-3 gap-4">
          {/* Seus Exclusivos */}
          <div className="bg-white rounded-xl shadow-lg p-4 border">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="text-blue-600" size={16} />
              </div>
              <div>
                <h5 className="font-semibold text-gray-800">Seus Exclusivos</h5>
                <p className="text-xs text-gray-500">423 influenciadores</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">@fashionista_br</p>
                  <p className="text-xs text-gray-500">245K seguidores</p>
                </div>
                <span className="text-xs text-blue-600">Exclusivo</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">@lifestyle_guru</p>
                  <p className="text-xs text-gray-500">180K seguidores</p>
                </div>
                <span className="text-xs text-blue-600">Exclusivo</span>
              </div>
            </div>
          </div>

          {/* Em Comum */}
          <div className="bg-white rounded-xl shadow-lg p-4 border">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <Users className="text-yellow-600" size={16} />
              </div>
              <div>
                <h5 className="font-semibold text-gray-800">Em Comum</h5>
                <p className="text-xs text-gray-500">156 influenciadores</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-2 bg-yellow-50 rounded-lg">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">@mega_influencer</p>
                  <p className="text-xs text-gray-500">1.2M seguidores</p>
                </div>
                <span className="text-xs text-yellow-600">Disputado</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-yellow-50 rounded-lg">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-teal-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">@trendsetter</p>
                  <p className="text-xs text-gray-500">890K seguidores</p>
                </div>
                <span className="text-xs text-yellow-600">Disputado</span>
              </div>
            </div>
          </div>

          {/* Concorrentes Exclusivos */}
          <div className="bg-white rounded-xl shadow-lg p-4 border">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <Users className="text-red-600" size={16} />
              </div>
              <div>
                <h5 className="font-semibold text-gray-800">Exclusivos Concorrentes</h5>
                <p className="text-xs text-gray-500">268 influenciadores</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-2 bg-red-50 rounded-lg">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">@style_queen</p>
                  <p className="text-xs text-gray-500">560K seguidores</p>
                </div>
                <button className="text-xs text-blue-600 hover:underline">Prospectar</button>
              </div>
              <div className="flex items-center gap-2 p-2 bg-red-50 rounded-lg">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">@beauty_tips</p>
                  <p className="text-xs text-gray-500">420K seguidores</p>
                </div>
                <button className="text-xs text-blue-600 hover:underline">Prospectar</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Benchmark de Performance */}
      <div>
        <h3 className="text-xl font-semibold text-slate-700 mb-4">4. Benchmark de Performance</h3>
        <div className="bg-white rounded-xl shadow-lg p-6 border">
          <div className="grid grid-cols-2 gap-6">
            {/* Gráfico de Radar */}
            <div>
              <h5 className="font-semibold text-gray-800 mb-4">Comparativo Multidimensional</h5>
              <div className="bg-gray-50 rounded-xl p-6 h-64 flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="mx-auto text-gray-400 mb-2" size={48} />
                  <p className="text-gray-500 text-sm">[Gráfico de Radar]</p>
                  <p className="text-xs text-gray-400">Alcance • Engajamento • ROI • Frequência • Diversidade</p>
                </div>
              </div>
            </div>

            {/* Métricas Detalhadas */}
            <div>
              <h5 className="font-semibold text-gray-800 mb-4">Métricas vs Média do Mercado</h5>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Engajamento Médio</span>
                    <span className="font-medium text-green-600">4.2% (+31% acima)</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">ROI de Campanhas</span>
                    <span className="font-medium text-green-600">4.8x (+50% acima)</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Custo por Engajamento</span>
                    <span className="font-medium text-green-600">R$ 0.45 (-25% abaixo)</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Taxa de Conversão</span>
                    <span className="font-medium text-yellow-600">2.1% (na média)</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-500 rounded-full" style={{width: '50%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Velocidade de Resposta</span>
                    <span className="font-medium text-red-600">4.2h (-15% abaixo)</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 rounded-full" style={{width: '35%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Alertas e Insights */}
      <div>
        <h3 className="text-xl font-semibold text-slate-700 mb-4">5. Alertas Competitivos</h3>
        <div className="bg-white rounded-xl shadow-lg p-6 border">
          <div className="flex justify-between items-center mb-4">
            <h5 className="font-semibold text-gray-800">Alertas Recentes</h5>
            <button className="text-sm text-slate-600 hover:text-slate-800">Configurar Alertas</button>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Bell className="text-red-600" size={20} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-gray-800">Competitor Alpha contratou @mega_influencer</p>
                    <p className="text-sm text-gray-500">Influenciador que você estava prospectando foi contratado pela concorrência</p>
                  </div>
                  <span className="text-xs text-gray-400">há 2 horas</span>
                </div>
                <div className="flex gap-2 mt-2">
                  <button className="text-xs text-blue-600 hover:underline">Ver alternativas</button>
                  <button className="text-xs text-gray-500 hover:underline">Ignorar</button>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingUp className="text-yellow-600" size={20} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-gray-800">Competitor Beta aumentou investimento em 40%</p>
                    <p className="text-sm text-gray-500">Detectamos aumento significativo no volume de campanhas e influenciadores ativos</p>
                  </div>
                  <span className="text-xs text-gray-400">há 1 dia</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Target className="text-green-600" size={20} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-gray-800">Oportunidade: Nicho de Fitness com baixa concorrência</p>
                    <p className="text-sm text-gray-500">Identificamos que seus concorrentes têm pouca presença neste segmento</p>
                  </div>
                  <span className="text-xs text-gray-400">há 3 dias</span>
                </div>
                <button className="mt-2 text-xs text-green-600 hover:underline">Explorar oportunidade →</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
