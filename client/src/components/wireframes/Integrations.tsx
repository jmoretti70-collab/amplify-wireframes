/**
 * Wireframes do Módulo de Integrações
 * Design: Amplify Platform - Gestão de Influenciadores
 * Autor: João Moretti
 */

import { motion } from "framer-motion";
import {
  Link2,
  Settings,
  CheckCircle2,
  XCircle,
  RefreshCw,
  Key,
  Globe,
  Webhook,
  Database,
  ShoppingCart,
  Zap,
  AlertTriangle,
  Clock,
  ArrowRight,
  Plus,
  Trash2,
  Edit,
  Eye,
  Copy,
  ExternalLink,
} from "lucide-react";

// Ícones de redes sociais simulados
const InstagramIcon = () => (
  <div className="w-6 h-6 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-lg flex items-center justify-center">
    <span className="text-white text-xs font-bold">IG</span>
  </div>
);

const TikTokIcon = () => (
  <div className="w-6 h-6 bg-black rounded-lg flex items-center justify-center">
    <span className="text-white text-xs font-bold">TT</span>
  </div>
);

const YouTubeIcon = () => (
  <div className="w-6 h-6 bg-red-600 rounded-lg flex items-center justify-center">
    <span className="text-white text-xs font-bold">YT</span>
  </div>
);

const TwitterIcon = () => (
  <div className="w-6 h-6 bg-black rounded-lg flex items-center justify-center">
    <span className="text-white text-xs font-bold">X</span>
  </div>
);

const LinkedInIcon = () => (
  <div className="w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center">
    <span className="text-white text-xs font-bold">in</span>
  </div>
);

const TwitchIcon = () => (
  <div className="w-6 h-6 bg-purple-600 rounded-lg flex items-center justify-center">
    <span className="text-white text-xs font-bold">Tw</span>
  </div>
);

export default function Integrations() {
  return (
    <div className="space-y-12">
      {/* Título da Seção */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Módulo de Integrações - APIs e Conexões
        </h2>
        <p className="text-gray-500">
          Configuração de integrações com redes sociais, e-commerce e webhooks
        </p>
      </div>

      {/* 1. Dashboard de Integrações */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h3 className="text-lg font-semibold text-orange-500">
          1. Dashboard de Integrações
        </h3>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xl font-bold text-gray-800">Integrações</h4>
                <p className="text-gray-500 text-sm">
                  Gerencie todas as conexões da plataforma
                </p>
              </div>
              <div className="flex gap-3">
                <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 flex items-center gap-2">
                  <RefreshCw className="w-4 h-4" />
                  Sincronizar Todas
                </button>
                <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Nova Integração
                </button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="px-6 pt-4 border-b border-gray-100">
            <div className="flex gap-6">
              <button className="pb-3 border-b-2 border-orange-500 text-orange-500 font-medium">
                Redes Sociais
              </button>
              <button className="pb-3 text-gray-500 hover:text-gray-700">
                E-commerce
              </button>
              <button className="pb-3 text-gray-500 hover:text-gray-700">
                Webhooks
              </button>
              <button className="pb-3 text-gray-500 hover:text-gray-700">
                API Keys
              </button>
            </div>
          </div>

          {/* Status Cards */}
          <div className="p-6 grid grid-cols-4 gap-4">
            <div className="bg-green-50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-green-700 font-medium">Conectadas</span>
              </div>
              <p className="text-2xl font-bold text-green-600">4</p>
            </div>
            <div className="bg-yellow-50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                <span className="text-yellow-700 font-medium">Atenção</span>
              </div>
              <p className="text-2xl font-bold text-yellow-600">1</p>
            </div>
            <div className="bg-red-50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <XCircle className="w-5 h-5 text-red-500" />
                <span className="text-red-700 font-medium">Desconectadas</span>
              </div>
              <p className="text-2xl font-bold text-red-600">2</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-blue-500" />
                <span className="text-blue-700 font-medium">Última Sync</span>
              </div>
              <p className="text-lg font-bold text-blue-600">5 min atrás</p>
            </div>
          </div>

          {/* Lista de Integrações de Redes Sociais */}
          <div className="px-6 pb-6">
            <div className="space-y-3">
              {/* Instagram */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-4">
                  <InstagramIcon />
                  <div>
                    <p className="font-medium text-gray-800">Instagram</p>
                    <p className="text-sm text-gray-500">
                      Graph API v18.0 • Business Account
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    Conectado
                  </span>
                  <span className="text-sm text-gray-500">
                    Sync: 5 min atrás
                  </span>
                  <button className="p-2 hover:bg-gray-200 rounded-lg">
                    <Settings className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </div>

              {/* TikTok */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-4">
                  <TikTokIcon />
                  <div>
                    <p className="font-medium text-gray-800">TikTok</p>
                    <p className="text-sm text-gray-500">
                      TikTok for Developers API • Creator Account
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    Conectado
                  </span>
                  <span className="text-sm text-gray-500">
                    Sync: 10 min atrás
                  </span>
                  <button className="p-2 hover:bg-gray-200 rounded-lg">
                    <Settings className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </div>

              {/* YouTube */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-4">
                  <YouTubeIcon />
                  <div>
                    <p className="font-medium text-gray-800">YouTube</p>
                    <p className="text-sm text-gray-500">
                      YouTube Data API v3 • Channel Account
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    Conectado
                  </span>
                  <span className="text-sm text-gray-500">
                    Sync: 15 min atrás
                  </span>
                  <button className="p-2 hover:bg-gray-200 rounded-lg">
                    <Settings className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Twitter/X */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-4">
                  <TwitterIcon />
                  <div>
                    <p className="font-medium text-gray-800">Twitter / X</p>
                    <p className="text-sm text-gray-500">
                      Twitter API v2 • Premium Account
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                    Token Expirando
                  </span>
                  <span className="text-sm text-gray-500">Expira em 3 dias</span>
                  <button className="p-2 hover:bg-gray-200 rounded-lg">
                    <RefreshCw className="w-4 h-4 text-yellow-500" />
                  </button>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-4">
                  <LinkedInIcon />
                  <div>
                    <p className="font-medium text-gray-800">LinkedIn</p>
                    <p className="text-sm text-gray-500">
                      LinkedIn Marketing API
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                    Desconectado
                  </span>
                  <button className="px-4 py-1.5 bg-blue-600 text-white rounded-lg text-sm">
                    Conectar
                  </button>
                </div>
              </div>

              {/* Twitch */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-4">
                  <TwitchIcon />
                  <div>
                    <p className="font-medium text-gray-800">Twitch</p>
                    <p className="text-sm text-gray-500">Twitch API</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                    Desconectado
                  </span>
                  <button className="px-4 py-1.5 bg-purple-600 text-white rounded-lg text-sm">
                    Conectar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 2. Configuração de Integração */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-4"
      >
        <h3 className="text-lg font-semibold text-orange-500">
          2. Configuração de Integração (Modal)
        </h3>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 max-w-2xl mx-auto overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400">
            <div className="flex items-center gap-4">
              <InstagramIcon />
              <div className="text-white">
                <h4 className="text-lg font-bold">Configurar Instagram</h4>
                <p className="text-white/80 text-sm">
                  Gerencie as permissões e dados sincronizados
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Status */}
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                <div>
                  <p className="font-medium text-green-700">
                    Conexão Estabelecida
                  </p>
                  <p className="text-sm text-green-600">
                    Última sincronização: 5 minutos atrás
                  </p>
                </div>
              </div>
              <button className="px-4 py-2 border border-green-300 text-green-700 rounded-lg hover:bg-green-100">
                Reconectar
              </button>
            </div>

            {/* Permissões */}
            <div>
              <h5 className="font-medium text-gray-800 mb-3">
                Permissões Ativas
              </h5>
              <div className="space-y-2">
                <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Ler perfil público</span>
                  <input
                    type="checkbox"
                    checked
                    readOnly
                    className="w-5 h-5 text-orange-500"
                  />
                </label>
                <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Acessar métricas de posts</span>
                  <input
                    type="checkbox"
                    checked
                    readOnly
                    className="w-5 h-5 text-orange-500"
                  />
                </label>
                <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">
                    Acessar dados de audiência
                  </span>
                  <input
                    type="checkbox"
                    checked
                    readOnly
                    className="w-5 h-5 text-orange-500"
                  />
                </label>
                <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Publicar conteúdo</span>
                  <input type="checkbox" className="w-5 h-5 text-orange-500" />
                </label>
              </div>
            </div>

            {/* Frequência de Sync */}
            <div>
              <h5 className="font-medium text-gray-800 mb-3">
                Frequência de Sincronização
              </h5>
              <select className="w-full p-3 border border-gray-200 rounded-lg">
                <option>A cada 5 minutos</option>
                <option>A cada 15 minutos</option>
                <option>A cada hora</option>
                <option>A cada 6 horas</option>
                <option>Diariamente</option>
              </select>
            </div>

            {/* Ações */}
            <div className="flex gap-3 pt-4 border-t border-gray-100">
              <button className="flex-1 px-4 py-3 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">
                Cancelar
              </button>
              <button className="flex-1 px-4 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg">
                Salvar Configurações
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 3. Integrações E-commerce */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        <h3 className="text-lg font-semibold text-orange-500">
          3. Integrações E-commerce
        </h3>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h4 className="text-lg font-bold text-gray-800">
              Plataformas de E-commerce
            </h4>
            <p className="text-gray-500 text-sm">
              Conecte lojas para tracking de conversões e vendas
            </p>
          </div>

          <div className="p-6 grid grid-cols-3 gap-4">
            {/* Shopify */}
            <div className="border border-gray-200 rounded-xl p-4 hover:border-green-300 hover:bg-green-50/50 transition-all cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Shopify</p>
                  <span className="text-xs text-green-600">Conectado</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-3">
                Sincronize vendas e conversões automaticamente
              </p>
              <button className="w-full py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                Configurar
              </button>
            </div>

            {/* WooCommerce */}
            <div className="border border-gray-200 rounded-xl p-4 hover:border-purple-300 hover:bg-purple-50/50 transition-all cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">WooCommerce</p>
                  <span className="text-xs text-gray-500">Não conectado</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-3">
                Integre sua loja WordPress com WooCommerce
              </p>
              <button className="w-full py-2 bg-purple-500 text-white rounded-lg text-sm hover:bg-purple-600">
                Conectar
              </button>
            </div>

            {/* VTEX */}
            <div className="border border-gray-200 rounded-xl p-4 hover:border-pink-300 hover:bg-pink-50/50 transition-all cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
                  <Database className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">VTEX</p>
                  <span className="text-xs text-gray-500">Não conectado</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-3">
                Conecte sua loja VTEX para tracking completo
              </p>
              <button className="w-full py-2 bg-pink-500 text-white rounded-lg text-sm hover:bg-pink-600">
                Conectar
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 4. Webhooks */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-4"
      >
        <h3 className="text-lg font-semibold text-orange-500">
          4. Configuração de Webhooks
        </h3>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-bold text-gray-800">Webhooks</h4>
                <p className="text-gray-500 text-sm">
                  Receba notificações em tempo real sobre eventos da plataforma
                </p>
              </div>
              <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Novo Webhook
              </button>
            </div>
          </div>

          <div className="p-6">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-500 border-b border-gray-100">
                  <th className="pb-3 font-medium">Nome</th>
                  <th className="pb-3 font-medium">URL</th>
                  <th className="pb-3 font-medium">Eventos</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Ações</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-50">
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <Webhook className="w-4 h-4 text-orange-500" />
                      <span className="font-medium">CRM Sync</span>
                    </div>
                  </td>
                  <td className="py-4">
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded">
                      https://api.crm.com/webhook
                    </code>
                  </td>
                  <td className="py-4">
                    <span className="text-gray-600">
                      campaign.created, influencer.added
                    </span>
                  </td>
                  <td className="py-4">
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                      Ativo
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex gap-2">
                      <button className="p-1.5 hover:bg-gray-100 rounded">
                        <Eye className="w-4 h-4 text-gray-500" />
                      </button>
                      <button className="p-1.5 hover:bg-gray-100 rounded">
                        <Edit className="w-4 h-4 text-gray-500" />
                      </button>
                      <button className="p-1.5 hover:bg-gray-100 rounded">
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-50">
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <Webhook className="w-4 h-4 text-blue-500" />
                      <span className="font-medium">Slack Notifications</span>
                    </div>
                  </td>
                  <td className="py-4">
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded">
                      https://hooks.slack.com/...
                    </code>
                  </td>
                  <td className="py-4">
                    <span className="text-gray-600">
                      content.approved, payment.completed
                    </span>
                  </td>
                  <td className="py-4">
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                      Ativo
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex gap-2">
                      <button className="p-1.5 hover:bg-gray-100 rounded">
                        <Eye className="w-4 h-4 text-gray-500" />
                      </button>
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

      {/* 5. API Keys */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-4"
      >
        <h3 className="text-lg font-semibold text-orange-500">
          5. Gerenciamento de API Keys
        </h3>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-bold text-gray-800">API Keys</h4>
                <p className="text-gray-500 text-sm">
                  Gerencie as chaves de acesso à API da plataforma
                </p>
              </div>
              <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg flex items-center gap-2">
                <Key className="w-4 h-4" />
                Gerar Nova Chave
              </button>
            </div>
          </div>

          <div className="p-6 space-y-4">
            {/* API Key 1 */}
            <div className="p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Key className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Production Key</p>
                    <p className="text-xs text-gray-500">
                      Criada em 15/01/2025
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                  Ativa
                </span>
              </div>
              <div className="flex items-center gap-2">
                <code className="flex-1 bg-white border border-gray-200 px-3 py-2 rounded-lg text-sm font-mono">
                  amp_live_sk_••••••••••••••••••••••••
                </code>
                <button className="p-2 hover:bg-gray-200 rounded-lg">
                  <Copy className="w-4 h-4 text-gray-500" />
                </button>
                <button className="p-2 hover:bg-gray-200 rounded-lg">
                  <Eye className="w-4 h-4 text-gray-500" />
                </button>
              </div>
              <div className="flex items-center justify-between mt-3 text-sm">
                <span className="text-gray-500">
                  Último uso: há 2 horas • 1,247 requisições hoje
                </span>
                <button className="text-red-500 hover:text-red-600">
                  Revogar
                </button>
              </div>
            </div>

            {/* API Key 2 */}
            <div className="p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Key className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Test Key</p>
                    <p className="text-xs text-gray-500">
                      Criada em 10/01/2025
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                  Sandbox
                </span>
              </div>
              <div className="flex items-center gap-2">
                <code className="flex-1 bg-white border border-gray-200 px-3 py-2 rounded-lg text-sm font-mono">
                  amp_test_sk_••••••••••••••••••••••••
                </code>
                <button className="p-2 hover:bg-gray-200 rounded-lg">
                  <Copy className="w-4 h-4 text-gray-500" />
                </button>
                <button className="p-2 hover:bg-gray-200 rounded-lg">
                  <Eye className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Documentação */}
            <div className="p-4 bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl border border-orange-200">
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-orange-500" />
                <div className="flex-1">
                  <p className="font-medium text-gray-800">
                    Documentação da API
                  </p>
                  <p className="text-sm text-gray-600">
                    Acesse a documentação completa para integrar com a API da
                    Amplify
                  </p>
                </div>
                <button className="px-4 py-2 bg-white border border-orange-200 rounded-lg text-orange-600 flex items-center gap-2 hover:bg-orange-50">
                  Ver Docs
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
