import React, { useEffect, useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import axios from 'axios';

const currencyPairs = [
    { from: 'RUB', to: 'BYN', amount: 1 },
    { from: 'USD', to: 'BYN', amount: 1 },
    { from: 'EUR', to: 'BYN', amount: 1 },
    { from: 'CNY', to: 'BYN', amount: 1 },
    { from: 'USD', to: 'RUB', amount: 1 },
];

const Converter: React.FC = () => {
    const [conversionResults, setConversionResults] = useState<{ [key: string]: number }>({});

    useEffect(() => {
        const fetchConversionRates = async () => {
            const rates: { [key: string]: number } = {};
            for (const pair of currencyPairs) {
                const response = await axios.get(`https://v6.exchangerate-api.com/v6/4c465196c807bceaf92a3cdf/latest/${pair.from}`);
                rates[pair.from + pair.to] = response.data.conversion_rates[pair.to] * pair.amount;
            }
            setConversionResults(rates);
        };

        fetchConversionRates();
    }, []);

    const items: MenuProps['items'] = currencyPairs.map((pair, index) => ({
        key: index.toString(),
        label: `${pair.amount} ${pair.from} = ${conversionResults[pair.from + pair.to] ? conversionResults[pair.from + pair.to].toFixed(2) : '...'} ${pair.to}`,
    }));

    return (
        <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
                <Space style={{ margin: '0' }}>
                    Курс валют
                    <DownOutlined />
                </Space>
            </a>
        </Dropdown>
    );
};

export default Converter;


// import { useEffect, useState } from 'react';
// import axios from 'axios';

// interface ConverterCardProps {
//     currentCurrency: string;
//     currentSum: number;
//     targetCurrency: string;
//     targetSum?: number;
// }

// function ConverterCard({ currentCurrency, currentSum, targetCurrency }: ConverterCardProps) {
//     const [exchangeRate, setExchangeRate] = useState<number | null>(null);
//     // const [convertedSum, setConvertedSum] = useState<number | null>(null);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         const fetchExchangeRate = async () => {
//             try {
//                 const response = await axios.get(`https://v6.exchangerate-api.com/v6/4c465196c807bceaf92a3cdf/latest/${currentCurrency}`);
//                 const rate = response.data.conversion_rates[targetCurrency];
//                 if (rate) {
//                     setExchangeRate(rate);
//                     // setConvertedSum(currentSum * rate);
//                 } else {
//                     setError(`Курс для ${targetCurrency} не найден.`);
//                 }
//             } catch (err) {
//                 setError('Ошибка при получении данных о курсе валют.');
//             }
//         };

//         fetchExchangeRate();
//     }, [currentCurrency, targetCurrency, currentSum]);

//     return (
//         <div className="converter-card">
//             {error && <p className="error">{error}</p>}
//             {exchangeRate && (
//                 <>
//                     <p>1 {currentCurrency} = {exchangeRate} {targetCurrency}</p>
//                 </>
//             )}
//         </div>
//     );
// }

// export default ConverterCard;