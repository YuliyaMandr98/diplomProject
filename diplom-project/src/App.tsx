import './App.scss'
import './theme.scss'
import { BankAccountCardProps } from './shared/ui/BankAccountCard/BankAccountCard';
import AddSourceMoney from './components/Modal/AddSourceMoney';
import { useEffect, useState } from 'react';
import MoneyReport from './components/MoneyReport/MoneyReport';
import { Alert } from 'antd';
import Header from './components/Header/Header';
import UserMenu from './shared/ui/UserMenu/UserMenu';
import AccountsInfo from './components/AccountsInfo/AccountsInfo';
import { GoalCardProps } from './shared/ui/GoalCard/GoalCard';
import GoalCardPage from './components/GoalCardPage/GoalCardPage';
import AddGoalCard from './components/Modal/AddGoalCard/AddGoalCard';

const capitalizedMonth = new Date().toLocaleString('ru-RU', { month: 'long' }).replace(/^./, (char) => char.toUpperCase());

function App() {
  const [cards, setCards] = useState<BankAccountCardProps[]>(() => {
    const savedCards = localStorage.getItem('bankCards');
    return savedCards ? JSON.parse(savedCards) : [];
  });

  const [goals, setGoals] = useState<GoalCardProps[]>(() => {
    const savedGoals = localStorage.getItem('bankGoals');
    return savedGoals ? JSON.parse(savedGoals) : [];
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGoalModalOpen, setIsGoalModalOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [userMenu, setUserMenu] = useState(false);

  const addCard = (newCard: BankAccountCardProps) => {
    const updatedCards = [...cards, newCard];
    setCards(updatedCards);
    localStorage.setItem('bankCards', JSON.stringify(updatedCards));
  };

  const addGoals = (newGoal: GoalCardProps) => {
    const updatedGoals = [...goals, newGoal];
    setGoals(updatedGoals);
    localStorage.setItem('bankGoals', JSON.stringify(updatedGoals));
  };

  const deleteCard = (index: number) => {
    const updatedCards = cards.filter((_, i) => i !== index);
    setCards(updatedCards);
    localStorage.setItem('bankCards', JSON.stringify(updatedCards));
    setAlertMessage(`Счёт "${cards[index].bank}" успешно удален!`);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  const deleteGoal = (index: number) => {
    const updatedGoals = goals.filter((_, i) => i !== index);
    setGoals(updatedGoals);
    localStorage.setItem('bankGoals', JSON.stringify(updatedGoals));
    setAlertMessage(`Цель "${goals[index].goal}" успешно удалена!`);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  useEffect(() => {
    localStorage.setItem('bankCards', JSON.stringify(cards));
  }, [cards]);

  useEffect(() => {
    localStorage.setItem('bankGoals', JSON.stringify(goals));
  }, [goals]);

  const handleAddClick = () => {
    setIsModalOpen(true);
  };

  const handleGoalAddClick = () => {
    setIsGoalModalOpen(true);
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
        <UserMenu anchorEl={null} open={false} onClose={function (): void {
          throw new Error('Function not implemented.');
        }} />
      )}
      <MoneyReport sum={totalIncome} currency={cards.length > 0 ? cards[0].currency : "RUB"} categoryName={'Доходы'} children={capitalizedMonth} sumBalance={totalBalance} />
      <AccountsInfo cards={cards} onClick={handleAddClick} onDeleteCard={deleteCard} />
      {showAlert && (
        <Alert
          message="Успех"
          description={alertMessage}
          type="info"
          showIcon
          style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1000 }}
          onClose={() => setShowAlert(false)}
          closable
        />
      )}
      <AddSourceMoney isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} addCard={addCard} onDelete={function (): void {
        throw new Error('Function not implemented.');
      }} />

      <GoalCardPage cards={goals} onClick={handleGoalAddClick} onDeleteCard={deleteGoal} />
      {showAlert && (
        <Alert
          message="Успех"
          description={alertMessage}
          type="info"
          showIcon
          style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1000 }}
          onClose={() => setShowAlert(false)}
          closable
        />
      )}
      <AddGoalCard isModalOpen={isGoalModalOpen} setIsModalOpen={setIsGoalModalOpen} addCard={addGoals} onDelete={function (): void {
        throw new Error('Function not implemented.');
      }}></AddGoalCard>

    </>
  );
};

export default App;
