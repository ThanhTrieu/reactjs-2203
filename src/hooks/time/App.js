import React, { useState } from 'react';
import Oclock from './components/Oclock';

const AppTime = () => {
    const [showTime, setShowTime] = useState(true);
    const showHide = () => {
        setShowTime(false);
    }
    return (
        <>
            {showTime && <Oclock/>}
            <button onClick={() => showHide()}> Remove time </button>
        </>
    )
}
export default AppTime;