import React, { useState } from 'react';
import { Alert, Modal } from 'antd';
import { GoalCardProps } from '../../../shared/ui/GoalCard/GoalCard';
import { currencies } from './ArrayForChoosing';
import { goals } from './ArrayForChoosing';

interface AddGoalCardsProps {
    isModalOpen: boolean;
    setIsModalOpen: (isOpen: boolean) => void;
    addCard: (newCard: any) => void;
    onDelete: () => void;
}

const AddGoalCards: React.FC<AddGoalCardsProps> = ({ isModalOpen, setIsModalOpen, addCard }) => {
    const [selectedBank, setSelectedBank] = useState(goals[0].value);
    const [sum, setSum] = useState('');
    const [goalSum, setGoalSum] = useState('');
    const [sumIhave, setSumIhave] = useState('');
    const [selectedCurrency, setSelectedCurrency] = useState(currencies[0].value);
    const [showAlert, setShowAlert] = useState(false);

    const handleBankChange = (value: string) => {
        setSelectedBank(value);

    };

    const handleOk = () => {
        const selectedGoal = goals.find(goal => goal.value === selectedBank);

        const newCard: GoalCardProps = {
            logo: selectedBank,
            urlImg: selectedGoal?.logo || '',
            sum: Number(sum),
            currency: selectedCurrency,
            bank: selectedGoal?.label || '',
            onDelete: () => { },
            onClick: () => { },
            goalSum: Number(goalSum),
            sumIhave: Number(sumIhave),
            goal: selectedGoal?.label || '',
        };

        addCard(newCard);

        const alertMessage = selectedGoal ? selectedGoal.label : 'Цель';
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 2000);

        resetForm();

        setIsModalOpen(false);
        setSelectedBank(goals[0].value);
        setSum('');
        setGoalSum('');
        setSumIhave('');

        setAlertMessage(alertMessage);
    };

    const resetForm = () => {
        setSelectedBank(goals[0].value);
        setGoalSum('');
        setSumIhave('');
        setSelectedCurrency(currencies[0].value);
    };

    const handleCancel = () => {
        resetForm();
        setIsModalOpen(false);
    };

    const [alertMessage, setAlertMessage] = useState('');

    return (
        <div>
            <Modal title="Добавить цель" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <label>
                    Собираю на:
                    <select value={selectedBank} onChange={(e) => handleBankChange(e.target.value)}>
                        {goals.map(goal => (
                            <option key={goal.value} value={goal.value}>
                                {goal.label}
                            </option>
                        ))}
                    </select>
                </label>
                <br />
                <label>
                    Валюта:
                    <select className='valute-select' value={selectedCurrency} onChange={(e) => setSelectedCurrency(e.target.value)}>
                        {currencies.map(currency => (
                            <option key={currency.value} value={currency.value}>
                                {currency.label}
                            </option>
                        ))}
                    </select>
                </label>
                <br />
                <label>
                    Цель:
                    <input type="number" value={goalSum} onChange={(e) => setGoalSum(e.target.value)} />
                </label>
                <br />
                <label>
                    Уже собрал:
                    <input type="number" value={sumIhave} onChange={(e) => setSumIhave(e.target.value)} />
                </label>
            </Modal>
            {showAlert && (
                <Alert
                    message="Успех"
                    description={`Цель "${alertMessage}" успешно добавлена!`}
                    type="success"
                    showIcon
                    style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1000 }}
                    onClose={() => setShowAlert(false)}
                    closable
                />
            )}

        </div>
    );
};

export default AddGoalCards;