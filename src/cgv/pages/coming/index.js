import React from 'react';
import LayoutMovies from '../../components/Layout';
import { Row, Col } from 'antd';

const UpComingPage = () => {
    return (
        <LayoutMovies>
            <Row>
                <Col span={24}>
                    <h3>This is coming soon!</h3>
                </Col>
            </Row>
        </LayoutMovies>
    )
}
export default React.memo(UpComingPage);