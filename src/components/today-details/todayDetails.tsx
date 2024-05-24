import sunrise from '../../assets/sunrise-white.svg';
import sunset from '../../assets/sunset-white.svg';
import './todayDetails.scss';
import TodayDetailsAffects from './todayDetailsAffects';

function TodayDetails() {
    return (
        <div className="rounded-lg box-shadow py-3 cards" style={{ overflow: 'auto' }}>
            <div className="row">
                <div className="col-sm-6">
                    <span className="text-xl font-semibold">Azerbaijan</span>
                </div>
                <div className="col-sm-6 row ">
                    <span className="text-end text-xl font-semibold">09 : 09</span>
                    <span className="text-end text-sm">Thustday, 13 Aug</span>
                </div>
            </div>

            <div className="row mt-4">
                <div className="sun-conditions d-flex align-items-center col-sm-6">
                    <span>
                        <img src={sunrise} alt="" />
                    </span>
                    <span className='text-center ms-3'>
                        <span className='font-semibold'> Sunrise</span>
                        <br />
                        <span className='text-sm'>06:30 AM</span>
                    </span>
                </div>
                <div className="col-sm-6 sun-conditions d-flex align-items-center justify-content-end ">
                    <span>
                        <img src={sunset} alt="" />
                    </span>
                    <span className='text-center ms-3'>
                        <span className='font-semibold'>Sunset</span>
                        <br />
                        <span className='text-sm'>06:30 PM</span>
                    </span>
                </div>
            </div>

            <TodayDetailsAffects></TodayDetailsAffects>
        </div>
    );
}

export default TodayDetails;