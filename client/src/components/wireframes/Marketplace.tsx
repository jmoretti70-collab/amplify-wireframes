/**
 * Wireframe do Módulo Marketplace
 * Design: Amplify v6.0 - Marketplace de Oportunidades
 * Autor: João Moretti
 */

import { Search, Filter, MapPin, Calendar, DollarSign, Users, Star, Clock, Briefcase, TrendingUp, CheckCircle, Send, Heart, Share2, Eye, MessageSquare } from 'lucide-react';

export default function Marketplace() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center py-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl text-white">
        <h2 className="text-3xl font-bold mb-2">Marketplace de Oportunidades</h2>
        <p className="text-purple-100">Conectando marcas e influenciadores em um só lugar</p>
      </div>

      {/* 1. Dashboard do Marketplace (Visão Agência) */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-purple-600">1. Dashboard do Marketplace (Visão da Agência)</h3>
        
        <div className="bg-white rounded-xl shadow-lg p-6 border">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h4 className="text-xl font-bold text-gray-800">Marketplace</h4>
              <p className="text-gray-500">Publique oportunidades e receba candidaturas</p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2 hover:bg-gray-50">
                <Filter className="w-4 h-4" />
                Filtros
              </button>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg flex items-center gap-2 hover:bg-purple-700">
                <Briefcase className="w-4 h-4" />
                Nova Oportunidade
              </button>
            </div>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-5 gap-4 mb-6">
            <div className="bg-purple-50 rounded-xl p-4 text-center">
              <Briefcase className="w-6 h-6 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-purple-600">24</p>
              <p className="text-xs text-gray-600">Oportunidades Ativas</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-blue-600">847</p>
              <p className="text-xs text-gray-600">Candidaturas Recebidas</p>
            </div>
            <div className="bg-green-50 rounded-xl p-4 text-center">
              <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-green-600">156</p>
              <p className="text-xs text-gray-600">Matches Realizados</p>
            </div>
            <div className="bg-orange-50 rounded-xl p-4 text-center">
              <TrendingUp className="w-6 h-6 text-orange-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-orange-600">18%</p>
              <p className="text-xs text-gray-600">Taxa de Conversão</p>
            </div>
            <div className="bg-pink-50 rounded-xl p-4 text-center">
              <Star className="w-6 h-6 text-pink-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-pink-600">4.8</p>
              <p className="text-xs text-gray-600">Rating Médio</p>
            </div>
          </div>

          {/* Lista de Oportunidades */}
          <div className="space-y-4">
            <div className="flex gap-2 mb-4">
              <button className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg font-medium">Todas (24)</button>
              <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Abertas (18)</button>
              <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Em Análise (4)</button>
              <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Fechadas (2)</button>
            </div>

            {/* Oportunidade 1 */}
            <div className="border rounded-xl p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                    FB
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h5 className="font-bold text-gray-800">Campanha Verão 2026 - Fashion Brand</h5>
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Aberta</span>
                      <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded-full">Premium</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">Buscamos influenciadores de moda e lifestyle para campanha de verão. Conteúdo: 3 Reels + 5 Stories.</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" /> R$ 3.000 - R$ 8.000</span>
                      <span className="flex items-center gap-1"><Users className="w-4 h-4" /> 50K - 500K seguidores</span>
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Brasil</span>
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Até 25 Jan</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-purple-600">47</p>
                  <p className="text-xs text-gray-500">candidaturas</p>
                  <button className="mt-2 px-3 py-1 text-purple-600 border border-purple-600 rounded-lg text-sm hover:bg-purple-50">
                    Ver Candidatos
                  </button>
                </div>
              </div>
            </div>

            {/* Oportunidade 2 */}
            <div className="border rounded-xl p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                    TS
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h5 className="font-bold text-gray-800">Review de Produto - TechStore</h5>
                      <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded-full">Em Análise</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">Precisamos de tech reviewers para novo smartphone. Vídeo de 10-15 min no YouTube.</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" /> R$ 5.000 - R$ 15.000</span>
                      <span className="flex items-center gap-1"><Users className="w-4 h-4" /> 100K+ seguidores</span>
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> SP, RJ, MG</span>
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Até 30 Jan</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-purple-600">23</p>
                  <p className="text-xs text-gray-500">candidaturas</p>
                  <button className="mt-2 px-3 py-1 text-purple-600 border border-purple-600 rounded-lg text-sm hover:bg-purple-50">
                    Ver Candidatos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Criar Nova Oportunidade */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-purple-600">2. Criar Nova Oportunidade</h3>
        
        <div className="bg-white rounded-xl shadow-lg p-6 border">
          <h4 className="text-lg font-bold text-gray-800 mb-4">Nova Oportunidade</h4>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Título da Oportunidade *</label>
                <input type="text" placeholder="Ex: Campanha de Verão 2026" className="w-full px-4 py-2 border rounded-lg" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Marca/Cliente *</label>
                <select className="w-full px-4 py-2 border rounded-lg">
                  <option>Selecione o cliente</option>
                  <option>Fashion Brand X</option>
                  <option>TechStore</option>
                  <option>GymLife</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Descrição *</label>
                <textarea rows={4} placeholder="Descreva a oportunidade em detalhes..." className="w-full px-4 py-2 border rounded-lg"></textarea>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Orçamento Mínimo</label>
                  <input type="text" placeholder="R$ 0,00" className="w-full px-4 py-2 border rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Orçamento Máximo</label>
                  <input type="text" placeholder="R$ 0,00" className="w-full px-4 py-2 border rounded-lg" />
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Redes Sociais</label>
                <div className="flex flex-wrap gap-2">
                  <button className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">Instagram</button>
                  <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">TikTok</button>
                  <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">YouTube</button>
                  <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Twitter</button>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nichos Desejados</label>
                <div className="flex flex-wrap gap-2">
                  <button className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Moda</button>
                  <button className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Lifestyle</button>
                  <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">+ Adicionar</button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Seguidores Mínimo</label>
                  <select className="w-full px-4 py-2 border rounded-lg">
                    <option>10K</option>
                    <option>50K</option>
                    <option>100K</option>
                    <option>500K</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Seguidores Máximo</label>
                  <select className="w-full px-4 py-2 border rounded-lg">
                    <option>Sem limite</option>
                    <option>100K</option>
                    <option>500K</option>
                    <option>1M</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Prazo para Candidaturas</label>
                <input type="date" className="w-full px-4 py-2 border rounded-lg" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Localização</label>
                <select className="w-full px-4 py-2 border rounded-lg">
                  <option>Brasil (Todo)</option>
                  <option>São Paulo</option>
                  <option>Rio de Janeiro</option>
                  <option>Minas Gerais</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end gap-3 mt-6 pt-4 border-t">
            <button className="px-4 py-2 border border-gray-300 rounded-lg">Cancelar</button>
            <button className="px-4 py-2 border border-purple-600 text-purple-600 rounded-lg">Salvar Rascunho</button>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg">Publicar Oportunidade</button>
          </div>
        </div>
      </div>

      {/* 3. Visualizar Candidatos */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-purple-600">3. Gerenciar Candidaturas</h3>
        
        <div className="bg-white rounded-xl shadow-lg p-6 border">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h4 className="text-lg font-bold text-gray-800">Candidatos - Campanha Verão 2026</h4>
              <p className="text-gray-500">47 candidaturas recebidas</p>
            </div>
            <div className="flex gap-2">
              <select className="px-3 py-2 border rounded-lg text-sm">
                <option>Ordenar por: Match Score</option>
                <option>Seguidores</option>
                <option>Engajamento</option>
                <option>Preço</option>
              </select>
            </div>
          </div>

          {/* Candidato 1 */}
          <div className="border rounded-xl p-4 mb-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div className="flex gap-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    MA
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h5 className="font-bold text-gray-800">Maria Alves</h5>
                    <span className="text-gray-500">@mariaalves</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">98% Real</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                    <span>245K seguidores</span>
                    <span>4.2% engajamento</span>
                    <span>Moda, Lifestyle</span>
                  </div>
                  <p className="text-gray-600 text-sm">"Adoraria participar dessa campanha! Tenho experiência com marcas de moda e meu público é 80% feminino, 18-35 anos."</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-gray-500">Match Score</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 font-bold rounded-full">94%</span>
                </div>
                <p className="text-lg font-bold text-gray-800">R$ 3.500</p>
                <p className="text-xs text-gray-500">Proposta</p>
                <div className="flex gap-2 mt-2">
                  <button className="px-3 py-1 text-red-600 border border-red-600 rounded-lg text-sm hover:bg-red-50">Recusar</button>
                  <button className="px-3 py-1 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700">Aceitar</button>
                </div>
              </div>
            </div>
          </div>

          {/* Candidato 2 */}
          <div className="border rounded-xl p-4 mb-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div className="flex gap-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    CS
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h5 className="font-bold text-gray-800">Carla Santos</h5>
                    <span className="text-gray-500">@carlastyle</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">95% Real</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                    <span>180K seguidores</span>
                    <span>5.1% engajamento</span>
                    <span>Moda, Beleza</span>
                  </div>
                  <p className="text-gray-600 text-sm">"Trabalho com moda há 3 anos e tenho parceria com várias marcas do segmento. Posso entregar conteúdo de alta qualidade."</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-gray-500">Match Score</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 font-bold rounded-full">89%</span>
                </div>
                <p className="text-lg font-bold text-gray-800">R$ 2.800</p>
                <p className="text-xs text-gray-500">Proposta</p>
                <div className="flex gap-2 mt-2">
                  <button className="px-3 py-1 text-red-600 border border-red-600 rounded-lg text-sm hover:bg-red-50">Recusar</button>
                  <button className="px-3 py-1 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700">Aceitar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Marketplace Mobile (Visão Influenciador) */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-purple-600">4. Marketplace Mobile (Visão do Influenciador)</h3>
        
        <div className="flex gap-6 justify-center">
          {/* Tela 1: Feed de Oportunidades */}
          <div className="w-[280px] bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
            <div className="bg-white rounded-[2rem] overflow-hidden h-[580px]">
              {/* Status Bar */}
              <div className="bg-purple-600 px-4 py-2 flex justify-between items-center text-white text-xs">
                <span>9:41</span>
                <span className="font-medium">Marketplace</span>
                <span>100%</span>
              </div>
              
              {/* Search */}
              <div className="p-4 bg-purple-600">
                <div className="bg-white/20 rounded-full px-4 py-2 flex items-center gap-2">
                  <Search className="w-4 h-4 text-white/70" />
                  <span className="text-white/70 text-sm">Buscar oportunidades...</span>
                </div>
              </div>
              
              {/* Filters */}
              <div className="px-4 py-2 flex gap-2 overflow-x-auto">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs whitespace-nowrap">Todos</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs whitespace-nowrap">Moda</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs whitespace-nowrap">Tech</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs whitespace-nowrap">Fitness</span>
              </div>
              
              {/* Opportunities */}
              <div className="p-4 space-y-3 overflow-y-auto h-[380px]">
                <div className="border rounded-xl p-3">
                  <div className="flex gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold">FB</div>
                    <div className="flex-1">
                      <h5 className="font-bold text-sm">Campanha Verão 2026</h5>
                      <p className="text-xs text-gray-500">Fashion Brand X</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-green-600 font-medium">R$ 3K - 8K</span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-500">Moda</span>
                      </div>
                    </div>
                    <Heart className="w-5 h-5 text-gray-300" />
                  </div>
                  <div className="flex justify-between items-center mt-3 pt-2 border-t">
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> 5 dias restantes
                    </span>
                    <button className="px-3 py-1 bg-purple-600 text-white rounded-full text-xs">Candidatar</button>
                  </div>
                </div>
                
                <div className="border rounded-xl p-3">
                  <div className="flex gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold">TS</div>
                    <div className="flex-1">
                      <h5 className="font-bold text-sm">Review Smartphone</h5>
                      <p className="text-xs text-gray-500">TechStore</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-green-600 font-medium">R$ 5K - 15K</span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-500">Tech</span>
                      </div>
                    </div>
                    <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                  </div>
                  <div className="flex justify-between items-center mt-3 pt-2 border-t">
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> 10 dias restantes
                    </span>
                    <button className="px-3 py-1 bg-purple-600 text-white rounded-full text-xs">Candidatar</button>
                  </div>
                </div>
                
                <div className="border rounded-xl p-3 bg-purple-50 border-purple-200">
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 text-purple-600" />
                    <span className="text-xs text-purple-600 font-medium">Recomendado para você</span>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center text-white font-bold">GL</div>
                    <div className="flex-1">
                      <h5 className="font-bold text-sm">Desafio Fitness</h5>
                      <p className="text-xs text-gray-500">GymLife</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-green-600 font-medium">R$ 2K - 5K</span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-500">Fitness</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-3 pt-2 border-t border-purple-200">
                    <span className="text-xs text-purple-600 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> 92% Match
                    </span>
                    <button className="px-3 py-1 bg-purple-600 text-white rounded-full text-xs">Candidatar</button>
                  </div>
                </div>
              </div>
              
              {/* Bottom Nav */}
              <div className="absolute bottom-3 left-3 right-3 bg-white border-t py-2 px-4 flex justify-around rounded-b-[2rem]">
                <button className="flex flex-col items-center text-gray-400">
                  <Briefcase className="w-5 h-5" />
                  <span className="text-[10px]">Jobs</span>
                </button>
                <button className="flex flex-col items-center text-purple-600">
                  <Search className="w-5 h-5" />
                  <span className="text-[10px]">Buscar</span>
                </button>
                <button className="flex flex-col items-center text-gray-400">
                  <Heart className="w-5 h-5" />
                  <span className="text-[10px]">Salvos</span>
                </button>
                <button className="flex flex-col items-center text-gray-400">
                  <Send className="w-5 h-5" />
                  <span className="text-[10px]">Enviados</span>
                </button>
              </div>
            </div>
          </div>

          {/* Tela 2: Detalhes da Oportunidade */}
          <div className="w-[280px] bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
            <div className="bg-white rounded-[2rem] overflow-hidden h-[580px]">
              {/* Header */}
              <div className="bg-gradient-to-br from-pink-400 to-purple-500 px-4 py-6 text-white">
                <div className="flex justify-between items-start mb-4">
                  <button className="p-1">←</button>
                  <div className="flex gap-2">
                    <button className="p-1"><Share2 className="w-5 h-5" /></button>
                    <button className="p-1"><Heart className="w-5 h-5" /></button>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-xl mx-auto mb-3 flex items-center justify-center text-purple-600 font-bold text-xl">FB</div>
                  <h4 className="font-bold text-lg">Campanha Verão 2026</h4>
                  <p className="text-white/80 text-sm">Fashion Brand X</p>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-4 space-y-4 overflow-y-auto h-[320px]">
                <div className="flex justify-around text-center">
                  <div>
                    <p className="text-lg font-bold text-green-600">R$ 3K - 8K</p>
                    <p className="text-xs text-gray-500">Pagamento</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-purple-600">50K+</p>
                    <p className="text-xs text-gray-500">Seguidores</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-orange-600">5 dias</p>
                    <p className="text-xs text-gray-500">Restantes</p>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-bold text-sm mb-2">Descrição</h5>
                  <p className="text-sm text-gray-600">Buscamos influenciadores de moda e lifestyle para nossa campanha de verão 2026. O conteúdo inclui 3 Reels criativos e 5 Stories mostrando os produtos.</p>
                </div>
                
                <div>
                  <h5 className="font-bold text-sm mb-2">Requisitos</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Mínimo 50K seguidores</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Engajamento acima de 3%</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Nicho: Moda ou Lifestyle</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Localização: Brasil</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-bold text-sm mb-2">Entregáveis</h5>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-pink-100 text-pink-700 rounded-full text-xs">3 Reels</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">5 Stories</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">1 Post Feed</span>
                  </div>
                </div>
              </div>
              
              {/* CTA */}
              <div className="p-4 border-t">
                <button className="w-full py-3 bg-purple-600 text-white rounded-xl font-medium">
                  Enviar Candidatura
                </button>
              </div>
            </div>
          </div>

          {/* Tela 3: Enviar Candidatura */}
          <div className="w-[280px] bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
            <div className="bg-white rounded-[2rem] overflow-hidden h-[580px]">
              {/* Header */}
              <div className="bg-purple-600 px-4 py-4 text-white">
                <div className="flex items-center gap-3">
                  <button className="p-1">←</button>
                  <h4 className="font-bold">Enviar Candidatura</h4>
                </div>
              </div>
              
              {/* Form */}
              <div className="p-4 space-y-4 overflow-y-auto h-[460px]">
                <div className="bg-purple-50 rounded-xl p-3 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold">FB</div>
                  <div>
                    <h5 className="font-bold text-sm">Campanha Verão 2026</h5>
                    <p className="text-xs text-gray-500">Fashion Brand X</p>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Sua Proposta de Valor</label>
                  <input type="text" placeholder="R$ 0,00" className="w-full px-4 py-2 border rounded-lg" />
                  <p className="text-xs text-gray-500 mt-1">Faixa sugerida: R$ 3.000 - R$ 8.000</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Por que você é ideal?</label>
                  <textarea rows={4} placeholder="Conte por que você seria perfeito para esta campanha..." className="w-full px-4 py-2 border rounded-lg text-sm"></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Portfolio (opcional)</label>
                  <div className="border-2 border-dashed rounded-xl p-4 text-center">
                    <p className="text-sm text-gray-500">Arraste ou clique para adicionar trabalhos anteriores</p>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Disponibilidade</label>
                  <select className="w-full px-4 py-2 border rounded-lg text-sm">
                    <option>Disponível imediatamente</option>
                    <option>Em 1 semana</option>
                    <option>Em 2 semanas</option>
                  </select>
                </div>
                
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <p className="text-xs text-gray-600">Li e aceito os termos da oportunidade e as políticas da plataforma Amplify.</p>
                </div>
              </div>
              
              {/* CTA */}
              <div className="p-4 border-t">
                <button className="w-full py-3 bg-purple-600 text-white rounded-xl font-medium flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Enviar Candidatura
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
