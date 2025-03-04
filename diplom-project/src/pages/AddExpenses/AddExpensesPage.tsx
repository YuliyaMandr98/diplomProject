import Title from "../../shared/ui/Title/Title";
import ExpensesCard from "../../shared/ui/ExpensesCard/ExpensesCard";
import { Button, DatePicker, Input } from "antd";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { useState } from "react";
import { expensesData } from "./img";
import AddExpensesSelect from "../../shared/ui/AddExpensesSelect/AddExpensesSelect";
import { Expense, useExpenses } from "../../context/ExpensesCardsContext";
import { useNavigate } from "react-router-dom";

dayjs.extend(customParseFormat);


const AddExpensesPage: React.FC = () => {
    const history = useNavigate(); // Хук для навигации
    const { addExpense } = useExpenses();
    const [amount, setAmount] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [comment, setComment] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [selectValue, setSelectValue] = useState<string>('');
    const [activeCard, setActiveCard] = useState<string | null>(null);

    const handleCardClick = (cardName: string) => {
        if (activeCard === cardName) {
            setActiveCard(null);
            setCategory('');
        } else {
            setActiveCard(cardName);
            setCategory(cardName);
        }
    };

    const handleSubmit = () => {
        const newExpense: Expense = { amount: Number(amount), date, comment, category, selectValue };
        addExpense(newExpense);
        setAmount('');
        setDate('');
        setComment('');
        setCategory('');
        setSelectValue('');
        setActiveCard(null);
        history("/", { replace: true });
    };




    return (
        <div className="expenses-page-wrap">
            <div className="header-info">
                <Title children="Добавить расход" />
            </div>
            <div
                className="expenses-cards-wrap"
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '16px' }}>
                {expensesData.map((item, index) => (
                    <ExpensesCard
                        key={index}
                        imageLogo={item.logo}
                        name={item.name}
                        urlImg={item.urlImg}
                        isActive={activeCard === item.name}
                        onClick={() => handleCardClick(item.name)}
                    />
                ))}
            </div>
            <div className="expenses-info">
                <Input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Сумма" />
                <DatePicker value={date} onChange={(date) => setDate(date)} placeholder="Дата" />
                <Input value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Комментарий" />
                <Input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Категория" />
                <AddExpensesSelect value={selectValue} onChange={setSelectValue} />
            </div>
            <Button onClick={handleSubmit}>Добавить</Button>
        </div>
    );
}

export default AddExpensesPage;

