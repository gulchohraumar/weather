import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodayDetails from './components/today-details/todayDetails';
import FiveDaysForecast from './components/fiveDaysForecast';
import TodayGeneral from './components/mainSection/todayGeneral';
import TodayHourly from './components/mainSection/todayHourly';
import Theme from './components/theme/theme';
import axios from 'axios';

function App() {
  const [theme, setTheme] = useState(false);
  const [todayGeneral, setTodayGeneral] = useState({});
  const [hourlyTime, setHourlyTime] = useState([]);
  const [hourlyTemprature, setHourlyTemprature] = useState([]);

  useEffect(() => {
    let data = axios.get('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m')
      .then((response: any) => { return response.data })
      .catch((error: any) => console.log(error));

    data.then((response: any) => {
      setTodayGeneral(response.current);

      let hours = response.hourly.time.slice(0, 24).map((dt: any) => { return String(dt).split('T')[1] });
      let temprature = response.hourly.temperature_2m.slice(0, 24).map((dt: any) => { return Math.floor(dt) });
      setHourlyTime(hours);
      setHourlyTemprature(temprature);
    })
  }, []);

  return (
    <div className={"row py-3 common-container" + (theme ? ' common_container_dark_mode' : '')} >
      <section className="col-md-4 row border-r border-dashed  ">
        <div>
          <section className='row'>
            <Theme theme={theme} setTheme={setTheme} />
          </section>

          <div className='mt-5'>
            <section className='row mt-4'>
              <TodayDetails></TodayDetails>
            </section>

            <section className='row mt-4'>
              <FiveDaysForecast></FiveDaysForecast>
            </section>
          </div>
        </div>
      </section>

      <section className="col-md-8 row ">
        <main className=''>
          {todayGeneral ? <TodayGeneral todayGeneral={todayGeneral}></TodayGeneral> : ''}
          {hourlyTime.length ? <TodayHourly hourlyTime={hourlyTime} hourlyTemprature={hourlyTemprature}></TodayHourly> : ''}
        </main>
      </section>
    </div>
  );
}

export default App;
