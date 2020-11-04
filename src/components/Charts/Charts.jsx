import React,{ useState,useEffect } from 'react';
import {fetchDailyData} from '../../api';
import {Line, Bar} from 'react-chartjs-2';
import './Charts.css'

const Charts = ({data: {confirmed, deaths, recovered}, country}) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData())
        }
    
        console.log(dailyData)
    
        fetchAPI();
    },[]);

    
    const barChart =(
        confirmed ?
        (
            <Bar
                data = {{
                    labels: ['Infected','Recovered','Deaths'],
                    datasets: [{
                        label: "People",
                        backgroundColor: [
                            'rgba(0, 0, 255, 0.5)',
                            'rgba(0, 255, 255, 0.5)',
                            'rgba(255, 0, 0, 0.5)',
                        ],
                        data:[confirmed.value, recovered.value, deaths.value]
                    }]
                }}
                options ={{
                    legend: {display: false},
                    title: {display:true , text: `Current state in ${country}`},
                }}
            />
        ): null
         );
         const lineChart = (
            dailyData.length ? (
            <Line 
              data={{
                  labels: dailyData.map(({date}) => date),
                  datasets: [{
                      data: dailyData.map(({confirmed}) => confirmed),
                      label: 'Infected',
                      borderColor:"#3333ff",
                      fontColor:'white',
                      fill: true,
                  },{
                    data: dailyData.map(({deaths}) => deaths),
                    label: 'Deaths',
                    borderColor:'red',
                    backgroundColor: 'rgba(255,0,0,0.5)',
                    fill: true,
                  }],
                  
              }}
            />) :null
        );

    return(
            <div className="container absolute-center" id='chartContainer'>
                   {country ? barChart: lineChart} 
            </div>
    );
}
export default Charts;