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
import { useBankCards } from "../../context/BankCardsContext";

function AccountsInfo() {
  const dispatch = useDispatch();
  const { cards, addCard, deleteCard } = useBankCards();

  const [isCardModalOpen, setIsCardModalOpen] = useState(false);

  const handleCardAddClick = () => {
    setIsCardModalOpen(true);
  };

  const handleAddCard = (newCard: BankAccountCardProps) => {
    addCard(newCard);
    setIsCardModalOpen(false);
  };

  const handleDeleteCard = (index: number) => {
    const cardToDelete = cards[index];
    deleteCard(index);

    const alert: Partial<AlertProps> = {
      message: "Успех",
      description: `Цель "${cardToDelete.bank}" успешно удалена!`,
      type: "info",
    };
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
            <BankAccountCard {...card} onDelete={() => handleDeleteCard(index)} />
          </div>
        ))}
      </div>
      <AddSourceMoney
        isModalOpen={isCardModalOpen}
        setIsModalOpen={setIsCardModalOpen}
        addCard={handleAddCard}
        onDelete={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
}

export default AccountsInfo;
