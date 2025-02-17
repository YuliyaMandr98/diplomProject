import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { Progress } from "antd";
import { BankAccountCardProps } from "../BankAccountCard/BankAccountCard";


export interface GoalCardProps extends BankAccountCardProps {
    goal?: string;
    goalSum: number
    sumIhave: number
}

function GoalCard({ logo, urlImg, currency, bank, onDelete, goalSum, sumIhave }: GoalCardProps) {
    const [isHovered, setIsHovered] = useState(false); // Состояние для управления видимостью крестика
    const percents = Math.round(((sumIhave / goalSum) * 100));
    return (
        <div className="goal-card" onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <img src={urlImg} alt={logo} className="goal-card_logo" />
            <h2 className="goal-card_balance">{sumIhave} {currency}</h2>
            <h3 className="goal-card_goalSum">из {goalSum} {currency}</h3>
            <Progress className="goal-card_progress" percent={percents} />
            <div className="goal-name">{bank}</div>
            {isHovered && (

                <CloseIcon onClick={onDelete} style={{ position: 'absolute', top: '10px', right: '10px' }} />

            )}
        </div>
    );
}

export default GoalCard;