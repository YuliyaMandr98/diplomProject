import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

export interface ExpensesInfoCardProps {
    id?: number;
    logo?: string;
    urlImg?: string;
    sum?: number;
    currency: string;
    bank?: string;
    backgroundColor?: string;
    onDelete: () => void;
    onClick: () => void; // Обработчик клика на карточку
    amount: number;
    date: string;
    comment: string;
    category: string;
    selectValue: string;
}

function ExpensesInfoCard({
    logo,
    urlImg,
    sum,
    currency,
    bank,
    backgroundColor,
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
            style={{ backgroundColor }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* <img src={urlImg} alt={logo} className="expenses-logo" /> */}
            <div className="expenses-name">{category}</div>
            <h2 className="sum">
                {amount} {currency}
            </h2>

            <div className="date">{date}</div>
            <div className="comment">{comment}</div>
            {isHovered && (
                <CloseIcon
                    onClick={onDelete}
                    style={{ position: "absolute", top: "10px", right: "10px" }}
                />
            )}
        </div>
    );
}

export default ExpensesInfoCard;