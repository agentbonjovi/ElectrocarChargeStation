import { FC } from "react";
import {Carousel, Col, Container, Row } from "react-bootstrap";
import "./HomePage.css"

export const HomePage: FC = () => {
  return (
    <Container fluid id="home-page">
      <Row className="text-center">
        <Col>
          <h1>Зарядные Станции Электромобилей</h1>
          <p>
            Добро пожаловать на сайт зарядных станциях электромобилей Москвы! Здесь вы можете найти всю
            необходимую информацию о существующих зарядных станциях.
          </p>
          <Carousel className="Carousel">
            <Carousel.Item className="CaruselItem">
              <img className="CarouselImage" src="https://agentbonjovi.github.io/ElectrocarChargeStation/0.png"/>
              <Carousel.Caption>
                <h3>ул. Бахрушина</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="CaruselItem">
              <img className="CarouselImage" src="https://agentbonjovi.github.io/ElectrocarChargeStation/1.png"/>
              <Carousel.Caption>
                <h3>ул. Коммунарка</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="CaruselItem">
            <img className="CarouselImage" src="https://agentbonjovi.github.io/ElectrocarChargeStation/2.png"/>
              <Carousel.Caption>
                <h3>МКАД, 51-й километр</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="CaruselItem">
              <img className="CarouselImage" src="https://agentbonjovi.github.io/ElectrocarChargeStation/3.png"/>
              <Carousel.Caption>
                <h3>ул. Савельева</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};