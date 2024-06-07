import './todayGeneral.scss'
import todayWeatherIcon from '../../assets/forecast-icons/mist.svg'

function TodayGeneral({ todayGeneral }: any) {
    return (
        <div className="row p-4 px-3 rounded-lg box-shadow background">
            <p>
                Baku, Azerbaijan
            </p>

            <div className='row align-items-center'>
                <div className="col-sm-6 d-flex align-items-center">
                    <span className='text-3xl temprature'>
                        {Math.floor(todayGeneral.temperature_2m)}°
                    </span>
                    <span className='mt-4 text-2xl pt-4'>Feels like {Math.floor(todayGeneral.temperature_2m - 4)}°</span>
                </div>
                <div className="col-sm-6 row align-items-center">
                    <span className='text-end text-3xl temprature'>
                        <img src={todayWeatherIcon} alt="" className='ms-auto' style={{ width: '90px' }} />
                    </span>
                    <span className='justify-content-end text-2xl mt-2 row'>
                        <div className=" col-sm-3 text-center">
                            Mist
                        </div>
                    </span>
                </div>
            </div>

            <div className="d-flex text-2xl justify-content-between align-items-end">
                <span>
                    {new Date(todayGeneral.time).toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'})}
                </span>
                <span className='text-end'>
                    Day {Math.floor(todayGeneral.temperature_2m - 4)}°
                    <br />
                    Night {Math.floor(todayGeneral.temperature_2m - 9)}°
                </span>
            </div>
        </div>
    );
}

export default TodayGeneral;