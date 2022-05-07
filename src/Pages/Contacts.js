import React, { Component } from 'react'


export default class Contacts extends Component {
  render() {
    return (
      <div className='ContactBlock'>

        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A6f9cfb64e307617ace86b6c428e72845db804c3cf85bffa463a871d78af815d1&amp;source=constructor" width="100%" height="488" frameBorder="0"></iframe>

        <div className='contact'>
          <img src='about.png'></img>
        </div>
        <div className='contactMiddle'>
          <p>644016, Омск, улица Семиреченская, 97А, корпус 3 </p>
          <img src='clock.png'></img>
          <p>Пн - Пт: 9.00 - 18.00 <br /> Сб, Вс: выходной</p>
        </div>
        <div className='contactBottom'>
          <div className='rectangleOne'>
            <img src='nal.png'></img>
            <p>Наличные</p>
          </div>
          <div className='rectangleTwo'>
          <img src='beznal.png'></img>
          <p>Безналичный расчет</p>
          </div>
        </div>
      </div>
    )
  }
}
