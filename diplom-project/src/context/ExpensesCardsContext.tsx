import { createContext, useContext, useState } from "react";

export interface Expense {
    id: number; // Добавляем уникальный идентификатор для каждой карточки
    amount: number;
    date: string;
    comment: string;
    category: string;
    selectValue: string;
}

export interface ExpensesContextType {
    expenses: Expense[];
    addExpense: (expense: Expense) => void;
    removeExpense: (id: number) => void; // Добавляем функцию удаления
}

const ExpensesContext = createContext<ExpensesContextType | undefined>(undefined);

export const ExpensesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [expenses, setExpenses] = useState<Expense[]>(() => {
        const savedExpenses = localStorage.getItem('expenses');
        return savedExpenses ? JSON.parse(savedExpenses) : [];
    });

    const addExpense = (expense: Expense) => {
        setExpenses((prevExpenses) => {
            const updatedExpenses = [...prevExpenses, { ...expense, id: Date.now() }]; // Генерируем уникальный id

            localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
            return updatedExpenses;
        });
    };

    const removeExpense = (id: number) => {
        setExpenses((prevExpenses) => {
            const updatedExpenses = prevExpenses.filter(expense => expense.id !== id);
            localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
            return updatedExpenses;
        });
    };

    return (
        <ExpensesContext.Provider value={{ expenses, addExpense, removeExpense }}>
            {children}
        </ExpensesContext.Provider>
    );
};

export const useExpenses = (): ExpensesContextType => {
    const context = useContext(ExpensesContext);
    if (!context) {
        throw new Error('useExpenses must be used within an ExpensesProvider');
    }
    return context;
};