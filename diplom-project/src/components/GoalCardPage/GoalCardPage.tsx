import GoalCard, { GoalCardProps } from '../../shared/ui/GoalCard/GoalCard';
import TextButton from '../../shared/ui/TextButton/TextButton';
import Title from '../../shared/ui/Title/Title';

interface GoalCardPageProps {
    cards: GoalCardProps[];
    onClick: () => void;
    onDeleteCard: (index: number) => void;
}

function GoalCardPage({ cards = [], onClick, onDeleteCard }: GoalCardPageProps) {
    return (
        <div>
            <div className='header-info'>
                <Title children={'Цели'}></Title>
                <TextButton children={'Добавить'} onClick={onClick}></TextButton>
            </div>
            <div className="goal-cards-wrapper">
                {cards.map((cardProps, index) => (
                    <div key={index} id={`card-${index + 1}`} style={{ position: 'relative' }}>
                        <GoalCard {...cardProps} onDelete={() => onDeleteCard(index)} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GoalCardPage;