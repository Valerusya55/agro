import React, { Component } from 'react'
import telega from '../../assets/telega.png';
import phone from '../../assets/phone.png';
import whatsup from '../../assets/whatsup.png';
import mail from '../../assets/mail.png';
import geo from '../../assets/geo.png';
import './Footer.css';

export default class Footerooter extends Component {
    render() {
        return (
            <div className='Footer'>
                <div className='line'></div>
                <div className='FooterBlock'>
                    <ul>
                        <h5>Покупателям</h5>
                        <li><a href=''>Гарантия</a></li>
                        <li><a href=''>Как сделать заказ</a></li>
                        <li><a href=''>Возврат товара</a></li>
                        <li><a href=''>Возврат денежных средств</a></li>
                    </ul>
                </div>
                <div className='FooterBlock'>
                    <h5>Оставайтесь на связи</h5>
                    <a href='https://t.me/+79040725414'><img src={telega}></img></a>
                    <a href='https://wa.me/79040725414?text=Здравствуйте%2C+у+меня+есть+вопрос'><img src={whatsup}></img></a>
                </div>
                <div className='FooterBlock'>
                    <ul>
                        <h5>Наши контакты</h5>
                        <li><a href='tel:+73812551381'><img src={phone}></img>+7(3812)55‒13‒81</a></li>
                        <li><a href='mailto:agrozapchast55@mail.ru'><img src={mail}></img>agrozapchast55@mail.ru</a></li>
                        <li><p><img src={geo}></img>Омская область, город Омск,<br /> улица Семиреченская, 97А, корпус 3</p></li>
                    </ul>
                </div>
                <hr />
                <p>&copy; 2022 Все права защищены и принадлежат ООО «АгроЗапчасть» </p>
            </div>
        )
    }
}
