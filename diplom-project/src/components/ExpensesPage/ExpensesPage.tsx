import { NavLink } from "react-router-dom";
import TextButton from "../../shared/ui/TextButton/TextButton";
import Title from "../../shared/ui/Title/Title";
import ExpensesCard from "../../shared/ui/ExpensesCard/ExpensesCard";
import { airportImg, applianceImg, beautyImg, businessImg, carImg, childImg, creditCardImg, education, entertainmentImg, food, giftImg, homefood, homeImg, lendImg, othersImg, pharmacyImg, renovationImg, saveMoneyImg } from "./img";
import TextField from "@mui/material/TextField/TextField";
import { DatePicker, DatePickerProps, Input } from "antd";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);


function ExpensesPage() {
    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };

    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];
    return (
        <div className="expenses-page-wrap">
            <div className="header-info">
                <Title children="Расходы" ></Title>
                <NavLink to={"/add-expenses"}></NavLink>
                <TextButton
                    children={"Добавить"}
                ></TextButton>
            </div>
            <div className="expenses-cards-wrap">
                <ExpensesCard imageLogo={'продукты'} name={'Еда'} urlImg={homefood} />
                <ExpensesCard imageLogo={'учеба'} name={'Учеба'} urlImg={education} />
                <ExpensesCard imageLogo={'еда вне дома'} name={'Еда вне дома'} urlImg={food} />
                <ExpensesCard imageLogo={'дети'} name={'Дети'} urlImg={childImg} />
                <ExpensesCard imageLogo={'бизнес'} name={'Бизнес'} urlImg={businessImg} />
                <ExpensesCard imageLogo={'путешествия'} name={'Путешествия'} urlImg={airportImg} />
                <ExpensesCard imageLogo={'дом'} name={'Дом'} urlImg={homeImg} />
                <ExpensesCard imageLogo={'ремонт'} name={'Ремонт'} urlImg={renovationImg} />
                <ExpensesCard imageLogo={'машина'} name={'Машина'} urlImg={carImg} />
                <ExpensesCard imageLogo={'развлечения'} name={'Развлечения'} urlImg={entertainmentImg} />
                <ExpensesCard imageLogo={'кредиты'} name={'Кредиты'} urlImg={creditCardImg} />
                <ExpensesCard imageLogo={'копилка'} name={'Копилка'} urlImg={saveMoneyImg} />
                <ExpensesCard imageLogo={'красота'} name={'Красота'} urlImg={beautyImg} />
                <ExpensesCard imageLogo={'здоровье'} name={'Здоровье'} urlImg={pharmacyImg} />
                <ExpensesCard imageLogo={'подарки'} name={'Подарки'} urlImg={giftImg} />
                <ExpensesCard imageLogo={'бытовая техника'} name={'Бытовая техника'} urlImg={applianceImg} />
                <ExpensesCard imageLogo={'долги'} name={'Долги'} urlImg={lendImg} />
                <ExpensesCard imageLogo={'прочее'} name={'Прочее'} urlImg={othersImg} />
            </div>
            <div className="expenses-info">
                <Input placeholder="Сумма" style={{ height: '50px', backgroundColor: '#f6f4f4' }} />
                <DatePicker format={dateFormatList} style={{ height: '50px', backgroundColor: '#f6f4f4' }} />
                <Input placeholder="Комментарий" style={{ height: '50px', backgroundColor: '#f6f4f4' }} />
            </div>

        </div>

    )
}

export default ExpensesPage;