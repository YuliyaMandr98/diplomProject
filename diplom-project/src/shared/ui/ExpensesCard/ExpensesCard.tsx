interface ExpensesCardProps {
    imageLogo: string;
    urlImg: string;
    name: string;
}

function ExpensesCard(props: ExpensesCardProps) {
    return (
        <div className="expenses-card-wrap">
            <div className="expenses-icon">
                <img src={props.urlImg} alt={props.imageLogo} />
            </div>
            <h3 className="expenses-name">{props.name}</h3>
        </div>
    )
}

export default ExpensesCard;