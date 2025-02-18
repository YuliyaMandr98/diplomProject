import React, { useState } from "react";
import { AlertProps, Modal } from "antd";
import car from "../../assets/img/carr.png";
import phone from "../../assets/img/phonee.png";
import vocation from "../../assets/img/palm.png";
import education from "../../assets/img/educ.png";
import present from "../../assets/img/present.png";
import dream from "../../assets/img/star.png";
import { GoalCardProps } from "../../shared/ui/GoalCard/GoalCard";
import { useDispatch } from "react-redux";
import { showAlert } from "../../store/actions";

interface AddGoalCardsProps {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  addCard: (newCard: any) => void;
  onDelete: () => void;
}

// Массивы для выбора
const goals = [
  { value: "phone", label: "Телефон", logo: phone },
  { value: "vocation", label: "Отпуск", logo: vocation },
  { value: "present", label: "Подарок", logo: present },
  { value: "education", label: "Обучение", logo: education },
  { value: "car", label: "Машина", logo: car },
  { value: "dream", label: "На мечту", logo: dream },
];

const currencies = [
  { value: "BYN", label: "Белорусский рубль" },
  { value: "RUB", label: "Российский рубль" },
  { value: "EUR", label: "Евро" },
  { value: "USD", label: "Доллар США" },
  { value: "CNY", label: "Юань" },
];

const AddGoalCards: React.FC<AddGoalCardsProps> = ({
  isModalOpen,
  setIsModalOpen,
  addCard,
}) => {
  const dispatch = useDispatch();
  const [selectedBank, setSelectedBank] = useState(goals[0].value);
  const [sum, setSum] = useState("");
  const [goalSum, setGoalSum] = useState("");
  const [sumIhave, setSumIhave] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0].value);

  const handleBankChange = (value: string) => {
    setSelectedBank(value);
  };

  const handleOk = () => {
    const selectedGoal = goals.find((goal) => goal.value === selectedBank);

    const newCard: GoalCardProps = {
      logo: selectedBank,
      urlImg: selectedGoal?.logo || "",
      sum: Number(sum),
      currency: selectedCurrency,
      bank: selectedGoal?.label || "",
      onDelete: () => {},
      onClick: () => {},
      goalSum: Number(goalSum),
      sumIhave: Number(sumIhave),
      goal: selectedGoal?.label || "",
    };

    addCard(newCard);

    // Используйте выбранную цель для отображения в Alert
    const alertMessage = selectedGoal ? selectedGoal.label : "Цель";
    const alert = {
      message: "Успех",
      description: `Цель "${alertMessage}" успешно добавлена!`,
      type: "success",
    } as Partial<AlertProps>;
    dispatch(showAlert(alert));

    resetForm();

    setIsModalOpen(false);
    setSelectedBank(goals[0].value);
    setSum("");
    setGoalSum("");
    setSumIhave("");
  };

  const resetForm = () => {
    setSelectedBank(goals[0].value);
    setGoalSum("");
    setSumIhave("");
    setSelectedCurrency(currencies[0].value);
  };

  const handleCancel = () => {
    resetForm();
    setIsModalOpen(false);
  };

  // Добавьте состояние для сообщения Alert
  const [alertMessage, setAlertMessage] = useState("");

  return (
    <div>
      <Modal
        title="Добавить цель"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <label>
          Собираю на:
          <select
            value={selectedBank}
            onChange={(e) => handleBankChange(e.target.value)}
          >
            {goals.map((goal) => (
              <option key={goal.value} value={goal.value}>
                {goal.label}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Валюта:
          <select
            className="valute-select"
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency.value} value={currency.value}>
                {currency.label}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Цель:
          <input
            type="number"
            value={goalSum}
            onChange={(e) => setGoalSum(e.target.value)}
          />
        </label>
        <br />
        <label>
          Уже собрал:
          <input
            type="number"
            value={sumIhave}
            onChange={(e) => setSumIhave(e.target.value)}
          />
        </label>
      </Modal>
    </div>
  );
};

export default AddGoalCards;
