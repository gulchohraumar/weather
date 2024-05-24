import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodayDetails from './components/today-details/todayDetails';
import FiveDaysForecast from './components/fiveDaysForecast';
import TodayGeneral from './components/mainSection/todayGeneral';
import TodayHourly from './components/mainSection/todayHourly';

function App() {
  return (
    <div className="row common-container">
      <section className="col-md-4 row border-r border-dashed  align-items-center">
        <div>
          <section className='row '>
            <TodayDetails></TodayDetails>
          </section>

          <section className=' row mt-3'>
            <FiveDaysForecast></FiveDaysForecast>
          </section>
        </div>
      </section>

      <section className="col-md-8 row align-items-center">
        <main className=''>
          <TodayGeneral></TodayGeneral>
          <TodayHourly></TodayHourly>
        </main>
      </section>
    </div>
  );
}

export default App;
