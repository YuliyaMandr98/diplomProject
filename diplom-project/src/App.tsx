import "./App.scss";
import "./theme.scss";
import MoneyReport from "./components/MoneyReport/MoneyReport";
import Header from "./components/Header/Header";
import AccountsInfo from "./components/AccountsInfo/AccountsInfo";
import GoalCardPage from "./components/GoalCardPage/GoalCardPage";
import { Provider } from "react-redux";
import store from "./store/store";
import { BankCardsProvider } from "./context/BankCardsContext";
import { Route, Routes } from "react-router-dom";
import BankAccountCard from "./shared/ui/BankAccountCard/BankAccountCard";
import ExpensesPage from "./components/ExpensesPage/ExpensesPage";


function App() {
  return (
    <>
      <Provider store={store}>
        <BankCardsProvider>
          <Header />
          <Routes>
            <Route path='/'>
              <Route index element={<MoneyReport />} />
              <Route path="/add-expenses" element={<AccountsInfo />} />
              <Route path="/history" element={'history'} />
            </Route>
          </Routes>
          <ExpensesPage />
          {/* <MoneyReport />
          <AccountsInfo />
          <GoalCardPage /> */}
        </BankCardsProvider>
      </Provider>

    </>

  );
}

export default App;
