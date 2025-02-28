export interface InfoMoneyСardProps {
  sum: number;
  currency: string;
  categoryName: string;
}

function InfoMoneyСard({ sum, currency, categoryName }: InfoMoneyСardProps) {
  return (
    <div className="info-money-card">
      <h2 className="info-money-card_title">
        {sum} {currency}
      </h2>
      <h3 className="info-money-card_desc">{categoryName}</h3>
    </div>
  );
}

export default InfoMoneyСard;
