import BankAccountCard from '../../shared/ui/BankAccountCard/BankAccountCard';
import TextButton from '../../shared/ui/TextButton/TextButton';
import Title from '../../shared/ui/Title/Title';

function AccountsInfo() {
    const [cards, setCards] = useState<BankAccountCardProps[]>(() => {
        const savedCards = localStorage.getItem('bankCards');
        return savedCards ? JSON.parse(savedCards) : [];
      });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const addCard = (newCard: BankAccountCardProps) => {
        const updatedCards = [...cards, newCard];
        setCards(updatedCards);
        localStorage.setItem('bankCards', JSON.stringify(updatedCards));
    };
    
    const deleteCard = (id: string) => {
        const updatedCards = cards.filter((card) => card.id !== id);
        setCards(updatedCards);
        localStorage.setItem('bankCards', JSON.stringify(updatedCards));
      };

      const handleAddClick = () => {
        setIsModalOpen(true);
      };  

    return (
        <>
            <MoneyReport sum={totalIncome} currency={cards.length > 0 ? cards[0].currency : "RUB"} categoryName={'Доходы'} children={capitalizedMonth} sumBalance={totalBalance} />
            <div>
                <div className='header-info'>
                    <Title>Счета</Title>
                    <TextButton onClick={handleAddClick}>Добавить</TextButton>
                </div>
                <div className="bank-account-cards-wrapper">
                    {cards.map((card) => (
                        <div key={card.id} id={`card-${index + 1}`} style={{ position: 'relative' }}>
                            <BankAccountCard {...card} onDelete={() => deleteCard(card?.id )} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default AccountsInfo;