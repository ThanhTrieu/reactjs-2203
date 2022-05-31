import React from 'react';
import { Row, Col, Table } from 'antd';

const columns = [
    {
        title: 'Quốc gia',
        dataIndex: 'Country',
        key: 'Country'
    },
    {
        title: 'Mới nhiễm',
        dataIndex: 'NewConfirmed',
        key: 'NewConfirmed'
    },
    {
        title: 'Tổng ca nhiễm',
        dataIndex: 'TotalConfirmed',
        key: 'TotalConfirmed'
    },
    {
        title: 'Tử vong',
        dataIndex: 'NewDeaths',
        key: 'NewDeaths'
    },
    {
        title: 'Tổng ca tử vong',
        dataIndex: 'TotalDeaths',
        key: 'TotalDeaths'
    },
    {
        title: 'Khỏi bệnh',
        dataIndex: 'NewRecovered',
        key: 'NewRecovered'
    },
    {
        title: 'Tổng ca khỏi bệnh',
        dataIndex: 'TotalRecovered',
        key: 'TotalRecovered'
    }
];


const CountriesCorona = ({ countries }) => {
    if(countries.length === 0){
        <Row style={{ margin: '20px 0px' }}>
            <Col span={24}>
                <p>Khong co du lieu</p>
            </Col>
        </Row>
    }
    return (
        <Row style={{ margin: '20px 0px' }}>
            <Col span={24}>
                <Table rowKey="ID" columns={columns} dataSource={countries} />
            </Col>
        </Row>
    )
}
export default React.memo(CountriesCorona);