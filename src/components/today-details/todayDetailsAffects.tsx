import './todayDetails.scss'

function TodayDetailsAffects() {
    let affects: any[] = [
        {
            img: require('../../assets/humidity.svg'),
            name: 'Humidity',
            percent: '41%'
        },
        {
            img: require('../../assets/wind.svg'),
            name: 'Wind speed',
            percent: '2km/h'
        },
        {
            img: require('../../assets/pressure-white.svg'),
            name: 'Pressure',
            percent: '997hPa'
        },
    ]

    return (
        <div className="row mt-4">
            {
                affects.map((dt: any, key: number) => {
                    return <div key={key} className="col-sm-4 mt-2 d-flex align-items-center " >
                        <span>
                            <img className="affect-images" src={dt.img.default} />
                        </span>
                        <span className="ms-3 text-center">
                            <span className='text-center'>{dt.percent}</span>
                            <br />
                            <span className='text-center text-sm font-semibold'>{dt.name}</span>
                        </span>
                    </div>
                })
            }
        </div>
    );
}

export default TodayDetailsAffects;