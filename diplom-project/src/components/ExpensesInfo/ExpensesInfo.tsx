import { NavLink } from "react-router-dom";
import TextButton from "../../shared/ui/TextButton/TextButton";
import Title from "../../shared/ui/Title/Title";
import { useExpenses } from "../../context/ExpensesCardsContext";
import ExpensesInfoCard from "../../shared/ui/ExpensesInfoCard/ExpensesInfoCard";
import dayjs from "dayjs";

function ExpensesInfo() {
    const { expenses, removeExpense } = useExpenses();
    console.log(expenses);

    const handleDelete = (id: number) => {
        removeExpense(id); // Вызываем функцию удаления
    };

    return (
        <div>
            <div className="header-info">
                <Title children="Расходы" />
                <NavLink to="/add-expenses">
                    <TextButton children={"Добавить"} />
                </NavLink>
            </div >
            <div className="expenses-info-wrap">
                {expenses.map((expense, index) => (
                    <ExpensesInfoCard
                        key={index}
                        amount={expense.amount}
                        date={dayjs(String(expense.date)).format('DD.MM.YYYY')}
                        comment={String(expense.comment)}
                        category={String(expense.category)}
                        selectValue={String(expense.selectValue)}
                        currency={"BYN"}
                        onDelete={() => handleDelete(expense.id)} // Передаем функцию удаления
                        onClick={() => console.log(`Кликнули на карточку ${expense.id}`)} />
                ))}
            </div>
        </div>
    )
}

export default ExpensesInfo;

