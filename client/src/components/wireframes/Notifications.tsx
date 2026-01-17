/**
 * Módulo de Notificações - Wireframes
 * Design: Amplify Platform - Sistema de alertas e notificações
 * Autor: João Moretti
 */

import { Bell, Mail, Smartphone, Settings, Check, Clock, AlertTriangle, DollarSign, FileCheck, Users, Calendar, Filter, ToggleLeft, ToggleRight } from 'lucide-react';

export default function Notifications() {
  return (
    <div className="space-y-12 pb-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Módulo de Notificações</h2>
        <p className="text-gray-600">Sistema de alertas push, email e in-app</p>
      </div>

      {/* 1. Dashboard de Notificações */}
      <section>
        <h3 className="text-lg font-semibold text-orange-600 mb-4">1. Central de Notificações (Visão da Agência)</h3>
        <div className="bg-white rounded-xl shadow-lg p-6 border">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h4 className="text-xl font-bold text-gray-800">Central de Notificações</h4>
              <p className="text-gray-500 text-sm">Gerencie todas as notificações da plataforma</p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-50 flex items-center gap-2">
                <Filter size={16} />
                Filtros
              </button>
              <button className="px-4 py-2 bg-orange-500 text-white rounded-lg flex items-center gap-2">
                <Settings size={16} />
                Configurações
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-blue-600 mb-1">
                <Bell size={18} />
                <span className="text-sm">Não Lidas</span>
              </div>
              <p className="text-2xl font-bold text-blue-700">24</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-green-600 mb-1">
                <Check size={18} />
                <span className="text-sm">Lidas Hoje</span>
              </div>
              <p className="text-2xl font-bold text-green-700">156</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-orange-600 mb-1">
                <Clock size={18} />
                <span className="text-sm">Pendentes</span>
              </div>
              <p className="text-2xl font-bold text-orange-700">8</p>
            </div>
            <div className="bg-red-50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-red-600 mb-1">
                <AlertTriangle size={18} />
                <span className="text-sm">Urgentes</span>
              </div>
              <p className="text-2xl font-bold text-red-700">3</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-4 border-b">
            <button className="px-4 py-2 border-b-2 border-orange-500 text-orange-600 font-medium">Todas</button>
            <button className="px-4 py-2 text-gray-500">Campanhas</button>
            <button className="px-4 py-2 text-gray-500">Pagamentos</button>
            <button className="px-4 py-2 text-gray-500">Conteúdo</button>
            <button className="px-4 py-2 text-gray-500">Sistema</button>
          </div>

          {/* Lista de Notificações */}
          <div className="space-y-3">
            {/* Notificação Urgente */}
            <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="text-red-600" size={20} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded">Urgente</span>
                  <span className="text-xs text-gray-500">Há 5 min</span>
                </div>
                <h5 className="font-semibold text-gray-800">Prazo de entrega expirando</h5>
                <p className="text-sm text-gray-600">Maria Alves precisa entregar o Reels da campanha "Verão 2025" em 2 horas</p>
                <div className="flex gap-2 mt-2">
                  <button className="text-xs px-3 py-1 bg-red-500 text-white rounded">Contatar Influenciador</button>
                  <button className="text-xs px-3 py-1 border rounded text-gray-600">Ver Campanha</button>
                </div>
              </div>
            </div>

            {/* Notificação de Pagamento */}
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <DollarSign className="text-green-600" size={20} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded">Pagamento</span>
                  <span className="text-xs text-gray-500">Há 30 min</span>
                </div>
                <h5 className="font-semibold text-gray-800">Pagamento processado com sucesso</h5>
                <p className="text-sm text-gray-600">R$ 5.000,00 transferido para Pedro Santos - Campanha TechStore</p>
                <button className="text-xs px-3 py-1 border rounded text-gray-600 mt-2">Ver Comprovante</button>
              </div>
            </div>

            {/* Notificação de Conteúdo */}
            <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <FileCheck className="text-blue-600" size={20} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded">Conteúdo</span>
                  <span className="text-xs text-gray-500">Há 1 hora</span>
                </div>
                <h5 className="font-semibold text-gray-800">Novo conteúdo aguardando aprovação</h5>
                <p className="text-sm text-gray-600">Julia Oliveira enviou 3 Stories para revisão - GymLife</p>
                <div className="flex gap-2 mt-2">
                  <button className="text-xs px-3 py-1 bg-blue-500 text-white rounded">Revisar Agora</button>
                  <button className="text-xs px-3 py-1 border rounded text-gray-600">Ver Depois</button>
                </div>
              </div>
            </div>

            {/* Notificação de Campanha */}
            <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <Users className="text-purple-600" size={20} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-purple-500 text-white px-2 py-0.5 rounded">Campanha</span>
                  <span className="text-xs text-gray-500">Há 2 horas</span>
                </div>
                <h5 className="font-semibold text-gray-800">Nova proposta de influenciador</h5>
                <p className="text-sm text-gray-600">Lucas Tech (850K seguidores) quer participar da campanha Black Friday</p>
                <div className="flex gap-2 mt-2">
                  <button className="text-xs px-3 py-1 bg-purple-500 text-white rounded">Ver Perfil</button>
                  <button className="text-xs px-3 py-1 border rounded text-gray-600">Ignorar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Configurações de Notificações */}
      <section>
        <h3 className="text-lg font-semibold text-orange-600 mb-4">2. Configurações de Notificações</h3>
        <div className="bg-white rounded-xl shadow-lg p-6 border">
          <h4 className="text-xl font-bold text-gray-800 mb-6">Preferências de Notificações</h4>
          
          <div className="grid grid-cols-2 gap-8">
            {/* Canais */}
            <div>
              <h5 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
                <Settings size={18} />
                Canais de Notificação
              </h5>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Bell className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Push Notifications</p>
                      <p className="text-xs text-gray-500">Notificações no navegador</p>
                    </div>
                  </div>
                  <ToggleRight className="text-green-500" size={28} />
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Mail className="text-orange-600" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-xs text-gray-500">joao@agencia.com</p>
                    </div>
                  </div>
                  <ToggleRight className="text-green-500" size={28} />
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Smartphone className="text-green-600" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">SMS</p>
                      <p className="text-xs text-gray-500">+55 11 99999-9999</p>
                    </div>
                  </div>
                  <ToggleLeft className="text-gray-400" size={28} />
                </div>
              </div>
            </div>

            {/* Tipos de Alerta */}
            <div>
              <h5 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
                <Bell size={18} />
                Tipos de Alerta
              </h5>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" checked className="w-4 h-4 text-orange-500" readOnly />
                    <span>Prazos de entrega (24h antes)</span>
                  </div>
                  <select className="text-sm border rounded px-2 py-1">
                    <option>Push + Email</option>
                    <option>Apenas Push</option>
                    <option>Apenas Email</option>
                  </select>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" checked className="w-4 h-4 text-orange-500" readOnly />
                    <span>Conteúdo aguardando aprovação</span>
                  </div>
                  <select className="text-sm border rounded px-2 py-1">
                    <option>Push + Email</option>
                    <option>Apenas Push</option>
                    <option>Apenas Email</option>
                  </select>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" checked className="w-4 h-4 text-orange-500" readOnly />
                    <span>Pagamentos processados</span>
                  </div>
                  <select className="text-sm border rounded px-2 py-1">
                    <option>Apenas Email</option>
                    <option>Push + Email</option>
                    <option>Apenas Push</option>
                  </select>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" checked className="w-4 h-4 text-orange-500" readOnly />
                    <span>Novas propostas de influenciadores</span>
                  </div>
                  <select className="text-sm border rounded px-2 py-1">
                    <option>Push + Email</option>
                    <option>Apenas Push</option>
                    <option>Apenas Email</option>
                  </select>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" checked className="w-4 h-4 text-orange-500" readOnly />
                    <span>Menções à marca (Social Listening)</span>
                  </div>
                  <select className="text-sm border rounded px-2 py-1">
                    <option>Apenas Push</option>
                    <option>Push + Email</option>
                    <option>Apenas Email</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Horários */}
          <div className="mt-6 pt-6 border-t">
            <h5 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
              <Calendar size={18} />
              Horários de Silêncio
            </h5>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Não perturbe de</span>
                <input type="time" value="22:00" className="border rounded px-2 py-1" readOnly />
                <span className="text-sm text-gray-600">até</span>
                <input type="time" value="08:00" className="border rounded px-2 py-1" readOnly />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" checked className="w-4 h-4" readOnly />
                <span className="text-sm">Exceto notificações urgentes</span>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <button className="px-4 py-2 border rounded-lg text-gray-600">Cancelar</button>
            <button className="px-4 py-2 bg-orange-500 text-white rounded-lg">Salvar Preferências</button>
          </div>
        </div>
      </section>

      {/* 3. Notificações Mobile */}
      <section>
        <h3 className="text-lg font-semibold text-orange-600 mb-4">3. Notificações no PWA Mobile</h3>
        <div className="flex gap-6 justify-center">
          {/* Tela de Notificações */}
          <div className="w-[280px] bg-white rounded-[2rem] shadow-xl border-4 border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-4 pt-8">
              <div className="flex items-center justify-between text-white">
                <h4 className="font-bold text-lg">Notificações</h4>
                <button className="text-xs bg-white/20 px-2 py-1 rounded">Marcar todas</button>
              </div>
            </div>
            <div className="p-4 space-y-3 max-h-[400px] overflow-y-auto">
              {/* Notificação 1 */}
              <div className="bg-red-50 rounded-lg p-3 border-l-4 border-red-500">
                <div className="flex items-center gap-2 mb-1">
                  <AlertTriangle size={14} className="text-red-500" />
                  <span className="text-xs font-medium text-red-600">Urgente</span>
                  <span className="text-xs text-gray-400 ml-auto">5 min</span>
                </div>
                <p className="text-sm font-medium">Prazo expirando!</p>
                <p className="text-xs text-gray-600">Entrega do Reels em 2h</p>
              </div>

              {/* Notificação 2 */}
              <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-500">
                <div className="flex items-center gap-2 mb-1">
                  <DollarSign size={14} className="text-green-500" />
                  <span className="text-xs font-medium text-green-600">Pagamento</span>
                  <span className="text-xs text-gray-400 ml-auto">1h</span>
                </div>
                <p className="text-sm font-medium">Pagamento recebido</p>
                <p className="text-xs text-gray-600">R$ 3.500 - Campanha Verão</p>
              </div>

              {/* Notificação 3 */}
              <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-500">
                <div className="flex items-center gap-2 mb-1">
                  <FileCheck size={14} className="text-blue-500" />
                  <span className="text-xs font-medium text-blue-600">Conteúdo</span>
                  <span className="text-xs text-gray-400 ml-auto">2h</span>
                </div>
                <p className="text-sm font-medium">Conteúdo aprovado!</p>
                <p className="text-xs text-gray-600">Seu Reels foi aprovado</p>
              </div>

              {/* Notificação 4 */}
              <div className="bg-purple-50 rounded-lg p-3 border-l-4 border-purple-500">
                <div className="flex items-center gap-2 mb-1">
                  <Users size={14} className="text-purple-500" />
                  <span className="text-xs font-medium text-purple-600">Campanha</span>
                  <span className="text-xs text-gray-400 ml-auto">3h</span>
                </div>
                <p className="text-sm font-medium">Nova campanha disponível</p>
                <p className="text-xs text-gray-600">Black Friday Tech - R$ 5K</p>
              </div>

              {/* Notificação 5 */}
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Bell size={14} className="text-gray-500" />
                  <span className="text-xs text-gray-400 ml-auto">1 dia</span>
                </div>
                <p className="text-sm font-medium text-gray-600">Lembrete de briefing</p>
                <p className="text-xs text-gray-500">Revisar briefing da GymLife</p>
              </div>
            </div>
            {/* Bottom Nav */}
            <div className="border-t bg-white p-2">
              <div className="flex justify-around">
                <button className="flex flex-col items-center p-2 text-gray-400">
                  <span className="text-xs">Home</span>
                </button>
                <button className="flex flex-col items-center p-2 text-gray-400">
                  <span className="text-xs">Campanhas</span>
                </button>
                <button className="flex flex-col items-center p-2 text-orange-500">
                  <Bell size={20} />
                  <span className="text-xs">Notificações</span>
                </button>
                <button className="flex flex-col items-center p-2 text-gray-400">
                  <span className="text-xs">Perfil</span>
                </button>
              </div>
            </div>
          </div>

          {/* Push Notification Preview */}
          <div className="w-[280px]">
            <h5 className="text-sm font-medium text-gray-600 mb-3">Preview Push Notification</h5>
            <div className="space-y-3">
              <div className="bg-white rounded-xl shadow-lg p-4 border">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    A
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm">Amplify</span>
                      <span className="text-xs text-gray-400">agora</span>
                    </div>
                    <p className="text-sm text-gray-800 font-medium">Novo pagamento recebido!</p>
                    <p className="text-xs text-gray-600">Você recebeu R$ 3.500 da campanha Verão 2025</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-4 border">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    A
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm">Amplify</span>
                      <span className="text-xs text-gray-400">5 min</span>
                    </div>
                    <p className="text-sm text-gray-800 font-medium">⚠️ Prazo expirando</p>
                    <p className="text-xs text-gray-600">Entrega do Reels em 2 horas</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-4 border">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    A
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm">Amplify</span>
                      <span className="text-xs text-gray-400">1h</span>
                    </div>
                    <p className="text-sm text-gray-800 font-medium">✅ Conteúdo aprovado</p>
                    <p className="text-xs text-gray-600">Seu post foi aprovado pela marca</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
