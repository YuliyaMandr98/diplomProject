import React, { useState } from 'react';
import { Alert, Modal } from 'antd';
import { BankAccountCardProps } from '../../shared/ui/BankAccountCard/BankAccountCard';
import { banks, currencies } from './ArraysForChoose';

interface AddSourceMoneyProps {
    isModalOpen: boolean;
    setIsModalOpen: (isOpen: boolean) => void;
    addCard: (newCard: any) => void;
    onDelete: () => void;
}

const AddSourceMoney: React.FC<AddSourceMoneyProps> = ({ isModalOpen, setIsModalOpen, addCard }) => {
    const [selectedBank, setSelectedBank] = useState(banks[0].value);
    const [selectedColor, setSelectedColor] = useState(banks[0].defaultColor);
    const [sum, setSum] = useState('');
    const [selectedCurrency, setSelectedCurrency] = useState(currencies[0].value);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    // Получение выбранного банка
    const selectedBankDetails = banks.find(bank => bank.value === selectedBank);

    const handleBankChange = (value: string) => {
        setSelectedBank(value);
        const bank = banks.find(bank => bank.value === value);
        if (bank) {
            setSelectedColor(bank.defaultColor);
        }
    };

    const handleOk = () => {
        const newCard: BankAccountCardProps = {
            logo: selectedBank,
            urlImg: selectedBankDetails?.logo || '',
            sum: Number(sum),
            currency: selectedCurrency,
            bank: selectedBankDetails?.label || '',
            backgroundColor: selectedColor,
            onDelete: () => { },
            onClick: () => { },
        };

        addCard(newCard);

        if (selectedBankDetails) {
            setAlertMessage(selectedBankDetails.label);
        }

        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 2000);

        resetForm();

        setIsModalOpen(false);
        setSelectedBank(banks[0].value);
        setSelectedColor(banks[0].defaultColor);
        setSum('');
    };

    const resetForm = () => {
        setSelectedBank(banks[0].value);
        setSelectedColor(banks[0].defaultColor);
        setSum('');
        setSelectedCurrency(currencies[0].value);
    };

    const handleCancel = () => {
        resetForm();
        setIsModalOpen(false);
    };

    return (
        <div>
            <Modal title="Добавить источник" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <label>
                    Источник:
                    <select value={selectedBank} onChange={(e) => handleBankChange(e.target.value)}>
                        {banks.map(bank => (
                            <option key={bank.value} value={bank.value}>
                                {bank.label}
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
                    Сумма:
                    <input type="number" value={sum} onChange={(e) => setSum(e.target.value)} />
                </label>
            </Modal>
            {showAlert && (
                <Alert
                    message="Успех"
                    description={`Счёт "${alertMessage}" успешно добавлен!`}
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

export default AddSourceMoney;