import React, { useState, useEffect } from 'react';

function DigitalClock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const IntervalId = setInterval(() => {
            setTime(new Date());
        }, 1000)

        return () => {
            clearInterval(IntervalId)
        }

    }, [])

    function timeFormatter() {
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();

        return (`${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`)
    }

    function padZero(number) {
        return (number < 10 ? "0" : "") + number;
    }

    return (
        <div className='clock-container'>
            <div className='clock'>
                <span>{timeFormatter()}</span>
            </div>
        </div>
    )
}

export default DigitalClock;

/*
Photo by Felix Mittermeier: https://www.pexels.com/photo/blue-and-purple-cosmic-sky-956999/
*/