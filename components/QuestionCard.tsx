
import React from 'react';
import type { Question, Option } from '../types';
import HtmlRenderer from './HtmlRenderer';

interface QuestionCardProps {
    question: Question;
    questionNumber: number;
    totalQuestions: number;
    selectedAnswer: string | null;
    isAnswered: boolean;
    onAnswerSelect: (option: string) => void;
    onNextQuestion: () => void;
}

const getOptionClass = (option: Option, isAnswered: boolean, selectedAnswer: string | null, correctAnswer: string) => {
    let baseClass = 'w-full text-left p-4 rounded-lg border-2 transition-all duration-300 focus:outline-none disabled:cursor-not-allowed';
    
    if (!isAnswered) {
        return `${baseClass} bg-slate-700 border-slate-600 hover:bg-slate-600 hover:border-blue-500 focus:ring-2 focus:ring-blue-500`;
    }

    if (option.option === correctAnswer) {
        return `${baseClass} bg-green-500/20 border-green-500 text-green-300`;
    }
    
    if (option.option === selectedAnswer && option.option !== correctAnswer) {
        return `${baseClass} bg-red-500/20 border-red-500 text-red-300`;
    }
    
    return `${baseClass} bg-slate-800 border-slate-700 text-slate-400`;
};

const getDifficultyColor = (difficulty: 'Easy' | 'Medium' | 'Hard') => {
    switch (difficulty) {
        case 'Easy':
            return 'bg-green-500/20 text-green-300';
        case 'Medium':
            return 'bg-yellow-500/20 text-yellow-300';
        case 'Hard':
            return 'bg-red-500/20 text-red-300';
        default:
            return 'bg-slate-700 text-slate-300';
    }
};

const QuestionCard: React.FC<QuestionCardProps> = ({ question, questionNumber, totalQuestions, selectedAnswer, isAnswered, onAnswerSelect, onNextQuestion }) => {

    return (
        <div className="bg-slate-800 p-6 md:p-8 rounded-xl shadow-2xl w-full max-w-4xl animate-fade-in">
            <div className="mb-6">
                 <div className="flex justify-between items-center mb-4 flex-wrap gap-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-semibold uppercase tracking-wider bg-slate-700 text-blue-300 px-2.5 py-1 rounded-full">{question.field_of_math}</span>
                        <span className={`text-xs font-semibold uppercase tracking-wider ${getDifficultyColor(question.difficulty)} px-2.5 py-1 rounded-full`}>{question.difficulty}</span>
                    </div>
                    <p className="text-slate-400 text-sm whitespace-nowrap">{`Question ${questionNumber} of ${totalQuestions}`}</p>
                </div>
                <p className="text-sm font-medium text-slate-400 mb-2">{question.question_type}</p>
                <HtmlRenderer htmlString={question.question_text} className="text-xl md:text-2xl text-slate-100 leading-relaxed" />
            </div>

            {question.statements && (
                <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 my-6 space-y-3 text-slate-300">
                    <HtmlRenderer htmlString={`(1) ${question.statements['1']}`} />
                    <HtmlRenderer htmlString={`(2) ${question.statements['2']}`} />
                </div>
            )}

            <div className="space-y-4">
                {question.options.map((option) => (
                    <button
                        key={option.option}
                        onClick={() => onAnswerSelect(option.option)}
                        disabled={isAnswered}
                        className={getOptionClass(option, isAnswered, selectedAnswer, question.correct_answer)}
                    >
                        <span className="font-bold mr-3">{option.option}.</span>
                        <HtmlRenderer htmlString={option.text} className="inline"/>
                    </button>
                ))}
            </div>

            {isAnswered && (
                <div className="mt-8 p-5 bg-slate-900/70 border-l-4 border-blue-500 rounded-r-lg animate-fade-in">
                    <h3 className="text-lg font-bold text-slate-100 mb-2">Explanation</h3>
                    <HtmlRenderer htmlString={question.explanation} className="text-slate-300" />
                </div>
            )}

            <div className="mt-8 text-center">
                {isAnswered && (
                    <button
                        onClick={onNextQuestion}
                        className="bg-blue-600 text-white font-bold py-3 px-10 rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-blue-500 animate-fade-in"
                    >
                        {questionNumber === totalQuestions ? 'Finish Quiz' : 'Next Question'}
                    </button>
                )}
            </div>
        </div>
    );
};

export default QuestionCard;
