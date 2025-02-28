import { useState } from "react";
import BankAccountCard, {
  BankAccountCardProps,
} from "../../shared/ui/BankAccountCard/BankAccountCard";
import TextButton from "../../shared/ui/TextButton/TextButton";
import Title from "../../shared/ui/Title/Title";
import { useDispatch } from "react-redux";
import { AlertProps } from "antd";
import { showAlert } from "../../store/actions";
import AddSourceMoney from "../Modal/AddSourceMoney";

function AccountsInfo() {
  const dispatch = useDispatch();
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);

  const [cards, setCards] = useState<BankAccountCardProps[]>(() => {
    const savedCards = localStorage.getItem("bankCards");
    return savedCards ? JSON.parse(savedCards) : [];
  });

  const handleCardAddClick = () => {
    setIsCardModalOpen(true);
  };

  const addCard = (newCard: BankAccountCardProps) => {
    // можно вот так
    setCards((prev) => {
      const updatedCards = [...prev, newCard];
      localStorage.setItem("bankCards", JSON.stringify(updatedCards));
      return updatedCards;
    });
  };

  const deleteCard = (index: number) => {
    const updatedCards = cards.filter((_, i) => i !== index);
    setCards(updatedCards);
    localStorage.setItem("bankCards", JSON.stringify(updatedCards));
    const alert = {
      message: "Успех",
      description: `Цель "${cards[index].bank}" успешно удалена!`,
      type: "info",
    } as Partial<AlertProps>;
    dispatch(showAlert(alert));
  };

  return (
    <div>
      <div className="header-info">
        <Title children={"Счета"}></Title>
        <TextButton
          children={"Добавить"}
          onClick={handleCardAddClick}
        ></TextButton>
      </div>
      <div className="bank-account-cards-wrapper">
        {cards.map((card, index) => (
          <div
            key={index}
            id={`card-${index + 1}`}
            style={{ position: "relative" }}
          >
            <BankAccountCard {...card} onDelete={() => deleteCard(index)} />
          </div>
        ))}
      </div>
      <AddSourceMoney
        isModalOpen={isCardModalOpen}
        setIsModalOpen={setIsCardModalOpen}
        addCard={addCard}
        onDelete={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
}

export default AccountsInfo;
