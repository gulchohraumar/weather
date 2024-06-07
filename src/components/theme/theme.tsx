import './theme.scss'

function Theme({theme, setTheme} : any) {
    return <div className={"rounded-lg box-shadow py-3  " + (theme ? 'dark_mode_theme_con' : '')} style={{color: '#454545'}} >
        <span className="d-flex justify-content-center">
            <span>
                <i className="fa-solid fa-sun-bright me-1"></i>
                Light
            </span>

            <label htmlFor="themeChange" className="theme-label mx-2">
                <span className='toggle-circle'></span>
                <input type="checkbox" onChange={(event) => setTheme(event?.target.checked)} className='checkbox-theme' name="themeChange" id="themeChange" />
            </label>

            <span>
                <i className="fa-solid fa-moon me-1"></i>
                Dark
            </span>
        </span>
    </div>
}

export default Theme;