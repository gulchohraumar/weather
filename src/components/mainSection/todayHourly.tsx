import './todayGeneral.scss'
import img from '../../assets/forecast-icons/rain.svg'
import { useEffect, useState } from 'react';
import axios from 'axios';

function TodayHourly({ hourlyTime, hourlyTemprature }: any) {

    const [hourlyForecast, setHourlyForecast] = useState([])
   

    useEffect(() => {
        let i;
        let hourlyInfo: any = [];
        for (i = 0; i < 24; i++) {
            hourlyInfo.push({ hour: hourlyTime[i], temprature: `${hourlyTemprature[i]}°C` });
        }
        hourlyInfo[0].img = require('../../assets/forecast-icons/rain.svg').default;
        hourlyInfo[1].img = require('../../assets/forecast-icons/clouds.svg').default;
        hourlyInfo[2].img = require('../../assets/forecast-icons/drizzle.svg').default;
        hourlyInfo[3].img = require('../../assets/forecast-icons/clear.svg').default;
        hourlyInfo[4].img = require('../../assets/forecast-icons/rain.svg').default;
        hourlyInfo[5].img = require('../../assets/forecast-icons/clouds.svg').default;
        hourlyInfo[6].img = require('../../assets/forecast-icons/drizzle.svg').default;
        hourlyInfo[7].img = require('../../assets/forecast-icons/clear.svg').default;
        hourlyInfo[8].img = require('../../assets/forecast-icons/rain.svg').default;
        hourlyInfo[9].img = require('../../assets/forecast-icons/clouds.svg').default;
        hourlyInfo[10].img = require('../../assets/forecast-icons/drizzle.svg').default;
        hourlyInfo[10].img = require('../../assets/forecast-icons/clear.svg').default;
        hourlyInfo[11].img = require('../../assets/forecast-icons/rain.svg').default;
        hourlyInfo[12].img = require('../../assets/forecast-icons/clouds.svg').default;
        hourlyInfo[13].img = require('../../assets/forecast-icons/clouds.svg').default;
       
        setHourlyForecast(hourlyInfo)
    }, [])


    return (
        <div className="row mt-2 align-items-center rounded-lg box-shadow cards background-hourly">
            {
                hourlyForecast.map((dt: any, key: number) => {
                    return <div key={key} className="col-md-1 my-1 px-1 hourly-items">
                        <div className="row  rounded-3xl p-1">
                            <p className='text-center text-sm font-bold mb-0'>
                                <small>{dt.hour}</small>
                            </p>
                            <img src={dt.img} className='mx-auto' alt="" />
                            <p className='m-0 text-center font-semibold'>
                                {dt.temprature}
                            </p>
                        </div>
                    </div>
                })
            }
        </div>
    );
}

export default TodayHourly;