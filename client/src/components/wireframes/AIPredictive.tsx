/**
 * AI Predictive Discovery Wireframes
 * Design: Gradiente Amplify (laranja-rosa), cards com sombras suaves
 * Módulo de IA para descoberta preditiva de influenciadores
 * Autor: João Moretti
 */

export default function AIPredictive() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">IA para Descoberta Preditiva</h2>
        <p className="text-gray-600 mt-2">Recomendações inteligentes baseadas em histórico e performance</p>
      </div>

      {/* 1. Dashboard de IA */}
      <section>
        <h3 className="text-xl font-semibold text-orange-600 mb-4">1. Dashboard de Inteligência Artificial</h3>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h4 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Amplify AI
              </h4>
              <p className="text-gray-500 text-sm">Motor de recomendação inteligente</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                IA Ativa
              </span>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">Configurações</button>
            </div>
          </div>

          {/* AI Stats */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl p-4 text-white">
              <div className="text-sm text-purple-100 mb-1">Precisão do Modelo</div>
              <div className="text-3xl font-bold">94.7%</div>
              <div className="text-xs text-purple-200 mt-1">+2.3% vs mês anterior</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl p-4 text-white">
              <div className="text-sm text-blue-100 mb-1">Matches Bem-sucedidos</div>
              <div className="text-3xl font-bold">1,847</div>
              <div className="text-xs text-blue-200 mt-1">Este mês</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl p-4 text-white">
              <div className="text-sm text-orange-100 mb-1">ROI Médio Predito</div>
              <div className="text-3xl font-bold">5.2x</div>
              <div className="text-xs text-orange-200 mt-1">vs 4.1x manual</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-4 text-white">
              <div className="text-sm text-green-100 mb-1">Economia de Tempo</div>
              <div className="text-3xl font-bold">78%</div>
              <div className="text-xs text-green-200 mt-1">Na descoberta</div>
            </div>
          </div>

          {/* AI Insights */}
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <h5 className="font-semibold text-purple-800">Insight da IA</h5>
                <p className="text-sm text-purple-700 mt-1">
                  Baseado na análise de 2.847 campanhas anteriores, identificamos que influenciadores do nicho 
                  <strong> Fitness + Lifestyle</strong> têm 3.2x mais engajamento em campanhas de moda esportiva 
                  durante o verão. Recomendamos priorizar este perfil para a campanha "Verão 2025".
                </p>
                <div className="flex gap-2 mt-3">
                  <button className="px-3 py-1.5 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700">Ver Recomendações</button>
                  <button className="px-3 py-1.5 border border-purple-300 text-purple-600 text-sm rounded-lg hover:bg-purple-50">Ignorar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Recomendações Personalizadas */}
      <section>
        <h3 className="text-xl font-semibold text-orange-600 mb-4">2. Recomendações Personalizadas por Campanha</h3>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h4 className="text-lg font-bold text-gray-800">Recomendações para: Lançamento Verão 2025</h4>
              <p className="text-gray-500 text-sm">Fashion Brand X • Orçamento: R$ 150.000</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Ordenar por:</span>
              <select className="border rounded-lg px-3 py-1.5 text-sm">
                <option>Match Score</option>
                <option>ROI Previsto</option>
                <option>Engajamento</option>
                <option>Custo</option>
              </select>
            </div>
          </div>

          {/* Filtros de IA */}
          <div className="flex gap-2 mb-6 flex-wrap">
            <button className="px-3 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              🎯 Match &gt; 90%
            </button>
            <button className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm">
              💰 Dentro do orçamento
            </button>
            <button className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm">
              📈 ROI &gt; 4x
            </button>
            <button className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm">
              ✅ Já trabalharam conosco
            </button>
            <button className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm">
              🆕 Novos talentos
            </button>
          </div>

          {/* Lista de Recomendações */}
          <div className="space-y-4">
            {/* Recomendação 1 */}
            <div className="border rounded-xl p-4 hover:shadow-md transition-shadow bg-gradient-to-r from-purple-50 to-white">
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    MA
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h5 className="font-bold text-gray-800">Maria Alves</h5>
                    <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded-full font-medium">🎯 98% Match</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Top Pick</span>
                  </div>
                  <p className="text-sm text-gray-500">@mariaalves • 245K seguidores • Moda & Lifestyle</p>
                  
                  {/* AI Reasoning */}
                  <div className="mt-3 p-3 bg-white rounded-lg border border-purple-100">
                    <div className="flex items-center gap-2 text-sm text-purple-700 font-medium mb-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      Por que a IA recomenda:
                    </div>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Histórico de 5 campanhas de moda com ROI médio de 5.8x</li>
                      <li>• Audiência 78% feminina, 18-34 anos (match perfeito com target)</li>
                      <li>• Taxa de conversão 2.3x acima da média do nicho</li>
                      <li>• Disponibilidade confirmada para o período da campanha</li>
                    </ul>
                  </div>

                  <div className="flex items-center gap-6 mt-3">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">6.2x</div>
                      <div className="text-xs text-gray-500">ROI Previsto</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">4.2%</div>
                      <div className="text-xs text-gray-500">Engajamento</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">R$ 3.5K</div>
                      <div className="text-xs text-gray-500">CPE</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-600">92%</div>
                      <div className="text-xs text-gray-500">Confiança</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg hover:opacity-90 text-sm">
                    Adicionar
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 text-sm">
                    Ver Perfil
                  </button>
                </div>
              </div>
            </div>

            {/* Recomendação 2 */}
            <div className="border rounded-xl p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    CS
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h5 className="font-bold text-gray-800">Carolina Style</h5>
                    <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded-full font-medium">🎯 95% Match</span>
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Rising Star</span>
                  </div>
                  <p className="text-sm text-gray-500">@carolinastyle • 180K seguidores • Moda & Beleza</p>
                  
                  <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 text-sm text-purple-700 font-medium mb-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      Por que a IA recomenda:
                    </div>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Crescimento de 45% em engajamento nos últimos 3 meses</li>
                      <li>• Conteúdo alinhado com estética da marca</li>
                      <li>• Custo-benefício 30% melhor que média do nicho</li>
                    </ul>
                  </div>

                  <div className="flex items-center gap-6 mt-3">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">5.4x</div>
                      <div className="text-xs text-gray-500">ROI Previsto</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">5.1%</div>
                      <div className="text-xs text-gray-500">Engajamento</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">R$ 2.2K</div>
                      <div className="text-xs text-gray-500">CPE</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-600">88%</div>
                      <div className="text-xs text-gray-500">Confiança</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg hover:opacity-90 text-sm">
                    Adicionar
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 text-sm">
                    Ver Perfil
                  </button>
                </div>
              </div>
            </div>

            {/* Recomendação 3 - Novo Talento */}
            <div className="border rounded-xl p-4 hover:shadow-md transition-shadow border-yellow-200 bg-gradient-to-r from-yellow-50 to-white">
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    LF
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-xs">🌟</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h5 className="font-bold text-gray-800">Luiza Fashion</h5>
                    <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded-full font-medium">🎯 91% Match</span>
                    <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded-full">🆕 Descoberta IA</span>
                  </div>
                  <p className="text-sm text-gray-500">@luizafashion • 45K seguidores • Moda Sustentável</p>
                  
                  <div className="mt-3 p-3 bg-white rounded-lg border border-yellow-200">
                    <div className="flex items-center gap-2 text-sm text-yellow-700 font-medium mb-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                      Talento Emergente Detectado:
                    </div>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Crescimento de 200% em 6 meses (padrão viral detectado)</li>
                      <li>• Engajamento 3x acima da média para seu tamanho</li>
                      <li>• Nicho de moda sustentável em alta demanda</li>
                      <li>• Ainda não trabalhou com concorrentes diretos</li>
                    </ul>
                  </div>

                  <div className="flex items-center gap-6 mt-3">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">7.1x</div>
                      <div className="text-xs text-gray-500">ROI Previsto</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">8.3%</div>
                      <div className="text-xs text-gray-500">Engajamento</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">R$ 800</div>
                      <div className="text-xs text-gray-500">CPE</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-600">75%</div>
                      <div className="text-xs text-gray-500">Confiança</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg hover:opacity-90 text-sm">
                    Adicionar
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 text-sm">
                    Ver Perfil
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Análise Preditiva de Campanha */}
      <section>
        <h3 className="text-xl font-semibold text-orange-600 mb-4">3. Análise Preditiva de Campanha</h3>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-lg font-bold text-gray-800">Previsão de Performance</h4>
            <span className="text-sm text-gray-500">Baseado em 2.847 campanhas similares</span>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Gráfico de Previsão */}
            <div className="bg-gray-50 rounded-xl p-4">
              <h5 className="font-semibold text-gray-700 mb-4">Projeção de ROI por Cenário</h5>
              <div className="h-48 flex items-end justify-around gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-16 bg-red-200 rounded-t-lg" style={{height: '60px'}}></div>
                  <span className="text-xs text-gray-500 mt-2">Pessimista</span>
                  <span className="text-sm font-bold text-red-600">3.2x</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 bg-gradient-to-t from-orange-400 to-pink-400 rounded-t-lg" style={{height: '120px'}}></div>
                  <span className="text-xs text-gray-500 mt-2">Esperado</span>
                  <span className="text-sm font-bold text-orange-600">5.2x</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 bg-green-300 rounded-t-lg" style={{height: '160px'}}></div>
                  <span className="text-xs text-gray-500 mt-2">Otimista</span>
                  <span className="text-sm font-bold text-green-600">7.8x</span>
                </div>
              </div>
            </div>

            {/* Métricas Previstas */}
            <div className="space-y-4">
              <h5 className="font-semibold text-gray-700">Métricas Previstas</h5>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Alcance Total</span>
                  <div className="text-right">
                    <span className="font-bold text-gray-800">4.2M - 6.8M</span>
                    <span className="text-xs text-green-600 ml-2">↑ 23%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Engajamento Médio</span>
                  <div className="text-right">
                    <span className="font-bold text-gray-800">3.8% - 5.2%</span>
                    <span className="text-xs text-green-600 ml-2">↑ 15%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Conversões Previstas</span>
                  <div className="text-right">
                    <span className="font-bold text-gray-800">1.2K - 2.4K</span>
                    <span className="text-xs text-green-600 ml-2">↑ 31%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Receita Estimada</span>
                  <div className="text-right">
                    <span className="font-bold text-gray-800">R$ 480K - R$ 1.2M</span>
                    <span className="text-xs text-green-600 ml-2">↑ 45%</span>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-purple-50 rounded-lg">
                <div className="flex items-center gap-2 text-purple-700 text-sm font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Nível de Confiança: 87%
                </div>
                <p className="text-xs text-purple-600 mt-1">Baseado em 847 campanhas similares no mesmo período</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Configurações de IA */}
      <section>
        <h3 className="text-xl font-semibold text-orange-600 mb-4">4. Configurações do Motor de IA</h3>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="grid grid-cols-2 gap-6">
            {/* Preferências de Matching */}
            <div>
              <h5 className="font-semibold text-gray-700 mb-4">Preferências de Matching</h5>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Peso: Engajamento</span>
                    <span className="font-medium">35%</span>
                  </div>
                  <input type="range" className="w-full" defaultValue={35} />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Peso: Audiência</span>
                    <span className="font-medium">25%</span>
                  </div>
                  <input type="range" className="w-full" defaultValue={25} />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Peso: Histórico</span>
                    <span className="font-medium">20%</span>
                  </div>
                  <input type="range" className="w-full" defaultValue={20} />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Peso: Custo-benefício</span>
                    <span className="font-medium">20%</span>
                  </div>
                  <input type="range" className="w-full" defaultValue={20} />
                </div>
              </div>
            </div>

            {/* Filtros Automáticos */}
            <div>
              <h5 className="font-semibold text-gray-700 mb-4">Filtros Automáticos</h5>
              
              <div className="space-y-3">
                <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
                  <span className="text-gray-600">Excluir influenciadores com fake followers &gt; 15%</span>
                  <input type="checkbox" defaultChecked className="w-5 h-5 text-orange-500" />
                </label>
                <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
                  <span className="text-gray-600">Priorizar influenciadores com histórico positivo</span>
                  <input type="checkbox" defaultChecked className="w-5 h-5 text-orange-500" />
                </label>
                <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
                  <span className="text-gray-600">Incluir talentos emergentes (micro-influenciadores)</span>
                  <input type="checkbox" defaultChecked className="w-5 h-5 text-orange-500" />
                </label>
                <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
                  <span className="text-gray-600">Evitar conflitos com concorrentes</span>
                  <input type="checkbox" defaultChecked className="w-5 h-5 text-orange-500" />
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-6 pt-4 border-t">
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">Restaurar Padrões</button>
            <button className="px-6 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg hover:opacity-90">Salvar Configurações</button>
          </div>
        </div>
      </section>
    </div>
  );
}
