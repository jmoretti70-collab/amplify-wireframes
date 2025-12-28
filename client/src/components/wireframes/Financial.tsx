/**
 * Financial Module Wireframes Component
 * Design: Faturamento, contratos, gestão de pagamentos
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

export default function Financial() {
  return (
    <div className="space-y-8">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold text-gray-800"
      >
        Módulo Financeiro - Faturamento, Contratos e Pagamentos
      </motion.h2>

      {/* Wireframe 1: Dashboard Financeiro */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <h3 className="text-xl font-semibold mb-4 amplify-text">1. Dashboard Financeiro (Web)</h3>
        <div className="wireframe-container rounded-lg p-4 min-h-[600px]">
          <div className="bg-gray-50 rounded-lg p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-bold">Financeiro</h2>
                <p className="text-gray-500">Gestão de pagamentos e faturamento</p>
              </div>
              <div className="flex gap-3">
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                  <i className="fas fa-file-invoice mr-2"></i> Nova Fatura
                </button>
                <button className="px-4 py-2 amplify-gradient text-white rounded-lg">
                  <i className="fas fa-plus mr-2"></i> Novo Pagamento
                </button>
              </div>
            </div>

            {/* Financial Summary Cards */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="bg-white p-4 rounded-xl shadow-sm border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-500 text-sm">Receita do Mês</span>
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <i className="fas fa-arrow-up text-green-500"></i>
                  </div>
                </div>
                <p className="text-2xl font-bold text-green-600">R$ 485.000</p>
                <p className="text-green-500 text-sm mt-1"><i className="fas fa-arrow-up"></i> +18% vs mês anterior</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-500 text-sm">Pagamentos Pendentes</span>
                  <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <i className="fas fa-clock text-yellow-500"></i>
                  </div>
                </div>
                <p className="text-2xl font-bold text-yellow-600">R$ 127.500</p>
                <p className="text-gray-500 text-sm mt-1">12 pagamentos</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-500 text-sm">Pagos este Mês</span>
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <i className="fas fa-check text-blue-500"></i>
                  </div>
                </div>
                <p className="text-2xl font-bold text-blue-600">R$ 357.500</p>
                <p className="text-gray-500 text-sm mt-1">28 pagamentos</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-500 text-sm">Comissão Plataforma</span>
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <i className="fas fa-percentage text-purple-500"></i>
                  </div>
                </div>
                <p className="text-2xl font-bold text-purple-600">R$ 48.500</p>
                <p className="text-gray-500 text-sm mt-1">10% média</p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-4 mb-6 border-b">
              <button className="pb-3 px-4 border-b-2 border-orange-500 text-orange-500 font-medium">Pagamentos</button>
              <button className="pb-3 px-4 text-gray-500 hover:text-gray-700">Faturas</button>
              <button className="pb-3 px-4 text-gray-500 hover:text-gray-700">Contratos</button>
              <button className="pb-3 px-4 text-gray-500 hover:text-gray-700">Relatórios</button>
            </div>

            {/* Payments Table */}
            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr className="text-left text-gray-500 text-sm">
                    <th className="p-4">Influenciador</th>
                    <th className="p-4">Campanha</th>
                    <th className="p-4">Valor</th>
                    <th className="p-4">Vencimento</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t hover:bg-gray-50">
                    <td className="p-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white text-sm">MA</div>
                        <div className="ml-3">
                          <p className="font-medium">Maria Alves</p>
                          <p className="text-sm text-gray-500">@mariaalves</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">Verão 2025</td>
                    <td className="p-4 font-semibold">R$ 3.500</td>
                    <td className="p-4">15/01/2025</td>
                    <td className="p-4"><span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm">Pendente</span></td>
                    <td className="p-4">
                      <button className="px-3 py-1 bg-green-500 text-white rounded-lg text-sm mr-2">Pagar</button>
                      <button className="px-3 py-1 border rounded-lg text-sm">Ver</button>
                    </td>
                  </tr>
                  <tr className="border-t hover:bg-gray-50">
                    <td className="p-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm">PS</div>
                        <div className="ml-3">
                          <p className="font-medium">Pedro Santos</p>
                          <p className="text-sm text-gray-500">@pedrotech</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">Tech Launch</td>
                    <td className="p-4 font-semibold">R$ 8.000</td>
                    <td className="p-4">10/01/2025</td>
                    <td className="p-4"><span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">Pago</span></td>
                    <td className="p-4">
                      <button className="px-3 py-1 border rounded-lg text-sm">Ver Recibo</button>
                    </td>
                  </tr>
                  <tr className="border-t hover:bg-gray-50">
                    <td className="p-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-sm">JO</div>
                        <div className="ml-3">
                          <p className="font-medium">Julia Oliveira</p>
                          <p className="text-sm text-gray-500">@juliafitness</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">Fitness Challenge</td>
                    <td className="p-4 font-semibold">R$ 5.000</td>
                    <td className="p-4">20/01/2025</td>
                    <td className="p-4"><span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Processando</span></td>
                    <td className="p-4">
                      <button className="px-3 py-1 border rounded-lg text-sm">Ver</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Wireframe 2: Gestão de Contratos */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <h3 className="text-xl font-semibold mb-4 amplify-text">2. Gestão de Contratos (Web)</h3>
        <div className="wireframe-container rounded-lg p-4 min-h-[500px]">
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="grid grid-cols-3 gap-6">
              {/* Contract Card 1 */}
              <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                <div className="amplify-gradient p-4 text-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-white/80 text-sm">Contrato #2025-001</p>
                      <h4 className="font-bold text-lg">Campanha Verão 2025</h4>
                    </div>
                    <span className="px-2 py-1 bg-white/20 rounded text-sm">Ativo</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white text-sm">MA</div>
                    <div className="ml-3">
                      <p className="font-medium">Maria Alves</p>
                      <p className="text-sm text-gray-500">Fashion Brand X</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Valor Total</span>
                      <span className="font-semibold">R$ 15.000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Vigência</span>
                      <span>15/01 - 28/02/2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Entregáveis</span>
                      <span>4 Reels, 12 Stories</span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <button className="flex-1 py-2 border rounded-lg text-sm hover:bg-gray-50">Ver Contrato</button>
                    <button className="flex-1 py-2 amplify-gradient text-white rounded-lg text-sm">Assinar</button>
                  </div>
                </div>
              </div>

              {/* Contract Card 2 */}
              <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                <div className="bg-green-500 p-4 text-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-white/80 text-sm">Contrato #2024-089</p>
                      <h4 className="font-bold text-lg">Fitness Challenge</h4>
                    </div>
                    <span className="px-2 py-1 bg-white/20 rounded text-sm">Assinado</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-sm">JO</div>
                    <div className="ml-3">
                      <p className="font-medium">Julia Oliveira</p>
                      <p className="text-sm text-gray-500">GymLife</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Valor Total</span>
                      <span className="font-semibold">R$ 25.000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Vigência</span>
                      <span>01/12 - 31/01/2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Progresso</span>
                      <span>75%</span>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full mt-2">
                    <div className="h-2 bg-green-500 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <button className="w-full py-2 border rounded-lg text-sm mt-4 hover:bg-gray-50">Ver Detalhes</button>
                </div>
              </div>

              {/* Contract Card 3 */}
              <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                <div className="bg-gray-500 p-4 text-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-white/80 text-sm">Contrato #2024-078</p>
                      <h4 className="font-bold text-lg">Black Friday Tech</h4>
                    </div>
                    <span className="px-2 py-1 bg-white/20 rounded text-sm">Concluído</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm">PS</div>
                    <div className="ml-3">
                      <p className="font-medium">Pedro Santos</p>
                      <p className="text-sm text-gray-500">TechStore</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Valor Total</span>
                      <span className="font-semibold">R$ 40.000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Vigência</span>
                      <span>20/11 - 30/11/2024</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">ROI</span>
                      <span className="text-green-500 font-semibold">5.8x</span>
                    </div>
                  </div>
                  <button className="w-full py-2 border rounded-lg text-sm mt-4 hover:bg-gray-50">Ver Relatório Final</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Wireframe 3: Criar Nova Fatura */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <h3 className="text-xl font-semibold mb-4 amplify-text">3. Criar Nova Fatura (Web)</h3>
        <div className="wireframe-container rounded-lg p-4">
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-6">
              <h4 className="font-bold text-lg mb-6">Nova Fatura</h4>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="text-sm text-gray-500 block mb-1">Cliente/Marca *</label>
                  <select className="w-full border rounded-lg p-3">
                    <option>Selecione o cliente</option>
                    <option>Fashion Brand X</option>
                    <option>TechStore</option>
                    <option>GymLife</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-gray-500 block mb-1">Campanha *</label>
                  <select className="w-full border rounded-lg p-3">
                    <option>Selecione a campanha</option>
                    <option>Verão 2025</option>
                    <option>Black Friday</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="text-sm text-gray-500 block mb-2">Itens da Fatura</label>
                <div className="border rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr className="text-left text-sm text-gray-500">
                        <th className="p-3">Descrição</th>
                        <th className="p-3 w-24">Qtd</th>
                        <th className="p-3 w-32">Valor Unit.</th>
                        <th className="p-3 w-32">Total</th>
                        <th className="p-3 w-16"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="p-3"><input type="text" className="w-full border rounded p-2" value="Reels Instagram" readOnly /></td>
                        <td className="p-3"><input type="number" className="w-full border rounded p-2" value="2" readOnly /></td>
                        <td className="p-3"><input type="text" className="w-full border rounded p-2" value="R$ 2.500" readOnly /></td>
                        <td className="p-3 font-semibold">R$ 5.000</td>
                        <td className="p-3"><button className="text-red-500"><i className="fas fa-trash"></i></button></td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-3"><input type="text" className="w-full border rounded p-2" value="Stories (pacote 6)" readOnly /></td>
                        <td className="p-3"><input type="number" className="w-full border rounded p-2" value="1" readOnly /></td>
                        <td className="p-3"><input type="text" className="w-full border rounded p-2" value="R$ 1.500" readOnly /></td>
                        <td className="p-3 font-semibold">R$ 1.500</td>
                        <td className="p-3"><button className="text-red-500"><i className="fas fa-trash"></i></button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <button className="mt-2 text-orange-500 text-sm"><i className="fas fa-plus mr-1"></i> Adicionar Item</button>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="text-sm text-gray-500 block mb-1">Data de Emissão</label>
                  <input type="date" className="w-full border rounded-lg p-3" />
                </div>
                <div>
                  <label className="text-sm text-gray-500 block mb-1">Data de Vencimento</label>
                  <input type="date" className="w-full border rounded-lg p-3" />
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-500">Subtotal</span>
                  <span>R$ 6.500,00</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-500">Taxa da Plataforma (10%)</span>
                  <span>- R$ 650,00</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-2">
                  <span>Total</span>
                  <span className="text-green-600">R$ 5.850,00</span>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <button className="px-6 py-3 border rounded-lg hover:bg-gray-50">Salvar Rascunho</button>
                <button className="px-6 py-3 amplify-gradient text-white rounded-lg">Emitir Fatura</button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Wireframe 4: Mobile - Carteira Detalhada */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <h3 className="text-xl font-semibold mb-4 amplify-text">4. Carteira do Influenciador (Mobile PWA)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Screen 1: Saque */}
          <PhoneFrame title="Solicitar Saque">
            <div className="h-full bg-gray-50 flex flex-col">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-4 pt-10 text-white">
                <div className="flex items-center mb-4">
                  <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <i className="fas fa-arrow-left"></i>
                  </button>
                  <h2 className="text-lg font-bold">Solicitar Saque</h2>
                </div>
                <div className="bg-white/20 rounded-xl p-4">
                  <p className="text-white/80 text-sm">Saldo Disponível</p>
                  <p className="text-2xl font-bold">R$ 8.750,00</p>
                </div>
              </div>
              
              <div className="flex-1 p-4">
                <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
                  <label className="text-sm text-gray-500 block mb-2">Valor do Saque</label>
                  <div className="relative">
                    <span className="absolute left-4 top-3 text-gray-500">R$</span>
                    <input type="text" className="w-full border rounded-xl p-3 pl-12 text-2xl font-bold" value="5.000,00" readOnly />
                  </div>
                  <div className="flex gap-2 mt-3">
                    <button className="px-3 py-1 border rounded-lg text-sm">R$ 1.000</button>
                    <button className="px-3 py-1 border rounded-lg text-sm">R$ 2.500</button>
                    <button className="px-3 py-1 border-2 border-green-500 bg-green-50 rounded-lg text-sm">R$ 5.000</button>
                    <button className="px-3 py-1 border rounded-lg text-sm">Tudo</button>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
                  <label className="text-sm text-gray-500 block mb-2">Conta para Depósito</label>
                  <div className="flex items-center p-3 border-2 border-green-500 rounded-xl bg-green-50">
                    <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white mr-3">
                      <i className="fas fa-university"></i>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Banco Inter</p>
                      <p className="text-sm text-gray-500">Ag: 0001 • CC: ****4521</p>
                    </div>
                    <i className="fas fa-check-circle text-green-500"></i>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 mb-4">
                  <div className="flex items-start">
                    <i className="fas fa-info-circle text-yellow-500 mt-1 mr-2"></i>
                    <p className="text-sm text-yellow-700">O saque será processado em até 2 dias úteis via PIX.</p>
                  </div>
                </div>

                <button className="w-full py-4 bg-green-500 text-white rounded-xl font-semibold">
                  Confirmar Saque de R$ 5.000,00
                </button>
              </div>
            </div>
          </PhoneFrame>

          {/* Screen 2: Dados Bancários */}
          <PhoneFrame title="Dados Bancários">
            <div className="h-full bg-gray-50 flex flex-col">
              <div className="bg-white px-4 py-4 pt-10 shadow-sm">
                <div className="flex items-center">
                  <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                    <i className="fas fa-arrow-left text-gray-600"></i>
                  </button>
                  <h2 className="text-lg font-bold">Dados Bancários</h2>
                </div>
              </div>
              
              <div className="flex-1 p-4 overflow-auto">
                <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold">Conta Principal</h4>
                    <span className="px-2 py-1 bg-green-100 text-green-600 rounded text-xs">Ativa</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded-xl">
                    <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white mr-3">
                      <i className="fas fa-university text-xl"></i>
                    </div>
                    <div>
                      <p className="font-medium">Banco Inter</p>
                      <p className="text-sm text-gray-500">Agência: 0001</p>
                      <p className="text-sm text-gray-500">Conta: 12345678-9</p>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <button className="flex-1 py-2 border rounded-lg text-sm">Editar</button>
                    <button className="flex-1 py-2 border border-red-500 text-red-500 rounded-lg text-sm">Remover</button>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
                  <h4 className="font-semibold mb-3">Chave PIX</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div className="flex items-center">
                        <i className="fas fa-envelope text-gray-400 mr-3"></i>
                        <span>maria@email.com</span>
                      </div>
                      <span className="text-green-500 text-sm">Principal</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div className="flex items-center">
                        <i className="fas fa-phone text-gray-400 mr-3"></i>
                        <span>(11) 99999-9999</span>
                      </div>
                      <button className="text-orange-500 text-sm">Usar</button>
                    </div>
                  </div>
                </div>

                <button className="w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-500">
                  <i className="fas fa-plus mr-2"></i> Adicionar Nova Conta
                </button>
              </div>
            </div>
          </PhoneFrame>

          {/* Screen 3: Extrato */}
          <PhoneFrame title="Extrato Detalhado">
            <div className="h-full bg-gray-50 flex flex-col">
              <div className="bg-white px-4 py-4 pt-10 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                      <i className="fas fa-arrow-left text-gray-600"></i>
                    </button>
                    <h2 className="text-lg font-bold">Extrato</h2>
                  </div>
                  <button className="text-orange-500 text-sm">
                    <i className="fas fa-download mr-1"></i> PDF
                  </button>
                </div>
                <div className="flex gap-2 mt-4">
                  <button className="px-3 py-1 bg-orange-500 text-white rounded-full text-sm">Todos</button>
                  <button className="px-3 py-1 bg-gray-100 rounded-full text-sm">Entradas</button>
                  <button className="px-3 py-1 bg-gray-100 rounded-full text-sm">Saídas</button>
                </div>
              </div>
              
              <div className="flex-1 p-4 overflow-auto">
                <p className="text-sm text-gray-500 mb-2">Janeiro 2025</p>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mr-3">
                        <i className="fas fa-arrow-down text-green-500"></i>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">Campanha Verão 2025</p>
                        <p className="text-xs text-gray-500">Fashion Brand X • 15 Jan</p>
                      </div>
                      <span className="text-green-500 font-bold">+R$ 3.500</span>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center mr-3">
                        <i className="fas fa-arrow-up text-red-500"></i>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">Saque PIX</p>
                        <p className="text-xs text-gray-500">Banco Inter • 12 Jan</p>
                      </div>
                      <span className="text-red-500 font-bold">-R$ 2.000</span>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mr-3">
                        <i className="fas fa-arrow-down text-green-500"></i>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">Fitness Challenge</p>
                        <p className="text-xs text-gray-500">GymLife • 10 Jan</p>
                      </div>
                      <span className="text-green-500 font-bold">+R$ 5.000</span>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mr-3">
                        <i className="fas fa-arrow-down text-green-500"></i>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">Tech Launch</p>
                        <p className="text-xs text-gray-500">TechStore • 05 Jan</p>
                      </div>
                      <span className="text-green-500 font-bold">+R$ 8.000</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-500 mb-2 mt-4">Dezembro 2024</p>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center mr-3">
                        <i className="fas fa-arrow-up text-red-500"></i>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">Saque PIX</p>
                        <p className="text-xs text-gray-500">Banco Inter • 28 Dez</p>
                      </div>
                      <span className="text-red-500 font-bold">-R$ 5.000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </PhoneFrame>
        </div>
      </motion.div>

      {/* Wireframe 5: Relatório Financeiro */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <h3 className="text-xl font-semibold mb-4 amplify-text">5. Relatório Financeiro (Web)</h3>
        <div className="wireframe-container rounded-lg p-4">
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-bold text-lg">Relatório Financeiro - Janeiro 2025</h4>
              <div className="flex gap-2">
                <select className="border rounded-lg px-3 py-2">
                  <option>Janeiro 2025</option>
                  <option>Dezembro 2024</option>
                </select>
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                  <i className="fas fa-download mr-2"></i> Exportar
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {/* Revenue Chart */}
              <div className="col-span-2 bg-white p-4 rounded-xl shadow-sm">
                <h5 className="font-semibold mb-4">Receita vs Despesas</h5>
                <div className="h-64 flex items-end justify-between px-4">
                  {['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'].map((month, i) => (
                    <div key={month} className="flex flex-col items-center">
                      <div className="flex gap-1">
                        <div className="w-6 bg-green-500 rounded-t" style={{ height: `${80 + Math.random() * 100}px` }}></div>
                        <div className="w-6 bg-red-400 rounded-t" style={{ height: `${40 + Math.random() * 60}px` }}></div>
                      </div>
                      <span className="text-xs text-gray-500 mt-2">{month}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center gap-6 mt-4">
                  <div className="flex items-center"><span className="w-3 h-3 bg-green-500 rounded mr-2"></span> Receita</div>
                  <div className="flex items-center"><span className="w-3 h-3 bg-red-400 rounded mr-2"></span> Pagamentos</div>
                </div>
              </div>

              {/* Summary */}
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <h5 className="font-semibold mb-4">Resumo do Período</h5>
                <div className="space-y-4">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-gray-500">Total Faturado</p>
                    <p className="text-xl font-bold text-green-600">R$ 485.000</p>
                  </div>
                  <div className="p-3 bg-red-50 rounded-lg">
                    <p className="text-sm text-gray-500">Total Pago</p>
                    <p className="text-xl font-bold text-red-500">R$ 357.500</p>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded-lg">
                    <p className="text-sm text-gray-500">Pendente</p>
                    <p className="text-xl font-bold text-yellow-600">R$ 127.500</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <p className="text-sm text-gray-500">Lucro Líquido</p>
                    <p className="text-xl font-bold text-purple-600">R$ 48.500</p>
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
