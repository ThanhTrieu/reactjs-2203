import React, { useContext } from 'react';
import MyContext from '../providers/MyContext';
import { Skeleton } from 'antd';

const HeaderComponent = () => {
    const data = useContext(MyContext);
    if(!data.hasOwnProperty('user')){
        return <Skeleton active />
    }
    return (
        <p>Hi : {data.user}</p>
    )

    // return (
    //     <MyContext.Consumer>
    //         { data => {
    //                 if(data.hasOwnProperty('user')){
    //                     return (
    //                         <p>Hi : {data.user}</p>
    //                     )
    //                 }
    //                 return (
    //                     <Skeleton active />
    //                 )
    //             }
    //         }
    //     </MyContext.Consumer>
    // )
}
export default React.memo(HeaderComponent);