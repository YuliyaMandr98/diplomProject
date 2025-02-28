import "./App.scss";
import "./theme.scss";
import MoneyReport from "./components/MoneyReport/MoneyReport";
import Header from "./components/Header/Header";
import AccountsInfo from "./components/AccountsInfo/AccountsInfo";
import GoalCardPage from "./components/GoalCardPage/GoalCardPage";


function App() {
  return (
    <>
      <Header />
      <MoneyReport />
      <AccountsInfo />
      <GoalCardPage />
    </>

  );
}

export default App;
