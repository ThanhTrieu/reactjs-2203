import React from 'react';
import { Row, Col, Card } from 'antd';
import { helper } from '../helpers/common';

const GlobalCorona = ({ global }) => {

    if(helper.isEmptyObject(global)){
        return (
            <Row style={{ margin: '20px 0px' }}>
                <Col span={24}>
                    <p>Khong co du lieu</p>
                </Col>
            </Row>
        )
    }
    return (
        <Row style={{ margin: '20px 0px' }}>
            <Col span={8}>
                <Card
                    title="Mắc bệnh"
                    bordered={true}
                >
                    <p>Số ca mới mắc: {global.NewConfirmed}</p>
                    <p>Tổng số ca mắc: {global.TotalConfirmed}</p>
                </Card>
            </Col>
            <Col span={8}>
                <Card
                    title="Tử vong"
                    bordered={true}
                >
                    <p>Số ca mới tử vong: 332435</p>
                    <p>Tổng số ca tử vong: 12343434</p>
                </Card>
            </Col>
            <Col span={8}>
            <Card
                    title="Khỏi bệnh"
                    bordered={true}
                >
                    <p>Số ca mới khỏi: 332435</p>
                    <p>Tổng số ca đã khỏi: 12343434</p>
                </Card>
            </Col>
        </Row>
    )
}
export default React.memo(GlobalCorona);