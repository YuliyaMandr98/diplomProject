import { createContext, useContext, useState } from "react";

export interface Expense {
    amount: number;
    date: string;
    comment: string;
    category: string;
    selectValue: string;
}

export interface ExpensesContextType {
    expenses: Expense[];
    addExpense: (expense: Expense) => void;
}

const ExpensesContext = createContext<ExpensesContextType | undefined>(undefined);

export const ExpensesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [expenses, setExpenses] = useState<Expense[]>(() => {
        const savedExpenses = localStorage.getItem('expenses');
        return savedExpenses ? JSON.parse(savedExpenses) : [];
    });

    const addExpense = (expense: Expense) => {
        setExpenses((prevExpenses) => {
            const updatedExpenses = [...prevExpenses, expense];

            localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
            return updatedExpenses;
        });
    };

    return (
        <ExpensesContext.Provider value={{ expenses, addExpense }}>
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