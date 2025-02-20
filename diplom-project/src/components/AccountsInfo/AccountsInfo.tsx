import BankAccountCard, { BankAccountCardProps } from '../../shared/ui/BankAccountCard/BankAccountCard';
import TextButton from '../../shared/ui/TextButton/TextButton';
import Title from '../../shared/ui/Title/Title';

interface AccountsInfo {
    cards: BankAccountCardProps[];
    onClick: () => void;
    onDeleteCard: (index: number) => void;
}

function AccountsInfo({ cards = [], onClick, onDeleteCard }: AccountsInfo) {
    return (
        <div>
            <div className='header-info'>
                <Title children={'Счета'}></Title>
                <TextButton children={'Добавить'} onClick={onClick}></TextButton>
            </div>
            <div className="bank-account-cards-wrapper">
                {cards.map((cardProps, index) => (
                    <div key={index} id={`card-${index + 1}`} style={{ position: 'relative' }}>
                        <BankAccountCard {...cardProps} onDelete={() => onDeleteCard(index)} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AccountsInfo;