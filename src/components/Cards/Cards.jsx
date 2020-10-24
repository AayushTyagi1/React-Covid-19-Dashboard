import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle} from 'reactstrap';

import styles from './Cards.module.css';
import CountUp from 'react-countup';

const Cards = ({data:{confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed)
    {
        return 'Loading...';
    }
    if(!deaths)
    {
        return 'Loading';
    }
    return(
        <div className='row'>

        <div className="col-sm-4">
        <Card>
            <CardBody>
                    <CardTitle>Infected</CardTitle>
                    <CardText>
                        <CountUp
                            start={0}
                            end={confirmed.value}
                            duration={2}
                            separator=","
                            />
                    </CardText>
                   <CardText>{new Date(lastUpdate).toDateString()}</CardText>
                    <CardText>Number of active cases of COVID-19</CardText>
                </CardBody>
        </Card>
        </div>
        <div className="col-sm-4">
        <Card>
            <CardBody>
                    <CardTitle>Recovered</CardTitle>
                    <CardText>
                        <CountUp
                            start={0}
                            end={recovered.value}
                            duration={2}
                            separator=","
                            />
                    </CardText>
                   <CardText>{new Date(lastUpdate).toDateString()}</CardText>
                    <CardText>Number of recoveries from COVID-19</CardText>
                </CardBody>
        </Card>
        </div>
        <div className="col-sm-4">
        <Card>
            <CardBody>
                    <CardTitle>Deaths</CardTitle>
                    <CardText>
                        <CountUp
                            start={0}
                            end={deaths}
                            duration={2}
                            separator=","
                            />
                    </CardText>
                   <CardText>{new Date(lastUpdate).toDateString()}</CardText>
                    <CardText>Number of deaths from COVID-19</CardText>
                </CardBody>
        </Card>
        </div>
        </div>
    )
}
export default Cards;