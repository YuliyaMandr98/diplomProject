import "./App.scss";
import "./theme.scss";
import Header from "./components/Header/Header";
import { Provider } from "react-redux";
import store from "./store/store";
import { BankCardsProvider } from "./context/BankCardsContext";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import AddExpensesPage from "./pages/AddExpenses/AddExpensesPage";
import { ExpensesProvider } from "./context/ExpensesCardsContext";
import ExpensesInfo from "./components/ExpensesInfo/ExpensesInfo";


function App() {
  return (
    <>
      <Provider store={store}>
        <BankCardsProvider>
          <ExpensesProvider>
            <Header />
            <Routes>
              <Route path='/'>
                <Route index element={<MainPage />} />
                <Route path="/add-expenses" element={<AddExpensesPage />} />
                {/* <Route path="/expenses-info" element={<ExpensesInfo />} /> */}
                {/* <Redirect from="/" to="/add-expenses" /> */}
                <Route path="/history" element={'history'} />
              </Route>
            </Routes>
          </ExpensesProvider>
        </BankCardsProvider>
      </Provider>

    </>

  );
}

export default App;
