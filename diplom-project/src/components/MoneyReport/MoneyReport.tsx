import { useEffect, useState } from "react";
import Converter from "../../shared/ui/ConverterCard/ConverterCard";
import InfoMoneyСard, {
  InfoMoneyСardProps,
} from "../../shared/ui/InfoMoneyCard/InfoMoneyCard";
import Title from "../../shared/ui/Title/Title";
import { BankAccountCardProps } from "../../shared/ui/BankAccountCard/BankAccountCard";
import { useBankCards } from "../../context/BankCardsContext";

interface MoneyReport extends InfoMoneyСardProps { }

function MoneyReport() {
  const { cards } = useBankCards(); // Получите карточки из контекста

  const capitalizedMonth = new Date()
    .toLocaleString("ru-RU", { month: "long" })
    .replace(/^./, (char) => char.toUpperCase());

  const [totalIncome, setTotalIncome] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);

  useEffect(() => {
    const income = cards.reduce((acc: number, card: BankAccountCardProps) => {
      if (card.sum) {
        return acc + card.sum;
      }
      return acc;
    }, 0);

    setTotalIncome(income);
    setTotalBalance(income); // Так как баланс равен доходу
  }, [cards]); // Зависимость от cards

  return (
    <div>
      <div className="header-info">
        <Title children={capitalizedMonth}></Title>
        <Converter />
      </div>
      <div className="wrap-for-cards">
        <div className="top-cards">
          <InfoMoneyСard
            sum={totalIncome}
            currency={cards[0]?.currency ?? "RUB"}
            categoryName={"Доход"}
          />
          <InfoMoneyСard
            sum={totalBalance}
            currency={cards.length > 0 ? cards[0].currency : "RUB"}
            categoryName={"Баланс"}
          />
        </div>
        <div className="bottom-cards">
          <InfoMoneyСard
            sum={0}
            currency={cards.length > 0 ? cards[0].currency : "RUB"}
            categoryName={"Долги"}
          />
          <InfoMoneyСard
            sum={0}
            currency={cards.length > 0 ? cards[0].currency : "RUB"}
            categoryName={"Расход"}
          />
        </div>
      </div>
    </div>
  );
}

export default MoneyReport;
