import React, { useContext } from 'react';
import MyContext from '../providers/MyContext';

const MainContent = () => {
    const lang = useContext(MyContext);
    return (
        <main>
            <p>{lang === 'en' ? 'This is content' : 'Day la noi dung'}</p>
        </main>
    )
}
export default React.memo(MainContent);