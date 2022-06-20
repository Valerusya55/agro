import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import first from '../../assets/first.jpg'
import second from '../../assets/second.jpg'
import './CarouselBox.css';

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block mx-auto w-50'
            src={first}
            alt='first'
          />
          <Carousel.Caption>
            <h3>first</h3>
            <p>Тут какой-то текст</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block mx-auto w-50'
            src={second}
            alt='second'
          />
          <Carousel.Caption>
            <h3>second</h3>
            <p>Тут какой-то текст</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}
