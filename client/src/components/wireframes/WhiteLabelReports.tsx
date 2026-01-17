/**
 * Wireframes de Relatórios White-Label
 * Design: Amplify Platform - Gestão de Influenciadores
 * Autor: João Moretti
 */

import { motion } from "framer-motion";
import {
  FileText,
  Download,
  Share2,
  Eye,
  Palette,
  Image,
  Type,
  Layout,
  Settings,
  CheckCircle2,
  Plus,
  Edit,
  Copy,
  Trash2,
  Upload,
  Globe,
  Mail,
  Calendar,
  BarChart3,
  Users,
  TrendingUp,
  Target,
  DollarSign,
} from "lucide-react";

export default function WhiteLabelReports() {
  return (
    <div className="space-y-12">
      {/* Título da Seção */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Relatórios White-Label - Templates Personalizáveis
        </h2>
        <p className="text-gray-500">
          Crie relatórios profissionais com a marca do seu cliente
        </p>
      </div>

      {/* 1. Galeria de Templates */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h3 className="text-lg font-semibold text-orange-500">
          1. Galeria de Templates
        </h3>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xl font-bold text-gray-800">
                  Templates de Relatório
                </h4>
                <p className="text-gray-500 text-sm">
                  Escolha um template ou crie o seu próprio
                </p>
              </div>
              <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Criar Template
              </button>
            </div>
          </div>

          {/* Templates Grid */}
          <div className="p-6 grid grid-cols-3 gap-6">
            {/* Template 1 - Executivo */}
            <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-orange-300 hover:shadow-lg transition-all cursor-pointer group">
              <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 p-4 relative">
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 bg-orange-500 text-white text-xs rounded-full">
                    Popular
                  </span>
                </div>
                {/* Mini preview */}
                <div className="bg-white/10 rounded-lg p-3 h-full">
                  <div className="w-16 h-4 bg-white/30 rounded mb-2"></div>
                  <div className="w-full h-2 bg-white/20 rounded mb-1"></div>
                  <div className="w-3/4 h-2 bg-white/20 rounded mb-3"></div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-12 bg-white/20 rounded"></div>
                    <div className="h-12 bg-white/20 rounded"></div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h5 className="font-semibold text-gray-800 mb-1">
                  Executivo Premium
                </h5>
                <p className="text-sm text-gray-500 mb-3">
                  Design sofisticado para apresentações corporativas
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    <span className="w-4 h-4 rounded-full bg-slate-800"></span>
                    <span className="w-4 h-4 rounded-full bg-orange-500"></span>
                    <span className="w-4 h-4 rounded-full bg-white border border-gray-200"></span>
                  </div>
                  <button className="text-orange-500 text-sm font-medium group-hover:underline">
                    Usar Template
                  </button>
                </div>
              </div>
            </div>

            {/* Template 2 - Moderno */}
            <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-orange-300 hover:shadow-lg transition-all cursor-pointer group">
              <div className="h-48 bg-gradient-to-br from-violet-500 to-purple-600 p-4">
                <div className="bg-white/10 rounded-lg p-3 h-full">
                  <div className="w-12 h-12 bg-white/30 rounded-full mb-2"></div>
                  <div className="w-full h-2 bg-white/20 rounded mb-1"></div>
                  <div className="w-2/3 h-2 bg-white/20 rounded mb-3"></div>
                  <div className="flex gap-2">
                    <div className="flex-1 h-16 bg-white/20 rounded"></div>
                    <div className="flex-1 h-16 bg-white/20 rounded"></div>
                    <div className="flex-1 h-16 bg-white/20 rounded"></div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h5 className="font-semibold text-gray-800 mb-1">
                  Moderno Colorido
                </h5>
                <p className="text-sm text-gray-500 mb-3">
                  Visual vibrante para marcas jovens e dinâmicas
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    <span className="w-4 h-4 rounded-full bg-violet-500"></span>
                    <span className="w-4 h-4 rounded-full bg-purple-600"></span>
                    <span className="w-4 h-4 rounded-full bg-pink-500"></span>
                  </div>
                  <button className="text-orange-500 text-sm font-medium group-hover:underline">
                    Usar Template
                  </button>
                </div>
              </div>
            </div>

            {/* Template 3 - Minimalista */}
            <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-orange-300 hover:shadow-lg transition-all cursor-pointer group">
              <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 p-4">
                <div className="bg-white rounded-lg p-3 h-full shadow-sm">
                  <div className="w-20 h-3 bg-gray-300 rounded mb-3"></div>
                  <div className="w-full h-1.5 bg-gray-200 rounded mb-1"></div>
                  <div className="w-4/5 h-1.5 bg-gray-200 rounded mb-4"></div>
                  <div className="h-20 bg-gray-100 rounded border border-gray-200"></div>
                </div>
              </div>
              <div className="p-4">
                <h5 className="font-semibold text-gray-800 mb-1">
                  Minimalista Clean
                </h5>
                <p className="text-sm text-gray-500 mb-3">
                  Simplicidade elegante com foco nos dados
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    <span className="w-4 h-4 rounded-full bg-gray-800"></span>
                    <span className="w-4 h-4 rounded-full bg-gray-400"></span>
                    <span className="w-4 h-4 rounded-full bg-white border border-gray-200"></span>
                  </div>
                  <button className="text-orange-500 text-sm font-medium group-hover:underline">
                    Usar Template
                  </button>
                </div>
              </div>
            </div>

            {/* Template 4 - Gradient */}
            <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-orange-300 hover:shadow-lg transition-all cursor-pointer group">
              <div className="h-48 bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 p-4">
                <div className="bg-white/20 backdrop-blur rounded-lg p-3 h-full">
                  <div className="w-16 h-4 bg-white/40 rounded mb-2"></div>
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <div className="h-8 bg-white/30 rounded"></div>
                    <div className="h-8 bg-white/30 rounded"></div>
                  </div>
                  <div className="h-16 bg-white/20 rounded"></div>
                </div>
              </div>
              <div className="p-4">
                <h5 className="font-semibold text-gray-800 mb-1">
                  Gradient Bold
                </h5>
                <p className="text-sm text-gray-500 mb-3">
                  Impactante com gradientes vibrantes
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    <span className="w-4 h-4 rounded-full bg-orange-400"></span>
                    <span className="w-4 h-4 rounded-full bg-pink-500"></span>
                    <span className="w-4 h-4 rounded-full bg-purple-600"></span>
                  </div>
                  <button className="text-orange-500 text-sm font-medium group-hover:underline">
                    Usar Template
                  </button>
                </div>
              </div>
            </div>

            {/* Template 5 - Corporativo */}
            <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-orange-300 hover:shadow-lg transition-all cursor-pointer group">
              <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 p-4">
                <div className="bg-white/10 rounded-lg p-3 h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-white/30 rounded"></div>
                    <div className="w-20 h-3 bg-white/30 rounded"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-6 bg-white/20 rounded"></div>
                    <div className="h-6 bg-white/20 rounded"></div>
                    <div className="h-6 bg-white/20 rounded"></div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h5 className="font-semibold text-gray-800 mb-1">
                  Corporativo Azul
                </h5>
                <p className="text-sm text-gray-500 mb-3">
                  Profissional para empresas tradicionais
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    <span className="w-4 h-4 rounded-full bg-blue-600"></span>
                    <span className="w-4 h-4 rounded-full bg-blue-800"></span>
                    <span className="w-4 h-4 rounded-full bg-white border border-gray-200"></span>
                  </div>
                  <button className="text-orange-500 text-sm font-medium group-hover:underline">
                    Usar Template
                  </button>
                </div>
              </div>
            </div>

            {/* Criar Novo */}
            <div className="border-2 border-dashed border-gray-300 rounded-xl overflow-hidden hover:border-orange-400 transition-all cursor-pointer group flex items-center justify-center h-[280px]">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-orange-100 transition-colors">
                  <Plus className="w-8 h-8 text-gray-400 group-hover:text-orange-500" />
                </div>
                <p className="font-medium text-gray-600 group-hover:text-orange-500">
                  Criar Template Personalizado
                </p>
                <p className="text-sm text-gray-400">
                  Do zero ou baseado em existente
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 2. Editor de Template */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-4"
      >
        <h3 className="text-lg font-semibold text-orange-500">
          2. Editor de Template White-Label
        </h3>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          {/* Toolbar */}
          <div className="p-4 border-b border-gray-100 bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button className="px-3 py-2 bg-white border border-gray-200 rounded-lg flex items-center gap-2 hover:bg-gray-50">
                  <Palette className="w-4 h-4" />
                  Cores
                </button>
                <button className="px-3 py-2 bg-white border border-gray-200 rounded-lg flex items-center gap-2 hover:bg-gray-50">
                  <Type className="w-4 h-4" />
                  Tipografia
                </button>
                <button className="px-3 py-2 bg-white border border-gray-200 rounded-lg flex items-center gap-2 hover:bg-gray-50">
                  <Image className="w-4 h-4" />
                  Logo
                </button>
                <button className="px-3 py-2 bg-white border border-gray-200 rounded-lg flex items-center gap-2 hover:bg-gray-50">
                  <Layout className="w-4 h-4" />
                  Layout
                </button>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-2 border border-gray-200 rounded-lg flex items-center gap-2 hover:bg-gray-50">
                  <Eye className="w-4 h-4" />
                  Preview
                </button>
                <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg">
                  Salvar Template
                </button>
              </div>
            </div>
          </div>

          <div className="flex">
            {/* Sidebar de Configurações */}
            <div className="w-80 border-r border-gray-100 p-6 space-y-6">
              {/* Marca do Cliente */}
              <div>
                <h5 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  Marca do Cliente
                </h5>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm text-gray-500 block mb-1">
                      Nome da Empresa
                    </label>
                    <input
                      type="text"
                      placeholder="Fashion Brand X"
                      className="w-full p-2 border border-gray-200 rounded-lg text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-500 block mb-1">
                      Logo
                    </label>
                    <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 text-center hover:border-orange-300 cursor-pointer">
                      <Upload className="w-6 h-6 text-gray-400 mx-auto mb-1" />
                      <p className="text-xs text-gray-500">
                        Arraste ou clique para upload
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Paleta de Cores */}
              <div>
                <h5 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
                  <Palette className="w-4 h-4" />
                  Paleta de Cores
                </h5>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 border-2 border-white shadow cursor-pointer"></div>
                    <div>
                      <p className="text-sm font-medium">Cor Primária</p>
                      <p className="text-xs text-gray-500">#1E293B</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-500 border-2 border-white shadow cursor-pointer"></div>
                    <div>
                      <p className="text-sm font-medium">Cor de Destaque</p>
                      <p className="text-xs text-gray-500">#F97316</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 border-2 border-gray-200 cursor-pointer"></div>
                    <div>
                      <p className="text-sm font-medium">Cor de Fundo</p>
                      <p className="text-xs text-gray-500">#F3F4F6</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Seções do Relatório */}
              <div>
                <h5 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
                  <Layout className="w-4 h-4" />
                  Seções Incluídas
                </h5>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg cursor-pointer">
                    <input type="checkbox" checked readOnly className="w-4 h-4" />
                    <span className="text-sm">Resumo Executivo</span>
                  </label>
                  <label className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg cursor-pointer">
                    <input type="checkbox" checked readOnly className="w-4 h-4" />
                    <span className="text-sm">Métricas de Performance</span>
                  </label>
                  <label className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg cursor-pointer">
                    <input type="checkbox" checked readOnly className="w-4 h-4" />
                    <span className="text-sm">Análise por Influenciador</span>
                  </label>
                  <label className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg cursor-pointer">
                    <input type="checkbox" checked readOnly className="w-4 h-4" />
                    <span className="text-sm">ROI e Conversões</span>
                  </label>
                  <label className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg cursor-pointer">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="text-sm">Comparativo com Benchmark</span>
                  </label>
                  <label className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg cursor-pointer">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="text-sm">Recomendações</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Preview do Relatório */}
            <div className="flex-1 p-6 bg-gray-100">
              <div className="bg-white rounded-xl shadow-lg max-w-2xl mx-auto overflow-hidden">
                {/* Header do Relatório */}
                <div className="bg-slate-800 p-8 text-white">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-32 h-8 bg-white/20 rounded"></div>
                    <p className="text-sm text-white/60">Janeiro 2025</p>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">
                    Relatório de Campanha
                  </h2>
                  <p className="text-white/70">Lançamento Verão 2025</p>
                </div>

                {/* Conteúdo */}
                <div className="p-8 space-y-6">
                  {/* KPIs */}
                  <div className="grid grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <BarChart3 className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-gray-800">12.4M</p>
                      <p className="text-xs text-gray-500">Impressões</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <Users className="w-6 h-6 text-pink-500 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-gray-800">8.7M</p>
                      <p className="text-xs text-gray-500">Alcance</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <TrendingUp className="w-6 h-6 text-green-500 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-gray-800">4.2%</p>
                      <p className="text-xs text-gray-500">Engajamento</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <DollarSign className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-gray-800">5.2x</p>
                      <p className="text-xs text-gray-500">ROI</p>
                    </div>
                  </div>

                  {/* Gráfico Placeholder */}
                  <div className="h-40 bg-gray-100 rounded-xl flex items-center justify-center">
                    <p className="text-gray-400">Gráfico de Performance</p>
                  </div>

                  {/* Footer */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-400">
                    <p>Relatório gerado por Amplify</p>
                    <p>Página 1 de 8</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 3. Geração e Compartilhamento */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        <h3 className="text-lg font-semibold text-orange-500">
          3. Geração e Compartilhamento de Relatórios
        </h3>

        <div className="grid grid-cols-2 gap-6">
          {/* Gerar Relatório */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h4 className="text-lg font-bold text-gray-800">
                Gerar Novo Relatório
              </h4>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="text-sm text-gray-500 block mb-1">
                  Campanha
                </label>
                <select className="w-full p-3 border border-gray-200 rounded-lg">
                  <option>Lançamento Verão 2025</option>
                  <option>Black Friday Tech</option>
                  <option>Fitness Challenge</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-500 block mb-1">
                  Template
                </label>
                <select className="w-full p-3 border border-gray-200 rounded-lg">
                  <option>Executivo Premium</option>
                  <option>Moderno Colorido</option>
                  <option>Minimalista Clean</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-500 block mb-1">
                  Período
                </label>
                <div className="flex gap-2">
                  <input
                    type="date"
                    className="flex-1 p-3 border border-gray-200 rounded-lg"
                  />
                  <input
                    type="date"
                    className="flex-1 p-3 border border-gray-200 rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-500 block mb-1">
                  Formato de Exportação
                </label>
                <div className="flex gap-2">
                  <button className="flex-1 p-3 border-2 border-orange-500 bg-orange-50 text-orange-600 rounded-lg font-medium">
                    PDF
                  </button>
                  <button className="flex-1 p-3 border border-gray-200 rounded-lg text-gray-600">
                    PowerPoint
                  </button>
                  <button className="flex-1 p-3 border border-gray-200 rounded-lg text-gray-600">
                    Web Link
                  </button>
                </div>
              </div>
              <button className="w-full py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg font-medium flex items-center justify-center gap-2">
                <FileText className="w-5 h-5" />
                Gerar Relatório
              </button>
            </div>
          </div>

          {/* Compartilhamento */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h4 className="text-lg font-bold text-gray-800">
                Opções de Compartilhamento
              </h4>
            </div>
            <div className="p-6 space-y-4">
              {/* Link Público */}
              <div className="p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="font-medium text-gray-800">Link Público</p>
                    <p className="text-sm text-gray-500">
                      Compartilhe via URL única
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value="https://amplify.app/report/abc123"
                    readOnly
                    className="flex-1 p-2 bg-white border border-gray-200 rounded-lg text-sm"
                  />
                  <button className="px-3 py-2 bg-blue-500 text-white rounded-lg">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Email */}
              <div className="p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="font-medium text-gray-800">Enviar por Email</p>
                    <p className="text-sm text-gray-500">
                      Envie diretamente para o cliente
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="cliente@empresa.com"
                    className="flex-1 p-2 bg-white border border-gray-200 rounded-lg text-sm"
                  />
                  <button className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm">
                    Enviar
                  </button>
                </div>
              </div>

              {/* Agendamento */}
              <div className="p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="w-5 h-5 text-purple-500" />
                  <div>
                    <p className="font-medium text-gray-800">
                      Agendar Envio Automático
                    </p>
                    <p className="text-sm text-gray-500">
                      Relatórios recorrentes
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <select className="flex-1 p-2 bg-white border border-gray-200 rounded-lg text-sm">
                    <option>Semanalmente</option>
                    <option>Quinzenalmente</option>
                    <option>Mensalmente</option>
                  </select>
                  <button className="px-4 py-2 bg-purple-500 text-white rounded-lg text-sm">
                    Agendar
                  </button>
                </div>
              </div>

              {/* Download */}
              <button className="w-full py-3 border border-gray-200 rounded-lg text-gray-600 flex items-center justify-center gap-2 hover:bg-gray-50">
                <Download className="w-5 h-5" />
                Download Direto (PDF)
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 4. Histórico de Relatórios */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-4"
      >
        <h3 className="text-lg font-semibold text-orange-500">
          4. Histórico de Relatórios Gerados
        </h3>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="p-6">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-500 border-b border-gray-100">
                  <th className="pb-3 font-medium">Relatório</th>
                  <th className="pb-3 font-medium">Campanha</th>
                  <th className="pb-3 font-medium">Cliente</th>
                  <th className="pb-3 font-medium">Data</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Ações</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-50">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-5 h-5 text-red-500" />
                      </div>
                      <span className="font-medium">
                        Relatório_Verao2025_Final.pdf
                      </span>
                    </div>
                  </td>
                  <td className="py-4">Lançamento Verão 2025</td>
                  <td className="py-4">Fashion Brand X</td>
                  <td className="py-4">25/01/2025</td>
                  <td className="py-4">
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                      Enviado
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex gap-2">
                      <button className="p-1.5 hover:bg-gray-100 rounded">
                        <Eye className="w-4 h-4 text-gray-500" />
                      </button>
                      <button className="p-1.5 hover:bg-gray-100 rounded">
                        <Download className="w-4 h-4 text-gray-500" />
                      </button>
                      <button className="p-1.5 hover:bg-gray-100 rounded">
                        <Share2 className="w-4 h-4 text-gray-500" />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-50">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-5 h-5 text-orange-500" />
                      </div>
                      <span className="font-medium">
                        Relatório_BlackFriday_v2.pdf
                      </span>
                    </div>
                  </td>
                  <td className="py-4">Black Friday Tech</td>
                  <td className="py-4">TechStore</td>
                  <td className="py-4">20/01/2025</td>
                  <td className="py-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                      Visualizado
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex gap-2">
                      <button className="p-1.5 hover:bg-gray-100 rounded">
                        <Eye className="w-4 h-4 text-gray-500" />
                      </button>
                      <button className="p-1.5 hover:bg-gray-100 rounded">
                        <Download className="w-4 h-4 text-gray-500" />
                      </button>
                      <button className="p-1.5 hover:bg-gray-100 rounded">
                        <Share2 className="w-4 h-4 text-gray-500" />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-50">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-5 h-5 text-purple-500" />
                      </div>
                      <span className="font-medium">
                        Relatório_Fitness_Mensal.pdf
                      </span>
                    </div>
                  </td>
                  <td className="py-4">Fitness Challenge</td>
                  <td className="py-4">GymLife</td>
                  <td className="py-4">15/01/2025</td>
                  <td className="py-4">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">
                      Rascunho
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex gap-2">
                      <button className="p-1.5 hover:bg-gray-100 rounded">
                        <Edit className="w-4 h-4 text-gray-500" />
                      </button>
                      <button className="p-1.5 hover:bg-gray-100 rounded">
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
