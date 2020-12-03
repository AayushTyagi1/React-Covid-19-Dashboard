import React from 'react';
import {Spinner,Table} from 'reactstrap';

import './Table.css';


const InfoTable = ({data:{confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed)
    {
        return <Spinner animation="border" />;
    }
    return(
        <div className='container' id="Container">
            <Table hover dark>
      <thead>
        <tr>
          <th>#</th>
          <th>Country</th>
          <th>Cases</th>
          <th>Recovered</th>
          <th>Deaths</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>#</td>
          <td>#</td>
          <td>#</td>
          <td>#</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>#</td>
          <td>#</td>
          <td>#</td>
          <td>#</td>
        </tr>
      </tbody>
    </Table>
        </div>
    )
}
export default InfoTable;
