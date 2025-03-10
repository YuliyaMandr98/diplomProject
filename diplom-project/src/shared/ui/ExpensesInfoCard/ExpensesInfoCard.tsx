import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

export interface ExpensesInfoCardProps {
    id?: number;
    currency: string;
    onDelete: () => void;
    onClick: () => void; // Обработчик клика на карточку
    amount: number;
    date: string;
    comment: string;
    category: string;
    selectValue: string;
}

function ExpensesInfoCard({
    currency,
    onDelete,
    onClick,
    date,
    amount,
    comment,
    category,
    selectValue,
}: ExpensesInfoCardProps) {
    const [isHovered, setIsHovered] = useState(false); //видимость крестика
    return (
        <div
            onClick={onClick}
            className="expenses-info-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="expenses-name"><b>Категория:</b> {category}</div>
            <h2 className="sum" style={{ fontWeight: '400', fontSize: '1rem' }}>
                <b>Сумма:</b> {amount} {currency}
            </h2>
            <div className="select"><b>Источник:</b> {selectValue}</div>

            <div className="date"><b>Дата:</b> {date}</div>
            <div className="comment"><b>Комментарий:</b> {comment}</div>
            {isHovered && (
                <CloseIcon
                    onClick={onDelete}
                    style={{ position: "absolute", top: "3px", right: "5px", width: "14px", height: "14px", color: "gray" }}
                />
            )}
        </div>
    );
}

export default ExpensesInfoCard;