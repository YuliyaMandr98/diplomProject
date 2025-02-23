import "./App.scss";
import "./theme.scss";
import { BankAccountCardProps } from "./shared/ui/BankAccountCard/BankAccountCard";
import { useEffect, useState } from "react";
import MoneyReport from "./components/MoneyReport/MoneyReport";
import Header from "./components/Header/Header";
import UserMenu from "./shared/ui/UserMenu/UserMenu";
import AccountsInfo from "./components/AccountsInfo/AccountsInfo";
import GoalCardPage from "./components/GoalCardPage/GoalCardPage";


function App() {
  const [userMenu, setUserMenu] = useState(false);

  const [cards, setCards] = useState<BankAccountCardProps[]>(() => {
    const savedCards = localStorage.getItem("bankCards");
    return savedCards ? JSON.parse(savedCards) : [];
  });

  return (
    <>
      <Header />
      {userMenu && (
        <UserMenu
          anchorEl={null}
          open={false}
          onClose={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      )}
      <MoneyReport cards={cards} />
      <AccountsInfo onCardsChange={setCards} />
      <GoalCardPage />
    </>

  );
}

export default App;
