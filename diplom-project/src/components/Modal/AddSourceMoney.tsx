import React, { useState } from 'react';
import { Alert, Modal } from 'antd';
import alfabank from '../../assets/img/alfabank.svg';
import gazprom from '../../assets/img/gazprom.svg';
import moscow from '../../assets/img/moscow.svg';
import raiffeisen from '../../assets/img/raiffeisen.svg';
import sber from '../../assets/img/sber.svg';
import tink from '../../assets/img/tink.svg';
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
    { value: 'gazprom', label: 'Газпром', logo: gazprom, defaultColor: '#3e46d9' },
    { value: 'moscow', label: 'Банк Москва', logo: moscow, defaultColor: '#6c6a6a' },
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
    const [showAlert, setShowAlert] = useState(false); // Состояние для отображения Alert

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
            urlImg: banks.find(bank => bank.value === selectedBank)?.logo || '',
            sum: Number(sum),
            currency: selectedCurrency,
            bank: banks.find(bank => bank.value === selectedBank)?.label || '',
            backgroundColor: selectedColor,
            onDelete: () => { },
        };
        addCard(newCard);

        setShowAlert(true); // Показываем Alert
        // Убираем Alert через 2 секунды
        setTimeout(() => {
            setShowAlert(false);
        }, 2000);

        setIsModalOpen(false);
        setSelectedBank(banks[0].value);
        setSelectedColor(banks[0].defaultColor);
        setSum('');
    };

    return (
        <div>
            <Modal title="Добавить источник" open={isModalOpen} onOk={handleOk} onCancel={() => setIsModalOpen(false)}>
                <label>
                    Банк:
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
                    description={`Карточка "${banks.find(bank => bank.value === selectedBank)?.label}" успешно добавлена!`}
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