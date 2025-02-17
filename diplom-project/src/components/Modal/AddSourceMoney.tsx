import React, { useState } from 'react';
import { Alert, Modal } from 'antd';
import alfabank from '../../assets/img/alfabank.svg';
import gazprom from '../../assets/img/gazprom.svg';
import moscow from '../../assets/img/moscow.svg';
import raiffeisen from '../../assets/img/raiffeisen.svg';
import sber from '../../assets/img/sber.svg';
import tink from '../../assets/img/tink.svg';
import business from '../../assets/img/businesss.png';
import gifts from '../../assets/img/birthday.png';
import { BankAccountCardProps } from '../../shared/ui/BankAccountCard/BankAccountCard';

interface AddSourceMoneyProps {
    isModalOpen: boolean;
    setIsModalOpen: (isOpen: boolean) => void;
    addCard: (newCard: any) => void;
    onDelete: () => void;
}

// Массивы для выбора
const banks = [
    { value: 'alfa', label: 'Альфабанк', logo: alfabank, defaultColor: '#eb1919' },
    { value: 'sber', label: 'Сбербанк', logo: sber, defaultColor: '#1d7f1df0' },
    { value: 'raiffeisen', label: 'Райфайзен', logo: raiffeisen, defaultColor: '#000000e0' },
    { value: 'tink', label: 'Тинькофф', logo: tink, defaultColor: '#000000e0' },
    { value: 'gazprom', label: 'Газпром', logo: gazprom, defaultColor: 'blue' },
    { value: 'moscow', label: 'Банк Москва', logo: moscow, defaultColor: '#00A6E2' },
    { value: 'business', label: 'Бизнес', logo: business, defaultColor: 'rgb(14 180 51)' },
    { value: 'gifts', label: 'Подарки', logo: gifts, defaultColor: 'rgb(50 209 144)' },
];

const currencies = [
    { value: 'BYN', label: 'Белорусский рубль' },
    { value: 'RUB', label: 'Российский рубль' },
    { value: 'EUR', label: 'Евро' },
    { value: 'USD', label: 'Доллар США' },
    { value: 'CNY', label: 'Юань' },
];

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

        // Сохраните сообщение для Alert
        if (selectedBankDetails) {
            setAlertMessage(selectedBankDetails.label);
        }

        // Покажите Alert
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
                    description={`Карточка "${alertMessage}" успешно добавлена!`}
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