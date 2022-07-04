import React from 'react';
import { Row, Col, Input } from 'antd';

const { Search } = Input;

const SearchWeather = () => {
    return (
        <Row style={{ margin: '20px 0px' }}>
            <Col span={12} offset={6}>
                <Search
                    placeholder="name of city"
                    enterButton
                    loading={false}
                />
            </Col>
        </Row>
    )
}
export default React.memo(SearchWeather);