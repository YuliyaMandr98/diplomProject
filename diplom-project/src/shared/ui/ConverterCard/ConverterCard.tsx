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

    // useEffect(() => {
    //     const fetchConversionRates = async () => {
    //         const rates: { [key: string]: number } = {};
    //         for (const pair of currencyPairs) {
    //             const response = await axios.get(`https://v6.exchangerate-api.com/v6/4c465196c807bceaf92a3cdf/latest/${pair.from}`);
    //             rates[pair.from + pair.to] = response.data.conversion_rates[pair.to] * pair.amount;
    //         }
    //         setConversionResults(rates);
    //     };

    //     fetchConversionRates();
    // }, []);

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