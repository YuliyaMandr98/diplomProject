import { NavLink } from "react-router-dom";
import TextButton from "../../shared/ui/TextButton/TextButton";
import Title from "../../shared/ui/Title/Title";
import { useExpenses } from "../../context/ExpensesCardsContext";
import ExpensesInfoCard from "../../shared/ui/ExpensesInfoCard/ExpensesInfoCard";
import x from '../../assets/img/birthday.png'

function ExpensesInfo() {
    const { expenses } = useExpenses();
    console.log(expenses);
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
                        date={String(expense.date)}
                        comment={String(expense.comment)}
                        category={String(expense.category)}
                        selectValue={String(expense.selectValue)}
                        currency={"BYN"}
                        onDelete={function (): void {
                            throw new Error("Function not implemented.");
                        }}
                        onClick={function (): void {
                            throw new Error("Function not implemented.");
                        }} />
                ))}
            </div>
        </div>
    )
}

export default ExpensesInfo;

