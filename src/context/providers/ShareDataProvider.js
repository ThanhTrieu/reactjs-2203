import React, { useState, useEffect } from 'react';
import MyContext from './MyContext';

const ShareDataProvider = (props) => {
    // call data get info user
    const [user, setInfoUser] = useState({});

    useEffect(() =>{
        const getDataUser =  () => {
            setInfoUser({id: 1, user: 'Teo'});
        }
        getDataUser();
    }, []); // componentDidMount

    return (
        <MyContext.Provider value={user}>
            {props.children}
        </MyContext.Provider>
    )
}
export default React.memo(ShareDataProvider);