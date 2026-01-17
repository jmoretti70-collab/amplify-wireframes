/**
 * Amplify Academy Wireframes
 * Design: Gradiente Amplify (laranja-rosa), cards com sombras suaves
 * Plataforma de cursos e certificações para profissionais
 * Autor: João Moretti
 */

export default function AmplifyAcademy() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Amplify Academy</h2>
        <p className="text-gray-600 mt-2">Plataforma de cursos e certificações para profissionais de marketing de influência</p>
      </div>

      {/* 1. Portal Principal - Visão Geral */}
      <section>
        <h3 className="text-xl font-semibold text-orange-600 mb-4">1. Portal Principal da Academy</h3>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Hero Banner */}
          <div className="amplify-gradient p-8 text-white">
            <div className="flex justify-between items-center">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                  <span className="text-2xl font-bold">Amplify Academy</span>
                </div>
                <h3 className="text-3xl font-bold mb-2">Domine o Marketing de Influência</h3>
                <p className="text-orange-100 max-w-xl">Cursos, certificações e recursos exclusivos para agências, marcas e influenciadores que querem se destacar no mercado.</p>
              </div>
              <div className="text-right">
                <div className="text-sm text-orange-100 mb-1">Seu progresso</div>
                <div className="text-4xl font-bold">67%</div>
                <div className="text-sm text-orange-200">3 de 5 cursos concluídos</div>
              </div>
            </div>
          </div>

          <div className="p-6">
            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600">24</div>
                <div className="text-sm text-gray-600">Cursos Disponíveis</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <div className="text-3xl font-bold text-green-600">8</div>
                <div className="text-sm text-gray-600">Certificações</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <div className="text-3xl font-bold text-purple-600">156</div>
                <div className="text-sm text-gray-600">Horas de Conteúdo</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-xl">
                <div className="text-3xl font-bold text-orange-600">12K+</div>
                <div className="text-sm text-gray-600">Profissionais Certificados</div>
              </div>
            </div>

            {/* Continue Aprendendo */}
            <div className="mb-6">
              <h4 className="text-lg font-bold text-gray-800 mb-4">Continue de Onde Parou</h4>
              <div className="border rounded-xl p-4 bg-gradient-to-r from-orange-50 to-pink-50">
                <div className="flex items-center gap-4">
                  <div className="w-24 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-800">Estratégias Avançadas de Campanhas</h5>
                    <p className="text-sm text-gray-500">Módulo 4: Otimização de ROI • Aula 3 de 8</p>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-orange-400 to-pink-500 rounded-full" style={{width: '45%'}}></div>
                      </div>
                      <span className="text-sm text-gray-500">45%</span>
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg hover:opacity-90 font-medium">
                    Continuar
                  </button>
                </div>
              </div>
            </div>

            {/* Trilhas de Aprendizado */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-bold text-gray-800">Trilhas de Aprendizado</h4>
                <button className="text-orange-600 text-sm hover:underline">Ver todas →</button>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {/* Trilha 1 */}
                <div className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-32 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="p-4">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Para Agências</span>
                    <h5 className="font-bold text-gray-800 mt-2">Gestão de Agência</h5>
                    <p className="text-sm text-gray-500 mt-1">Aprenda a gerenciar múltiplos clientes e campanhas</p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs text-gray-400">6 cursos • 42h</span>
                      <span className="text-xs text-green-600 font-medium">2/6 concluídos</span>
                    </div>
                  </div>
                </div>

                {/* Trilha 2 */}
                <div className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-32 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                  </div>
                  <div className="p-4">
                    <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded-full">Para Marcas</span>
                    <h5 className="font-bold text-gray-800 mt-2">ROI em Influência</h5>
                    <p className="text-sm text-gray-500 mt-1">Maximize o retorno das suas campanhas</p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs text-gray-400">4 cursos • 28h</span>
                      <span className="text-xs text-orange-600 font-medium">1/4 concluídos</span>
                    </div>
                  </div>
                </div>

                {/* Trilha 3 */}
                <div className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-32 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="p-4">
                    <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-xs rounded-full">Para Influenciadores</span>
                    <h5 className="font-bold text-gray-800 mt-2">Creator Pro</h5>
                    <p className="text-sm text-gray-500 mt-1">Profissionalize sua carreira de criador</p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs text-gray-400">5 cursos • 35h</span>
                      <span className="text-xs text-gray-400">Não iniciado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Catálogo de Cursos */}
      <section>
        <h3 className="text-xl font-semibold text-orange-600 mb-4">2. Catálogo de Cursos</h3>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          {/* Filtros */}
          <div className="flex gap-4 mb-6">
            <input type="text" placeholder="Buscar cursos..." className="flex-1 border rounded-lg px-4 py-2" />
            <select className="border rounded-lg px-4 py-2">
              <option>Todas as categorias</option>
              <option>Estratégia</option>
              <option>Analytics</option>
              <option>Negociação</option>
              <option>Conteúdo</option>
            </select>
            <select className="border rounded-lg px-4 py-2">
              <option>Todos os níveis</option>
              <option>Iniciante</option>
              <option>Intermediário</option>
              <option>Avançado</option>
            </select>
            <select className="border rounded-lg px-4 py-2">
              <option>Mais populares</option>
              <option>Mais recentes</option>
              <option>Melhor avaliados</option>
            </select>
          </div>

          {/* Lista de Cursos */}
          <div className="grid grid-cols-2 gap-4">
            {/* Curso 1 */}
            <div className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow flex">
              <div className="w-48 bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
                <svg className="w-12 h-12 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="flex-1 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Analytics</span>
                  <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded-full">Intermediário</span>
                </div>
                <h5 className="font-bold text-gray-800">Métricas que Importam</h5>
                <p className="text-sm text-gray-500 mt-1">Aprenda a analisar dados e tomar decisões baseadas em métricas reais</p>
                <div className="flex items-center gap-4 mt-3 text-sm">
                  <span className="text-gray-400">8 aulas</span>
                  <span className="text-gray-400">4h 30min</span>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    4.9
                  </div>
                </div>
                <button className="mt-3 px-4 py-1.5 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg text-sm hover:opacity-90">
                  Começar
                </button>
              </div>
            </div>

            {/* Curso 2 */}
            <div className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow flex">
              <div className="w-48 bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
                <svg className="w-12 h-12 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <div className="flex-1 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Negociação</span>
                  <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs rounded-full">Avançado</span>
                </div>
                <h5 className="font-bold text-gray-800">Negociação com Influenciadores</h5>
                <p className="text-sm text-gray-500 mt-1">Técnicas avançadas para fechar parcerias de sucesso</p>
                <div className="flex items-center gap-4 mt-3 text-sm">
                  <span className="text-gray-400">12 aulas</span>
                  <span className="text-gray-400">6h 15min</span>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    4.8
                  </div>
                </div>
                <button className="mt-3 px-4 py-1.5 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg text-sm hover:opacity-90">
                  Começar
                </button>
              </div>
            </div>

            {/* Curso 3 */}
            <div className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow flex">
              <div className="w-48 bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center">
                <svg className="w-12 h-12 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded-full">Conteúdo</span>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Iniciante</span>
                </div>
                <h5 className="font-bold text-gray-800">Criação de Conteúdo Viral</h5>
                <p className="text-sm text-gray-500 mt-1">Descubra os segredos do conteúdo que engaja</p>
                <div className="flex items-center gap-4 mt-3 text-sm">
                  <span className="text-gray-400">10 aulas</span>
                  <span className="text-gray-400">5h 45min</span>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    4.7
                  </div>
                </div>
                <button className="mt-3 px-4 py-1.5 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg text-sm hover:opacity-90">
                  Começar
                </button>
              </div>
            </div>

            {/* Curso 4 */}
            <div className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow flex">
              <div className="w-48 bg-gradient-to-br from-yellow-400 to-orange-600 flex items-center justify-center">
                <svg className="w-12 h-12 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded-full">Financeiro</span>
                  <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded-full">Intermediário</span>
                </div>
                <h5 className="font-bold text-gray-800">Precificação Estratégica</h5>
                <p className="text-sm text-gray-500 mt-1">Como definir preços que valorizam seu trabalho</p>
                <div className="flex items-center gap-4 mt-3 text-sm">
                  <span className="text-gray-400">6 aulas</span>
                  <span className="text-gray-400">3h 20min</span>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    4.9
                  </div>
                </div>
                <button className="mt-3 px-4 py-1.5 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg text-sm hover:opacity-90">
                  Começar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Certificações */}
      <section>
        <h3 className="text-xl font-semibold text-orange-600 mb-4">3. Programa de Certificações</h3>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h4 className="text-lg font-bold text-gray-800">Certificações Amplify</h4>
              <p className="text-gray-500 text-sm">Comprove suas habilidades com certificados reconhecidos pelo mercado</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {/* Certificação 1 */}
            <div className="border-2 border-yellow-300 rounded-xl p-6 bg-gradient-to-br from-yellow-50 to-orange-50 text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h5 className="font-bold text-gray-800 text-lg">Amplify Certified Professional</h5>
              <p className="text-sm text-gray-500 mt-2">Certificação fundamental para profissionais de marketing de influência</p>
              <div className="mt-4 space-y-2 text-sm text-left">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>3 cursos obrigatórios</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Exame final (70% mínimo)</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Validade: 2 anos</span>
                </div>
              </div>
              <button className="mt-4 w-full py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg font-medium hover:opacity-90">
                Iniciar Certificação
              </button>
            </div>

            {/* Certificação 2 */}
            <div className="border-2 border-purple-300 rounded-xl p-6 bg-gradient-to-br from-purple-50 to-pink-50 text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h5 className="font-bold text-gray-800 text-lg">Amplify Expert Strategist</h5>
              <p className="text-sm text-gray-500 mt-2">Para especialistas em estratégia de campanhas</p>
              <div className="mt-4 space-y-2 text-sm text-left">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>5 cursos avançados</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Projeto prático</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Validade: 2 anos</span>
                </div>
              </div>
              <button className="mt-4 w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:opacity-90">
                Iniciar Certificação
              </button>
            </div>

            {/* Certificação 3 */}
            <div className="border-2 border-blue-300 rounded-xl p-6 bg-gradient-to-br from-blue-50 to-cyan-50 text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h5 className="font-bold text-gray-800 text-lg">Amplify Data Analyst</h5>
              <p className="text-sm text-gray-500 mt-2">Especialização em análise de dados e métricas</p>
              <div className="mt-4 space-y-2 text-sm text-left">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>4 cursos de analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Case study prático</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Validade: 2 anos</span>
                </div>
              </div>
              <button className="mt-4 w-full py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-medium hover:opacity-90">
                Iniciar Certificação
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PWA Mobile - Academy */}
      <section>
        <h3 className="text-xl font-semibold text-orange-600 mb-4">4. PWA Mobile - Amplify Academy</h3>
        
        <div className="flex gap-6 justify-center">
          {/* Tela 1 - Home Academy */}
          <div className="w-72 bg-gray-900 rounded-3xl p-2 shadow-xl">
            <div className="bg-white rounded-2xl overflow-hidden h-[500px]">
              <div className="amplify-gradient p-4 text-white">
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  </svg>
                  <span className="font-bold">Academy</span>
                </div>
                <p className="text-sm text-orange-100 mt-1">Olá, Maria!</p>
              </div>
              
              <div className="p-4">
                {/* Continue Learning */}
                <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-lg p-3 mb-4">
                  <p className="text-xs text-gray-500 mb-1">Continue aprendendo</p>
                  <h5 className="font-semibold text-sm text-gray-800">Métricas que Importam</h5>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-orange-400 to-pink-500 rounded-full" style={{width: '65%'}}></div>
                    </div>
                    <span className="text-xs text-gray-500">65%</span>
                  </div>
                  <button className="mt-2 w-full py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg text-sm">
                    Continuar
                  </button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <div className="text-xl font-bold text-blue-600">3</div>
                    <div className="text-xs text-gray-500">Cursos</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-xl font-bold text-green-600">1</div>
                    <div className="text-xs text-gray-500">Certificação</div>
                  </div>
                </div>

                {/* Recommended */}
                <h6 className="font-semibold text-sm text-gray-700 mb-2">Recomendados</h6>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-2 border rounded-lg">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h6 className="text-sm font-medium">Conteúdo Viral</h6>
                      <p className="text-xs text-gray-400">10 aulas • 5h</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2 border rounded-lg">
                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h6 className="text-sm font-medium">Precificação</h6>
                      <p className="text-xs text-gray-400">6 aulas • 3h</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Nav */}
              <div className="absolute bottom-2 left-2 right-2 bg-white border-t flex justify-around py-2">
                <button className="flex flex-col items-center text-orange-500 text-xs">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  </svg>
                  Academy
                </button>
                <button className="flex flex-col items-center text-gray-400 text-xs">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Buscar
                </button>
                <button className="flex flex-col items-center text-gray-400 text-xs">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  Certificados
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

          {/* Tela 2 - Player de Aula */}
          <div className="w-72 bg-gray-900 rounded-3xl p-2 shadow-xl">
            <div className="bg-white rounded-2xl overflow-hidden h-[500px]">
              {/* Video Player */}
              <div className="h-40 bg-gray-900 flex items-center justify-center relative">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="h-1 bg-white/30 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500 rounded-full" style={{width: '35%'}}></div>
                  </div>
                  <div className="flex justify-between text-xs text-white/70 mt-1">
                    <span>12:45</span>
                    <span>35:20</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Aula 3 de 8</span>
                <h5 className="font-bold text-gray-800 mt-2">Métricas de Engajamento</h5>
                <p className="text-xs text-gray-500 mt-1">Módulo: Métricas que Importam</p>

                {/* Tabs */}
                <div className="flex gap-2 mt-4 border-b">
                  <button className="px-3 py-2 text-orange-600 border-b-2 border-orange-500 text-sm font-medium">Conteúdo</button>
                  <button className="px-3 py-2 text-gray-500 text-sm">Notas</button>
                  <button className="px-3 py-2 text-gray-500 text-sm">Q&A</button>
                </div>

                {/* Lesson List */}
                <div className="mt-3 space-y-2 max-h-32 overflow-y-auto">
                  <div className="flex items-center gap-2 p-2 bg-green-50 rounded-lg">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-xs text-gray-700">1. Introdução às Métricas</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-green-50 rounded-lg">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-xs text-gray-700">2. KPIs Essenciais</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-orange-50 rounded-lg border border-orange-200">
                    <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    </svg>
                    <span className="text-xs text-gray-700 font-medium">3. Métricas de Engajamento</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg">
                    <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
                    <span className="text-xs text-gray-400">4. Taxa de Conversão</span>
                  </div>
                </div>

                <button className="mt-4 w-full py-2.5 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg text-sm font-medium">
                  Próxima Aula →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
