import { FileText, PenTool, CheckCircle, Clock, AlertTriangle, Download, Eye, Send, Users, Calendar, DollarSign, Shield, Stamp, FileCheck, History, Bell } from 'lucide-react';

export default function DigitalContracts() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-2">Contratos Digitais</h2>
        <p className="text-indigo-100">Assinatura eletrônica segura e gestão completa de contratos</p>
      </div>

      {/* 1. Dashboard de Contratos */}
      <div>
        <h3 className="text-xl font-semibold text-indigo-600 mb-4">1. Dashboard de Contratos (Visão da Agência)</h3>
        <div className="bg-white rounded-xl shadow-lg p-6 border">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h4 className="text-xl font-bold text-gray-800">Contratos</h4>
              <p className="text-gray-500 text-sm">Gerencie todos os contratos da sua agência</p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2 text-gray-600 hover:bg-gray-50">
                <Download size={18} />
                Exportar
              </button>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg flex items-center gap-2 hover:bg-indigo-700">
                <FileText size={18} />
                Novo Contrato
              </button>
            </div>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-5 gap-4 mb-6">
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-4 text-center">
              <FileText className="mx-auto text-indigo-600 mb-2" size={24} />
              <p className="text-2xl font-bold text-indigo-700">156</p>
              <p className="text-xs text-indigo-600">Total de Contratos</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-4 text-center">
              <Clock className="mx-auto text-yellow-600 mb-2" size={24} />
              <p className="text-2xl font-bold text-yellow-700">23</p>
              <p className="text-xs text-yellow-600">Aguardando Assinatura</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 text-center">
              <CheckCircle className="mx-auto text-green-600 mb-2" size={24} />
              <p className="text-2xl font-bold text-green-700">118</p>
              <p className="text-xs text-green-600">Assinados</p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4 text-center">
              <AlertTriangle className="mx-auto text-red-600 mb-2" size={24} />
              <p className="text-2xl font-bold text-red-700">8</p>
              <p className="text-xs text-red-600">Vencendo em 7 dias</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 text-center">
              <DollarSign className="mx-auto text-purple-600 mb-2" size={24} />
              <p className="text-2xl font-bold text-purple-700">R$ 2.4M</p>
              <p className="text-xs text-purple-600">Valor Total</p>
            </div>
          </div>

          {/* Filtros */}
          <div className="flex gap-2 mb-4">
            <button className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg font-medium">Todos (156)</button>
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Rascunhos (7)</button>
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Pendentes (23)</button>
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Assinados (118)</button>
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Expirados (8)</button>
          </div>

          {/* Lista de Contratos */}
          <div className="space-y-3">
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <FileText className="text-indigo-600" size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h5 className="font-semibold text-gray-800">Contrato de Campanha - Verão 2026</h5>
                      <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded-full">Aguardando Assinatura</span>
                    </div>
                    <p className="text-sm text-gray-500">Fashion Brand X • @mariaalves</p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
                      <span className="flex items-center gap-1"><Calendar size={12} /> Criado: 15 Jan 2026</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> Expira: 25 Jan 2026</span>
                      <span className="flex items-center gap-1"><DollarSign size={12} /> R$ 15.000</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg">
                    <Eye size={18} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg">
                    <Send size={18} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
                    <Download size={18} />
                  </button>
                </div>
              </div>
              {/* Progress de assinaturas */}
              <div className="mt-4 pt-4 border-t">
                <p className="text-xs text-gray-500 mb-2">Progresso de Assinaturas (1/3)</p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle size={14} className="text-white" />
                    </div>
                    <span className="text-xs text-gray-600">Agência (Assinado)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                      <Clock size={14} className="text-white" />
                    </div>
                    <span className="text-xs text-gray-600">Influenciador (Pendente)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                      <Clock size={14} className="text-white" />
                    </div>
                    <span className="text-xs text-gray-600">Marca (Aguardando)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow bg-green-50 border-green-200">
              <div className="flex justify-between items-start">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <FileCheck className="text-green-600" size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h5 className="font-semibold text-gray-800">Contrato de Parceria Anual</h5>
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Assinado</span>
                    </div>
                    <p className="text-sm text-gray-500">TechStore • @pedrotech</p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
                      <span className="flex items-center gap-1"><Calendar size={12} /> Assinado: 10 Jan 2026</span>
                      <span className="flex items-center gap-1"><DollarSign size={12} /> R$ 120.000/ano</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg">
                    <Eye size={18} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
                    <Download size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Editor de Contrato */}
      <div>
        <h3 className="text-xl font-semibold text-indigo-600 mb-4">2. Editor de Contrato</h3>
        <div className="bg-white rounded-xl shadow-lg border overflow-hidden">
          {/* Toolbar */}
          <div className="bg-gray-50 border-b p-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <button className="px-3 py-1.5 bg-white border rounded-lg text-sm hover:bg-gray-50">← Voltar</button>
              <div>
                <input 
                  type="text" 
                  defaultValue="Contrato de Campanha - Verão 2026" 
                  className="font-semibold text-gray-800 bg-transparent border-b border-transparent hover:border-gray-300 focus:border-indigo-500 outline-none"
                />
                <p className="text-xs text-gray-500">Última edição: há 5 minutos</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
                Salvar Rascunho
              </button>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2">
                <Send size={16} />
                Enviar para Assinatura
              </button>
            </div>
          </div>

          <div className="flex">
            {/* Sidebar de Templates */}
            <div className="w-64 border-r bg-gray-50 p-4">
              <h5 className="font-semibold text-gray-700 mb-3">Templates</h5>
              <div className="space-y-2">
                <div className="p-3 bg-indigo-100 border border-indigo-300 rounded-lg cursor-pointer">
                  <p className="text-sm font-medium text-indigo-700">Campanha Única</p>
                  <p className="text-xs text-indigo-500">Para campanhas pontuais</p>
                </div>
                <div className="p-3 bg-white border rounded-lg cursor-pointer hover:bg-gray-50">
                  <p className="text-sm font-medium text-gray-700">Parceria Anual</p>
                  <p className="text-xs text-gray-500">Contratos de longo prazo</p>
                </div>
                <div className="p-3 bg-white border rounded-lg cursor-pointer hover:bg-gray-50">
                  <p className="text-sm font-medium text-gray-700">Embaixador de Marca</p>
                  <p className="text-xs text-gray-500">Exclusividade e benefícios</p>
                </div>
                <div className="p-3 bg-white border rounded-lg cursor-pointer hover:bg-gray-50">
                  <p className="text-sm font-medium text-gray-700">NDA</p>
                  <p className="text-xs text-gray-500">Acordo de confidencialidade</p>
                </div>
              </div>

              <h5 className="font-semibold text-gray-700 mt-6 mb-3">Campos Dinâmicos</h5>
              <div className="space-y-1">
                <div className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded cursor-pointer hover:bg-purple-200">
                  {"{{nome_influenciador}}"}
                </div>
                <div className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded cursor-pointer hover:bg-purple-200">
                  {"{{nome_marca}}"}
                </div>
                <div className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded cursor-pointer hover:bg-purple-200">
                  {"{{valor_contrato}}"}
                </div>
                <div className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded cursor-pointer hover:bg-purple-200">
                  {"{{data_inicio}}"}
                </div>
                <div className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded cursor-pointer hover:bg-purple-200">
                  {"{{data_fim}}"}
                </div>
              </div>
            </div>

            {/* Editor */}
            <div className="flex-1 p-6">
              <div className="max-w-3xl mx-auto bg-white border rounded-lg shadow-sm p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="text-indigo-600" size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800">CONTRATO DE PRESTAÇÃO DE SERVIÇOS</h4>
                  <p className="text-gray-500">Campanha de Marketing de Influência</p>
                </div>

                <div className="space-y-4 text-sm text-gray-700">
                  <p>
                    <strong>CONTRATANTE:</strong> <span className="bg-yellow-100 px-1">Fashion Brand X LTDA</span>, pessoa jurídica de direito privado, inscrita no CNPJ sob o nº <span className="bg-yellow-100 px-1">00.000.000/0001-00</span>.
                  </p>
                  <p>
                    <strong>CONTRATADO:</strong> <span className="bg-yellow-100 px-1">Maria Alves</span>, inscrito(a) no CPF sob o nº <span className="bg-yellow-100 px-1">000.000.000-00</span>.
                  </p>
                  <p>
                    <strong>AGÊNCIA:</strong> Amplify Marketing Digital LTDA, intermediadora do presente contrato.
                  </p>

                  <h5 className="font-bold text-gray-800 mt-6">CLÁUSULA 1ª - DO OBJETO</h5>
                  <p>
                    O presente contrato tem por objeto a prestação de serviços de criação de conteúdo e divulgação nas redes sociais do CONTRATADO, conforme especificações abaixo:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>3 (três) posts no feed do Instagram</li>
                    <li>5 (cinco) stories com link</li>
                    <li>1 (um) Reels de até 60 segundos</li>
                  </ul>

                  <h5 className="font-bold text-gray-800 mt-6">CLÁUSULA 2ª - DO VALOR E PAGAMENTO</h5>
                  <p>
                    Pela prestação dos serviços, o CONTRATANTE pagará ao CONTRATADO o valor de <span className="bg-green-100 px-1 font-semibold">R$ 15.000,00</span> (quinze mil reais), conforme condições:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>50% na assinatura do contrato</li>
                    <li>50% após aprovação do conteúdo</li>
                  </ul>
                </div>

                {/* Área de Assinatura */}
                <div className="mt-8 pt-8 border-t">
                  <h5 className="font-bold text-gray-800 mb-4">ASSINATURAS</h5>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                      <Stamp className="mx-auto text-gray-400 mb-2" size={32} />
                      <p className="text-sm font-medium text-gray-600">Contratante</p>
                      <p className="text-xs text-gray-400">Fashion Brand X</p>
                      <button className="mt-2 text-xs text-indigo-600 hover:underline">+ Adicionar assinatura</button>
                    </div>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                      <Stamp className="mx-auto text-gray-400 mb-2" size={32} />
                      <p className="text-sm font-medium text-gray-600">Contratado</p>
                      <p className="text-xs text-gray-400">Maria Alves</p>
                      <button className="mt-2 text-xs text-indigo-600 hover:underline">+ Adicionar assinatura</button>
                    </div>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                      <Stamp className="mx-auto text-gray-400 mb-2" size={32} />
                      <p className="text-sm font-medium text-gray-600">Testemunha</p>
                      <p className="text-xs text-gray-400">Amplify</p>
                      <button className="mt-2 text-xs text-indigo-600 hover:underline">+ Adicionar assinatura</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Tela de Assinatura */}
      <div>
        <h3 className="text-xl font-semibold text-indigo-600 mb-4">3. Tela de Assinatura Digital</h3>
        <div className="bg-white rounded-xl shadow-lg p-6 border max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <PenTool className="text-green-600" size={32} />
            </div>
            <h4 className="text-xl font-bold text-gray-800">Assinar Contrato</h4>
            <p className="text-gray-500 text-sm">Contrato de Campanha - Verão 2026</p>
          </div>

          {/* Resumo do Contrato */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h5 className="font-semibold text-gray-700 mb-3">Resumo do Contrato</h5>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Marca</p>
                <p className="font-medium">Fashion Brand X</p>
              </div>
              <div>
                <p className="text-gray-500">Valor</p>
                <p className="font-medium text-green-600">R$ 15.000,00</p>
              </div>
              <div>
                <p className="text-gray-500">Período</p>
                <p className="font-medium">15 Jan - 28 Fev 2026</p>
              </div>
              <div>
                <p className="text-gray-500">Entregáveis</p>
                <p className="font-medium">3 Posts, 5 Stories, 1 Reels</p>
              </div>
            </div>
          </div>

          {/* Checkbox de Termos */}
          <div className="space-y-3 mb-6">
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" className="mt-1" />
              <span className="text-sm text-gray-600">
                Li e concordo com todos os termos e condições do contrato
              </span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" className="mt-1" />
              <span className="text-sm text-gray-600">
                Confirmo que as informações fornecidas são verdadeiras
              </span>
            </label>
          </div>

          {/* Área de Assinatura */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 mb-6">
            <p className="text-center text-gray-500 text-sm mb-4">Desenhe sua assinatura abaixo</p>
            <div className="h-32 bg-gray-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-400 italic">Área de assinatura</p>
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <button className="text-sm text-gray-500 hover:text-gray-700">Limpar</button>
              <button className="text-sm text-indigo-600 hover:text-indigo-700">Usar assinatura salva</button>
            </div>
          </div>

          {/* Segurança */}
          <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-6">
            <Shield size={14} />
            <span>Assinatura protegida com certificado digital ICP-Brasil</span>
          </div>

          {/* Botões */}
          <div className="flex gap-3">
            <button className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
              Recusar
            </button>
            <button className="flex-1 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center justify-center gap-2">
              <PenTool size={18} />
              Assinar Contrato
            </button>
          </div>
        </div>
      </div>

      {/* 4. Histórico e Auditoria */}
      <div>
        <h3 className="text-xl font-semibold text-indigo-600 mb-4">4. Histórico e Auditoria</h3>
        <div className="bg-white rounded-xl shadow-lg p-6 border">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h4 className="text-lg font-bold text-gray-800">Trilha de Auditoria</h4>
              <p className="text-gray-500 text-sm">Contrato de Campanha - Verão 2026</p>
            </div>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 flex items-center gap-2">
              <Download size={16} />
              Exportar Log
            </button>
          </div>

          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            <div className="space-y-6">
              <div className="flex gap-4 relative">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center z-10">
                  <CheckCircle className="text-green-600" size={20} />
                </div>
                <div className="flex-1 bg-green-50 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-gray-800">Contrato assinado por Fashion Brand X</p>
                      <p className="text-sm text-gray-500">Assinatura digital validada com certificado ICP-Brasil</p>
                    </div>
                    <span className="text-xs text-gray-400">18 Jan 2026, 14:32</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">IP: 189.xxx.xxx.xxx • Hash: 7f8a9b2c...</p>
                </div>
              </div>

              <div className="flex gap-4 relative">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center z-10">
                  <Eye className="text-blue-600" size={20} />
                </div>
                <div className="flex-1 bg-blue-50 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-gray-800">Contrato visualizado por Maria Alves</p>
                      <p className="text-sm text-gray-500">Documento aberto para leitura</p>
                    </div>
                    <span className="text-xs text-gray-400">18 Jan 2026, 10:15</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 relative">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center z-10">
                  <Send className="text-purple-600" size={20} />
                </div>
                <div className="flex-1 bg-purple-50 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-gray-800">Contrato enviado para assinatura</p>
                      <p className="text-sm text-gray-500">Enviado para: maria@email.com, brand@fashionx.com</p>
                    </div>
                    <span className="text-xs text-gray-400">17 Jan 2026, 16:45</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 relative">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center z-10">
                  <FileText className="text-gray-600" size={20} />
                </div>
                <div className="flex-1 bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-gray-800">Contrato criado</p>
                      <p className="text-sm text-gray-500">Criado por João Silva (Amplify)</p>
                    </div>
                    <span className="text-xs text-gray-400">15 Jan 2026, 09:30</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Mobile - Assinatura */}
      <div>
        <h3 className="text-xl font-semibold text-indigo-600 mb-4">5. Assinatura Mobile (Influenciador)</h3>
        <div className="flex justify-center gap-6">
          {/* Tela de Contratos Pendentes */}
          <div className="w-72 bg-gray-900 rounded-3xl p-2 shadow-xl">
            <div className="bg-white rounded-2xl overflow-hidden h-[580px]">
              {/* Header */}
              <div className="bg-indigo-600 text-white p-4">
                <div className="flex items-center gap-3">
                  <button className="p-1">←</button>
                  <div>
                    <h4 className="font-semibold">Meus Contratos</h4>
                    <p className="text-xs text-indigo-200">3 pendentes de assinatura</p>
                  </div>
                </div>
              </div>

              {/* Lista */}
              <div className="p-4 space-y-3">
                <div className="border-2 border-yellow-400 bg-yellow-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-yellow-400 text-yellow-900 text-xs rounded-full font-medium">Urgente</span>
                    <span className="text-xs text-gray-500">Expira em 2 dias</span>
                  </div>
                  <h5 className="font-semibold text-gray-800">Campanha Verão 2026</h5>
                  <p className="text-sm text-gray-500">Fashion Brand X</p>
                  <p className="text-lg font-bold text-green-600 mt-2">R$ 15.000</p>
                  <button className="w-full mt-3 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium">
                    Revisar e Assinar
                  </button>
                </div>

                <div className="border rounded-xl p-4">
                  <h5 className="font-semibold text-gray-800">Review de Produto</h5>
                  <p className="text-sm text-gray-500">TechStore</p>
                  <p className="text-lg font-bold text-green-600 mt-2">R$ 8.000</p>
                  <button className="w-full mt-3 py-2 border border-indigo-600 text-indigo-600 rounded-lg text-sm font-medium">
                    Ver Contrato
                  </button>
                </div>

                <div className="border rounded-xl p-4 opacity-60">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle size={16} className="text-green-500" />
                    <span className="text-xs text-green-600">Assinado</span>
                  </div>
                  <h5 className="font-semibold text-gray-800">Parceria Fitness</h5>
                  <p className="text-sm text-gray-500">GymLife</p>
                </div>
              </div>

              {/* Bottom Nav */}
              <div className="absolute bottom-2 left-2 right-2 bg-white border-t p-2 flex justify-around rounded-b-2xl">
                <button className="flex flex-col items-center text-gray-400 text-xs">
                  <FileText size={20} />
                  Contratos
                </button>
                <button className="flex flex-col items-center text-gray-400 text-xs">
                  <Bell size={20} />
                  Alertas
                </button>
                <button className="flex flex-col items-center text-gray-400 text-xs">
                  <History size={20} />
                  Histórico
                </button>
              </div>
            </div>
          </div>

          {/* Tela de Assinatura */}
          <div className="w-72 bg-gray-900 rounded-3xl p-2 shadow-xl">
            <div className="bg-white rounded-2xl overflow-hidden h-[580px]">
              {/* Header */}
              <div className="bg-green-600 text-white p-4">
                <div className="flex items-center gap-3">
                  <button className="p-1">←</button>
                  <div>
                    <h4 className="font-semibold">Assinar Contrato</h4>
                    <p className="text-xs text-green-200">Fashion Brand X</p>
                  </div>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-4">
                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-500">Valor</span>
                    <span className="font-bold text-green-600">R$ 15.000</span>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-500">Período</span>
                    <span className="font-medium">15 Jan - 28 Fev</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Entregáveis</span>
                    <span className="font-medium">9 conteúdos</span>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="flex items-start gap-2 text-sm mb-2">
                    <input type="checkbox" className="mt-1" defaultChecked />
                    <span className="text-gray-600">Li e concordo com os termos</span>
                  </label>
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 mb-4">
                  <p className="text-center text-gray-500 text-xs mb-2">Desenhe sua assinatura</p>
                  <div className="h-24 bg-gray-50 rounded flex items-center justify-center">
                    <p className="text-gray-400 italic text-sm">Toque para assinar</p>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 text-xs text-gray-400 mb-4">
                  <Shield size={12} />
                  <span>Assinatura segura</span>
                </div>

                <button className="w-full py-3 bg-green-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2">
                  <PenTool size={18} />
                  Assinar Agora
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
