import alfabank from '../../assets/img/alfabank.svg';
import gazprom from '../../assets/img/gazprom.svg';
import moscow from '../../assets/img/moscow.svg';
import raiffeisen from '../../assets/img/raiffeisen.svg';
import sber from '../../assets/img/sber.svg';
import tink from '../../assets/img/tink.svg';
import business from '../../assets/img/businesss.png';
import gifts from '../../assets/img/birthday.png';

export const banks = [
    { value: 'alfa', label: 'Альфабанк', logo: alfabank, defaultColor: '#eb1919' },
    { value: 'sber', label: 'Сбербанк', logo: sber, defaultColor: '#1d7f1df0' },
    { value: 'raiffeisen', label: 'Райфайзен', logo: raiffeisen, defaultColor: '#000000e0' },
    { value: 'tink', label: 'Тинькофф', logo: tink, defaultColor: '#000000e0' },
    { value: 'gazprom', label: 'Газпром', logo: gazprom, defaultColor: 'blue' },
    { value: 'moscow', label: 'Банк Москва', logo: moscow, defaultColor: '#00A6E2' },
    { value: 'business', label: 'Бизнес', logo: business, defaultColor: 'rgb(14 180 51)' },
    { value: 'gifts', label: 'Подарки', logo: gifts, defaultColor: 'rgb(50 209 144)' },
];

export const currencies = [
    { value: 'BYN', label: 'Белорусский рубль' },
    { value: 'RUB', label: 'Российский рубль' },
    { value: 'EUR', label: 'Евро' },
    { value: 'USD', label: 'Доллар США' },
    { value: 'CNY', label: 'Юань' },
];