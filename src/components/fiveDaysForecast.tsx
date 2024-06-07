
function FiveDaysForecast() {

    let forecastArray = [
        {
            img: require('../assets/forecast-icons/clouds.svg'),
            temprature: '20°C',
            date: 'Friday, 4 Sep'
        },
        {
            img: require('../assets/forecast-icons/clear.svg'),
            temprature: '25°C',
            date: 'Friday, 1 Sep' 
        },
        {
            img: require('../assets/forecast-icons/drizzle.svg'),
            temprature: '17°C',
            date: 'Saturday, 2 Sep'
        },
        {
            img: require('../assets/forecast-icons/mist.svg'),
            temprature: '17°C',
            date: 'Friday, 3 Sep'
        },
        {
            img: require('../assets/forecast-icons/rain.svg'),
            temprature: '13°C',
            date: 'Friday, 4 Sep'
        },
        
    ]
    return (
        <div className="rounded-lg box-shadow py-3 cards" >
            <h4 className="pb-2 text-center border-dashed border-white border-b"> 5 days Forecast </h4>
            {
                forecastArray.map((dt: any, key: number) => {
                    return <div key={key} className="row mt-2 align-items-center">
                        <div className="col-md-2 text-center">
                            <img src={dt.img.default} alt="" />
                        </div>
                        <div className="col-md-3 text-end text-lg"> {dt.temprature} </div>
                        <div className="col-md-7 text-end text-lg"> {dt.date}</div>
                    </div>
                })
            }
        </div>
    );
}

export default FiveDaysForecast;