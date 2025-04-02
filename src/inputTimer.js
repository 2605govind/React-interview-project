
const InputTimer = ({ hundleInputs, hundleStart }) => {
    return (
        <div className='container'>
            <div className='input-box'>
                <input type='number' onChange={hundleInputs} id='hours' placeholder='HH' />
                <input type='number' onChange={hundleInputs} id='minutes' placeholder='MM' />
                <input type='number' onChange={hundleInputs} id='seconds' placeholder='ss' />
            </div>
            <button onClick={hundleStart} className='timer-button'>Start</button>
        </div>
    )
}

export default InputTimer;  