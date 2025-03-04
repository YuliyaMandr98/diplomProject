import AccountsInfo from "../../components/AccountsInfo/AccountsInfo";
import ExpensesInfo from "../../components/ExpensesInfo/ExpensesInfo";
import GoalCardPage from "../../components/GoalCardPage/GoalCardPage";
import MoneyReport from "../../components/MoneyReport/MoneyReport";

function MainPage() {
    return (
        <div>
            <MoneyReport />
            <AccountsInfo />
            <GoalCardPage />
            <ExpensesInfo />
        </div>

    )
}

export default MainPage;