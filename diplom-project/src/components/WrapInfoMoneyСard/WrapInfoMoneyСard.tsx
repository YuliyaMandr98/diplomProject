import InfoMoneyСard, { InfoMoneyСardProps } from '../../shared/ui/InfoMoneyCard/InfoMoneyCard'

interface WrapInfoMoneyСard extends InfoMoneyСardProps {
}

function WrapInfoMoneyСard(props: WrapInfoMoneyСard) {
    return (
        <div className='wrap-for-cards'>
            <div className='top-cards'>
                <InfoMoneyСard sum={props.sum} currency={props.currency} categoryName={'Доход'} />
                <InfoMoneyСard sum={13000} currency={props.currency} categoryName={'Баланс'} />
            </div>
            <div className='bottom-cards'>
                <InfoMoneyСard sum={1520} currency={props.currency} categoryName={'Долги'} />
                <InfoMoneyСard sum={9850} currency={props.currency} categoryName={'Расход'} />
            </div>
        </div>

    )
}

export default WrapInfoMoneyСard