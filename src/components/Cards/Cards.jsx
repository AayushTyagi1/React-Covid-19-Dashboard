import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Spinner,
} from "reactstrap";

import "./Cards.css";
import recoveredImg from "../images/recovered.png";
import DeathImg from "../images/deaths.png";
import InfectedImg from "../images/infected.jpg";
import CountUp from "react-countup";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return <Spinner animation="border" />;
  }
  return (
    <div className="container" id="cardContainer">
      <div className="justify-content-center">
        <CarouselProvider
          naturalSlideWidth={40}
          naturalSlideHeight={50}
          totalSlides={3}
          className="carousel-style"
        >
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
          <Slider>
            <Slide index={0}>
              <Card
                id="infected"
                className="col-xs-12 card-style"
                height="auto"
              >
                <CardBody>
                  <CardTitle className="h1 font-weight-bolder">
                    Infected
                  </CardTitle>
                  <div className="d-none d-lg-block">
                    <CardImg width="70%" height="200px" src={InfectedImg} />
                  </div>
                  <CardText>
                    <big>
                      <b>
                        <CountUp
                          start={0}
                          end={confirmed.value}
                          duration={2}
                          separator=","
                        />
                      </b>{" "}
                    </big>
                  </CardText>
                  <CardText className="font-italic">
                    {new Date(lastUpdate).toDateString()}
                  </CardText>
                  <div className="d-none d-lg-block">
                    <CardText>Number of active cases of COVID-19</CardText>
                  </div>
                </CardBody>
              </Card>
              <p className="legend">Infected</p>
            </Slide>
            <Slide index={1}>
              <Card
                id="recovered"
                className="col-xs-12 card-style"
                height="auto"
              >
                <CardBody>
                  <CardTitle className="h1 font-weight-bolder">
                    Recovered
                  </CardTitle>
                  <div className="d-none d-lg-block">
                    <CardImg width="70%" height="200px" src={recoveredImg} />
                  </div>

                  <CardText>
                    <big>
                      <b>
                        <CountUp
                          start={0}
                          end={recovered.value}
                          duration={2}
                          separator=","
                        />
                      </b>
                    </big>
                  </CardText>

                  <CardText className="font-italic">
                    {new Date(lastUpdate).toDateString()}
                  </CardText>
                  <div className="d-none d-lg-block">
                    <CardText>Number of recoveries from COVID-19</CardText>
                  </div>
                </CardBody>
              </Card>
              <p className="legend">Recovered</p>
            </Slide>
            <Slide index={3}>
              <Card id="deaths" className="col-xs-12 card-style" height="auto">
                <CardBody>
                  <CardTitle className="h1 font-weight-bolder">
                    Deaths
                  </CardTitle>
                  <div className="d-none d-lg-block">
                    <CardImg height="200px" width="70%" src={DeathImg} />
                  </div>

                  <CardText>
                    <big>
                      <b>
                        <CountUp
                          start={0}
                          end={deaths.value}
                          duration={2}
                          separator=","
                        />
                      </b>
                    </big>
                  </CardText>

                  <CardText className="font-italic">
                    {new Date(lastUpdate).toDateString()}
                  </CardText>
                  <div className="d-none d-lg-block">
                    <CardText>Number of deaths from COVID-19</CardText>
                  </div>
                </CardBody>
              </Card>
              <p className="legend">Deaths</p>
            </Slide>
          </Slider>
        </CarouselProvider>
      </div>
    </div>
  );
};
export default Cards;
