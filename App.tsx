
import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import QuestionCard from './components/QuestionCard';
import ScoreScreen from './components/ScoreScreen';
import { ALL_QUESTIONS } from './constants';
import type { Difficulty, MathField, Question } from './types';

const App: React.FC = () => {
    const [difficulty, setDifficulty] = useState<Difficulty>('Mix');
    const [mathField, setMathField] = useState<MathField>('Mix');
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);
    
    const shuffleArray = <T,>(array: T[]): T[] => {
        return [...array].sort(() => Math.random() - 0.5);
    };

    const startNewQuiz = useCallback(() => {
        let filteredQuestions = ALL_QUESTIONS;

        if (difficulty !== 'Mix') {
            filteredQuestions = filteredQuestions.filter(q => q.difficulty === difficulty);
        }

        if (mathField !== 'Mix') {
            filteredQuestions = filteredQuestions.filter(q => q.field_of_math === mathField);
        }

        setQuestions(shuffleArray(filteredQuestions));
        setCurrentQuestionIndex(0);
        setSelectedAnswer(null);
        setIsAnswered(false);
        setScore(0);
        setQuizFinished(false);
    }, [difficulty, mathField]);

    useEffect(() => {
        startNewQuiz();
    }, [startNewQuiz]);

    const handleAnswerSelect = (option: string) => {
        if (isAnswered) return;
        
        const correctAnswer = questions[currentQuestionIndex].correct_answer;
        if (option === correctAnswer) {
            setScore(prevScore => prevScore + 1);
        }
        setSelectedAnswer(option);
        setIsAnswered(true);
    };

    const handleNextQuestion = () => {
        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < questions.length) {
            setCurrentQuestionIndex(nextQuestionIndex);
            setSelectedAnswer(null);
            setIsAnswered(false);
        } else {
            setQuizFinished(true);
        }
    };

    const handleRestart = () => {
        startNewQuiz();
    };
    
    const handleDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDifficulty(e.target.value as Difficulty);
    }
    
    const handleMathFieldChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setMathField(e.target.value as MathField);
    }

    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 flex flex-col">
            <Navbar 
                difficulty={difficulty}
                mathField={mathField}
                onDifficultyChange={handleDifficultyChange}
                onMathFieldChange={handleMathFieldChange}
                score={score}
                currentQuestionIndex={currentQuestionIndex}
                totalQuestions={questions.length}
            />
            <main className="container mx-auto p-4 md:p-8 flex-grow flex justify-center items-center">
                {quizFinished ? (
                    <ScoreScreen 
                        score={score}
                        totalQuestions={questions.length}
                        onRestart={handleRestart}
                    />
                ) : questions.length > 0 ? (
                    <QuestionCard 
                        question={questions[currentQuestionIndex]}
                        questionNumber={currentQuestionIndex + 1}
                        totalQuestions={questions.length}
                        selectedAnswer={selectedAnswer}
                        isAnswered={isAnswered}
                        onAnswerSelect={handleAnswerSelect}
                        onNextQuestion={handleNextQuestion}
                    />
                ) : (
                    <div className="text-center mt-10">
                        <h2 className="text-2xl font-bold">No questions found for this category.</h2>
                        <p className="text-slate-400">Please try a different selection.</p>
                    </div>
                )}
            </main>
            <footer className="text-center p-4 text-slate-500 text-sm">
                Created by Aadhav Sivakumar for Keneisha Sanap in October 2025
            </footer>
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.5s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default App;
