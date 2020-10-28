import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle,Spinner} from 'reactstrap';

import './Cards.css';
import recoveredImg from './images/recovered.png';
import DeathImg from './images/deaths.png';
import InfectedImg from './images/infected.jpg';
import CountUp from 'react-countup';

const Cards = ({data:{confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed)
    {
        return <Spinner animation="border" />;
    }
    return(
        <div className='container' id="cardContainer">
        <div className="row justify-content-center">
        <Card id="infected" className="col-xs-12 col-sm-3">
            <CardBody>
                    <CardTitle className="h1 font-weight-bolder">Infected</CardTitle>
                    <CardImg width="100%" src={InfectedImg} />
                    <CardText >
                        <big><b>
                        <CountUp
                            start={0}
                            end={confirmed.value}
                            duration={2}
                            separator=","
                            />
                           </b> </big>
                    </CardText>
                   <CardText className="font-italic">{new Date(lastUpdate).toDateString()}</CardText>
                    <CardText>Number of active cases of COVID-19</CardText>
                </CardBody>
        </Card>

        <Card id="recovered" className="col-xs-12 col-sm-3 offset-sm-1">
            <CardBody>
                    <CardTitle className="h1 font-weight-bolder">Recovered</CardTitle>
                    <CardImg width="100%" src={recoveredImg} />
                    
                    <CardText>
                    <big><b>
                        <CountUp
                            start={0}
                            end={recovered.value}
                            duration={2}
                            separator=","
                            />
                            </b></big>
                    </CardText>
                    
                   <CardText className="font-italic">{new Date(lastUpdate).toDateString()}</CardText>
                    <CardText>Number of recoveries from COVID-19</CardText>
                </CardBody>
        </Card>
 
        <Card id="deaths" className="col-xs-12 col-sm-3 offset-sm-1">
            <CardBody>
                    <CardTitle className="h1 font-weight-bolder" >Deaths</CardTitle>
                    <CardImg width="100%" src={DeathImg} />
                    
                    <CardText>
                    <big><b>
                        <CountUp
                            start={0}
                            end={deaths.value}
                            duration={2}
                            separator=","
                            />
                            </b></big>
                    </CardText>
                    
                   <CardText className="font-italic">{new Date(lastUpdate).toDateString()}</CardText>
                    <CardText>Number of deaths from COVID-19</CardText>
                </CardBody>
        </Card>
        </div>
        </div>
    )
}
export default Cards;
