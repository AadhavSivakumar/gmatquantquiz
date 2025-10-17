
import React from 'react';

interface ScoreScreenProps {
    score: number;
    totalQuestions: number;
    onRestart: () => void;
}

const ScoreScreen: React.FC<ScoreScreenProps> = ({ score, totalQuestions, onRestart }) => {
    const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
    
    const getFeedback = () => {
        if (percentage >= 80) return "Excellent! You've mastered this.";
        if (percentage >= 60) return "Great job! Keep practicing.";
        if (percentage >= 40) return "Good effort. Review and try again.";
        return "Keep practicing! Every attempt is a step forward.";
    };

    return (
        <div className="bg-slate-800 p-8 rounded-xl shadow-2xl text-center w-full max-w-md animate-fade-in">
            <h2 className="text-3xl font-bold text-white mb-2">Quiz Completed!</h2>
            <p className="text-slate-400 mb-6">{getFeedback()}</p>
            
            <div className="text-6xl font-bold text-blue-400 my-8">
                {score} / {totalQuestions}
            </div>

            <div className="text-2xl text-slate-300 mb-8">
                Your score: <span className="font-bold text-white">{percentage}%</span>
            </div>
            
            <button
                onClick={onRestart}
                className="bg-blue-600 text-white font-bold py-3 px-10 rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-blue-500"
            >
                Take Another Quiz
            </button>
        </div>
    );
};

export default ScoreScreen;
