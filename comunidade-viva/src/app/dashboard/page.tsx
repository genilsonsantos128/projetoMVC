'use client'

import { useState } from 'react'
import { 
  Church, 
  Heart, 
  MessageCircle, 
  Users, 
  UserCircle, 
  Plus, 
  Search,
  Bell,
  Settings,
  LogOut,
  Filter,
  Clock,
  HandHeart,
  ChevronRight
} from 'lucide-react'

// Mock data for demonstration
const mockPrayerRequests = [
  {
    id: '1',
    title: 'Oração pela minha família',
    content: 'Peço orações para que minha família encontre paz e união neste momento difícil.',
    author: 'Maria Silva',
    category: 'FAMILY',
    isUrgent: false,
    prayingCount: 12,
    createdAt: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    title: 'Recuperação de cirurgia',
    content: 'Meu pai passou por uma cirurgia ontem e estamos orando por uma recuperação rápida.',
    author: 'João Santos',
    category: 'HEALTH',
    isUrgent: true,
    prayingCount: 25,
    createdAt: '2024-01-15T08:15:00Z'
  }
]

const mockForums = [
  {
    id: '1',
    name: 'Estudos Bíblicos',
    description: 'Discussões sobre passagens bíblicas e estudos',
    postCount: 45,
    icon: '📖'
  },
  {
    id: '2',
    name: 'Dúvidas sobre Fé',
    description: 'Espaço para esclarecimentos e crescimento espiritual',
    postCount: 23,
    icon: '❓'
  }
]

const mockGroups = [
  {
    id: '1',
    name: 'Jovens Unidos',
    description: 'Grupo para jovens de 18 a 30 anos',
    memberCount: 45,
    image: null
  },
  {
    id: '2',
    name: 'Mães em Oração',
    description: 'Grupo de mães que se reúnem para orar pelos filhos',
    memberCount: 23,
    image: null
  }
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('prayers')
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Church className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Comunidade Viva</span>
            </div>

            {/* Search Bar */}
            <div className="hidden md:block flex-1 max-w-lg mx-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Buscar orações, grupos, pessoas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg">
                <Bell className="h-6 w-6" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg">
                <Settings className="h-6 w-6" />
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">U</span>
                </div>
                <span className="hidden md:block font-medium text-gray-700">Usuário Demo</span>
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg">
                <LogOut className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('prayers')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    activeTab === 'prayers' 
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Heart className="h-5 w-5" />
                  <span>Mural de Oração</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('forums')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    activeTab === 'forums' 
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Fóruns</span>
                </button>

                <button
                  onClick={() => setActiveTab('groups')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    activeTab === 'groups' 
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Users className="h-5 w-5" />
                  <span>Grupos</span>
                </button>

                <button
                  onClick={() => setActiveTab('members')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    activeTab === 'members' 
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <UserCircle className="h-5 w-5" />
                  <span>Membros</span>
                </button>
              </nav>

              {/* Quick Actions */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Ações Rápidas</h3>
                <div className="space-y-2">
                  <button className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Plus className="h-4 w-4" />
                    <span>Nova Oração</span>
                  </button>
                  <button className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                    <Plus className="h-4 w-4" />
                    <span>Criar Grupo</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Prayer Requests Tab */}
            {activeTab === 'prayers' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-2xl font-bold text-gray-900">Mural de Oração</h1>
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <Filter className="h-4 w-4" />
                      <span>Filtrar</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      <Plus className="h-4 w-4" />
                      <span>Nova Oração</span>
                    </button>
                  </div>
                </div>

                <div className="space-y-6">
                  {mockPrayerRequests.map((prayer) => (
                    <div key={prayer.id} className="bg-white rounded-xl shadow-sm p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                            <span className="text-gray-600 font-semibold text-sm">
                              {prayer.author.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{prayer.author}</h3>
                            <p className="text-sm text-gray-500 flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              Há 2 horas
                            </p>
                          </div>
                        </div>
                        {prayer.isUrgent && (
                          <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                            Urgente
                          </span>
                        )}
                      </div>

                      <h2 className="text-lg font-semibold text-gray-900 mb-2">{prayer.title}</h2>
                      <p className="text-gray-700 mb-4">{prayer.content}</p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-4">
                          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                            <HandHeart className="h-4 w-4" />
                            <span>Estou orando</span>
                          </button>
                          <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                            <MessageCircle className="h-4 w-4" />
                            <span>Comentar</span>
                          </button>
                        </div>
                        <span className="text-sm text-gray-500">
                          {prayer.prayingCount} pessoas orando
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Forums Tab */}
            {activeTab === 'forums' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-2xl font-bold text-gray-900">Fóruns Temáticos</h1>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    <Plus className="h-4 w-4" />
                    <span>Novo Tópico</span>
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {mockForums.map((forum) => (
                    <div key={forum.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="text-3xl">{forum.icon}</div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{forum.name}</h3>
                          <p className="text-gray-600 text-sm">{forum.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{forum.postCount} tópicos</span>
                        <ChevronRight className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Groups Tab */}
            {activeTab === 'groups' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-2xl font-bold text-gray-900">Grupos de Interesse</h1>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                    <Plus className="h-4 w-4" />
                    <span>Criar Grupo</span>
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {mockGroups.map((group) => (
                    <div key={group.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                      <div className="h-32 bg-gradient-to-r from-purple-400 to-pink-400"></div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{group.name}</h3>
                        <p className="text-gray-600 mb-4">{group.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{group.memberCount} membros</span>
                          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700">
                            Participar
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Members Tab */}
            {activeTab === 'members' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-2xl font-bold text-gray-900">Diretório de Membros</h1>
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        placeholder="Buscar membros..."
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Sample member cards */}
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="bg-white rounded-xl shadow-sm p-6 text-center">
                      <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-gray-600 font-semibold text-lg">M{i}</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1">Membro {i}</h3>
                      <p className="text-gray-600 text-sm mb-2">Ministério de Jovens</p>
                      <p className="text-gray-500 text-xs">Membro há 2 anos</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}