import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { BankAccountCardProps } from '../../src/shared/ui/BankAccountCard/BankAccountCard';

interface BankCardsContextType {
    cards: BankAccountCardProps[];
    addCard: (newCard: BankAccountCardProps) => void;
    deleteCard: (index: number) => void;
}

const BankCardsContext = createContext<BankCardsContextType | undefined>(undefined);

export const useBankCards = () => {
    const context = useContext(BankCardsContext);
    if (!context) {
        throw new Error('useBankCards must be used within a BankCardsProvider');
    }
    return context;
};

export const BankCardsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cards, setCards] = useState<BankAccountCardProps[]>(() => {
        const savedCards = localStorage.getItem("bankCards");
        return savedCards ? JSON.parse(savedCards) : [];
    });

    useEffect(() => {
        localStorage.setItem("bankCards", JSON.stringify(cards));
    }, [cards]);

    const addCard = (newCard: BankAccountCardProps) => {
        setCards(prevCards => [...prevCards, newCard]);
    };

    const deleteCard = (index: number) => {
        setCards(prevCards => prevCards.filter((_, i) => i !== index));
    };

    return (
        <BankCardsContext.Provider value={{ cards, addCard, deleteCard }}>
            {children}
        </BankCardsContext.Provider>
    );
};