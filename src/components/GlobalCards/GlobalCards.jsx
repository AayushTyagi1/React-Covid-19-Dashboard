import React, { useState, useEffect } from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import CountUp from "react-countup";
import "./GlobalCards.css";
import axios from "axios";

const GlobalCards = () => {
  const [confirmed, setTotal] = useState("");
  const [recovered, setRecovered] = useState("");
  const [deaths, setDeaths] = useState("");

  useEffect(() => {
    apiAccess();
  }, []);

  const apiAccess = async () => {
    try {
      const response = await axios.get("https://covid19.mathdro.id/api");
      const { confirmed, recovered, deaths } = response.data;
      setTotal(confirmed.value);
      setDeaths(deaths.value);
      setRecovered(recovered.value);
    } catch (err) {
      console.log("Error while accessing API Data:", err);
    }
  };

  return (
    <div className="container" id="cardContainer">
      <div className="row justify-content-center">
        <Card
          id="infected1"
          className="col-xs-12 card-style m-2"
          height="auto"
          width="auto"
        >
          <CardBody>
            <CardTitle className="h1 font-weight-bolder">Infected</CardTitle>
            <CardText>
              <big>
                <b>
                  <CountUp
                    start={0}
                    end={confirmed}
                    duration={2}
                    separator=","
                  />
                </b>{" "}
              </big>
            </CardText>

            <div className="d-none d-lg-block">
              <CardText>Number of active cases of COVID-19</CardText>
            </div>
          </CardBody>
        </Card>

        <Card
          id="recovered1"
          className="col-xs-12  card-style m-2"
          height="auto"
          width="auto"
        >
          <CardBody>
            <CardTitle className="h1 font-weight-bolder">Recovered</CardTitle>

            <CardText>
              <big>
                <b>
                  <CountUp
                    start={0}
                    end={recovered}
                    duration={2}
                    separator=","
                  />
                </b>
              </big>
            </CardText>

            <div className="d-none d-lg-block ">
              <CardText>Number of recoveries from COVID-19</CardText>
            </div>
          </CardBody>
        </Card>

        <Card
          id="deaths1"
          className="col-xs-12  card-style m-2"
          height="auto"
          width="100%"
        >
          <CardBody>
            <CardTitle className="h1 font-weight-bolder">Deaths</CardTitle>

            <CardText>
              <big>
                <b>
                  <CountUp start={0} end={deaths} duration={2} separator="," />
                </b>
              </big>
            </CardText>

            <div className="d-none d-lg-block">
              <CardText>Number of deaths from COVID-19</CardText>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
export default GlobalCards;
