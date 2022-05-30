import React, { Component } from 'react'
import ChangeData from '../Components/ChangeData'

export default class User extends Component {
    render() {
        return (
            <div className='personalData'>
                <div className="row gy-5">
                    <div className="col-lg-3 col-md-3 col-xs-3 thumb">
                        <img src='avatar.png'></img>
                        <div className='textUser'>
                            <p>Имя</p>
                            <p>mail</p>
                            <p>89136987458</p>
                            <p><ChangeData /></p>
                        </div>
                    </div>
                    <p>
                        <a class="btn btn-primary" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Кнопка рабочая</a>
                    </p>
                    <div class="row">
                        <div class="col">
                            <div class="collapse multi-collapse" id="multiCollapseExample1">
                                <div class="card card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
