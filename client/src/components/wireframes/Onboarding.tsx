/**
 * Onboarding Wireframes Component
 * Design: Fluxo de cadastro para influenciadores e marcas
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

export default function Onboarding() {
  return (
    <div className="space-y-8">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold text-gray-800"
      >
        Fluxo de Onboarding - Cadastro de Influenciadores e Marcas
      </motion.h2>

      {/* Seção 1: Onboarding Web - Marcas */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <h3 className="text-xl font-semibold mb-4 amplify-text">1. Cadastro de Marcas/Agências (Web)</h3>
        <div className="wireframe-container rounded-lg p-4">
          <div className="bg-gray-50 rounded-lg p-6">
            {/* Step Indicator */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center">
                <div className="w-10 h-10 amplify-gradient rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div className="w-24 h-1 amplify-gradient"></div>
                <div className="w-10 h-10 amplify-gradient rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div className="w-24 h-1 bg-gray-300"></div>
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 font-bold">3</div>
                <div className="w-24 h-1 bg-gray-300"></div>
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 font-bold">4</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {/* Step 1: Dados da Empresa */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold mb-4">Passo 1: Dados da Empresa</h4>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-500 block mb-1">Nome da Empresa *</label>
                    <input type="text" className="w-full border rounded-lg p-3" placeholder="Ex: Fashion Brand X" />
                  </div>
                  <div>
                    <label className="text-sm text-gray-500 block mb-1">CNPJ *</label>
                    <input type="text" className="w-full border rounded-lg p-3" placeholder="00.000.000/0000-00" />
                  </div>
                  <div>
                    <label className="text-sm text-gray-500 block mb-1">Segmento *</label>
                    <select className="w-full border rounded-lg p-3">
                      <option>Selecione o segmento</option>
                      <option>Moda e Vestuário</option>
                      <option>Beleza e Cosméticos</option>
                      <option>Tecnologia</option>
                      <option>Alimentação</option>
                      <option>Fitness e Saúde</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-gray-500 block mb-1">Website</label>
                    <input type="url" className="w-full border rounded-lg p-3" placeholder="https://www.suaempresa.com" />
                  </div>
                  <div>
                    <label className="text-sm text-gray-500 block mb-1">Logo da Empresa</label>
                    <div className="border-2 border-dashed rounded-lg p-6 text-center">
                      <i className="fas fa-cloud-upload-alt text-3xl text-gray-400 mb-2"></i>
                      <p className="text-gray-500 text-sm">Arraste ou clique para upload</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Dados do Responsável */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold mb-4">Passo 2: Dados do Responsável</h4>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-500 block mb-1">Nome Completo *</label>
                    <input type="text" className="w-full border rounded-lg p-3" placeholder="João Silva" />
                  </div>
                  <div>
                    <label className="text-sm text-gray-500 block mb-1">Cargo *</label>
                    <input type="text" className="w-full border rounded-lg p-3" placeholder="Gerente de Marketing" />
                  </div>
                  <div>
                    <label className="text-sm text-gray-500 block mb-1">E-mail Corporativo *</label>
                    <input type="email" className="w-full border rounded-lg p-3" placeholder="joao@empresa.com" />
                  </div>
                  <div>
                    <label className="text-sm text-gray-500 block mb-1">Telefone *</label>
                    <input type="tel" className="w-full border rounded-lg p-3" placeholder="(11) 99999-9999" />
                  </div>
                  <div>
                    <label className="text-sm text-gray-500 block mb-1">Senha *</label>
                    <input type="password" className="w-full border rounded-lg p-3" placeholder="••••••••" />
                  </div>
                  <div>
                    <label className="text-sm text-gray-500 block mb-1">Confirmar Senha *</label>
                    <input type="password" className="w-full border rounded-lg p-3" placeholder="••••••••" />
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
              <button className="px-6 py-3 border rounded-lg hover:bg-gray-50">
                <i className="fas fa-arrow-left mr-2"></i> Voltar
              </button>
              <button className="px-6 py-3 amplify-gradient text-white rounded-lg">
                Próximo <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Seção 2: Onboarding Web - Preferências */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <h3 className="text-xl font-semibold mb-4 amplify-text">2. Preferências e Objetivos (Web)</h3>
        <div className="wireframe-container rounded-lg p-4">
          <div className="bg-gray-50 rounded-lg p-6">
            {/* Step Indicator */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white"><i className="fas fa-check"></i></div>
                <div className="w-24 h-1 bg-green-500"></div>
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white"><i className="fas fa-check"></i></div>
                <div className="w-24 h-1 amplify-gradient"></div>
                <div className="w-10 h-10 amplify-gradient rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div className="w-24 h-1 bg-gray-300"></div>
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 font-bold">4</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm max-w-2xl mx-auto">
              <h4 className="font-semibold mb-4">Passo 3: Preferências de Campanha</h4>
              
              <div className="space-y-6">
                <div>
                  <label className="text-sm text-gray-500 block mb-2">Orçamento Mensal Estimado</label>
                  <div className="grid grid-cols-4 gap-3">
                    <button className="p-3 border rounded-lg hover:border-orange-500 hover:bg-orange-50">Até R$ 10K</button>
                    <button className="p-3 border-2 border-orange-500 bg-orange-50 rounded-lg">R$ 10K - 50K</button>
                    <button className="p-3 border rounded-lg hover:border-orange-500 hover:bg-orange-50">R$ 50K - 100K</button>
                    <button className="p-3 border rounded-lg hover:border-orange-500 hover:bg-orange-50">Acima de R$ 100K</button>
                  </div>
                </div>

                <div>
                  <label className="text-sm text-gray-500 block mb-2">Redes Sociais de Interesse</label>
                  <div className="grid grid-cols-5 gap-3">
                    <button className="p-4 border-2 border-pink-500 bg-pink-50 rounded-lg flex flex-col items-center">
                      <i className="fab fa-instagram text-2xl text-pink-500 mb-1"></i>
                      <span className="text-xs">Instagram</span>
                    </button>
                    <button className="p-4 border-2 border-black bg-gray-50 rounded-lg flex flex-col items-center">
                      <i className="fab fa-tiktok text-2xl mb-1"></i>
                      <span className="text-xs">TikTok</span>
                    </button>
                    <button className="p-4 border rounded-lg flex flex-col items-center hover:border-red-500">
                      <i className="fab fa-youtube text-2xl text-red-500 mb-1"></i>
                      <span className="text-xs">YouTube</span>
                    </button>
                    <button className="p-4 border rounded-lg flex flex-col items-center hover:border-blue-400">
                      <i className="fab fa-twitter text-2xl text-blue-400 mb-1"></i>
                      <span className="text-xs">Twitter</span>
                    </button>
                    <button className="p-4 border rounded-lg flex flex-col items-center hover:border-blue-600">
                      <i className="fab fa-linkedin text-2xl text-blue-600 mb-1"></i>
                      <span className="text-xs">LinkedIn</span>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-sm text-gray-500 block mb-2">Objetivos Principais</label>
                  <div className="grid grid-cols-3 gap-3">
                    <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input type="checkbox" className="mr-3" defaultChecked />
                      <span>Brand Awareness</span>
                    </label>
                    <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input type="checkbox" className="mr-3" defaultChecked />
                      <span>Vendas/Conversões</span>
                    </label>
                    <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input type="checkbox" className="mr-3" />
                      <span>Engajamento</span>
                    </label>
                    <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input type="checkbox" className="mr-3" />
                      <span>Lançamento de Produto</span>
                    </label>
                    <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input type="checkbox" className="mr-3" />
                      <span>Geração de Leads</span>
                    </label>
                    <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input type="checkbox" className="mr-3" />
                      <span>Conteúdo UGC</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="text-sm text-gray-500 block mb-2">Tamanho de Influenciadores Preferido</label>
                  <div className="grid grid-cols-4 gap-3">
                    <button className="p-3 border rounded-lg hover:border-orange-500 text-center">
                      <p className="font-semibold">Nano</p>
                      <p className="text-xs text-gray-500">1K - 10K</p>
                    </button>
                    <button className="p-3 border-2 border-orange-500 bg-orange-50 rounded-lg text-center">
                      <p className="font-semibold">Micro</p>
                      <p className="text-xs text-gray-500">10K - 100K</p>
                    </button>
                    <button className="p-3 border-2 border-orange-500 bg-orange-50 rounded-lg text-center">
                      <p className="font-semibold">Macro</p>
                      <p className="text-xs text-gray-500">100K - 1M</p>
                    </button>
                    <button className="p-3 border rounded-lg hover:border-orange-500 text-center">
                      <p className="font-semibold">Mega</p>
                      <p className="text-xs text-gray-500">1M+</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button className="px-6 py-3 border rounded-lg hover:bg-gray-50">
                <i className="fas fa-arrow-left mr-2"></i> Voltar
              </button>
              <button className="px-6 py-3 amplify-gradient text-white rounded-lg">
                Próximo <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Seção 3: Onboarding Mobile - Influenciadores */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <h3 className="text-xl font-semibold mb-4 amplify-text">3. Cadastro de Influenciadores (Mobile PWA)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1: Bem-vindo */}
          <PhoneFrame title="Passo 1: Bem-vindo">
            <div className="h-full amplify-gradient flex flex-col items-center justify-center p-6">
              <img src="/images/amplify_logo.png" alt="Amplify" className="w-32 mb-6" />
              <h3 className="text-white text-xl font-bold text-center mb-2">Bem-vindo ao Amplify!</h3>
              <p className="text-white/80 text-center text-sm mb-8">Conecte-se com as melhores marcas e monetize seu conteúdo</p>
              <button className="w-full py-3 bg-white text-orange-500 rounded-xl font-semibold mb-3">Criar Conta</button>
              <button className="w-full py-3 border border-white text-white rounded-xl font-semibold">Já tenho conta</button>
            </div>
          </PhoneFrame>

          {/* Step 2: Conectar Redes */}
          <PhoneFrame title="Passo 2: Conectar Redes">
            <div className="h-full bg-white flex flex-col pt-12">
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 amplify-gradient rounded-full flex items-center justify-center text-white text-sm">1</div>
                    <div className="w-8 h-1 amplify-gradient"></div>
                    <div className="w-8 h-8 amplify-gradient rounded-full flex items-center justify-center text-white text-sm">2</div>
                    <div className="w-8 h-1 bg-gray-300"></div>
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 text-sm">3</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Conecte suas redes</h3>
                <p className="text-gray-500 text-center text-sm mb-6">Vincule suas redes sociais para validar seu perfil</p>
                
                <div className="space-y-3">
                  <button className="w-full p-4 border-2 border-pink-500 bg-pink-50 rounded-xl flex items-center justify-between">
                    <div className="flex items-center">
                      <i className="fab fa-instagram text-2xl text-pink-500 mr-3"></i>
                      <span className="font-medium">Instagram</span>
                    </div>
                    <span className="text-green-500"><i className="fas fa-check-circle"></i> Conectado</span>
                  </button>
                  <button className="w-full p-4 border rounded-xl flex items-center justify-between hover:border-gray-400">
                    <div className="flex items-center">
                      <i className="fab fa-tiktok text-2xl mr-3"></i>
                      <span className="font-medium">TikTok</span>
                    </div>
                    <span className="text-orange-500">Conectar</span>
                  </button>
                  <button className="w-full p-4 border rounded-xl flex items-center justify-between hover:border-gray-400">
                    <div className="flex items-center">
                      <i className="fab fa-youtube text-2xl text-red-500 mr-3"></i>
                      <span className="font-medium">YouTube</span>
                    </div>
                    <span className="text-orange-500">Conectar</span>
                  </button>
                  <button className="w-full p-4 border rounded-xl flex items-center justify-between hover:border-gray-400">
                    <div className="flex items-center">
                      <i className="fab fa-twitter text-2xl text-blue-400 mr-3"></i>
                      <span className="font-medium">Twitter</span>
                    </div>
                    <span className="text-orange-500">Conectar</span>
                  </button>
                </div>
              </div>
              <div className="mt-auto p-6">
                <button className="w-full py-3 amplify-gradient text-white rounded-xl font-semibold">Continuar</button>
              </div>
            </div>
          </PhoneFrame>

          {/* Step 3: Categorias */}
          <PhoneFrame title="Passo 3: Categorias">
            <div className="h-full bg-white flex flex-col pt-12">
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm"><i className="fas fa-check text-xs"></i></div>
                    <div className="w-8 h-1 bg-green-500"></div>
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm"><i className="fas fa-check text-xs"></i></div>
                    <div className="w-8 h-1 amplify-gradient"></div>
                    <div className="w-8 h-8 amplify-gradient rounded-full flex items-center justify-center text-white text-sm">3</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Seus nichos</h3>
                <p className="text-gray-500 text-center text-sm mb-6">Selecione até 5 categorias de conteúdo</p>
                
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { icon: 'fa-tshirt', name: 'Moda', selected: true },
                    { icon: 'fa-spa', name: 'Beleza', selected: true },
                    { icon: 'fa-dumbbell', name: 'Fitness', selected: false },
                    { icon: 'fa-utensils', name: 'Gastronomia', selected: false },
                    { icon: 'fa-plane', name: 'Viagem', selected: true },
                    { icon: 'fa-laptop', name: 'Tech', selected: false },
                    { icon: 'fa-gamepad', name: 'Games', selected: false },
                    { icon: 'fa-music', name: 'Música', selected: false },
                  ].map((cat, i) => (
                    <button 
                      key={i} 
                      className={`p-3 rounded-xl flex items-center ${cat.selected ? 'border-2 border-orange-500 bg-orange-50' : 'border hover:border-gray-400'}`}
                    >
                      <i className={`fas ${cat.icon} ${cat.selected ? 'text-orange-500' : 'text-gray-400'} mr-2`}></i>
                      <span className={cat.selected ? 'font-medium' : ''}>{cat.name}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-auto p-6">
                <button className="w-full py-3 amplify-gradient text-white rounded-xl font-semibold">Finalizar Cadastro</button>
              </div>
            </div>
          </PhoneFrame>

          {/* Step 4: Sucesso */}
          <PhoneFrame title="Passo 4: Sucesso">
            <div className="h-full bg-white flex flex-col items-center justify-center p-6">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-check text-4xl text-green-500"></i>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Cadastro Concluído!</h3>
              <p className="text-gray-500 text-center text-sm mb-6">Seu perfil está sendo analisado. Você receberá uma notificação quando for aprovado.</p>
              
              <div className="w-full bg-gray-50 rounded-xl p-4 mb-6">
                <h4 className="font-semibold mb-3">Próximos passos:</h4>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <i className="fas fa-check-circle text-green-500 mr-2"></i>
                    <span>Complete seu media kit</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <i className="fas fa-check-circle text-green-500 mr-2"></i>
                    <span>Defina seus preços</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <i className="fas fa-check-circle text-green-500 mr-2"></i>
                    <span>Adicione dados bancários</span>
                  </div>
                </div>
              </div>
              
              <button className="w-full py-3 amplify-gradient text-white rounded-xl font-semibold">Ir para o Dashboard</button>
            </div>
          </PhoneFrame>
        </div>
      </motion.div>

      {/* Seção 4: Verificação de Conta */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <h3 className="text-xl font-semibold mb-4 amplify-text">4. Verificação e Validação</h3>
        <div className="wireframe-container rounded-lg p-4">
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-shield-alt text-2xl text-blue-500"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Verificação de Identidade</h4>
                    <p className="text-gray-500">Complete a verificação para liberar todas as funcionalidades</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-xl">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white mr-3">
                        <i className="fas fa-check"></i>
                      </div>
                      <div>
                        <p className="font-medium">E-mail Verificado</p>
                        <p className="text-sm text-gray-500">joao@empresa.com</p>
                      </div>
                    </div>
                    <span className="text-green-500 font-medium">Concluído</span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-xl">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white mr-3">
                        <i className="fas fa-check"></i>
                      </div>
                      <div>
                        <p className="font-medium">Telefone Verificado</p>
                        <p className="text-sm text-gray-500">(11) 99999-9999</p>
                      </div>
                    </div>
                    <span className="text-green-500 font-medium">Concluído</span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white mr-3">
                        <i className="fas fa-clock"></i>
                      </div>
                      <div>
                        <p className="font-medium">Documento de Identidade</p>
                        <p className="text-sm text-gray-500">Em análise (até 24h)</p>
                      </div>
                    </div>
                    <span className="text-yellow-600 font-medium">Pendente</span>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-xl">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 mr-3">
                        <i className="fas fa-building"></i>
                      </div>
                      <div>
                        <p className="font-medium">Verificação CNPJ</p>
                        <p className="text-sm text-gray-500">Consulta automática na Receita Federal</p>
                      </div>
                    </div>
                    <button className="px-4 py-2 amplify-gradient text-white rounded-lg text-sm">Verificar</button>
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
