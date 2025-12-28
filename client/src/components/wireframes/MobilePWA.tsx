/**
 * Mobile PWA Wireframes Component
 * Design: Phone frames realistas, gradiente Amplify, bottom navigation fixa
 */

import { motion } from "framer-motion";

function PhoneFrame({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="flex flex-col items-center">
      <h4 className="text-lg font-semibold mb-4 amplify-text">{title}</h4>
      <div className="phone-frame shadow-2xl">
        <div className="phone-notch"></div>
        {children}
      </div>
    </div>
  );
}

export default function MobilePWA() {
  return (
    <div className="space-y-8">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold text-gray-800"
      >
        PWA Mobile - Portal do Influenciador
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {/* Screen 0: Splash */}
        <PhoneFrame title="0. Splash Screen">
          <div className="h-full amplify-gradient flex flex-col items-center justify-center">
            <img src="/images/amplify_logo.png" alt="Amplify Logo" className="w-40 mb-6" />
            <div className="flex space-x-2 mt-8">
              <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </PhoneFrame>

        {/* Screen 1: Login */}
        <PhoneFrame title="1. Login">
          <div className="p-6 pt-12 h-full amplify-gradient">
            <div className="flex flex-col items-center justify-center h-full">
              <img src="/images/amplify_logo.png" alt="Amplify Logo" className="w-24 mb-6" />
              <p className="text-white/80 text-sm mb-8">Portal do Criador</p>
              
              <div className="w-full space-y-4">
                <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/30" />
                <input type="password" placeholder="Senha" className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/30" />
                <button className="w-full py-3 bg-white text-orange-500 rounded-xl font-semibold">Entrar</button>
              </div>
              
              <div className="mt-6 flex items-center w-full">
                <div className="flex-1 h-px bg-white/30"></div>
                <span className="px-4 text-white/60 text-sm">ou continue com</span>
                <div className="flex-1 h-px bg-white/30"></div>
              </div>
              
              <div className="flex gap-4 mt-4">
                <button className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <i className="fab fa-google text-red-500"></i>
                </button>
                <button className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <i className="fab fa-apple text-black"></i>
                </button>
                <button className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <i className="fab fa-instagram text-pink-500"></i>
                </button>
              </div>
              
              <p className="text-white/60 text-sm mt-6">Não tem conta? <a href="#" className="text-white underline">Cadastre-se</a></p>
            </div>
          </div>
        </PhoneFrame>

        {/* Screen 2: Home */}
        <PhoneFrame title="2. Home">
          <div className="h-full bg-gray-50 flex flex-col">
            {/* Header */}
            <div className="bg-white px-4 py-4 pt-10 shadow-sm">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500 text-sm">Olá,</p>
                  <h2 className="text-xl font-bold">Maria Alves</h2>
                </div>
                <div className="flex items-center gap-3">
                  <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-bell text-gray-600"></i>
                  </button>
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 overflow-auto p-4">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <p className="text-gray-500 text-xs">Ganhos do Mês</p>
                  <p className="text-xl font-bold text-green-500">R$ 12.500</p>
                  <p className="text-green-500 text-xs mt-1"><i className="fas fa-arrow-up"></i> +15%</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <p className="text-gray-500 text-xs">Campanhas Ativas</p>
                  <p className="text-xl font-bold text-orange-500">3</p>
                  <p className="text-gray-400 text-xs mt-1">2 pendentes</p>
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                <h3 className="font-semibold mb-3">Ações Rápidas</h3>
                <div className="grid grid-cols-4 gap-2">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-1">
                      <i className="fas fa-file-alt text-orange-500"></i>
                    </div>
                    <p className="text-xs">Media Kit</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-1">
                      <i className="fas fa-wallet text-green-600"></i>
                    </div>
                    <p className="text-xs">Sacar</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-1">
                      <i className="fas fa-chart-line text-pink-500"></i>
                    </div>
                    <p className="text-xs">Analytics</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-1">
                      <i className="fas fa-cog text-gray-600"></i>
                    </div>
                    <p className="text-xs">Config</p>
                  </div>
                </div>
              </div>
              
              {/* Active Campaigns */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold">Campanhas Ativas</h3>
                  <a href="#" className="text-orange-500 text-sm">Ver todas</a>
                </div>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                        <i className="fas fa-sun text-pink-500"></i>
                      </div>
                      <div className="ml-3 flex-1">
                        <h4 className="font-semibold text-sm">Verão 2025</h4>
                        <p className="text-gray-500 text-xs">Fashion Brand X</p>
                      </div>
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-600 rounded text-xs">Pendente</span>
                    </div>
                    <div className="mt-3 flex justify-between text-xs text-gray-500">
                      <span>Prazo: 15 Jan</span>
                      <span className="text-green-500 font-semibold">R$ 3.500</span>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <i className="fas fa-dumbbell text-blue-500"></i>
                      </div>
                      <div className="ml-3 flex-1">
                        <h4 className="font-semibold text-sm">Fitness Challenge</h4>
                        <p className="text-gray-500 text-xs">GymLife</p>
                      </div>
                      <span className="px-2 py-1 bg-green-100 text-green-600 rounded text-xs">Aprovado</span>
                    </div>
                    <div className="mt-3 flex justify-between text-xs text-gray-500">
                      <span>Prazo: 20 Jan</span>
                      <span className="text-green-500 font-semibold">R$ 5.000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom Navigation */}
            <div className="bg-white border-t px-6 py-3 flex justify-around">
              <button className="flex flex-col items-center text-orange-500">
                <i className="fas fa-home text-xl"></i>
                <span className="text-xs mt-1">Home</span>
              </button>
              <button className="flex flex-col items-center text-gray-400">
                <i className="fas fa-bullhorn text-xl"></i>
                <span className="text-xs mt-1">Campanhas</span>
              </button>
              <button className="flex flex-col items-center text-gray-400">
                <i className="fas fa-comments text-xl"></i>
                <span className="text-xs mt-1">Chat</span>
              </button>
              <button className="flex flex-col items-center text-gray-400">
                <i className="fas fa-wallet text-xl"></i>
                <span className="text-xs mt-1">Carteira</span>
              </button>
              <button className="flex flex-col items-center text-gray-400">
                <i className="fas fa-user text-xl"></i>
                <span className="text-xs mt-1">Perfil</span>
              </button>
            </div>
          </div>
        </PhoneFrame>

        {/* Screen 3: Campaign Detail */}
        <PhoneFrame title="3. Detalhes da Campanha">
          <div className="h-full bg-gray-50 flex flex-col">
            {/* Header */}
            <div className="amplify-gradient px-4 py-4 pt-10 text-white">
              <div className="flex items-center mb-4">
                <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <i className="fas fa-arrow-left"></i>
                </button>
                <h2 className="text-lg font-bold">Detalhes da Campanha</h2>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                  <i className="fas fa-sun text-pink-500 text-2xl"></i>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-lg">Lançamento Verão 2025</h3>
                  <p className="text-white/80">Fashion Brand X</p>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 overflow-auto p-4">
              {/* Status */}
              <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-semibold">Status</h4>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm">Aguardando Aprovação</span>
                </div>
                <div className="flex justify-between text-sm">
                  <div>
                    <p className="text-gray-500">Valor</p>
                    <p className="font-bold text-green-500">R$ 3.500</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Prazo</p>
                    <p className="font-bold">15 Jan 2025</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Tipo</p>
                    <p className="font-bold">Reels</p>
                  </div>
                </div>
              </div>
              
              {/* Briefing */}
              <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                <h4 className="font-semibold mb-3">Briefing</h4>
                <p className="text-gray-600 text-sm">Criar um Reels mostrando looks de verão da nova coleção. Destacar a versatilidade das peças e incluir call-to-action para o site.</p>
                <div className="mt-3 flex gap-2">
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">#Verão2025</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">#FashionBrandX</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">#ad</span>
                </div>
              </div>
              
              {/* Deliverables */}
              <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                <h4 className="font-semibold mb-3">Entregáveis</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                        <i className="fas fa-check text-green-500"></i>
                      </div>
                      <span className="text-sm">1 Reels (30-60s)</span>
                    </div>
                    <span className="text-green-500 text-xs">Enviado</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                        <i className="fas fa-clock text-yellow-500"></i>
                      </div>
                      <span className="text-sm">3 Stories</span>
                    </div>
                    <span className="text-yellow-500 text-xs">Pendente</span>
                  </div>
                </div>
              </div>
              
              {/* Actions */}
              <div className="space-y-3">
                <button className="w-full py-3 amplify-gradient text-white rounded-xl font-semibold">
                  <i className="fas fa-upload mr-2"></i> Enviar Conteúdo
                </button>
                <button className="w-full py-3 border border-orange-500 text-orange-500 rounded-xl font-semibold">
                  <i className="fas fa-comments mr-2"></i> Chat com Marca
                </button>
              </div>
            </div>
            
            {/* Bottom Navigation */}
            <div className="bg-white border-t px-6 py-3 flex justify-around">
              <button className="flex flex-col items-center text-gray-400">
                <i className="fas fa-home text-xl"></i>
                <span className="text-xs mt-1">Home</span>
              </button>
              <button className="flex flex-col items-center text-orange-500">
                <i className="fas fa-bullhorn text-xl"></i>
                <span className="text-xs mt-1">Campanhas</span>
              </button>
              <button className="flex flex-col items-center text-gray-400">
                <i className="fas fa-comments text-xl"></i>
                <span className="text-xs mt-1">Chat</span>
              </button>
              <button className="flex flex-col items-center text-gray-400">
                <i className="fas fa-wallet text-xl"></i>
                <span className="text-xs mt-1">Carteira</span>
              </button>
              <button className="flex flex-col items-center text-gray-400">
                <i className="fas fa-user text-xl"></i>
                <span className="text-xs mt-1">Perfil</span>
              </button>
            </div>
          </div>
        </PhoneFrame>

        {/* Screen 4: Wallet */}
        <PhoneFrame title="4. Carteira">
          <div className="h-full bg-gray-50 flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-4 pt-10 text-white">
              <h2 className="text-lg font-bold mb-4">Minha Carteira</h2>
              <div className="bg-white/20 rounded-2xl p-4">
                <p className="text-white/80 text-sm">Saldo Disponível</p>
                <p className="text-3xl font-bold">R$ 8.750,00</p>
                <div className="flex gap-3 mt-4">
                  <button className="flex-1 py-2 bg-white text-green-600 rounded-xl font-semibold text-sm">
                    <i className="fas fa-arrow-down mr-1"></i> Sacar
                  </button>
                  <button className="flex-1 py-2 bg-white/20 text-white rounded-xl font-semibold text-sm">
                    <i className="fas fa-history mr-1"></i> Histórico
                  </button>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 overflow-auto p-4">
              {/* Pending */}
              <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-500 text-sm">Pendente de Liberação</p>
                    <p className="text-xl font-bold text-yellow-500">R$ 3.750,00</p>
                  </div>
                  <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
                    <i className="fas fa-clock text-yellow-500"></i>
                  </div>
                </div>
              </div>
              
              {/* Recent Transactions */}
              <h4 className="font-semibold mb-3">Transações Recentes</h4>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      <i className="fas fa-arrow-down text-green-500"></i>
                    </div>
                    <div className="ml-3 flex-1">
                      <h5 className="font-semibold text-sm">Campanha Fitness</h5>
                      <p className="text-gray-500 text-xs">GymLife • 10 Jan</p>
                    </div>
                    <span className="text-green-500 font-bold">+R$ 5.000</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                      <i className="fas fa-arrow-up text-red-500"></i>
                    </div>
                    <div className="ml-3 flex-1">
                      <h5 className="font-semibold text-sm">Saque PIX</h5>
                      <p className="text-gray-500 text-xs">08 Jan</p>
                    </div>
                    <span className="text-red-500 font-bold">-R$ 3.000</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      <i className="fas fa-arrow-down text-green-500"></i>
                    </div>
                    <div className="ml-3 flex-1">
                      <h5 className="font-semibold text-sm">Campanha Tech</h5>
                      <p className="text-gray-500 text-xs">TechStore • 05 Jan</p>
                    </div>
                    <span className="text-green-500 font-bold">+R$ 3.500</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom Navigation */}
            <div className="bg-white border-t px-6 py-3 flex justify-around">
              <button className="flex flex-col items-center text-gray-400">
                <i className="fas fa-home text-xl"></i>
                <span className="text-xs mt-1">Home</span>
              </button>
              <button className="flex flex-col items-center text-gray-400">
                <i className="fas fa-bullhorn text-xl"></i>
                <span className="text-xs mt-1">Campanhas</span>
              </button>
              <button className="flex flex-col items-center text-gray-400">
                <i className="fas fa-comments text-xl"></i>
                <span className="text-xs mt-1">Chat</span>
              </button>
              <button className="flex flex-col items-center text-orange-500">
                <i className="fas fa-wallet text-xl"></i>
                <span className="text-xs mt-1">Carteira</span>
              </button>
              <button className="flex flex-col items-center text-gray-400">
                <i className="fas fa-user text-xl"></i>
                <span className="text-xs mt-1">Perfil</span>
              </button>
            </div>
          </div>
        </PhoneFrame>

        {/* Screen 5: Profile */}
        <PhoneFrame title="5. Perfil">
          <div className="h-full bg-gray-50 flex flex-col">
            {/* Header */}
            <div className="bg-white px-4 py-4 pt-10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold">Meu Perfil</h2>
                <button className="text-orange-500">
                  <i className="fas fa-edit"></i>
                </button>
              </div>
              <div className="flex items-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  MA
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-lg">Maria Alves</h3>
                  <p className="text-gray-500">@mariaalves</p>
                  <div className="flex gap-2 mt-2">
                    <i className="fab fa-instagram text-pink-500"></i>
                    <i className="fab fa-tiktok"></i>
                    <i className="fab fa-youtube text-red-500"></i>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 px-4 py-4 bg-white border-t">
              <div className="text-center">
                <p className="font-bold text-lg">245K</p>
                <p className="text-gray-500 text-xs">Seguidores</p>
              </div>
              <div className="text-center border-x">
                <p className="font-bold text-lg">12</p>
                <p className="text-gray-500 text-xs">Campanhas</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-lg">4.8</p>
                <p className="text-gray-500 text-xs">Rating</p>
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 overflow-auto p-4">
              {/* Menu Items */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <a href="#" className="flex items-center justify-between p-4 border-b hover:bg-gray-50">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center mr-3">
                      <i className="fas fa-file-alt text-orange-500"></i>
                    </div>
                    <span>Media Kit</span>
                  </div>
                  <i className="fas fa-chevron-right text-gray-400"></i>
                </a>
                <a href="#" className="flex items-center justify-between p-4 border-b hover:bg-gray-50">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mr-3">
                      <i className="fas fa-chart-line text-green-600"></i>
                    </div>
                    <span>Analytics</span>
                  </div>
                  <i className="fas fa-chevron-right text-gray-400"></i>
                </a>
                <a href="#" className="flex items-center justify-between p-4 border-b hover:bg-gray-50">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center mr-3">
                      <i className="fas fa-link text-pink-500"></i>
                    </div>
                    <span>Redes Sociais</span>
                  </div>
                  <i className="fas fa-chevron-right text-gray-400"></i>
                </a>
                <a href="#" className="flex items-center justify-between p-4 border-b hover:bg-gray-50">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center mr-3">
                      <i className="fas fa-tags text-yellow-600"></i>
                    </div>
                    <span>Preços</span>
                  </div>
                  <i className="fas fa-chevron-right text-gray-400"></i>
                </a>
                <a href="#" className="flex items-center justify-between p-4 hover:bg-gray-50">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center mr-3">
                      <i className="fas fa-cog text-gray-600"></i>
                    </div>
                    <span>Configurações</span>
                  </div>
                  <i className="fas fa-chevron-right text-gray-400"></i>
                </a>
              </div>
              
              <button className="w-full mt-4 py-3 border border-red-500 text-red-500 rounded-xl font-semibold hover:bg-red-50">
                <i className="fas fa-sign-out-alt mr-2"></i> Sair
              </button>
            </div>
            
            {/* Bottom Navigation */}
            <div className="bg-white border-t px-6 py-3 flex justify-around">
              <button className="flex flex-col items-center text-gray-400">
                <i className="fas fa-home text-xl"></i>
                <span className="text-xs mt-1">Home</span>
              </button>
              <button className="flex flex-col items-center text-gray-400">
                <i className="fas fa-bullhorn text-xl"></i>
                <span className="text-xs mt-1">Campanhas</span>
              </button>
              <button className="flex flex-col items-center text-gray-400">
                <i className="fas fa-comments text-xl"></i>
                <span className="text-xs mt-1">Chat</span>
              </button>
              <button className="flex flex-col items-center text-gray-400">
                <i className="fas fa-wallet text-xl"></i>
                <span className="text-xs mt-1">Carteira</span>
              </button>
              <button className="flex flex-col items-center text-orange-500">
                <i className="fas fa-user text-xl"></i>
                <span className="text-xs mt-1">Perfil</span>
              </button>
            </div>
          </div>
        </PhoneFrame>

        {/* Screen 6: Chat */}
        <PhoneFrame title="6. Chat">
          <div className="h-full bg-gray-50 flex flex-col">
            {/* Header */}
            <div className="bg-white px-4 py-4 pt-10 shadow-sm">
              <div className="flex items-center">
                <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                  <i className="fas fa-arrow-left text-gray-600"></i>
                </button>
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-bold">FB</span>
                </div>
                <div className="ml-3">
                  <h3 className="font-semibold">Fashion Brand X</h3>
                  <p className="text-green-500 text-xs">Online</p>
                </div>
              </div>
            </div>
            
            {/* Messages */}
            <div className="flex-1 overflow-auto p-4 space-y-4">
              {/* Received */}
              <div className="flex">
                <div className="max-w-[80%] bg-white p-3 rounded-2xl rounded-tl-none shadow-sm">
                  <p className="text-sm">Olá Maria! Tudo bem? Gostaríamos de saber se você pode participar da nossa campanha de verão.</p>
                  <p className="text-xs text-gray-400 mt-1">10:30</p>
                </div>
              </div>
              
              {/* Sent */}
              <div className="flex justify-end">
                <div className="max-w-[80%] amplify-gradient text-white p-3 rounded-2xl rounded-tr-none">
                  <p className="text-sm">Oi! Tudo ótimo! Claro, adoraria participar! Qual seria o briefing?</p>
                  <p className="text-xs text-orange-200 mt-1">10:32</p>
                </div>
              </div>
              
              {/* Received */}
              <div className="flex">
                <div className="max-w-[80%] bg-white p-3 rounded-2xl rounded-tl-none shadow-sm">
                  <p className="text-sm">Perfeito! Vou enviar o briefing completo. Basicamente queremos 1 Reels e 3 Stories mostrando looks da nova coleção.</p>
                  <p className="text-xs text-gray-400 mt-1">10:35</p>
                </div>
              </div>
              
              {/* Received - File */}
              <div className="flex">
                <div className="max-w-[80%] bg-white p-3 rounded-2xl rounded-tl-none shadow-sm">
                  <div className="flex items-center p-2 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                      <i className="fas fa-file-pdf text-red-500"></i>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Briefing_Verao2025.pdf</p>
                      <p className="text-xs text-gray-400">2.4 MB</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">10:36</p>
                </div>
              </div>
              
              {/* Sent */}
              <div className="flex justify-end">
                <div className="max-w-[80%] amplify-gradient text-white p-3 rounded-2xl rounded-tr-none">
                  <p className="text-sm">Recebi! Vou analisar e já te retorno com a proposta.</p>
                  <p className="text-xs text-orange-200 mt-1">10:40</p>
                </div>
              </div>
            </div>
            
            {/* Input */}
            <div className="bg-white border-t p-4">
              <div className="flex items-center gap-3">
                <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-paperclip text-gray-500"></i>
                </button>
                <input type="text" placeholder="Digite sua mensagem..." className="flex-1 px-4 py-2 bg-gray-100 rounded-full" />
                <button className="w-10 h-10 amplify-gradient rounded-full flex items-center justify-center">
                  <i className="fas fa-paper-plane text-white"></i>
                </button>
              </div>
            </div>
          </div>
        </PhoneFrame>
      </motion.div>
    </div>
  );
}
