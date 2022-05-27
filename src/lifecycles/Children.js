import React from 'react';
import { Row, Col, Button } from 'antd';

class Children extends React.PureComponent {

    componentWillUnmount(){
        // bao hieu cho minh biet khi nao component bi xoa
        // truoc khi xoa mh xu ly logic gi do
        console.log('Component Children da bi xoa')
    }

    render(){
        return (
            <Row>
                <Col span={20} offset={2}>
                    <h3> Children component</h3>
                    <Button type="primary"> Hi </Button>
                </Col>
            </Row>
            
        )
    }
}

export default Children;