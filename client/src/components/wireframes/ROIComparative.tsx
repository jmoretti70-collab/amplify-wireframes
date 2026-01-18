/**
 * Wireframe do Módulo Dashboard ROI Comparativo
 * Design: Amplify v6.0 - Comparativo de ROI entre Mídias
 * Autor: João Moretti
 */

import { TrendingUp, TrendingDown, DollarSign, Users, Eye, MousePointer, ShoppingCart, BarChart3, PieChart, LineChart, ArrowRight, Download, Calendar, Filter, RefreshCw, Target, Zap, Award, AlertCircle, CheckCircle, Info } from 'lucide-react';

export default function ROIComparative() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center py-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl text-white">
        <h2 className="text-3xl font-bold mb-2">Dashboard ROI Comparativo</h2>
        <p className="text-emerald-100">Compare o ROI de campanhas de influência vs outras mídias digitais</p>
      </div>

      {/* 1. Visão Geral Comparativa */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-emerald-600">1. Visão Geral Comparativa</h3>
        
        <div className="bg-white rounded-xl shadow-lg p-6 border">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h4 className="text-xl font-bold text-gray-800">Comparativo de ROI por Canal</h4>
              <p className="text-gray-500">Análise consolidada de performance de investimento</p>
            </div>
            <div className="flex gap-3">
              <select className="px-4 py-2 border rounded-lg text-sm">
                <option>Últimos 30 dias</option>
                <option>Últimos 90 dias</option>
                <option>Este ano</option>
                <option>Período personalizado</option>
              </select>
              <button className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2 hover:bg-gray-50">
                <Filter className="w-4 h-4" />
                Filtros
              </button>
              <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg flex items-center gap-2 hover:bg-emerald-700">
                <Download className="w-4 h-4" />
                Exportar
              </button>
            </div>
          </div>

          {/* KPIs Comparativos */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-4 text-white">
              <div className="flex items-center justify-between mb-2">
                <span className="text-emerald-100 text-sm">Investimento Total</span>
                <DollarSign className="w-5 h-5 text-emerald-200" />
              </div>
              <p className="text-3xl font-bold">R$ 850K</p>
              <p className="text-sm text-emerald-100 mt-1">Todas as mídias</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-4 text-white">
              <div className="flex items-center justify-between mb-2">
                <span className="text-blue-100 text-sm">Receita Gerada</span>
                <ShoppingCart className="w-5 h-5 text-blue-200" />
              </div>
              <p className="text-3xl font-bold">R$ 3.2M</p>
              <p className="text-sm text-blue-100 mt-1">+45% vs período anterior</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-4 text-white">
              <div className="flex items-center justify-between mb-2">
                <span className="text-purple-100 text-sm">ROI Médio</span>
                <TrendingUp className="w-5 h-5 text-purple-200" />
              </div>
              <p className="text-3xl font-bold">3.76x</p>
              <p className="text-sm text-purple-100 mt-1">Retorno sobre investimento</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-4 text-white">
              <div className="flex items-center justify-between mb-2">
                <span className="text-orange-100 text-sm">Melhor Canal</span>
                <Award className="w-5 h-5 text-orange-200" />
              </div>
              <p className="text-3xl font-bold">Influencers</p>
              <p className="text-sm text-orange-100 mt-1">ROI 5.2x</p>
            </div>
          </div>

          {/* Gráfico Comparativo */}
          <div className="grid grid-cols-2 gap-6">
            {/* Gráfico de Barras */}
            <div className="border rounded-xl p-4">
              <h5 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-emerald-600" />
                ROI por Canal de Mídia
              </h5>
              <div className="space-y-4">
                {/* Influencer Marketing */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">Marketing de Influência</span>
                    <span className="text-sm font-bold text-emerald-600">5.2x ROI</span>
                  </div>
                  <div className="h-8 bg-gray-100 rounded-lg overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-end pr-2" style={{width: '100%'}}>
                      <span className="text-xs text-white font-medium">R$ 150K → R$ 780K</span>
                    </div>
                  </div>
                </div>
                
                {/* Google Ads */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">Google Ads</span>
                    <span className="text-sm font-bold text-blue-600">3.8x ROI</span>
                  </div>
                  <div className="h-8 bg-gray-100 rounded-lg overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-end pr-2" style={{width: '73%'}}>
                      <span className="text-xs text-white font-medium">R$ 200K → R$ 760K</span>
                    </div>
                  </div>
                </div>
                
                {/* Meta Ads */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">Meta Ads (Facebook/Instagram)</span>
                    <span className="text-sm font-bold text-purple-600">3.2x ROI</span>
                  </div>
                  <div className="h-8 bg-gray-100 rounded-lg overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-end pr-2" style={{width: '62%'}}>
                      <span className="text-xs text-white font-medium">R$ 300K → R$ 960K</span>
                    </div>
                  </div>
                </div>
                
                {/* TikTok Ads */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">TikTok Ads</span>
                    <span className="text-sm font-bold text-pink-600">2.8x ROI</span>
                  </div>
                  <div className="h-8 bg-gray-100 rounded-lg overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-end pr-2" style={{width: '54%'}}>
                      <span className="text-xs text-white font-medium">R$ 100K → R$ 280K</span>
                    </div>
                  </div>
                </div>
                
                {/* Email Marketing */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">Email Marketing</span>
                    <span className="text-sm font-bold text-orange-600">4.2x ROI</span>
                  </div>
                  <div className="h-8 bg-gray-100 rounded-lg overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-end pr-2" style={{width: '81%'}}>
                      <span className="text-xs text-white font-medium">R$ 50K → R$ 210K</span>
                    </div>
                  </div>
                </div>
                
                {/* Programmatic */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">Mídia Programática</span>
                    <span className="text-sm font-bold text-gray-600">2.1x ROI</span>
                  </div>
                  <div className="h-8 bg-gray-100 rounded-lg overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-gray-500 to-slate-500 rounded-lg flex items-center justify-end pr-2" style={{width: '40%'}}>
                      <span className="text-xs text-white font-medium">R$ 50K → R$ 105K</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Gráfico de Pizza */}
            <div className="border rounded-xl p-4">
              <h5 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <PieChart className="w-5 h-5 text-emerald-600" />
                Distribuição de Investimento
              </h5>
              <div className="flex items-center justify-center">
                <div className="relative w-48 h-48">
                  {/* Simulated Pie Chart */}
                  <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#10b981" strokeWidth="20" strokeDasharray="35 65" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#6366f1" strokeWidth="20" strokeDasharray="24 76" strokeDashoffset="-35" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#8b5cf6" strokeWidth="20" strokeDasharray="18 82" strokeDashoffset="-59" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#ec4899" strokeWidth="20" strokeDasharray="12 88" strokeDashoffset="-77" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#f97316" strokeWidth="20" strokeDasharray="6 94" strokeDashoffset="-89" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#64748b" strokeWidth="20" strokeDasharray="5 95" strokeDashoffset="-95" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-800">R$ 850K</p>
                      <p className="text-xs text-gray-500">Total</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-emerald-500 rounded-full"></span>
                  <span className="text-xs text-gray-600">Influencers (35%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-indigo-500 rounded-full"></span>
                  <span className="text-xs text-gray-600">Google Ads (24%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                  <span className="text-xs text-gray-600">Meta Ads (18%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
                  <span className="text-xs text-gray-600">TikTok Ads (12%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                  <span className="text-xs text-gray-600">Email (6%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-slate-500 rounded-full"></span>
                  <span className="text-xs text-gray-600">Programática (5%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Métricas Detalhadas por Canal */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-emerald-600">2. Métricas Detalhadas por Canal</h3>
        
        <div className="bg-white rounded-xl shadow-lg p-6 border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Canal</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-600">Investimento</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-600">Impressões</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-600">Cliques</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-600">CTR</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-600">Conversões</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-600">CPA</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-600">Receita</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-600">ROI</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-emerald-50 bg-emerald-50/50">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <Users className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="font-medium">Influencers</span>
                      <Award className="w-4 h-4 text-yellow-500" />
                    </div>
                  </td>
                  <td className="text-right py-3 px-4 font-medium">R$ 150.000</td>
                  <td className="text-right py-3 px-4">45.2M</td>
                  <td className="text-right py-3 px-4">892K</td>
                  <td className="text-right py-3 px-4 text-emerald-600 font-medium">1.97%</td>
                  <td className="text-right py-3 px-4">4,247</td>
                  <td className="text-right py-3 px-4 text-emerald-600 font-medium">R$ 35,32</td>
                  <td className="text-right py-3 px-4 font-medium">R$ 780.000</td>
                  <td className="text-right py-3 px-4">
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full font-bold">5.2x</span>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Target className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="font-medium">Google Ads</span>
                    </div>
                  </td>
                  <td className="text-right py-3 px-4 font-medium">R$ 200.000</td>
                  <td className="text-right py-3 px-4">28.5M</td>
                  <td className="text-right py-3 px-4">712K</td>
                  <td className="text-right py-3 px-4">2.50%</td>
                  <td className="text-right py-3 px-4">3,156</td>
                  <td className="text-right py-3 px-4">R$ 63,37</td>
                  <td className="text-right py-3 px-4 font-medium">R$ 760.000</td>
                  <td className="text-right py-3 px-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full font-bold">3.8x</span>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Zap className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="font-medium">Meta Ads</span>
                    </div>
                  </td>
                  <td className="text-right py-3 px-4 font-medium">R$ 300.000</td>
                  <td className="text-right py-3 px-4">52.1M</td>
                  <td className="text-right py-3 px-4">1.04M</td>
                  <td className="text-right py-3 px-4">2.00%</td>
                  <td className="text-right py-3 px-4">4,800</td>
                  <td className="text-right py-3 px-4">R$ 62,50</td>
                  <td className="text-right py-3 px-4 font-medium">R$ 960.000</td>
                  <td className="text-right py-3 px-4">
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full font-bold">3.2x</span>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                        <Eye className="w-4 h-4 text-pink-600" />
                      </div>
                      <span className="font-medium">TikTok Ads</span>
                    </div>
                  </td>
                  <td className="text-right py-3 px-4 font-medium">R$ 100.000</td>
                  <td className="text-right py-3 px-4">18.7M</td>
                  <td className="text-right py-3 px-4">374K</td>
                  <td className="text-right py-3 px-4">2.00%</td>
                  <td className="text-right py-3 px-4">1,120</td>
                  <td className="text-right py-3 px-4">R$ 89,29</td>
                  <td className="text-right py-3 px-4 font-medium">R$ 280.000</td>
                  <td className="text-right py-3 px-4">
                    <span className="px-2 py-1 bg-pink-100 text-pink-700 rounded-full font-bold">2.8x</span>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                        <MousePointer className="w-4 h-4 text-orange-600" />
                      </div>
                      <span className="font-medium">Email Marketing</span>
                    </div>
                  </td>
                  <td className="text-right py-3 px-4 font-medium">R$ 50.000</td>
                  <td className="text-right py-3 px-4">2.1M</td>
                  <td className="text-right py-3 px-4">168K</td>
                  <td className="text-right py-3 px-4 text-emerald-600 font-medium">8.00%</td>
                  <td className="text-right py-3 px-4">1,050</td>
                  <td className="text-right py-3 px-4 text-emerald-600 font-medium">R$ 47,62</td>
                  <td className="text-right py-3 px-4 font-medium">R$ 210.000</td>
                  <td className="text-right py-3 px-4">
                    <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full font-bold">4.2x</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 3. Insights e Recomendações */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-emerald-600">3. Insights e Recomendações da IA</h3>
        
        <div className="grid grid-cols-3 gap-6">
          {/* Insight Positivo */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-emerald-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <h4 className="font-bold text-gray-800">Melhor Performance</h4>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              O <strong>Marketing de Influência</strong> apresentou o melhor ROI (5.2x), superando todos os outros canais. O CPA de R$ 35,32 é 44% menor que a média dos outros canais.
            </p>
            <div className="bg-emerald-50 rounded-lg p-3">
              <p className="text-sm text-emerald-800 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <strong>Recomendação:</strong> Aumentar investimento em 30%
              </p>
            </div>
          </div>
          
          {/* Insight de Atenção */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-yellow-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-yellow-600" />
              </div>
              <h4 className="font-bold text-gray-800">Ponto de Atenção</h4>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              O <strong>TikTok Ads</strong> tem o maior CPA (R$ 89,29) e menor ROI (2.8x). Considere otimizar segmentação ou realocar parte do orçamento para canais mais eficientes.
            </p>
            <div className="bg-yellow-50 rounded-lg p-3">
              <p className="text-sm text-yellow-800 flex items-center gap-2">
                <RefreshCw className="w-4 h-4" />
                <strong>Recomendação:</strong> Revisar estratégia de segmentação
              </p>
            </div>
          </div>
          
          {/* Insight de Oportunidade */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <Info className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-800">Oportunidade</h4>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              O <strong>Email Marketing</strong> tem o melhor CTR (8%) e segundo melhor ROI (4.2x) com o menor investimento. Há potencial de escala significativo.
            </p>
            <div className="bg-blue-50 rounded-lg p-3">
              <p className="text-sm text-blue-800 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <strong>Recomendação:</strong> Dobrar investimento em email
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Evolução Temporal */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-emerald-600">4. Evolução do ROI ao Longo do Tempo</h3>
        
        <div className="bg-white rounded-xl shadow-lg p-6 border">
          <div className="flex justify-between items-center mb-6">
            <h4 className="font-bold text-gray-800 flex items-center gap-2">
              <LineChart className="w-5 h-5 text-emerald-600" />
              ROI Mensal por Canal (Últimos 6 meses)
            </h4>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" defaultChecked className="accent-emerald-600" />
                <span className="w-3 h-3 bg-emerald-500 rounded-full"></span>
                Influencers
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" defaultChecked className="accent-blue-600" />
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                Google Ads
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" defaultChecked className="accent-purple-600" />
                <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                Meta Ads
              </label>
            </div>
          </div>
          
          {/* Simulated Line Chart */}
          <div className="h-64 relative">
            <div className="absolute inset-0 flex items-end justify-between px-4">
              {/* Bars representing months */}
              {['Ago', 'Set', 'Out', 'Nov', 'Dez', 'Jan'].map((month, i) => (
                <div key={month} className="flex flex-col items-center gap-2 w-1/6">
                  <div className="flex gap-1 items-end h-48">
                    <div className="w-4 bg-emerald-500 rounded-t" style={{height: `${[65, 70, 75, 80, 85, 100][i]}%`}}></div>
                    <div className="w-4 bg-blue-500 rounded-t" style={{height: `${[55, 58, 60, 65, 68, 73][i]}%`}}></div>
                    <div className="w-4 bg-purple-500 rounded-t" style={{height: `${[45, 48, 50, 52, 55, 62][i]}%`}}></div>
                  </div>
                  <span className="text-xs text-gray-500">{month}</span>
                </div>
              ))}
            </div>
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-gray-400">
              <span>6.0x</span>
              <span>4.5x</span>
              <span>3.0x</span>
              <span>1.5x</span>
              <span>0x</span>
            </div>
          </div>
          
          {/* Summary */}
          <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t">
            <div className="text-center">
              <p className="text-sm text-gray-500">Tendência Influencers</p>
              <p className="text-lg font-bold text-emerald-600 flex items-center justify-center gap-1">
                <TrendingUp className="w-5 h-5" />
                +35% em 6 meses
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500">Tendência Google Ads</p>
              <p className="text-lg font-bold text-blue-600 flex items-center justify-center gap-1">
                <TrendingUp className="w-5 h-5" />
                +18% em 6 meses
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500">Tendência Meta Ads</p>
              <p className="text-lg font-bold text-purple-600 flex items-center justify-center gap-1">
                <TrendingUp className="w-5 h-5" />
                +22% em 6 meses
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Mobile View */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-emerald-600">5. Visualização Mobile (PWA)</h3>
        
        <div className="flex gap-6 justify-center">
          {/* Tela 1: Dashboard ROI */}
          <div className="w-[280px] bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
            <div className="bg-white rounded-[2rem] overflow-hidden h-[580px]">
              {/* Header */}
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-4 text-white">
                <h4 className="font-bold text-center">ROI Comparativo</h4>
              </div>
              
              {/* Content */}
              <div className="p-4 space-y-4 overflow-y-auto h-[500px]">
                {/* Total ROI */}
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-4 text-white text-center">
                  <p className="text-sm text-emerald-100">ROI Médio Geral</p>
                  <p className="text-4xl font-bold">3.76x</p>
                  <p className="text-xs text-emerald-100 mt-1">+12% vs mês anterior</p>
                </div>
                
                {/* Channel Cards */}
                <div className="space-y-3">
                  <div className="border rounded-xl p-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Influencers</p>
                        <p className="text-xs text-gray-500">R$ 150K investido</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-emerald-600">5.2x</p>
                      <p className="text-xs text-emerald-600">+15%</p>
                    </div>
                  </div>
                  
                  <div className="border rounded-xl p-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <MousePointer className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Email</p>
                        <p className="text-xs text-gray-500">R$ 50K investido</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-orange-600">4.2x</p>
                      <p className="text-xs text-orange-600">+8%</p>
                    </div>
                  </div>
                  
                  <div className="border rounded-xl p-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Target className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Google Ads</p>
                        <p className="text-xs text-gray-500">R$ 200K investido</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-blue-600">3.8x</p>
                      <p className="text-xs text-blue-600">+5%</p>
                    </div>
                  </div>
                  
                  <div className="border rounded-xl p-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Zap className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Meta Ads</p>
                        <p className="text-xs text-gray-500">R$ 300K investido</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-purple-600">3.2x</p>
                      <p className="text-xs text-purple-600">+3%</p>
                    </div>
                  </div>
                </div>
                
                {/* Quick Insight */}
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3">
                  <p className="text-xs text-emerald-800">
                    <strong>💡 Insight:</strong> Marketing de Influência tem o melhor ROI. Considere aumentar investimento neste canal.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tela 2: Detalhes do Canal */}
          <div className="w-[280px] bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
            <div className="bg-white rounded-[2rem] overflow-hidden h-[580px]">
              {/* Header */}
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-4 text-white">
                <div className="flex items-center gap-3">
                  <button className="p-1">←</button>
                  <h4 className="font-bold">Influencers - Detalhes</h4>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-4 space-y-4 overflow-y-auto h-[500px]">
                {/* ROI Card */}
                <div className="bg-emerald-50 rounded-xl p-4 text-center">
                  <p className="text-sm text-emerald-600">ROI do Canal</p>
                  <p className="text-4xl font-bold text-emerald-600">5.2x</p>
                  <div className="flex items-center justify-center gap-1 text-emerald-600 text-sm mt-1">
                    <TrendingUp className="w-4 h-4" />
                    +15% vs mês anterior
                  </div>
                </div>
                
                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 rounded-xl p-3 text-center">
                    <p className="text-xs text-gray-500">Investimento</p>
                    <p className="text-lg font-bold text-gray-800">R$ 150K</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3 text-center">
                    <p className="text-xs text-gray-500">Receita</p>
                    <p className="text-lg font-bold text-gray-800">R$ 780K</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3 text-center">
                    <p className="text-xs text-gray-500">Impressões</p>
                    <p className="text-lg font-bold text-gray-800">45.2M</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3 text-center">
                    <p className="text-xs text-gray-500">Conversões</p>
                    <p className="text-lg font-bold text-gray-800">4,247</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3 text-center">
                    <p className="text-xs text-gray-500">CTR</p>
                    <p className="text-lg font-bold text-emerald-600">1.97%</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3 text-center">
                    <p className="text-xs text-gray-500">CPA</p>
                    <p className="text-lg font-bold text-emerald-600">R$ 35</p>
                  </div>
                </div>
                
                {/* Comparison */}
                <div className="border rounded-xl p-3">
                  <p className="text-xs text-gray-500 mb-2">Comparação com outros canais</p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">ROI</span>
                      <span className="text-sm text-emerald-600 font-medium">+37% acima da média</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">CPA</span>
                      <span className="text-sm text-emerald-600 font-medium">-44% abaixo da média</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Engajamento</span>
                      <span className="text-sm text-emerald-600 font-medium">+85% acima da média</span>
                    </div>
                  </div>
                </div>
                
                <button className="w-full py-3 bg-emerald-600 text-white rounded-xl font-medium flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
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
