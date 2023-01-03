import img404 from '../img/page404.jpg';

const pageStyle = {
    height: 'calc(100vh - 70px)', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center', 
    fontWeight: 700
};

export default function PageNotFound () {
    let secondsChange = null;
    let seconds = 5;
    secondsChange = setInterval(() => {
        seconds -= 1;
        document.querySelector('.seconds').textContent = seconds;
        if (seconds === 1) {
            clearInterval(secondsChange);
            window.location = '/goit-react-hw-05-movies/movies/';
        }
    }, 1000);
    return (
    <div style={pageStyle}>
        <img src={img404} alt = 'Page not found' width='400'/>
        <div>You will be redirected back to movie search page in <span className='seconds'>{seconds}</span> seconds.</div>
    </div>);
}