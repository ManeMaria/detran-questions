"use client"

import { useState } from "react";
import type { Question, QuestionCategory } from "@/modules/quiz/types";
import { QuestionCard } from "../components/QuestionCard";
import { QuestionForm } from "../components/QuestionForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Search, Filter, BookOpen, Users, Trophy, Menu } from "lucide-react";
import { categoryLabels, categories } from "@/modules/quiz/utils";

// Mock data
const questionsData: Question[] = [
  {
    id: "1",
    category: "sinalizacao",
    question: "Os marcadores de alinhamento são dispositivos utilizados para",
    correctAnswer: "Alertar o condutor quando houver alteração do alinhamento horizontal da via.",
    wrongAnswer: "Advertir o condutor de uma situação de perigo à direita.",
    explanation: "Marcadores de alinhamento são placas específicas para mudanças no traçado da via."
  },
  {
    id: "2",
    category: "direcao-defensiva",
    question: "Quando um sinistro ocorre pela má conservação do veículo, pode-se afirmar que o condutor agiu de que forma?",
    correctAnswer: "Negligente.",
    wrongAnswer: "Imprudente.",
    explanation: "Negligência é a falta de cuidado com a manutenção preventiva do veículo."
  },
  {
    id: "3",
    category: "mecanica",
    question: "O sistema de freios tem os seguintes elementos:",
    correctAnswer: "Cilindro mestre, disco e tambor.",
    wrongAnswer: "Coroa, pinha e lonas.",
    explanation: "O sistema de freios é composto por cilindro mestre, discos e tambores principalmente."
  },
  {
    id: "4",
    category: "meio-ambiente",
    question: "Sobre os combustíveis para veículos automotores, marque a resposta CERTA:",
    correctAnswer: "Motores elétricos não emitem gases, mas podem poluir o ar se a fonte de energia elétrica emitir gases poluentes (exemplo: usina a carvão ou petróleo).",
    wrongAnswer: "O biodiesel é combustível desenvolvido para os motores a álcool.",
    explanation: "Veículos elétricos são mais limpos no uso, mas dependem da fonte de energia."
  }
];




export default function DetranQuizApp() {
  const [questions, setQuestions] = useState<Question[]>(questionsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<QuestionCategory | 'all'>('all');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState<Question | undefined>();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Filter questions
  const filteredQuestions = questions.filter(question => {
    const matchesCategory = selectedCategory === 'all' || question.category === selectedCategory;
    const matchesSearch =
      question.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      question.correctAnswer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      question.wrongAnswer.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handleAddQuestion = () => {
    setEditingQuestion(undefined);
    setIsFormOpen(true);
  };

  const handleEditQuestion = (question: Question) => {
    setEditingQuestion(question);
    setIsFormOpen(true);
  };

  const handleSaveQuestion = (questionData: Omit<Question, 'id'> | Question) => {
    if ('id' in questionData) {
      // Update existing question
      setQuestions(prev =>
        prev.map(q => q.id === questionData.id ? questionData : q)
      );
    } else {
      // Add new question
      const newQuestion: Question = {
        ...questionData,
        id: Date.now().toString(),
      };
      setQuestions(prev => [...prev, newQuestion]);
    }
    setIsFormOpen(false);
    setEditingQuestion(undefined);
  };

  const handleDeleteQuestion = (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir esta questão?')) {
      setQuestions(prev => prev.filter(q => q.id !== id));
    }
  };

  const getCategoryStats = () => {
    const stats = questions.reduce((acc, question) => {
      acc[question.category] = (acc[question.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(categoryLabels).map(([key, label]) => ({
      category: key,
      label,
      count: stats[key] || 0
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">DETRAN Quiz</h1>
                  <p className="text-sm text-gray-600">Sistema de Gestão de Questões</p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            {/* <nav className="hidden md:flex items-center space-x-4">
              <Button
                onClick={handleAddQuestion}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium px-6"
              >
                <Plus className="h-4 w-4 mr-2" />
                Nova Questão
              </Button>
            </nav> */}

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-3 space-y-2">
              <Button
                onClick={() => {
                  handleAddQuestion();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
              >
                <Plus className="h-4 w-4 mr-2" />
                Nova Questão
              </Button>
            </div>
          </div>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium">Total de Questões</p>
                  <p className="text-3xl font-bold">{questions.length}</p>
                </div>
                <BookOpen className="h-12 w-12 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm font-medium">Categorias</p>
                  <p className="text-3xl font-bold">{Object.keys(categoryLabels).length}</p>
                </div>
                <Filter className="h-12 w-12 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm font-medium">Questões Filtradas</p>
                  <p className="text-3xl font-bold">{filteredQuestions.length}</p>
                </div>
                <Search className="h-12 w-12 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm font-medium">Instrutores</p>
                  <p className="text-3xl font-bold">1</p>
                </div>
                <Users className="h-12 w-12 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pesquisar questões
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Digite para buscar questões, respostas..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Filtrar por categoria
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value as QuestionCategory | 'all')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Category Statistics */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Distribuição por Categoria
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {getCategoryStats().map(({ category, label, count }) => (
                <div key={category} className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">{count}</p>
                  <p className="text-sm text-gray-600 font-medium">{label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Questions List */}
        <div className="space-y-6">
          {filteredQuestions.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <BookOpen className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Nenhuma questão encontrada
                </h3>
                <p className="text-gray-600 mb-6">
                  {searchTerm || selectedCategory !== 'all'
                    ? 'Tente ajustar os filtros ou adicionar novas questões.'
                    : 'Comece adicionando sua primeira questão.'}
                </p>
                <Button
                  onClick={handleAddQuestion}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Adicionar Primeira Questão
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6">
              {filteredQuestions.map((question) => (
                <QuestionCard
                  key={question.id}
                  question={question}
                  onEdit={handleEditQuestion}
                  onDelete={handleDeleteQuestion}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Question Form Modal */}
      {isFormOpen && (
        <QuestionForm
          question={editingQuestion}
          onSave={handleSaveQuestion}
          onCancel={() => {
            setIsFormOpen(false);
            setEditingQuestion(undefined);
          }}
        />
      )}
    </div>
  ); 