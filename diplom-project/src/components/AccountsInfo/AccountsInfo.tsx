import { useState } from 'react';
import BankAccountCard, { BankAccountCardProps } from '../../shared/ui/BankAccountCard/BankAccountCard';
import TextButton from '../../shared/ui/TextButton/TextButton';
import Title from '../../shared/ui/Title/Title';
import { useDispatch } from 'react-redux';
import { AlertProps } from 'antd';
import { showAlert } from '../../store/actions';
import AddSourceMoney from '../Modal/AddSourceMoney';

function AccountsInfo({ onCardsChange }: { onCardsChange: (cards: BankAccountCardProps[]) => void }) {
    const dispatch = useDispatch();
    const [isCardModalOpen, setIsCardModalOpen] = useState(false);

    const [card, setCard] = useState<BankAccountCardProps[]>(() => {
        const savedCards = localStorage.getItem("bankCards");
        return savedCards ? JSON.parse(savedCards) : [];
    });

    const handleCardAddClick = () => {
        setIsCardModalOpen(true);
    };

    const addCard = (newCard: BankAccountCardProps) => {
        const updatedCards = [...card, newCard];
        setCard(updatedCards);
        localStorage.setItem("bankCards", JSON.stringify(updatedCards));

        // Вызываем onCardsChange для обновления состояния в MoneyReport
        onCardsChange(updatedCards);
    };

    const deleteCard = (index: number) => {
        const updatedCards = card.filter((_, i) => i !== index);
        setCard(updatedCards);
        localStorage.setItem("bankCards", JSON.stringify(updatedCards));
        const alert = {
            message: "Успех",
            description: `Цель "${card[index].bank}" успешно удалена!`,
            type: "info",
        } as Partial<AlertProps>;
        dispatch(showAlert(alert));

        // Обновляем состояние в MoneyReport
        onCardsChange(updatedCards);
    };


    return (
        <div>
            <div className='header-info'>
                <Title children={'Счета'}></Title>
                <TextButton children={'Добавить'} onClick={handleCardAddClick}></TextButton>
            </div>
            <div className="bank-account-cards-wrapper">
                {card.map((cardProps, index) => (
                    <div key={index} id={`card-${index + 1}`} style={{ position: 'relative' }}>
                        <BankAccountCard {...cardProps} onDelete={() => deleteCard(index)} />
                    </div>
                ))}
            </div>
            <AddSourceMoney isModalOpen={isCardModalOpen} setIsModalOpen={setIsCardModalOpen} addCard={addCard} onDelete={function (): void {
                throw new Error('Function not implemented.');
            }} />
        </div>
    );
}

export default AccountsInfo;