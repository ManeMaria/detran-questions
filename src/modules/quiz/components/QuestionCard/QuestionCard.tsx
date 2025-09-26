import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Question } from '@/modules/quiz/types';
import { categoryLabels } from '@/modules/quiz/utils';


export const QuestionCard: React.FC<{
  question: Question;
  onEdit: (question: Question) => void;
  onDelete: (id: string) => void;
}> = ({ question, onEdit, onDelete }) => (
  <Card className="w-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
    <CardHeader className="pb-4">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-medium rounded-full shadow-sm">
              {categoryLabels[question.category] || question.category}
            </span>
          </div>
          <CardTitle className="text-lg leading-relaxed text-gray-800 font-medium">
            {question.question}
          </CardTitle>
        </div>
        {/* <div className="flex gap-2 ml-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onEdit(question)}
            className="h-8 px-3 hover:bg-blue-50 hover:border-blue-300"
          >
            Editar
          </Button>
          <Button
            variant="destructive"
            size="sm"
            onClick={() => onDelete(question.id)}
            className="h-8 px-3"
          >
            Excluir
          </Button>
        </div> */}
      </div>
    </CardHeader>

    <CardContent className="pt-0 space-y-4">
      <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
        <div>
          <p className="text-sm font-semibold text-green-800 mb-1">✓ Resposta Correta</p>
          <p className="text-sm text-green-700 leading-relaxed">{question.correctAnswer}</p>
        </div>
      </div>

      <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
        <div>
          <p className="text-sm font-semibold text-red-800 mb-1">✗ Resposta Incorreta</p>
          <p className="text-sm text-red-700 leading-relaxed">{question.wrongAnswer}</p>
        </div>
      </div>

      {question.explanation && (
        <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
          <p className="text-sm font-semibold text-amber-800 mb-1">💡 Explicação</p>
          <p className="text-sm text-amber-700 leading-relaxed">{question.explanation}</p>
        </div>
      )}
    </CardContent>
  </Card>
);