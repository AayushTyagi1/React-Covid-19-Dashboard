import React from 'react';
import {Spinner,Table} from 'reactstrap';

import './Table.css';


const InfoTable = ({data:{confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed)
    {
        return <Spinner animation="border" />;
    }
    return(
      <iframe src="https://www.google.com/maps/d/embed?mid=1a04iBi41DznkMaQRnICO40ktROfnMfMx" width="640" height="480">HI</iframe>
    )
}
export default InfoTable;
