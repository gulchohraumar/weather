import './todayGeneral.scss'
import img from '../../assets/forecast-icons/rain.svg'

function TodayHourly() {

    let hourlyForecast = [
        {
            img: require('../../assets/forecast-icons/rain.svg'),
            clock: '09:10 AM',
            temprature: ' 13°C'
        },
        {
            img: require('../../assets/forecast-icons/clouds.svg'),
            temprature: '20°C',
            clock: '10:10 AM',
        },
        {
            img: require('../../assets/forecast-icons/drizzle.svg'),
            temprature: '17°C',
            clock: '11:10 AM',
        },
        {
            img: require('../../assets/forecast-icons/clear.svg'),
            temprature: '25°C',
            clock: '12:10 PM',
        },
    ]
    return (
        <div className="row mt-2 p-2 align-items-center rounded-lg box-shadow cards background-hourly">
            {
                hourlyForecast.map((dt: any, key:number) =>{
                    return  <div className="col-md-1 py-1 mx-1 px-1 hourly-items">
                    <div className="row  rounded-3xl p-1">
                        <p className='text-center text-sm font-bold mb-0'>
                             <small>{dt.clock}</small>
                        </p>
                        <img src={dt.img.default} className='mx-auto' alt="" />
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