import React, { Component } from 'react'
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div className='About'>
        <p>
          Компания «АгроЗапчасть» с 2007 года занимается продажей грузовой и спецтехники, а также
          сельскохозяйственных машин и оборудования ведущих отечественных производителей. Являемся
          официальным дилером торговых марок UMG СДМ, МТЗ, ТОНАР, Планета, СПМ. Кроме реализации
          спецтехники занимаемся её обслуживанием и торговлей запчастями.
        </p>
        <img src='about.png'></img>
        <h5>Надежность, профессионализм, ответственность</h5>
        <p>
          С первого дня работы максимально скрупулезно подходим к сотрудничеству с каждым клиентом. При этом благодаря налаженным
          партнерским отношениям с указанными выше производителями спецтехники ведем доступную, продуманную и прозрачную ценовую
          политику. Действительно используем, а не просто декларируем индивидуальный подход. Умеем не просто слушать, но и слышать клиента!
        </p>

        
        <h5>Современный сервисный центр – наша гордость!</h5>
        <p>
          Компания «АгроЗапчасть» располагает мощной материально-технической базой, инновационным диагностическим и ремонтным
          оборудованием, а также квалифицированными кадрами для качественного обслуживания и ремонта грузовой, сельскохозяйственной
          и спецтехники. Предлагаем услуги любого уровня сложности от замены масла до капитального ремонта двигателя.  На все
          выполненные работы обязательно предоставляется гарантия!
        </p>
      </div>
    )
  }
}
