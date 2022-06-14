import React, { useState } from 'react';
import MyContext from './MyContext';
import { Select } from 'antd';

const { Option } = Select;

const ShareLanguageProvider = (props) => {
    const [language, setLanguage] = useState('en');

    const handleChange = (lang) => {
        setLanguage(lang);
    };

    return (
        <MyContext.Provider value={language}>
            <Select
                defaultValue="en"
                style={{
                    width: 120,
                }}
                onChange={handleChange}
            >
                <Option value="en">English</Option>
                <Option value="vi">Vietnamese</Option>
            </Select>
            <div>
                {props.children}
            </div>
        </MyContext.Provider>
    )
}
export default React.memo(ShareLanguageProvider);