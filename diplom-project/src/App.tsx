import Title from './shared/ui/Title/Title'
import './App.scss'
import './theme.scss'
import WrapInfoMoneyСard from './components/WrapInfoMoneyСard/WrapInfoMoneyСard';
import ConverterCard from './shared/ui/ConverterCard/ConverterCard';
import Converter from './shared/ui/ConverterCard/ConverterCard';

const capitalizedMonth = new Date().toLocaleString('ru-RU', { month: 'long' }).replace(/^./, (char) => char.toUpperCase());

const currentCurrency = 'CNY';
const currentSum = 100;
const targetCurrency = 'BYN';

function App() {

  return (
    <>
      <Title children={capitalizedMonth}></Title>
      <Converter />
      {/* <ConverterCard currentCurrency={currentCurrency} currentSum={currentSum} targetCurrency={targetCurrency} /> */}
      <WrapInfoMoneyСard sum={10000} currency={'$'} categoryName={'Доходы'} />

    </>
  )
}

export default App
