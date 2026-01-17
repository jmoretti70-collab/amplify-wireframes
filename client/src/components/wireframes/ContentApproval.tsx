/**
 * Wireframes do Fluxo de Aprovação de Conteúdo
 * Design: Amplify Platform - Gestão de Influenciadores
 * Autor: João Moretti
 */

import { motion } from "framer-motion";
import {
  CheckCircle2,
  XCircle,
  Clock,
  MessageSquare,
  Image,
  Video,
  FileText,
  Send,
  Edit,
  Eye,
  Download,
  RotateCcw,
  ThumbsUp,
  ThumbsDown,
  AlertTriangle,
  Calendar,
  User,
  Filter,
  Search,
  MoreVertical,
  Play,
  ChevronRight,
  ChevronLeft,
  Paperclip,
} from "lucide-react";

export default function ContentApproval() {
  return (
    <div className="space-y-12">
      {/* Título da Seção */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Fluxo de Aprovação de Conteúdo
        </h2>
        <p className="text-gray-500">
          Submissão, revisão e aprovação de posts antes da publicação
        </p>
      </div>

      {/* 1. Dashboard de Aprovações */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h3 className="text-lg font-semibold text-orange-500">
          1. Dashboard de Aprovações (Visão da Agência)
        </h3>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xl font-bold text-gray-800">
                  Aprovação de Conteúdo
                </h4>
                <p className="text-gray-500 text-sm">
                  Revise e aprove conteúdos dos influenciadores
                </p>
              </div>
              <div className="flex gap-3">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Buscar conteúdo..."
                    className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm w-64"
                  />
                </div>
                <button className="px-4 py-2 border border-gray-200 rounded-lg flex items-center gap-2 hover:bg-gray-50">
                  <Filter className="w-4 h-4" />
                  Filtros
                </button>
              </div>
            </div>
          </div>

          {/* Status Cards */}
          <div className="p-6 grid grid-cols-4 gap-4">
            <div className="bg-yellow-50 rounded-xl p-4 cursor-pointer hover:bg-yellow-100 transition-colors border-2 border-yellow-200">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-yellow-500" />
                <span className="text-yellow-700 font-medium">
                  Aguardando Revisão
                </span>
              </div>
              <p className="text-3xl font-bold text-yellow-600">12</p>
              <p className="text-sm text-yellow-600/70">3 urgentes</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 cursor-pointer hover:bg-blue-100 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Edit className="w-5 h-5 text-blue-500" />
                <span className="text-blue-700 font-medium">Em Revisão</span>
              </div>
              <p className="text-3xl font-bold text-blue-600">5</p>
              <p className="text-sm text-blue-600/70">2 com feedback</p>
            </div>
            <div className="bg-green-50 rounded-xl p-4 cursor-pointer hover:bg-green-100 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-green-700 font-medium">Aprovados</span>
              </div>
              <p className="text-3xl font-bold text-green-600">28</p>
              <p className="text-sm text-green-600/70">Esta semana</p>
            </div>
            <div className="bg-red-50 rounded-xl p-4 cursor-pointer hover:bg-red-100 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <XCircle className="w-5 h-5 text-red-500" />
                <span className="text-red-700 font-medium">Rejeitados</span>
              </div>
              <p className="text-3xl font-bold text-red-600">3</p>
              <p className="text-sm text-red-600/70">Requer ajustes</p>
            </div>
          </div>

          {/* Lista de Conteúdos */}
          <div className="px-6 pb-6">
            <div className="space-y-3">
              {/* Item 1 - Urgente */}
              <div className="flex items-center gap-4 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <Video className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 bg-red-500 text-white text-xs rounded-full">
                      Urgente
                    </span>
                    <span className="px-2 py-0.5 bg-yellow-200 text-yellow-700 text-xs rounded-full">
                      Aguardando
                    </span>
                  </div>
                  <p className="font-medium text-gray-800">
                    Reels - Lançamento Coleção Verão
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      Maria Alves
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      Prazo: Hoje, 18h
                    </span>
                    <span>Fashion Brand X</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" />
                    Aprovar
                  </button>
                  <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    Revisar
                  </button>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg overflow-hidden relative">
                  <Image className="w-8 h-8 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 bg-yellow-200 text-yellow-700 text-xs rounded-full">
                      Aguardando
                    </span>
                  </div>
                  <p className="font-medium text-gray-800">
                    Post Feed - Produto em Destaque
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      Pedro Santos
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      Prazo: Amanhã
                    </span>
                    <span>TechStore</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" />
                    Aprovar
                  </button>
                  <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    Revisar
                  </button>
                </div>
              </div>

              {/* Item 3 - Com Feedback */}
              <div className="flex items-center gap-4 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-200 to-red-200 rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 bg-blue-200 text-blue-700 text-xs rounded-full">
                      Em Revisão
                    </span>
                    <span className="px-2 py-0.5 bg-orange-200 text-orange-700 text-xs rounded-full flex items-center gap-1">
                      <MessageSquare className="w-3 h-3" />2 comentários
                    </span>
                  </div>
                  <p className="font-medium text-gray-800">
                    Stories (6 sequências) - Unboxing
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      Julia Oliveira
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      Prazo: 28/01
                    </span>
                    <span>GymLife</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm flex items-center gap-1">
                    <MessageSquare className="w-4 h-4" />
                    Ver Feedback
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 2. Tela de Revisão Detalhada */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-4"
      >
        <h3 className="text-lg font-semibold text-orange-500">
          2. Tela de Revisão Detalhada
        </h3>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="flex">
            {/* Preview do Conteúdo */}
            <div className="w-1/2 bg-gray-900 p-8 flex items-center justify-center">
              <div className="relative">
                {/* Mockup de celular */}
                <div className="w-72 h-[580px] bg-black rounded-[3rem] p-3 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 rounded-[2.5rem] overflow-hidden relative">
                    {/* Header do Story */}
                    <div className="absolute top-0 left-0 right-0 p-4">
                      <div className="flex gap-1 mb-3">
                        <div className="flex-1 h-0.5 bg-white rounded-full"></div>
                        <div className="flex-1 h-0.5 bg-white/40 rounded-full"></div>
                        <div className="flex-1 h-0.5 bg-white/40 rounded-full"></div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/30 rounded-full"></div>
                        <span className="text-white text-sm font-medium">
                          @mariaalves
                        </span>
                        <span className="text-white/60 text-xs">2h</span>
                      </div>
                    </div>

                    {/* Conteúdo do Story */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <p className="text-2xl font-bold mb-2">
                          Nova Coleção! 🔥
                        </p>
                        <p className="text-sm opacity-80">
                          Arraste para ver mais
                        </p>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="absolute bottom-8 left-4 right-4">
                      <div className="bg-white/20 backdrop-blur rounded-full py-3 px-4 text-center">
                        <span className="text-white text-sm font-medium">
                          Ver Coleção ↑
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navegação entre conteúdos */}
                <div className="absolute top-1/2 -translate-y-1/2 -left-12">
                  <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center">
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 -right-12">
                  <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center">
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Painel de Revisão */}
            <div className="w-1/2 p-6 space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold text-gray-800">
                    Stories - Lançamento Coleção
                  </h4>
                  <p className="text-sm text-gray-500">
                    Sequência 1 de 6 • Enviado há 2 horas
                  </p>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <MoreVertical className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Informações */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">Influenciador</p>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-pink-200 rounded-full flex items-center justify-center text-xs font-bold text-pink-600">
                      MA
                    </div>
                    <span className="font-medium text-sm">Maria Alves</span>
                  </div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">Campanha</p>
                  <p className="font-medium text-sm">Lançamento Verão 2025</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">Tipo de Conteúdo</p>
                  <p className="font-medium text-sm">Stories (6 sequências)</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">Prazo</p>
                  <p className="font-medium text-sm text-orange-500">
                    Hoje, 18:00
                  </p>
                </div>
              </div>

              {/* Checklist de Aprovação */}
              <div>
                <h5 className="font-medium text-gray-800 mb-3">
                  Checklist de Aprovação
                </h5>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-2 bg-green-50 rounded-lg">
                    <input
                      type="checkbox"
                      checked
                      readOnly
                      className="w-4 h-4 text-green-500"
                    />
                    <span className="text-sm text-green-700">
                      Segue o briefing da campanha
                    </span>
                  </label>
                  <label className="flex items-center gap-3 p-2 bg-green-50 rounded-lg">
                    <input
                      type="checkbox"
                      checked
                      readOnly
                      className="w-4 h-4 text-green-500"
                    />
                    <span className="text-sm text-green-700">
                      Hashtags corretas incluídas
                    </span>
                  </label>
                  <label className="flex items-center gap-3 p-2 bg-green-50 rounded-lg">
                    <input
                      type="checkbox"
                      checked
                      readOnly
                      className="w-4 h-4 text-green-500"
                    />
                    <span className="text-sm text-green-700">
                      Menção à marca presente
                    </span>
                  </label>
                  <label className="flex items-center gap-3 p-2 bg-yellow-50 rounded-lg">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="text-sm text-yellow-700">
                      Qualidade de imagem/vídeo adequada
                    </span>
                  </label>
                  <label className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="text-sm text-gray-600">
                      Disclosure de publicidade (#ad, #publi)
                    </span>
                  </label>
                </div>
              </div>

              {/* Comentários */}
              <div>
                <h5 className="font-medium text-gray-800 mb-3">Comentários</h5>
                <div className="space-y-3 max-h-32 overflow-y-auto">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-xs font-bold text-blue-600">
                      AG
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-sm">
                          Ana (Agência)
                        </span>
                        <span className="text-xs text-gray-400">há 1h</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Ótimo conteúdo! Só adicionar a hashtag #FashionBrandX
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <input
                    type="text"
                    placeholder="Adicionar comentário..."
                    className="flex-1 p-2 border border-gray-200 rounded-lg text-sm"
                  />
                  <button className="px-3 py-2 bg-gray-100 rounded-lg">
                    <Send className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Ações */}
              <div className="flex gap-3 pt-4 border-t border-gray-100">
                <button className="flex-1 py-3 bg-red-100 text-red-600 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-red-200">
                  <XCircle className="w-5 h-5" />
                  Rejeitar
                </button>
                <button className="flex-1 py-3 bg-yellow-100 text-yellow-600 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-yellow-200">
                  <RotateCcw className="w-5 h-5" />
                  Solicitar Ajustes
                </button>
                <button className="flex-1 py-3 bg-green-500 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-green-600">
                  <CheckCircle2 className="w-5 h-5" />
                  Aprovar
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 3. Submissão de Conteúdo (Visão do Influenciador - Mobile) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        <h3 className="text-lg font-semibold text-orange-500">
          3. Submissão de Conteúdo (PWA Mobile - Influenciador)
        </h3>

        <div className="flex justify-center gap-8">
          {/* Tela 1 - Lista de Entregáveis */}
          <div className="w-72">
            <p className="text-center text-sm text-gray-500 mb-3">
              Lista de Entregáveis
            </p>
            <div className="bg-black rounded-[2.5rem] p-2 shadow-xl">
              <div className="bg-white rounded-[2rem] overflow-hidden h-[550px]">
                {/* Header */}
                <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-4 pt-8">
                  <div className="flex items-center gap-3 text-white">
                    <ChevronLeft className="w-6 h-6" />
                    <div>
                      <p className="font-bold">Verão 2025</p>
                      <p className="text-xs text-white/80">Fashion Brand X</p>
                    </div>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-4 space-y-3">
                  <p className="text-sm font-medium text-gray-500">
                    Seus Entregáveis
                  </p>

                  {/* Item 1 - Pendente */}
                  <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-0.5 bg-yellow-200 text-yellow-700 text-xs rounded-full">
                        Pendente
                      </span>
                      <span className="text-xs text-gray-500">
                        Prazo: Hoje
                      </span>
                    </div>
                    <p className="font-medium text-sm">1 Reels (30-60s)</p>
                    <button className="w-full mt-2 py-2 bg-orange-500 text-white rounded-lg text-sm font-medium">
                      Enviar Conteúdo
                    </button>
                  </div>

                  {/* Item 2 - Em Revisão */}
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-0.5 bg-blue-200 text-blue-700 text-xs rounded-full">
                        Em Revisão
                      </span>
                      <span className="text-xs text-gray-500">
                        Enviado ontem
                      </span>
                    </div>
                    <p className="font-medium text-sm">3 Stories</p>
                    <div className="flex items-center gap-1 mt-2 text-xs text-blue-600">
                      <Clock className="w-3 h-3" />
                      Aguardando aprovação
                    </div>
                  </div>

                  {/* Item 3 - Aprovado */}
                  <div className="p-3 bg-green-50 border border-green-200 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-0.5 bg-green-200 text-green-700 text-xs rounded-full">
                        Aprovado
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                    </div>
                    <p className="font-medium text-sm">1 Post Feed</p>
                    <div className="flex items-center gap-1 mt-2 text-xs text-green-600">
                      <CheckCircle2 className="w-3 h-3" />
                      Pronto para publicar
                    </div>
                  </div>

                  {/* Item 4 - Ajustes */}
                  <div className="p-3 bg-red-50 border border-red-200 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-0.5 bg-red-200 text-red-700 text-xs rounded-full">
                        Ajustes
                      </span>
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                    </div>
                    <p className="font-medium text-sm">1 Vídeo YouTube</p>
                    <button className="w-full mt-2 py-2 border border-red-300 text-red-600 rounded-lg text-sm font-medium">
                      Ver Feedback
                    </button>
                  </div>
                </div>

                {/* Bottom Nav */}
                <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-2 flex justify-around">
                  <div className="text-center p-2">
                    <div className="w-6 h-6 mx-auto text-gray-400">🏠</div>
                    <p className="text-xs text-gray-400">Home</p>
                  </div>
                  <div className="text-center p-2">
                    <div className="w-6 h-6 mx-auto text-orange-500">📋</div>
                    <p className="text-xs text-orange-500">Campanhas</p>
                  </div>
                  <div className="text-center p-2">
                    <div className="w-6 h-6 mx-auto text-gray-400">💬</div>
                    <p className="text-xs text-gray-400">Chat</p>
                  </div>
                  <div className="text-center p-2">
                    <div className="w-6 h-6 mx-auto text-gray-400">👤</div>
                    <p className="text-xs text-gray-400">Perfil</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tela 2 - Upload de Conteúdo */}
          <div className="w-72">
            <p className="text-center text-sm text-gray-500 mb-3">
              Upload de Conteúdo
            </p>
            <div className="bg-black rounded-[2.5rem] p-2 shadow-xl">
              <div className="bg-white rounded-[2rem] overflow-hidden h-[550px]">
                {/* Header */}
                <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-4 pt-8">
                  <div className="flex items-center gap-3 text-white">
                    <ChevronLeft className="w-6 h-6" />
                    <p className="font-bold">Enviar Reels</p>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-4 space-y-4">
                  {/* Área de Upload */}
                  <div className="border-2 border-dashed border-orange-300 rounded-xl p-6 text-center bg-orange-50">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Video className="w-8 h-8 text-orange-500" />
                    </div>
                    <p className="font-medium text-gray-800 mb-1">
                      Arraste seu vídeo aqui
                    </p>
                    <p className="text-xs text-gray-500 mb-3">
                      ou toque para selecionar
                    </p>
                    <button className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm">
                      Escolher Arquivo
                    </button>
                  </div>

                  {/* Requisitos */}
                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-xs font-medium text-gray-700 mb-2">
                      Requisitos:
                    </p>
                    <ul className="text-xs text-gray-500 space-y-1">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-green-500" />
                        Duração: 30-60 segundos
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-green-500" />
                        Formato: MP4, MOV
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-green-500" />
                        Resolução: 1080x1920
                      </li>
                    </ul>
                  </div>

                  {/* Legenda */}
                  <div>
                    <label className="text-xs font-medium text-gray-700 block mb-1">
                      Legenda do Post
                    </label>
                    <textarea
                      placeholder="Escreva a legenda que será usada..."
                      className="w-full p-3 border border-gray-200 rounded-xl text-sm h-20 resize-none"
                    ></textarea>
                  </div>

                  {/* Hashtags */}
                  <div>
                    <label className="text-xs font-medium text-gray-700 block mb-1">
                      Hashtags Obrigatórias
                    </label>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-orange-100 text-orange-600 rounded-full text-xs">
                        #FashionBrandX
                      </span>
                      <span className="px-2 py-1 bg-orange-100 text-orange-600 rounded-full text-xs">
                        #Verão2025
                      </span>
                      <span className="px-2 py-1 bg-orange-100 text-orange-600 rounded-full text-xs">
                        #publi
                      </span>
                    </div>
                  </div>

                  {/* Botão Enviar */}
                  <button className="w-full py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-medium flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Enviar para Aprovação
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tela 3 - Feedback */}
          <div className="w-72">
            <p className="text-center text-sm text-gray-500 mb-3">
              Feedback da Marca
            </p>
            <div className="bg-black rounded-[2.5rem] p-2 shadow-xl">
              <div className="bg-white rounded-[2rem] overflow-hidden h-[550px]">
                {/* Header */}
                <div className="bg-gradient-to-r from-red-500 to-orange-500 p-4 pt-8">
                  <div className="flex items-center gap-3 text-white">
                    <ChevronLeft className="w-6 h-6" />
                    <div>
                      <p className="font-bold">Ajustes Necessários</p>
                      <p className="text-xs text-white/80">Vídeo YouTube</p>
                    </div>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-4 space-y-4">
                  {/* Preview do conteúdo */}
                  <div className="relative rounded-xl overflow-hidden bg-gray-200 h-32">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 rounded text-white text-xs">
                      5:32
                    </div>
                  </div>

                  {/* Feedback */}
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertTriangle className="w-5 h-5 text-red-500" />
                      <p className="font-medium text-red-700">
                        Ajustes Solicitados
                      </p>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500">•</span>
                        Adicionar menção à marca nos primeiros 10 segundos
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500">•</span>
                        Incluir link do produto na descrição
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500">•</span>
                        Melhorar iluminação na demonstração do produto
                      </li>
                    </ul>
                  </div>

                  {/* Comentário da marca */}
                  <div className="bg-gray-50 rounded-xl p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs text-white font-bold">
                        FB
                      </div>
                      <span className="text-sm font-medium">Fashion Brand</span>
                      <span className="text-xs text-gray-400">há 2h</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      "O conteúdo está ótimo! Só precisamos desses pequenos
                      ajustes para ficar perfeito. 😊"
                    </p>
                  </div>

                  {/* Ações */}
                  <div className="space-y-2">
                    <button className="w-full py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-medium">
                      Enviar Nova Versão
                    </button>
                    <button className="w-full py-3 border border-gray-200 text-gray-600 rounded-xl font-medium flex items-center justify-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Responder
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 4. Fluxo de Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-4"
      >
        <h3 className="text-lg font-semibold text-orange-500">
          4. Fluxo de Aprovação - Status
        </h3>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-3">
                <Send className="w-8 h-8 text-white" />
              </div>
              <p className="font-medium text-gray-800">Enviado</p>
              <p className="text-xs text-gray-500">Pelo influenciador</p>
            </div>

            {/* Arrow */}
            <div className="flex-1 h-1 bg-green-500 mx-4"></div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-3">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <p className="font-medium text-gray-800">Em Revisão</p>
              <p className="text-xs text-gray-500">Pela agência</p>
            </div>

            {/* Arrow */}
            <div className="flex-1 h-1 bg-gray-200 mx-4"></div>

            {/* Step 3 - Branch */}
            <div className="flex flex-col items-center relative">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-3">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <p className="font-medium text-gray-800">Feedback</p>
              <p className="text-xs text-gray-500">Ajustes necessários</p>

              {/* Loop back arrow */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                <RotateCcw className="w-5 h-5 text-yellow-500" />
              </div>
            </div>

            {/* Arrow */}
            <div className="flex-1 h-1 bg-gray-200 mx-4"></div>

            {/* Step 4 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-3">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <p className="font-medium text-gray-800">Aprovado</p>
              <p className="text-xs text-gray-500">Pronto para publicar</p>
            </div>
          </div>

          {/* Legenda */}
          <div className="flex justify-center gap-8 mt-12 pt-8 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Concluído</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Em andamento</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Requer ação</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
              <span className="text-sm text-gray-600">Pendente</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
