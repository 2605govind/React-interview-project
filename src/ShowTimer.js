
const ShowTimer = (props) => {

    const { hours, minutes, seconds, isPause, hundlePause, hundleReset, hundleResume, isFinish } = props;
    return (
        <div className='container'>
            <div className='display-box'>
                <div>{hours < 10 ? `0${hours}` : hours}</div>
                <span>:</span>
                <div>{minutes < 10 ? `0${minutes}` : minutes}</div>
                <span>:</span>
                <div>{seconds < 10 ? `0${seconds}` : seconds}</div>
            </div>
            <div>
                {!isFinish && !isPause && <button onClick={hundlePause} className='timer-button'>Pause</button>}
                {!isFinish && isPause && <button onClick={hundleResume} className='timer-button'>Resume</button>}
                <button onClick={hundleReset} className='timer-button'>Reset</button>
            </div>
        </div>
    )
}

export default ShowTimer;