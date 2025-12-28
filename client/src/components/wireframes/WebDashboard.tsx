/**
 * Web Dashboard Wireframes Component
 * Design: Gradiente Amplify (laranja-rosa), cards com sombras suaves, sidebar escura
 */

import { motion } from "framer-motion";

export default function WebDashboard() {
  return (
    <div className="space-y-8">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold text-gray-800"
      >
        Web Dashboard - Visão da Agência
      </motion.h2>

      {/* Wireframe 1: Dashboard Principal */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <h3 className="text-xl font-semibold mb-4 amplify-text">1. Dashboard Principal</h3>
        <div className="wireframe-container rounded-lg p-4 min-h-[600px]">
          <div className="flex">
            {/* Sidebar */}
            <div className="w-64 bg-gray-800 text-white rounded-l-lg p-4 min-h-[550px]">
              <div className="flex items-center mb-8">
                <img src="/images/amplify_logo.png" alt="Amplify" className="h-10 mr-3" />
              </div>
              <nav className="space-y-2">
                <a href="#" className="flex items-center px-4 py-3 amplify-gradient rounded-lg">
                  <i className="fas fa-chart-line w-5"></i>
                  <span className="ml-3">Dashboard</span>
                </a>
                <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-700 rounded-lg transition-colors">
                  <i className="fas fa-users w-5"></i>
                  <span className="ml-3">Influenciadores</span>
                </a>
                <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-700 rounded-lg transition-colors">
                  <i className="fas fa-bullhorn w-5"></i>
                  <span className="ml-3">Campanhas</span>
                </a>
                <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-700 rounded-lg transition-colors">
                  <i className="fas fa-search w-5"></i>
                  <span className="ml-3">Descoberta</span>
                </a>
                <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-700 rounded-lg transition-colors">
                  <i className="fas fa-chart-bar w-5"></i>
                  <span className="ml-3">Analytics</span>
                </a>
                <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-700 rounded-lg transition-colors">
                  <i className="fas fa-wallet w-5"></i>
                  <span className="ml-3">Financeiro</span>
                </a>
                <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-700 rounded-lg transition-colors">
                  <i className="fas fa-cog w-5"></i>
                  <span className="ml-3">Configurações</span>
                </a>
              </nav>
            </div>
            {/* Main Content */}
            <div className="flex-1 p-6 bg-gray-50 rounded-r-lg">
              {/* Top Bar */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                  <p className="text-gray-500">Visão geral das suas campanhas</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <input type="text" placeholder="Buscar..." className="pl-10 pr-4 py-2 border rounded-lg w-64" />
                    <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
                  </div>
                  <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                    <i className="fas fa-bell text-gray-600"></i>
                  </button>
                  <div className="w-10 h-10 amplify-gradient rounded-full flex items-center justify-center text-white font-semibold">
                    JM
                  </div>
                </div>
              </div>
              {/* Stats Cards */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="bg-white p-4 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-gray-500 text-sm">Campanhas Ativas</p>
                      <p className="text-2xl font-bold text-gray-800">24</p>
                    </div>
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <i className="fas fa-bullhorn text-orange-500"></i>
                    </div>
                  </div>
                  <p className="text-green-500 text-sm mt-2"><i className="fas fa-arrow-up"></i> +12% vs mês anterior</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-gray-500 text-sm">Influenciadores</p>
                      <p className="text-2xl font-bold text-gray-800">1,847</p>
                    </div>
                    <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                      <i className="fas fa-users text-pink-500"></i>
                    </div>
                  </div>
                  <p className="text-green-500 text-sm mt-2"><i className="fas fa-arrow-up"></i> +8% vs mês anterior</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-gray-500 text-sm">Alcance Total</p>
                      <p className="text-2xl font-bold text-gray-800">45.2M</p>
                    </div>
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <i className="fas fa-eye text-green-500"></i>
                    </div>
                  </div>
                  <p className="text-green-500 text-sm mt-2"><i className="fas fa-arrow-up"></i> +23% vs mês anterior</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-gray-500 text-sm">ROI Médio</p>
                      <p className="text-2xl font-bold text-gray-800">4.8x</p>
                    </div>
                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <i className="fas fa-chart-line text-yellow-500"></i>
                    </div>
                  </div>
                  <p className="text-green-500 text-sm mt-2"><i className="fas fa-arrow-up"></i> +0.5x vs mês anterior</p>
                </div>
              </div>
              {/* Charts Row */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-4 rounded-xl shadow-sm border">
                  <h3 className="font-semibold mb-4">Performance por Rede Social</h3>
                  <div className="h-48 flex items-end justify-around">
                    <div className="text-center">
                      <div className="w-12 bg-gradient-to-t from-pink-500 to-purple-500 rounded-t" style={{ height: '120px' }}></div>
                      <p className="text-xs mt-2">Instagram</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 bg-gradient-to-t from-black to-gray-600 rounded-t" style={{ height: '100px' }}></div>
                      <p className="text-xs mt-2">TikTok</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 bg-gradient-to-t from-red-500 to-red-400 rounded-t" style={{ height: '80px' }}></div>
                      <p className="text-xs mt-2">YouTube</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t" style={{ height: '60px' }}></div>
                      <p className="text-xs mt-2">Twitter</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 bg-gradient-to-t from-blue-700 to-blue-500 rounded-t" style={{ height: '40px' }}></div>
                      <p className="text-xs mt-2">LinkedIn</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border">
                  <h3 className="font-semibold mb-4">Engajamento ao Longo do Tempo</h3>
                  <div className="h-48 flex items-center justify-center">
                    <svg viewBox="0 0 300 100" className="w-full h-full">
                      <polyline fill="none" stroke="#f97316" strokeWidth="2" points="0,80 50,60 100,70 150,40 200,50 250,30 300,20" />
                      <polyline fill="none" stroke="#ec4899" strokeWidth="2" points="0,90 50,85 100,75 150,65 200,60 250,55 300,45" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Recent Campaigns */}
              <div className="bg-white p-4 rounded-xl shadow-sm border">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold">Campanhas Recentes</h3>
                  <a href="#" className="text-orange-500 text-sm hover:underline">Ver todas</a>
                </div>
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-gray-500 text-sm border-b">
                      <th className="pb-3">Campanha</th>
                      <th className="pb-3">Cliente</th>
                      <th className="pb-3">Influenciadores</th>
                      <th className="pb-3">Status</th>
                      <th className="pb-3">ROI</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3">Lançamento Verão 2025</td>
                      <td className="py-3">Fashion Brand X</td>
                      <td className="py-3">12</td>
                      <td className="py-3"><span className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs">Ativa</span></td>
                      <td className="py-3 text-green-500">5.2x</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Black Friday Tech</td>
                      <td className="py-3">TechStore</td>
                      <td className="py-3">8</td>
                      <td className="py-3"><span className="px-2 py-1 bg-yellow-100 text-yellow-600 rounded-full text-xs">Em Revisão</span></td>
                      <td className="py-3 text-gray-400">-</td>
                    </tr>
                    <tr>
                      <td className="py-3">Fitness Challenge</td>
                      <td className="py-3">GymLife</td>
                      <td className="py-3">25</td>
                      <td className="py-3"><span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs">Concluída</span></td>
                      <td className="py-3 text-green-500">4.8x</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Wireframe 2: Descoberta de Influenciadores */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <h3 className="text-xl font-semibold mb-4 amplify-text">2. Descoberta de Influenciadores</h3>
        <div className="wireframe-container rounded-lg p-4 min-h-[500px]">
          <div className="bg-gray-50 rounded-lg p-6">
            {/* Search Header */}
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4">Descoberta de Influenciadores</h2>
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <input type="text" placeholder="Buscar por nome, @handle, nicho..." className="w-full pl-10 pr-4 py-3 border rounded-lg" />
                  <i className="fas fa-search absolute left-3 top-4 text-gray-400"></i>
                </div>
                <button className="px-6 py-3 bg-gray-700 text-white rounded-lg flex items-center hover:bg-gray-600 transition-colors">
                  <i className="fas fa-filter mr-2"></i> Filtros Avançados
                </button>
                <button className="px-6 py-3 amplify-gradient text-white rounded-lg flex items-center hover:opacity-90 transition-opacity">
                  <i className="fas fa-magic mr-2"></i> Busca com IA
                </button>
              </div>
            </div>
            {/* Filters */}
            <div className="bg-white p-4 rounded-lg border mb-6">
              <div className="grid grid-cols-6 gap-4">
                <div>
                  <label className="text-sm text-gray-500 block mb-1">Rede Social</label>
                  <select className="w-full border rounded-lg p-2">
                    <option>Todas</option>
                    <option>Instagram</option>
                    <option>TikTok</option>
                    <option>YouTube</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-gray-500 block mb-1">Seguidores</label>
                  <select className="w-full border rounded-lg p-2">
                    <option>Qualquer</option>
                    <option>1K - 10K</option>
                    <option>10K - 100K</option>
                    <option>100K - 1M</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-gray-500 block mb-1">Engajamento</label>
                  <select className="w-full border rounded-lg p-2">
                    <option>Qualquer</option>
                    <option>&gt; 1%</option>
                    <option>&gt; 3%</option>
                    <option>&gt; 5%</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-gray-500 block mb-1">Localização</label>
                  <select className="w-full border rounded-lg p-2">
                    <option>Brasil</option>
                    <option>São Paulo</option>
                    <option>Rio de Janeiro</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-gray-500 block mb-1">Nicho</label>
                  <select className="w-full border rounded-lg p-2">
                    <option>Todos</option>
                    <option>Moda</option>
                    <option>Beleza</option>
                    <option>Tech</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-gray-500 block mb-1">Gênero</label>
                  <select className="w-full border rounded-lg p-2">
                    <option>Todos</option>
                    <option>Feminino</option>
                    <option>Masculino</option>
                  </select>
                </div>
              </div>
            </div>
            {/* Results */}
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-500">Encontrados <strong>2,847</strong> influenciadores</p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Ordenar por:</span>
                <select className="border rounded-lg p-2">
                  <option>Relevância</option>
                  <option>Seguidores</option>
                  <option>Engajamento</option>
                </select>
              </div>
            </div>
            {/* Influencer Cards */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { initials: 'MA', name: 'Maria Alves', handle: '@mariaalves', gradient: 'from-pink-400 to-purple-500', tags: ['Moda', 'Lifestyle'], followers: '245K', engagement: '4.2%', cpe: 'R$2.5K', real: '98%', realColor: 'green', socials: ['instagram', 'tiktok', 'youtube'] },
                { initials: 'PS', name: 'Pedro Santos', handle: '@pedrotech', gradient: 'from-blue-400 to-cyan-500', tags: ['Tech', 'Games'], followers: '1.2M', engagement: '3.8%', cpe: 'R$8K', real: '95%', realColor: 'green', socials: ['youtube', 'twitch', 'twitter'] },
                { initials: 'JO', name: 'Julia Oliveira', handle: '@juliafitness', gradient: 'from-yellow-400 to-orange-500', tags: ['Fitness', 'Saúde'], followers: '580K', engagement: '5.1%', cpe: 'R$4K', real: '87%', realColor: 'yellow', socials: ['instagram', 'tiktok'] },
              ].map((influencer, idx) => (
                <div key={idx} className="bg-white rounded-xl border p-4 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      <div className={`w-14 h-14 bg-gradient-to-br ${influencer.gradient} rounded-full flex items-center justify-center text-white font-bold`}>
                        {influencer.initials}
                      </div>
                      <div className="ml-3">
                        <h4 className="font-semibold">{influencer.name}</h4>
                        <p className="text-gray-500 text-sm">{influencer.handle}</p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 bg-${influencer.realColor}-100 text-${influencer.realColor}-600 rounded text-xs`}>{influencer.real} Real</span>
                  </div>
                  <div className="flex gap-2 mb-3">
                    {influencer.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 rounded text-xs">{tag}</span>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center mb-3">
                    <div>
                      <p className="font-bold">{influencer.followers}</p>
                      <p className="text-xs text-gray-500">Seguidores</p>
                    </div>
                    <div>
                      <p className="font-bold">{influencer.engagement}</p>
                      <p className="text-xs text-gray-500">Engajamento</p>
                    </div>
                    <div>
                      <p className="font-bold">{influencer.cpe}</p>
                      <p className="text-xs text-gray-500">CPE</p>
                    </div>
                  </div>
                  <div className="flex gap-2 mb-3">
                    {influencer.socials.includes('instagram') && <i className="fab fa-instagram text-pink-500"></i>}
                    {influencer.socials.includes('tiktok') && <i className="fab fa-tiktok"></i>}
                    {influencer.socials.includes('youtube') && <i className="fab fa-youtube text-red-500"></i>}
                    {influencer.socials.includes('twitch') && <i className="fab fa-twitch text-purple-500"></i>}
                    {influencer.socials.includes('twitter') && <i className="fab fa-twitter text-blue-400"></i>}
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 py-2 border border-orange-500 text-orange-500 rounded-lg text-sm hover:bg-orange-50 transition-colors">Ver Perfil</button>
                    <button className="flex-1 py-2 amplify-gradient text-white rounded-lg text-sm hover:opacity-90 transition-opacity">Adicionar</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Wireframe 3: Gestão de Campanhas */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <h3 className="text-xl font-semibold mb-4 amplify-text">3. Gestão de Campanhas</h3>
        <div className="wireframe-container rounded-lg p-4 min-h-[500px]">
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-bold">Campanhas</h2>
                <p className="text-gray-500">Gerencie todas as suas campanhas</p>
              </div>
              <button className="px-6 py-3 amplify-gradient text-white rounded-lg flex items-center hover:opacity-90 transition-opacity">
                <i className="fas fa-plus mr-2"></i> Nova Campanha
              </button>
            </div>
            {/* Campaign Tabs */}
            <div className="flex gap-4 mb-6 border-b">
              <button className="pb-3 px-4 border-b-2 border-orange-500 text-orange-500 font-medium">Todas (24)</button>
              <button className="pb-3 px-4 text-gray-500 hover:text-gray-700">Ativas (12)</button>
              <button className="pb-3 px-4 text-gray-500 hover:text-gray-700">Rascunhos (5)</button>
              <button className="pb-3 px-4 text-gray-500 hover:text-gray-700">Concluídas (7)</button>
            </div>
            {/* Campaign Cards */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl border p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start">
                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-xl flex items-center justify-center text-white">
                      <i className="fas fa-sun text-2xl"></i>
                    </div>
                    <div className="ml-4">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-lg">Lançamento Verão 2025</h3>
                        <span className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs">Ativa</span>
                      </div>
                      <p className="text-gray-500">Fashion Brand X</p>
                      <div className="flex gap-4 mt-2 text-sm text-gray-500">
                        <span><i className="fas fa-calendar mr-1"></i> 15 Jan - 28 Fev</span>
                        <span><i className="fas fa-users mr-1"></i> 12 influenciadores</span>
                        <span><i className="fas fa-dollar-sign mr-1"></i> R$ 150.000</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Progresso</p>
                    <p className="text-2xl font-bold text-orange-500">68%</p>
                    <div className="w-32 h-2 bg-gray-200 rounded-full mt-2">
                      <div className="w-2/3 h-2 amplify-gradient rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t flex justify-between items-center">
                  <div className="flex gap-6 text-sm">
                    <div>
                      <p className="text-gray-500">Alcance</p>
                      <p className="font-bold">2.4M</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Engajamento</p>
                      <p className="font-bold">4.2%</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Conversões</p>
                      <p className="font-bold">1,247</p>
                    </div>
                    <div>
                      <p className="text-gray-500">ROI</p>
                      <p className="font-bold text-green-500">5.2x</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50 transition-colors">
                      <i className="fas fa-chart-bar mr-1"></i> Analytics
                    </button>
                    <button className="px-4 py-2 amplify-gradient text-white rounded-lg text-sm hover:opacity-90 transition-opacity">
                      <i className="fas fa-eye mr-1"></i> Ver Detalhes
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl border p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start">
                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center text-white">
                      <i className="fas fa-laptop text-2xl"></i>
                    </div>
                    <div className="ml-4">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-lg">Black Friday Tech</h3>
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-600 rounded-full text-xs">Em Revisão</span>
                      </div>
                      <p className="text-gray-500">TechStore</p>
                      <div className="flex gap-4 mt-2 text-sm text-gray-500">
                        <span><i className="fas fa-calendar mr-1"></i> 20 Nov - 30 Nov</span>
                        <span><i className="fas fa-users mr-1"></i> 8 influenciadores</span>
                        <span><i className="fas fa-dollar-sign mr-1"></i> R$ 80.000</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Progresso</p>
                    <p className="text-2xl font-bold text-yellow-600">25%</p>
                    <div className="w-32 h-2 bg-gray-200 rounded-full mt-2">
                      <div className="w-1/4 h-2 bg-yellow-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Wireframe 4: Perfil do Influenciador */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <h3 className="text-xl font-semibold mb-4 amplify-text">4. Perfil do Influenciador</h3>
        <div className="wireframe-container rounded-lg p-4 min-h-[500px]">
          <div className="bg-gray-50 rounded-lg p-6">
            {/* Profile Header */}
            <div className="bg-white rounded-xl p-6 mb-6">
              <div className="flex justify-between">
                <div className="flex items-start">
                  <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                    MA
                  </div>
                  <div className="ml-6">
                    <div className="flex items-center gap-3">
                      <h2 className="text-2xl font-bold">Maria Alves</h2>
                      <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">Verificado</span>
                      <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">Top Creator</span>
                    </div>
                    <p className="text-gray-500 mt-1">@mariaalves • São Paulo, Brasil</p>
                    <p className="text-gray-600 mt-2 max-w-xl">Criadora de conteúdo de moda e lifestyle. Apaixonada por tendências e estilo de vida saudável. Parceira de grandes marcas.</p>
                    <div className="flex gap-3 mt-3">
                      <a href="#" className="text-pink-500 hover:text-pink-600"><i className="fab fa-instagram text-xl"></i></a>
                      <a href="#" className="text-black hover:text-gray-700"><i className="fab fa-tiktok text-xl"></i></a>
                      <a href="#" className="text-red-500 hover:text-red-600"><i className="fab fa-youtube text-xl"></i></a>
                      <a href="#" className="text-blue-400 hover:text-blue-500"><i className="fab fa-twitter text-xl"></i></a>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors">
                    <i className="fas fa-download mr-2"></i> Media Kit
                  </button>
                  <button className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors">
                    <i className="fas fa-envelope mr-2"></i> Mensagem
                  </button>
                  <button className="px-4 py-2 amplify-gradient text-white rounded-lg hover:opacity-90 transition-opacity">
                    <i className="fas fa-plus mr-2"></i> Adicionar à Campanha
                  </button>
                </div>
              </div>
            </div>
            {/* Stats Grid */}
            <div className="grid grid-cols-5 gap-4 mb-6">
              <div className="bg-white p-4 rounded-xl text-center shadow-sm">
                <p className="text-3xl font-bold text-orange-500">245K</p>
                <p className="text-gray-500 text-sm">Seguidores</p>
              </div>
              <div className="bg-white p-4 rounded-xl text-center shadow-sm">
                <p className="text-3xl font-bold text-green-500">4.2%</p>
                <p className="text-gray-500 text-sm">Engajamento</p>
              </div>
              <div className="bg-white p-4 rounded-xl text-center shadow-sm">
                <p className="text-3xl font-bold text-pink-500">98%</p>
                <p className="text-gray-500 text-sm">Audiência Real</p>
              </div>
              <div className="bg-white p-4 rounded-xl text-center shadow-sm">
                <p className="text-3xl font-bold text-blue-500">12</p>
                <p className="text-gray-500 text-sm">Campanhas</p>
              </div>
              <div className="bg-white p-4 rounded-xl text-center shadow-sm">
                <p className="text-3xl font-bold text-yellow-500">4.8</p>
                <p className="text-gray-500 text-sm">Rating</p>
              </div>
            </div>
            {/* Content Tabs */}
            <div className="bg-white rounded-xl p-6">
              <div className="flex gap-6 border-b mb-6">
                <button className="pb-3 border-b-2 border-orange-500 text-orange-500 font-medium">Visão Geral</button>
                <button className="pb-3 text-gray-500 hover:text-gray-700">Audiência</button>
                <button className="pb-3 text-gray-500 hover:text-gray-700">Conteúdo</button>
                <button className="pb-3 text-gray-500 hover:text-gray-700">Histórico</button>
                <button className="pb-3 text-gray-500 hover:text-gray-700">Pagamentos</button>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-4">Preços por Tipo de Conteúdo</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span>Post no Feed</span>
                      <span className="font-bold">R$ 3.500</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span>Story (3 sequências)</span>
                      <span className="font-bold">R$ 1.500</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span>Reels/TikTok</span>
                      <span className="font-bold">R$ 5.000</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span>Vídeo YouTube</span>
                      <span className="font-bold">R$ 12.000</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Nichos e Categorias</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-2 bg-pink-100 text-pink-600 rounded-lg">Moda</span>
                    <span className="px-3 py-2 bg-purple-100 text-purple-600 rounded-lg">Lifestyle</span>
                    <span className="px-3 py-2 bg-blue-100 text-blue-600 rounded-lg">Beleza</span>
                    <span className="px-3 py-2 bg-green-100 text-green-600 rounded-lg">Viagem</span>
                    <span className="px-3 py-2 bg-yellow-100 text-yellow-600 rounded-lg">Fitness</span>
                  </div>
                  <h4 className="font-semibold mb-4 mt-6">Marcas Anteriores</h4>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-xs font-medium">Nike</div>
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-xs font-medium">Zara</div>
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-xs font-medium">L'Oreal</div>
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-xs font-medium">+8</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
