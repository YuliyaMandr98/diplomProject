import { ReactNode } from 'react'
import Converter from '../../shared/ui/ConverterCard/ConverterCard'
import InfoMoneyСard, { InfoMoneyСardProps } from '../../shared/ui/InfoMoneyCard/InfoMoneyCard'
import Title from '../../shared/ui/Title/Title'

interface MoneyReport extends InfoMoneyСardProps {
    children: ReactNode
    sumBalance: number
}


function MoneyReport(props: MoneyReport) {
    return (
        <div>
            <div className='header-info'>
                <Title children={props.children}></Title>
                {/* <Converter></Converter> */}
            </div>
            <div className='wrap-for-cards'>
                <div className='top-cards'>
                    <InfoMoneyСard sum={props.sum} currency={props.currency} categoryName={'Доход'} />
                    <InfoMoneyСard sum={props.sumBalance} currency={props.currency} categoryName={'Баланс'} />
                </div>
                <div className='bottom-cards'>
                    <InfoMoneyСard sum={0} currency={props.currency} categoryName={'Долги'} />
                    <InfoMoneyСard sum={0} currency={props.currency} categoryName={'Расход'} />
                </div>
            </div>
        </div>


    )
}

export default MoneyReport