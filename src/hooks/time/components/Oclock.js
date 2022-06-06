import React, { useState, useEffect } from 'react';

const Oclock = () => {
    const [timeString, setTimeString] = useState('');

    useEffect(() => {
        const time = setInterval(() => {
            console.log('a');
            const date = new Date();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();
            const string = `${hours} : ${minutes} : ${seconds}`;
            setTimeString(string);
        }, 1000);

        // clean up
        return () => {
            // componentWillUnmount
            console.log('componentWillUnmount');
            clearInterval(time);
        }
    
    }, []);
    return (
        <h1>{timeString}</h1>
    )
}
export default React.memo(Oclock);

