
import React from 'react';
import type { Difficulty, MathField } from '../types';
import { DIFFICULTIES, MATH_FIELDS } from '../constants';

interface NavbarProps {
    difficulty: Difficulty;
    mathField: MathField;
    onDifficultyChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onMathFieldChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    score: number;
    currentQuestionIndex: number;
    totalQuestions: number;
}

const Navbar: React.FC<NavbarProps> = ({ difficulty, mathField, onDifficultyChange, onMathFieldChange, score, currentQuestionIndex, totalQuestions }) => {
    return (
        <nav className="bg-slate-800 shadow-lg p-4 sticky top-0 z-10">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl md:text-2xl font-bold text-white tracking-wider">GMAT Quant Prep</h1>
                
                <div className="flex items-center space-x-4">
                    <div className="hidden md:flex items-center space-x-2">
                        <label htmlFor="difficulty" className="text-slate-400 text-sm font-medium">Difficulty</label>
                        <select id="difficulty" value={difficulty} onChange={onDifficultyChange} className="bg-slate-700 text-white rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                           {DIFFICULTIES.map(d => <option key={d} value={d}>{d}</option>)}
                        </select>
                    </div>

                    <div className="flex items-center space-x-2">
                        <label htmlFor="mathField" className="text-slate-400 text-sm font-medium">Field</label>
                        <select id="mathField" value={mathField} onChange={onMathFieldChange} className="bg-slate-700 text-white rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                            {MATH_FIELDS.map(f => <option key={f} value={f}>{f}</option>)}
                        </select>
                    </div>

                    <div className="text-white font-semibold bg-slate-700 px-4 py-2 rounded-md">
                        Score: {score}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
