/**
 * Product Seeding Wireframes
 * Design: Gradiente Amplify (laranja-rosa), cards com sombras suaves
 * Módulo para gestão de envio de produtos para influenciadores
 * Autor: João Moretti
 */

export default function ProductSeeding() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Módulo de Seeding de Produtos</h2>
        <p className="text-gray-600 mt-2">Gestão de envio de produtos para influenciadores com tracking</p>
      </div>

      {/* 1. Dashboard de Seeding */}
      <section>
        <h3 className="text-xl font-semibold text-orange-600 mb-4">1. Dashboard de Seeding (Visão da Agência)</h3>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h4 className="text-xl font-bold text-gray-800">Seeding de Produtos</h4>
              <p className="text-gray-500 text-sm">Gerencie envios de produtos para influenciadores</p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                Exportar
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg hover:opacity-90 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Novo Envio
              </button>
            </div>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-5 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4">
              <div className="flex items-center gap-2 text-blue-600 text-sm mb-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                Envios Totais
              </div>
              <div className="text-2xl font-bold text-blue-700">847</div>
              <div className="text-xs text-blue-500">+45 este mês</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4">
              <div className="flex items-center gap-2 text-green-600 text-sm mb-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Entregues
              </div>
              <div className="text-2xl font-bold text-green-700">782</div>
              <div className="text-xs text-green-500">92.3% taxa de entrega</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-4">
              <div className="flex items-center gap-2 text-yellow-600 text-sm mb-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Em Trânsito
              </div>
              <div className="text-2xl font-bold text-yellow-700">42</div>
              <div className="text-xs text-yellow-500">Previsão: 3-5 dias</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4">
              <div className="flex items-center gap-2 text-orange-600 text-sm mb-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Aguardando Envio
              </div>
              <div className="text-2xl font-bold text-orange-700">23</div>
              <div className="text-xs text-orange-500">Processar hoje</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4">
              <div className="flex items-center gap-2 text-purple-600 text-sm mb-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Valor Total
              </div>
              <div className="text-2xl font-bold text-purple-700">R$ 125K</div>
              <div className="text-xs text-purple-500">Produtos enviados</div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-4 border-b">
            <button className="px-4 py-2 text-orange-600 border-b-2 border-orange-500 font-medium">Todos (847)</button>
            <button className="px-4 py-2 text-gray-500 hover:text-gray-700">Aguardando (23)</button>
            <button className="px-4 py-2 text-gray-500 hover:text-gray-700">Em Trânsito (42)</button>
            <button className="px-4 py-2 text-gray-500 hover:text-gray-700">Entregues (782)</button>
          </div>

          {/* Lista de Envios */}
          <div className="space-y-3">
            {/* Envio 1 */}
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h5 className="font-semibold text-gray-800">Kit Verão Fashion Brand X</h5>
                      <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded-full">Em Trânsito</span>
                    </div>
                    <p className="text-sm text-gray-500">Para: Maria Alves (@mariaalves)</p>
                    <div className="flex items-center gap-4 mt-1 text-xs text-gray-400">
                      <span>Código: BR847592641</span>
                      <span>Transportadora: Correios</span>
                      <span>Previsão: 20 Jan 2026</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">Rastrear</button>
                  <button className="px-3 py-1.5 text-sm bg-orange-100 text-orange-600 rounded-lg hover:bg-orange-200">Ver Detalhes</button>
                </div>
              </div>
              {/* Progress bar */}
              <div className="mt-3 flex items-center gap-2">
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full" style={{width: '65%'}}></div>
                </div>
                <span className="text-xs text-gray-500">65%</span>
              </div>
            </div>

            {/* Envio 2 */}
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h5 className="font-semibold text-gray-800">Notebook Gamer TechStore</h5>
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Entregue</span>
                    </div>
                    <p className="text-sm text-gray-500">Para: Pedro Santos (@pedrotech)</p>
                    <div className="flex items-center gap-4 mt-1 text-xs text-gray-400">
                      <span>Código: BR847592640</span>
                      <span>Transportadora: Jadlog</span>
                      <span>Entregue: 15 Jan 2026</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-sm flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Confirmado
                  </span>
                  <button className="px-3 py-1.5 text-sm bg-orange-100 text-orange-600 rounded-lg hover:bg-orange-200">Ver Detalhes</button>
                </div>
              </div>
            </div>

            {/* Envio 3 */}
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h5 className="font-semibold text-gray-800">Kit Suplementos GymLife</h5>
                      <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-xs rounded-full">Aguardando Envio</span>
                    </div>
                    <p className="text-sm text-gray-500">Para: Julia Oliveira (@juliafitness)</p>
                    <div className="flex items-center gap-4 mt-1 text-xs text-gray-400">
                      <span>Campanha: Fitness Challenge</span>
                      <span>Valor: R$ 450,00</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">Editar</button>
                  <button className="px-3 py-1.5 text-sm bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg hover:opacity-90">Processar Envio</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Novo Envio */}
      <section>
        <h3 className="text-xl font-semibold text-orange-600 mb-4">2. Criar Novo Envio</h3>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h4 className="text-lg font-bold text-gray-800 mb-6">Novo Envio de Produto</h4>
          
          <div className="grid grid-cols-2 gap-6">
            {/* Coluna Esquerda - Produto */}
            <div className="space-y-4">
              <h5 className="font-semibold text-gray-700 flex items-center gap-2">
                <span className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm">1</span>
                Informações do Produto
              </h5>
              
              <div>
                <label className="block text-sm text-gray-600 mb-1">Campanha</label>
                <select className="w-full border rounded-lg px-3 py-2 text-gray-700">
                  <option>Selecione uma campanha</option>
                  <option>Lançamento Verão 2025 - Fashion Brand X</option>
                  <option>Black Friday Tech - TechStore</option>
                  <option>Fitness Challenge - GymLife</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-1">Nome do Produto</label>
                <input type="text" placeholder="Ex: Kit Verão Completo" className="w-full border rounded-lg px-3 py-2" />
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Quantidade</label>
                  <input type="number" defaultValue={1} className="w-full border rounded-lg px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Valor (R$)</label>
                  <input type="text" placeholder="0,00" className="w-full border rounded-lg px-3 py-2" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-1">Descrição</label>
                <textarea rows={3} placeholder="Descreva os itens incluídos no envio..." className="w-full border rounded-lg px-3 py-2"></textarea>
              </div>
            </div>

            {/* Coluna Direita - Destinatário */}
            <div className="space-y-4">
              <h5 className="font-semibold text-gray-700 flex items-center gap-2">
                <span className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm">2</span>
                Destinatário
              </h5>
              
              <div>
                <label className="block text-sm text-gray-600 mb-1">Influenciador</label>
                <select className="w-full border rounded-lg px-3 py-2 text-gray-700">
                  <option>Selecione um influenciador</option>
                  <option>Maria Alves (@mariaalves)</option>
                  <option>Pedro Santos (@pedrotech)</option>
                  <option>Julia Oliveira (@juliafitness)</option>
                </select>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h6 className="text-sm font-medium text-gray-700 mb-2">Endereço de Entrega</h6>
                <p className="text-sm text-gray-600">Rua das Flores, 123 - Apto 45</p>
                <p className="text-sm text-gray-600">Jardim Paulista</p>
                <p className="text-sm text-gray-600">São Paulo - SP, 01234-567</p>
                <button className="text-orange-600 text-sm mt-2 hover:underline">Editar endereço</button>
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-1">Transportadora</label>
                <select className="w-full border rounded-lg px-3 py-2 text-gray-700">
                  <option>Selecione a transportadora</option>
                  <option>Correios - PAC (5-8 dias úteis)</option>
                  <option>Correios - SEDEX (1-3 dias úteis)</option>
                  <option>Jadlog - Expresso (2-4 dias úteis)</option>
                  <option>Total Express (3-5 dias úteis)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-1">Observações</label>
                <textarea rows={2} placeholder="Instruções especiais de entrega..." className="w-full border rounded-lg px-3 py-2"></textarea>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-6 pt-4 border-t">
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">Cancelar</button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">Salvar Rascunho</button>
            <button className="px-6 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg hover:opacity-90">Criar Envio</button>
          </div>
        </div>
      </section>

      {/* 3. Tracking Detalhado */}
      <section>
        <h3 className="text-xl font-semibold text-orange-600 mb-4">3. Rastreamento Detalhado</h3>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h4 className="text-lg font-bold text-gray-800">Kit Verão Fashion Brand X</h4>
              <p className="text-gray-500">Código de rastreio: BR847592641</p>
            </div>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">Em Trânsito</span>
          </div>

          {/* Timeline de Rastreamento */}
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            <div className="space-y-6">
              <div className="flex gap-4 relative">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center z-10">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1 pb-4">
                  <div className="flex justify-between">
                    <h5 className="font-semibold text-gray-800">Pedido Criado</h5>
                    <span className="text-sm text-gray-500">15 Jan 2026, 09:30</span>
                  </div>
                  <p className="text-sm text-gray-600">Envio registrado no sistema</p>
                </div>
              </div>

              <div className="flex gap-4 relative">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center z-10">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1 pb-4">
                  <div className="flex justify-between">
                    <h5 className="font-semibold text-gray-800">Coletado pela Transportadora</h5>
                    <span className="text-sm text-gray-500">15 Jan 2026, 14:45</span>
                  </div>
                  <p className="text-sm text-gray-600">Correios - Centro de Distribuição São Paulo</p>
                </div>
              </div>

              <div className="flex gap-4 relative">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center z-10">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1 pb-4">
                  <div className="flex justify-between">
                    <h5 className="font-semibold text-gray-800">Em Trânsito</h5>
                    <span className="text-sm text-gray-500">16 Jan 2026, 08:20</span>
                  </div>
                  <p className="text-sm text-gray-600">Objeto em transferência - de São Paulo para Rio de Janeiro</p>
                </div>
              </div>

              <div className="flex gap-4 relative">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center z-10 animate-pulse">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1 pb-4">
                  <div className="flex justify-between">
                    <h5 className="font-semibold text-yellow-700">Saiu para Entrega</h5>
                    <span className="text-sm text-gray-500">17 Jan 2026, 07:15</span>
                  </div>
                  <p className="text-sm text-gray-600">Objeto saiu para entrega ao destinatário</p>
                </div>
              </div>

              <div className="flex gap-4 relative">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center z-10">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-400">Entregue</h5>
                  <p className="text-sm text-gray-400">Aguardando confirmação de entrega</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-orange-50 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h5 className="font-semibold text-orange-800">Previsão de Entrega</h5>
                <p className="text-orange-600">Hoje, 17 de Janeiro de 2026</p>
              </div>
              <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">Notificar Influenciador</button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PWA Mobile - Recebimento */}
      <section>
        <h3 className="text-xl font-semibold text-orange-600 mb-4">4. PWA Mobile - Confirmação de Recebimento</h3>
        
        <div className="flex gap-6 justify-center">
          {/* Tela 1 - Lista de Envios */}
          <div className="w-72 bg-gray-900 rounded-3xl p-2 shadow-xl">
            <div className="bg-white rounded-2xl overflow-hidden h-[500px]">
              <div className="amplify-gradient p-4 text-white">
                <h4 className="font-bold">Meus Produtos</h4>
                <p className="text-sm text-orange-100">Envios para você</p>
              </div>
              
              <div className="p-4 space-y-3">
                <div className="border rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded-full">Em Trânsito</span>
                    <span className="text-xs text-gray-500">Hoje</span>
                  </div>
                  <h5 className="font-semibold text-sm">Kit Verão Fashion Brand X</h5>
                  <p className="text-xs text-gray-500 mt-1">Previsão: Hoje</p>
                  <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-400 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>

                <div className="border rounded-lg p-3 bg-green-50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Entregue</span>
                    <span className="text-xs text-gray-500">15 Jan</span>
                  </div>
                  <h5 className="font-semibold text-sm">Notebook Gamer TechStore</h5>
                  <button className="mt-2 w-full py-1.5 bg-green-600 text-white text-xs rounded-lg">Confirmar Recebimento</button>
                </div>

                <div className="border rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Preparando</span>
                    <span className="text-xs text-gray-500">Em breve</span>
                  </div>
                  <h5 className="font-semibold text-sm">Kit Suplementos GymLife</h5>
                  <p className="text-xs text-gray-500 mt-1">Aguardando envio</p>
                </div>
              </div>

              {/* Bottom Nav */}
              <div className="absolute bottom-2 left-2 right-2 bg-white border-t flex justify-around py-2">
                <button className="flex flex-col items-center text-gray-400 text-xs">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Home
                </button>
                <button className="flex flex-col items-center text-orange-500 text-xs">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  Produtos
                </button>
                <button className="flex flex-col items-center text-gray-400 text-xs">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Perfil
                </button>
              </div>
            </div>
          </div>

          {/* Tela 2 - Confirmação */}
          <div className="w-72 bg-gray-900 rounded-3xl p-2 shadow-xl">
            <div className="bg-white rounded-2xl overflow-hidden h-[500px]">
              <div className="amplify-gradient p-4 text-white flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <h4 className="font-bold">Confirmar Recebimento</h4>
              </div>
              
              <div className="p-4">
                <div className="text-center mb-4">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <h5 className="font-bold text-gray-800">Notebook Gamer TechStore</h5>
                  <p className="text-sm text-gray-500">Campanha: Black Friday Tech</p>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Produto chegou em boas condições?</label>
                    <div className="flex gap-2">
                      <button className="flex-1 py-2 bg-green-100 text-green-700 rounded-lg text-sm font-medium border-2 border-green-500">Sim</button>
                      <button className="flex-1 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm">Não</button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Foto do produto recebido</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                      <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <p className="text-xs text-gray-500">Toque para tirar foto</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Comentários (opcional)</label>
                    <textarea rows={2} placeholder="Alguma observação?" className="w-full border rounded-lg px-3 py-2 text-sm"></textarea>
                  </div>
                </div>

                <button className="w-full mt-4 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg font-medium">
                  Confirmar Recebimento
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
