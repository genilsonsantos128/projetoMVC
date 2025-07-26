import Link from 'next/link'
import { Heart, Users, MessageCircle, Shield, Smartphone, Church } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Church className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Comunidade Viva</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                href="/auth/login" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Entrar
              </Link>
              <Link 
                href="/auth/register" 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Cadastrar
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Conecte sua
              <span className="text-blue-600 block">Comunidade de Fé</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Uma plataforma segura e acessível para unir membros da sua igreja, 
              facilitar pedidos de oração e promover o engajamento contínuo durante toda a semana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/auth/register"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Começar Agora
              </Link>
              <Link 
                href="#features"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Conhecer Recursos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Recursos da Plataforma
            </h2>
            <p className="text-xl text-gray-600">
              Tudo que sua comunidade precisa em um só lugar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Prayer Requests */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Mural de Oração
              </h3>
              <p className="text-gray-600">
                Compartilhe pedidos de oração e receba apoio da comunidade. 
                Outros membros podem clicar em "Estou orando" e deixar comentários de encorajamento.
              </p>
            </div>

            {/* Forums */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-lg mb-4">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Fóruns Temáticos
              </h3>
              <p className="text-gray-600">
                Participe de discussões sobre estudos bíblicos, dúvidas sobre fé, 
                devocionais e outros temas importantes para o crescimento espiritual.
              </p>
            </div>

            {/* Groups */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-lg mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Grupos de Interesse
              </h3>
              <p className="text-gray-600">
                Crie e participe de grupos como Jovens, Casais, Mães em Oração, 
                Clube do Livro Cristão e muito mais para conectar pessoas com interesses similares.
              </p>
            </div>

            {/* Member Directory */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 bg-yellow-600 rounded-lg mb-4">
                <Church className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Diretório de Membros
              </h3>
              <p className="text-gray-600">
                Conheça outros membros da comunidade, descubra seus ministérios 
                e construa relacionamentos mais profundos dentro da igreja.
              </p>
            </div>

            {/* Security */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 bg-red-600 rounded-lg mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Ambiente Seguro
              </h3>
              <p className="text-gray-600">
                Sistema de moderação e denúncias para manter um ambiente saudável, 
                respeitoso e adequado para toda a família.
              </p>
            </div>

            {/* Mobile App */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-lg mb-4">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Design Responsivo
              </h3>
              <p className="text-gray-600">
                Interface limpa e intuitiva que funciona perfeitamente em qualquer dispositivo, 
                com navegação fácil para todas as idades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para fortalecer sua comunidade?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Junte-se a centenas de igrejas que já estão usando a Comunidade Viva 
            para conectar seus membros e promover o crescimento espiritual.
          </p>
          <Link 
            href="/auth/register"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Criar Conta Gratuita
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Church className="h-6 w-6" />
              <span className="text-xl font-bold">Comunidade Viva</span>
            </div>
            <div className="text-gray-400">
              © 2024 Comunidade Viva. Conectando corações através da fé.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
