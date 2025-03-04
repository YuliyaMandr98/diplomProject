import { banks } from '../../../components/Modal/ArraysForChoose';
import React from 'react';
import { Select } from 'antd';

interface AddExpensesSelectProps {
    value: string;
    onChange: (value: string) => void;
}

const onChange = (value: string) => {
    console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
    console.log('search:', value);
};

const AddExpensesSelect: React.FC<AddExpensesSelectProps> = ({ value, onChange }) => (
    <Select
        showSearch
        placeholder="Источник"
        optionFilterProp="label"
        onChange={onChange}
        onSearch={onSearch}
        options={banks}
        value={value}
        style={{ height: '50px', backgroundColor: '#red' }}
    />
);

export default AddExpensesSelect;