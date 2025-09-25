import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, X } from 'lucide-react';
import type { Question, QuestionCategory } from '@/modules/quiz/types';


export const QuestionForm: React.FC<{
  question?: Question;
  onSave: (question: Omit<Question, 'id'> | Question) => void;
  onCancel: () => void;
}> = ({ question, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    category: (question?.category as QuestionCategory) || 'sinalizacao',
    question: question?.question || '',
    correctAnswer: question?.correctAnswer || '',
    wrongAnswer: question?.wrongAnswer || '',
    explanation: question?.explanation || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question) {
      onSave({ ...question, ...formData });
    } else {
      onSave(formData);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-auto">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              {question ? 'Editar Questão' : 'Nova Questão'}
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={onCancel}
              className="text-white hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Categoria
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value as QuestionCategory }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                required
              >
                {categories.slice(1).map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Pergunta
              </label>
              <textarea
                value={formData.question}
                onChange={(e) => setFormData(prev => ({ ...prev, question: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                rows={4}
                required
                placeholder="Digite a pergunta da questão..."
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-green-700 mb-2">
                  Resposta Correta
                </label>
                <textarea
                  value={formData.correctAnswer}
                  onChange={(e) => setFormData(prev => ({ ...prev, correctAnswer: e.target.value }))}
                  className="w-full px-4 py-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-green-50 resize-none"
                  rows={3}
                  required
                  placeholder="Digite a resposta correta..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-red-700 mb-2">
                  Resposta Incorreta
                </label>
                <textarea
                  value={formData.wrongAnswer}
                  onChange={(e) => setFormData(prev => ({ ...prev, wrongAnswer: e.target.value }))}
                  className="w-full px-4 py-3 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-red-50 resize-none"
                  rows={3}
                  required
                  placeholder="Digite a resposta incorreta..."
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Explicação (Opcional)
              </label>
              <textarea
                value={formData.explanation}
                onChange={(e) => setFormData(prev => ({ ...prev, explanation: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                rows={3}
                placeholder="Digite uma explicação para a resposta..."
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1 py-3 text-base font-medium">
                {question ? 'Atualizar' : 'Salvar'} Questão
              </Button>
              <Button type="button" variant="outline" onClick={onCancel} className="px-6">
                Cancelar
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );

};