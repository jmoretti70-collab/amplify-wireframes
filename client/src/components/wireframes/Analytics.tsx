/**
 * Analytics Wireframes Component
 * Design: Dashboards de métricas, gráficos de performance, relatórios detalhados
 */

import { motion } from "framer-motion";

export default function Analytics() {
  return (
    <div className="space-y-8">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold text-gray-800"
      >
        Módulo de Analytics - Relatórios e Métricas
      </motion.h2>

      {/* Wireframe 1: Dashboard de Analytics */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <h3 className="text-xl font-semibold mb-4 amplify-text">1. Dashboard de Analytics</h3>
        <div className="wireframe-container rounded-lg p-4 min-h-[600px]">
          <div className="bg-gray-50 rounded-lg p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-bold">Analytics</h2>
                <p className="text-gray-500">Visão geral de performance</p>
              </div>
              <div className="flex gap-3">
                <select className="border rounded-lg px-4 py-2">
                  <option>Últimos 30 dias</option>
                  <option>Últimos 7 dias</option>
                  <option>Último mês</option>
                  <option>Último trimestre</option>
                </select>
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                  <i className="fas fa-download mr-2"></i> Exportar
                </button>
                <button className="px-4 py-2 amplify-gradient text-white rounded-lg">
                  <i className="fas fa-file-pdf mr-2"></i> Gerar Relatório
                </button>
              </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-5 gap-4 mb-6">
              <div className="bg-white p-4 rounded-xl shadow-sm border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-500 text-sm">Impressões</span>
                  <i className="fas fa-eye text-blue-500"></i>
                </div>
                <p className="text-2xl font-bold">12.4M</p>
                <p className="text-green-500 text-sm"><i className="fas fa-arrow-up"></i> +18.5%</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-500 text-sm">Alcance</span>
                  <i className="fas fa-users text-purple-500"></i>
                </div>
                <p className="text-2xl font-bold">8.7M</p>
                <p className="text-green-500 text-sm"><i className="fas fa-arrow-up"></i> +12.3%</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-500 text-sm">Engajamento</span>
                  <i className="fas fa-heart text-pink-500"></i>
                </div>
                <p className="text-2xl font-bold">4.2%</p>
                <p className="text-green-500 text-sm"><i className="fas fa-arrow-up"></i> +0.8%</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-500 text-sm">Conversões</span>
                  <i className="fas fa-shopping-cart text-green-500"></i>
                </div>
                <p className="text-2xl font-bold">24.8K</p>
                <p className="text-green-500 text-sm"><i className="fas fa-arrow-up"></i> +32.1%</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-500 text-sm">ROI</span>
                  <i className="fas fa-chart-line text-orange-500"></i>
                </div>
                <p className="text-2xl font-bold">5.2x</p>
                <p className="text-green-500 text-sm"><i className="fas fa-arrow-up"></i> +0.7x</p>
              </div>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-4 rounded-xl shadow-sm border">
                <h4 className="font-semibold mb-4">Performance por Campanha</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Verão 2025</span>
                      <span className="font-semibold">R$ 245K</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full">
                      <div className="h-3 amplify-gradient rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Black Friday</span>
                      <span className="font-semibold">R$ 180K</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full">
                      <div className="h-3 amplify-gradient rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Fitness Challenge</span>
                      <span className="font-semibold">R$ 120K</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full">
                      <div className="h-3 amplify-gradient rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Tech Launch</span>
                      <span className="font-semibold">R$ 95K</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full">
                      <div className="h-3 amplify-gradient rounded-full" style={{ width: '35%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border">
                <h4 className="font-semibold mb-4">Distribuição por Rede Social</h4>
                <div className="flex items-center justify-center h-48">
                  <div className="relative w-40 h-40">
                    <svg viewBox="0 0 36 36" className="w-full h-full">
                      <circle cx="18" cy="18" r="16" fill="none" stroke="#E5E7EB" strokeWidth="3"></circle>
                      <circle cx="18" cy="18" r="16" fill="none" stroke="#E1306C" strokeWidth="3" strokeDasharray="40 60" strokeDashoffset="25"></circle>
                      <circle cx="18" cy="18" r="16" fill="none" stroke="#000000" strokeWidth="3" strokeDasharray="25 75" strokeDashoffset="85"></circle>
                      <circle cx="18" cy="18" r="16" fill="none" stroke="#FF0000" strokeWidth="3" strokeDasharray="20 80" strokeDashoffset="60"></circle>
                      <circle cx="18" cy="18" r="16" fill="none" stroke="#1DA1F2" strokeWidth="3" strokeDasharray="15 85" strokeDashoffset="40"></circle>
                    </svg>
                  </div>
                  <div className="ml-6 space-y-2">
                    <div className="flex items-center"><span className="w-3 h-3 bg-pink-500 rounded-full mr-2"></span> Instagram 40%</div>
                    <div className="flex items-center"><span className="w-3 h-3 bg-black rounded-full mr-2"></span> TikTok 25%</div>
                    <div className="flex items-center"><span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span> YouTube 20%</div>
                    <div className="flex items-center"><span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span> Twitter 15%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Engagement Timeline */}
            <div className="bg-white p-4 rounded-xl shadow-sm border">
              <h4 className="font-semibold mb-4">Engajamento ao Longo do Tempo</h4>
              <div className="h-64 flex items-end justify-between px-4">
                {['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'].map((month, i) => (
                  <div key={month} className="flex flex-col items-center">
                    <div className="w-8 amplify-gradient rounded-t" style={{ height: `${40 + Math.random() * 120}px` }}></div>
                    <span className="text-xs text-gray-500 mt-2">{month}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Wireframe 2: Relatório de Campanha */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <h3 className="text-xl font-semibold mb-4 amplify-text">2. Relatório Detalhado de Campanha</h3>
        <div className="wireframe-container rounded-lg p-4 min-h-[500px]">
          <div className="bg-gray-50 rounded-lg p-6">
            {/* Campaign Header */}
            <div className="bg-white rounded-xl p-6 mb-6">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-xl flex items-center justify-center text-white">
                    <i className="fas fa-sun text-2xl"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold">Lançamento Verão 2025</h3>
                    <p className="text-gray-500">Fashion Brand X • 15 Jan - 28 Fev 2025</p>
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm mt-2 inline-block">Concluída</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                    <i className="fas fa-share-alt mr-2"></i> Compartilhar
                  </button>
                  <button className="px-4 py-2 amplify-gradient text-white rounded-lg">
                    <i className="fas fa-download mr-2"></i> Download PDF
                  </button>
                </div>
              </div>
            </div>

            {/* Results Summary */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                <p className="text-3xl font-bold text-orange-500">12</p>
                <p className="text-gray-500 text-sm">Influenciadores</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                <p className="text-3xl font-bold text-pink-500">48</p>
                <p className="text-gray-500 text-sm">Conteúdos</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                <p className="text-3xl font-bold text-green-500">2.4M</p>
                <p className="text-gray-500 text-sm">Alcance Total</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                <p className="text-3xl font-bold text-blue-500">5.2x</p>
                <p className="text-gray-500 text-sm">ROI</p>
              </div>
            </div>

            {/* Influencer Performance Table */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h4 className="font-semibold mb-4">Performance por Influenciador</h4>
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-500 text-sm border-b">
                    <th className="pb-3">Influenciador</th>
                    <th className="pb-3">Rede</th>
                    <th className="pb-3">Conteúdos</th>
                    <th className="pb-3">Alcance</th>
                    <th className="pb-3">Engajamento</th>
                    <th className="pb-3">Conversões</th>
                    <th className="pb-3">ROI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white text-xs">MA</div>
                        <span className="ml-2">Maria Alves</span>
                      </div>
                    </td>
                    <td className="py-3"><i className="fab fa-instagram text-pink-500"></i></td>
                    <td className="py-3">8</td>
                    <td className="py-3">450K</td>
                    <td className="py-3">5.2%</td>
                    <td className="py-3">1,247</td>
                    <td className="py-3 text-green-500 font-semibold">6.8x</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-white text-xs">PS</div>
                        <span className="ml-2">Pedro Santos</span>
                      </div>
                    </td>
                    <td className="py-3"><i className="fab fa-tiktok"></i></td>
                    <td className="py-3">6</td>
                    <td className="py-3">380K</td>
                    <td className="py-3">4.8%</td>
                    <td className="py-3">982</td>
                    <td className="py-3 text-green-500 font-semibold">5.4x</td>
                  </tr>
                  <tr>
                    <td className="py-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-xs">JO</div>
                        <span className="ml-2">Julia Oliveira</span>
                      </div>
                    </td>
                    <td className="py-3"><i className="fab fa-youtube text-red-500"></i></td>
                    <td className="py-3">4</td>
                    <td className="py-3">520K</td>
                    <td className="py-3">3.9%</td>
                    <td className="py-3">756</td>
                    <td className="py-3 text-green-500 font-semibold">4.2x</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Wireframe 3: Comparativo de Campanhas */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <h3 className="text-xl font-semibold mb-4 amplify-text">3. Comparativo de Campanhas</h3>
        <div className="wireframe-container rounded-lg p-4 min-h-[400px]">
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-semibold">Comparar Campanhas</h4>
              <div className="flex gap-2">
                <select className="border rounded-lg px-3 py-2">
                  <option>Verão 2025</option>
                  <option>Black Friday</option>
                </select>
                <span className="flex items-center text-gray-400">vs</span>
                <select className="border rounded-lg px-3 py-2">
                  <option>Fitness Challenge</option>
                  <option>Tech Launch</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-red-500 rounded-lg flex items-center justify-center text-white">
                    <i className="fas fa-sun"></i>
                  </div>
                  <span className="ml-3 font-semibold">Verão 2025</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between"><span className="text-gray-500">Investimento</span><span className="font-semibold">R$ 150.000</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Alcance</span><span className="font-semibold">2.4M</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Engajamento</span><span className="font-semibold">4.2%</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Conversões</span><span className="font-semibold">3,245</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">ROI</span><span className="font-semibold text-green-500">5.2x</span></div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center text-white">
                    <i className="fas fa-dumbbell"></i>
                  </div>
                  <span className="ml-3 font-semibold">Fitness Challenge</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between"><span className="text-gray-500">Investimento</span><span className="font-semibold">R$ 80.000</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Alcance</span><span className="font-semibold">1.8M</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Engajamento</span><span className="font-semibold">5.1%</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Conversões</span><span className="font-semibold">2,890</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">ROI</span><span className="font-semibold text-green-500">4.8x</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
