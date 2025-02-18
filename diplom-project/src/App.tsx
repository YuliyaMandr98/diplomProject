import "./App.scss";
import "./theme.scss";
import { BankAccountCardProps } from "./shared/ui/BankAccountCard/BankAccountCard";
import AddSourceMoney from "./components/Modal/AddSourceMoney";
import { useEffect, useState } from "react";
import MoneyReport from "./components/MoneyReport/MoneyReport";
import { Alert } from "antd";
import Header from "./components/Header/Header";
import UserMenu from "./shared/ui/UserMenu/UserMenu";
import AccountsInfo from "./components/AccountsInfo/AccountsInfo";
import GoalCardPage from "./components/GoalCardPage/GoalCardPage";

const capitalizedMonth = new Date()
  .toLocaleString("ru-RU", { month: "long" })
  .replace(/^./, (char) => char.toUpperCase());

function App() {
  const [cards, setCards] = useState<BankAccountCardProps[]>(() => {
    const savedCards = localStorage.getItem("bankCards");
    return savedCards ? JSON.parse(savedCards) : [];
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [userMenu, setUserMenu] = useState(false);

  // const handleUserMenuToggle = () => {
  //   setUserMenu(!userMenu);
  // };

  const addCard = (newCard: BankAccountCardProps) => {
    const updatedCards = [...cards, newCard];
    setCards(updatedCards);
    localStorage.setItem("bankCards", JSON.stringify(updatedCards));
  };

  const deleteCard = (index: number) => {
    const updatedCards = cards.filter((_, i) => i !== index);
    setCards(updatedCards);
    localStorage.setItem("bankCards", JSON.stringify(updatedCards));
    setAlertMessage(`Карточка "${cards[index].bank}" успешно удалена!`);
    setShowAlert(true);
    // Убираем Alert через 2 секунды
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  useEffect(() => {
    localStorage.setItem("bankCards", JSON.stringify(cards));
  }, [cards]);

  const handleAddClick = () => {
    setIsModalOpen(true);
  };

  // Вычисляем доход и баланс
  const totalIncome = cards.reduce((acc, card) => {
    if (card.sum) {
      return acc + card.sum;
    }
    return acc;
  }, 0);
  const totalBalance = totalIncome;

  return (
    <>
      <Header />
      {/* <SideBar /> */}
      {userMenu && (
        <UserMenu
          anchorEl={null}
          open={false}
          onClose={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      )}
      <MoneyReport
        sum={totalIncome}
        currency={cards.length > 0 ? cards[0].currency : "RUB"}
        categoryName={"Доходы"}
        children={capitalizedMonth}
        sumBalance={totalBalance}
      />
      <AccountsInfo
        cards={cards}
        onClick={handleAddClick}
        onDeleteCard={deleteCard}
      />

      <AddSourceMoney
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        addCard={addCard}
        onDelete={function (): void {
          throw new Error("Function not implemented.");
        }}
      />

      <GoalCardPage />
    </>
  );
}

export default App;
