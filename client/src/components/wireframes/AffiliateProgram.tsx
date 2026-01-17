/**
 * Programa de Afiliados - Wireframes
 * Design: Amplify Platform - Gestão de links, cupons e comissões
 * Autor: João Moretti
 */

import { Link2, Tag, DollarSign, TrendingUp, Users, Copy, ExternalLink, BarChart3, Gift, Percent, ShoppingCart, Eye, MousePointer, CreditCard, Calendar, Download, Plus, Settings } from 'lucide-react';

export default function AffiliateProgram() {
  return (
    <div className="space-y-12 pb-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Programa de Afiliados</h2>
        <p className="text-gray-600">Gestão de links, cupons e comissões por performance</p>
      </div>

      {/* 1. Dashboard de Afiliados - Visão Agência */}
      <section>
        <h3 className="text-lg font-semibold text-orange-600 mb-4">1. Dashboard de Afiliados (Visão da Agência)</h3>
        <div className="bg-white rounded-xl shadow-lg p-6 border">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h4 className="text-xl font-bold text-gray-800">Programa de Afiliados</h4>
              <p className="text-gray-500 text-sm">Gerencie links, cupons e comissões dos influenciadores</p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 border rounded-lg text-gray-600 flex items-center gap-2">
                <Download size={16} />
                Exportar
              </button>
              <button className="px-4 py-2 bg-orange-500 text-white rounded-lg flex items-center gap-2">
                <Plus size={16} />
                Novo Programa
              </button>
            </div>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-5 gap-4 mb-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4">
              <div className="flex items-center gap-2 text-green-600 mb-2">
                <DollarSign size={20} />
                <span className="text-sm font-medium">Vendas Totais</span>
              </div>
              <p className="text-2xl font-bold text-green-700">R$ 847.500</p>
              <p className="text-xs text-green-600 mt-1">↑ 34% vs mês anterior</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4">
              <div className="flex items-center gap-2 text-blue-600 mb-2">
                <Percent size={20} />
                <span className="text-sm font-medium">Comissões Pagas</span>
              </div>
              <p className="text-2xl font-bold text-blue-700">R$ 84.750</p>
              <p className="text-xs text-blue-600 mt-1">10% média de comissão</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4">
              <div className="flex items-center gap-2 text-purple-600 mb-2">
                <MousePointer size={20} />
                <span className="text-sm font-medium">Cliques</span>
              </div>
              <p className="text-2xl font-bold text-purple-700">125.847</p>
              <p className="text-xs text-purple-600 mt-1">3.2% taxa de conversão</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4">
              <div className="flex items-center gap-2 text-orange-600 mb-2">
                <ShoppingCart size={20} />
                <span className="text-sm font-medium">Conversões</span>
              </div>
              <p className="text-2xl font-bold text-orange-700">4.027</p>
              <p className="text-xs text-orange-600 mt-1">↑ 28% vs mês anterior</p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-4">
              <div className="flex items-center gap-2 text-pink-600 mb-2">
                <Users size={20} />
                <span className="text-sm font-medium">Afiliados Ativos</span>
              </div>
              <p className="text-2xl font-bold text-pink-700">156</p>
              <p className="text-xs text-pink-600 mt-1">12 novos este mês</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-4 border-b">
            <button className="px-4 py-2 border-b-2 border-orange-500 text-orange-600 font-medium">Visão Geral</button>
            <button className="px-4 py-2 text-gray-500">Por Influenciador</button>
            <button className="px-4 py-2 text-gray-500">Por Campanha</button>
            <button className="px-4 py-2 text-gray-500">Cupons</button>
            <button className="px-4 py-2 text-gray-500">Pagamentos</button>
          </div>

          {/* Top Afiliados */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-gray-700 mb-3">Top 5 Afiliados do Mês</h5>
              <div className="space-y-3">
                {[
                  { name: 'Maria Alves', handle: '@mariaalves', sales: 'R$ 125.400', commission: 'R$ 12.540', conversions: 847 },
                  { name: 'Pedro Santos', handle: '@pedrotech', sales: 'R$ 98.200', commission: 'R$ 9.820', conversions: 623 },
                  { name: 'Julia Oliveira', handle: '@juliafitness', sales: 'R$ 87.500', commission: 'R$ 8.750', conversions: 542 },
                  { name: 'Lucas Tech', handle: '@lucastech', sales: 'R$ 72.300', commission: 'R$ 7.230', conversions: 421 },
                  { name: 'Ana Beauty', handle: '@anabeauty', sales: 'R$ 65.800', commission: 'R$ 6.580', conversions: 398 },
                ].map((affiliate, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{affiliate.name}</p>
                      <p className="text-xs text-gray-500">{affiliate.handle}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-green-600 text-sm">{affiliate.sales}</p>
                      <p className="text-xs text-gray-500">{affiliate.conversions} vendas</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gráfico de Performance */}
            <div>
              <h5 className="font-semibold text-gray-700 mb-3">Performance Mensal</h5>
              <div className="bg-gray-50 rounded-lg p-4 h-[280px] flex items-end gap-2">
                {['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'].map((month, i) => (
                  <div key={month} className="flex-1 flex flex-col items-center gap-1">
                    <div 
                      className="w-full bg-gradient-to-t from-orange-500 to-pink-500 rounded-t"
                      style={{ height: `${[45, 52, 68, 75, 82, 95][i]}%` }}
                    />
                    <span className="text-xs text-gray-500">{month}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Gestão de Links e Cupons */}
      <section>
        <h3 className="text-lg font-semibold text-orange-600 mb-4">2. Gestão de Links e Cupons</h3>
        <div className="grid grid-cols-2 gap-6">
          {/* Links de Afiliados */}
          <div className="bg-white rounded-xl shadow-lg p-6 border">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-gray-800 flex items-center gap-2">
                <Link2 size={20} className="text-orange-500" />
                Links de Afiliados
              </h4>
              <button className="text-sm text-orange-500 flex items-center gap-1">
                <Plus size={14} />
                Gerar Link
              </button>
            </div>
            <div className="space-y-3">
              {[
                { influencer: 'Maria Alves', campaign: 'Verão 2025', clicks: '12.4K', conversions: 847, status: 'Ativo' },
                { influencer: 'Pedro Santos', campaign: 'Black Friday', clicks: '8.7K', conversions: 623, status: 'Ativo' },
                { influencer: 'Julia Oliveira', campaign: 'Fitness Challenge', clicks: '6.2K', conversions: 542, status: 'Ativo' },
              ].map((link, i) => (
                <div key={i} className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-medium text-sm">{link.influencer}</p>
                      <p className="text-xs text-gray-500">{link.campaign}</p>
                    </div>
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">{link.status}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-100 rounded p-2 text-xs">
                    <code className="flex-1 truncate text-gray-600">https://amplify.link/ma-verao25</code>
                    <button className="text-orange-500"><Copy size={14} /></button>
                    <button className="text-gray-400"><ExternalLink size={14} /></button>
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                    <span className="flex items-center gap-1"><Eye size={12} /> {link.clicks} cliques</span>
                    <span className="flex items-center gap-1"><ShoppingCart size={12} /> {link.conversions} vendas</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cupons de Desconto */}
          <div className="bg-white rounded-xl shadow-lg p-6 border">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-gray-800 flex items-center gap-2">
                <Tag size={20} className="text-orange-500" />
                Cupons de Desconto
              </h4>
              <button className="text-sm text-orange-500 flex items-center gap-1">
                <Plus size={14} />
                Criar Cupom
              </button>
            </div>
            <div className="space-y-3">
              {[
                { code: 'MARIA15', influencer: 'Maria Alves', discount: '15%', uses: 423, limit: 500, status: 'Ativo' },
                { code: 'PEDRO20', influencer: 'Pedro Santos', discount: '20%', uses: 287, limit: 300, status: 'Ativo' },
                { code: 'JULIA10', influencer: 'Julia Oliveira', discount: '10%', uses: 500, limit: 500, status: 'Esgotado' },
              ].map((coupon, i) => (
                <div key={i} className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-1 rounded font-mono font-bold text-sm">
                        {coupon.code}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{coupon.influencer}</p>
                        <p className="text-xs text-gray-500">{coupon.discount} de desconto</p>
                      </div>
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded ${coupon.status === 'Ativo' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}>
                      {coupon.status}
                    </span>
                  </div>
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                      <span>Uso: {coupon.uses}/{coupon.limit}</span>
                      <span>{Math.round((coupon.uses / coupon.limit) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-orange-500 to-pink-500 h-2 rounded-full"
                        style={{ width: `${(coupon.uses / coupon.limit) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Configuração de Comissões */}
      <section>
        <h3 className="text-lg font-semibold text-orange-600 mb-4">3. Configuração de Comissões</h3>
        <div className="bg-white rounded-xl shadow-lg p-6 border">
          <div className="flex items-center justify-between mb-6">
            <h4 className="font-bold text-gray-800 flex items-center gap-2">
              <Settings size={20} className="text-orange-500" />
              Estrutura de Comissões
            </h4>
            <button className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm">Salvar Alterações</button>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Comissão Padrão */}
            <div className="border rounded-xl p-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Percent className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Comissão Padrão</p>
                  <p className="text-xs text-gray-500">Para todos os afiliados</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input type="number" value="10" className="w-20 border rounded-lg px-3 py-2 text-center text-xl font-bold" readOnly />
                <span className="text-gray-500">%</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">Aplicado automaticamente a novos afiliados</p>
            </div>

            {/* Comissão por Tier */}
            <div className="border rounded-xl p-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-purple-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Comissão por Tier</p>
                  <p className="text-xs text-gray-500">Baseado em performance</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Bronze (0-50 vendas)</span>
                  <span className="font-semibold">8%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Prata (51-200 vendas)</span>
                  <span className="font-semibold">10%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Ouro (201-500 vendas)</span>
                  <span className="font-semibold">12%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Diamante (500+ vendas)</span>
                  <span className="font-semibold text-orange-600">15%</span>
                </div>
              </div>
            </div>

            {/* Bônus */}
            <div className="border rounded-xl p-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Gift className="text-green-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Bônus Especiais</p>
                  <p className="text-xs text-gray-500">Incentivos extras</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <input type="checkbox" checked className="w-4 h-4" readOnly />
                  <span>Bônus de primeira venda: R$ 50</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" checked className="w-4 h-4" readOnly />
                  <span>Bônus mensal top 3: R$ 500</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" checked className="w-4 h-4" readOnly />
                  <span>Bônus 100 vendas: R$ 200</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" readOnly />
                  <span>Comissão recorrente</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Dashboard do Influenciador (PWA) */}
      <section>
        <h3 className="text-lg font-semibold text-orange-600 mb-4">4. Painel de Afiliados do Influenciador (PWA Mobile)</h3>
        <div className="flex gap-6 justify-center">
          {/* Tela Principal */}
          <div className="w-[280px] bg-white rounded-[2rem] shadow-xl border-4 border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-4 pt-8">
              <h4 className="text-white font-bold text-lg">Meus Afiliados</h4>
              <p className="text-white/80 text-sm">Acompanhe suas vendas</p>
            </div>
            <div className="p-4">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-green-50 rounded-xl p-3 text-center">
                  <DollarSign className="mx-auto text-green-500 mb-1" size={20} />
                  <p className="text-lg font-bold text-green-600">R$ 12.540</p>
                  <p className="text-xs text-gray-500">Comissões</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-3 text-center">
                  <ShoppingCart className="mx-auto text-blue-500 mb-1" size={20} />
                  <p className="text-lg font-bold text-blue-600">847</p>
                  <p className="text-xs text-gray-500">Vendas</p>
                </div>
              </div>

              {/* Meus Links */}
              <div className="mb-4">
                <h5 className="font-semibold text-sm mb-2">Meus Links</h5>
                <div className="space-y-2">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Verão 2025</span>
                      <span className="text-xs text-green-500">Ativo</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <code className="text-xs bg-white px-2 py-1 rounded flex-1 truncate">amplify.link/ma-v25</code>
                      <Copy size={14} className="text-orange-500" />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">423 cliques • 87 vendas</p>
                  </div>
                </div>
              </div>

              {/* Meus Cupons */}
              <div>
                <h5 className="font-semibold text-sm mb-2">Meus Cupons</h5>
                <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl p-3 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-mono font-bold text-lg">MARIA15</p>
                      <p className="text-xs text-white/80">15% de desconto</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">423/500</p>
                      <p className="text-xs text-white/80">usos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Bottom Nav */}
            <div className="border-t bg-white p-2 mt-4">
              <div className="flex justify-around">
                <button className="flex flex-col items-center p-2 text-gray-400">
                  <span className="text-xs">Home</span>
                </button>
                <button className="flex flex-col items-center p-2 text-orange-500">
                  <Link2 size={20} />
                  <span className="text-xs">Afiliados</span>
                </button>
                <button className="flex flex-col items-center p-2 text-gray-400">
                  <span className="text-xs">Carteira</span>
                </button>
                <button className="flex flex-col items-center p-2 text-gray-400">
                  <span className="text-xs">Perfil</span>
                </button>
              </div>
            </div>
          </div>

          {/* Tela de Vendas */}
          <div className="w-[280px] bg-white rounded-[2rem] shadow-xl border-4 border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-4 pt-8">
              <h4 className="text-white font-bold text-lg">Minhas Vendas</h4>
              <p className="text-white/80 text-sm">Histórico de conversões</p>
            </div>
            <div className="p-4 space-y-3 max-h-[350px] overflow-y-auto">
              {[
                { product: 'Camiseta Verão', price: 'R$ 89,90', commission: 'R$ 8,99', date: 'Hoje, 14:32' },
                { product: 'Kit Skincare', price: 'R$ 249,00', commission: 'R$ 24,90', date: 'Hoje, 11:15' },
                { product: 'Tênis Runner', price: 'R$ 399,00', commission: 'R$ 39,90', date: 'Ontem, 18:45' },
                { product: 'Bolsa Fashion', price: 'R$ 189,00', commission: 'R$ 18,90', date: 'Ontem, 09:22' },
                { product: 'Óculos de Sol', price: 'R$ 299,00', commission: 'R$ 29,90', date: '15/01, 16:08' },
              ].map((sale, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">{sale.product}</p>
                      <p className="text-xs text-gray-500">{sale.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">{sale.price}</p>
                      <p className="text-xs text-green-600 font-semibold">+{sale.commission}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Bottom Nav */}
            <div className="border-t bg-white p-2">
              <div className="flex justify-around">
                <button className="flex flex-col items-center p-2 text-gray-400">
                  <span className="text-xs">Home</span>
                </button>
                <button className="flex flex-col items-center p-2 text-orange-500">
                  <BarChart3 size={20} />
                  <span className="text-xs">Vendas</span>
                </button>
                <button className="flex flex-col items-center p-2 text-gray-400">
                  <span className="text-xs">Carteira</span>
                </button>
                <button className="flex flex-col items-center p-2 text-gray-400">
                  <span className="text-xs">Perfil</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
