import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

export interface BankAccountCardProps {
  id?: number;
  logo: string;
  urlImg: string;
  sum?: number;
  currency: string;
  bank?: string;
  backgroundColor?: string;
  onDelete: () => void;
  onClick: () => void; // Обработчик клика на карточку
}

function BankAccountCard({
  logo,
  urlImg,
  sum,
  currency,
  bank,
  backgroundColor,
  onDelete,
  onClick,
}: BankAccountCardProps) {
  const [isHovered, setIsHovered] = useState(false); // Состояние для управления видимостью крестика
  return (
    <div
      onClick={onClick}
      className="bank-account-card"
      style={{ backgroundColor }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={urlImg} alt={logo} className="bank-logo" />
      <h2 className="balance">
        {sum} {currency}
      </h2>
      <div className="bank-name">{bank}</div>
      {isHovered && (
        <CloseIcon
          onClick={onDelete}
          style={{ position: "absolute", top: "10px", right: "10px" }}
        />
      )}
    </div>
  );
}

export default BankAccountCard;
