import React from 'react';
import { Row, Col, Card } from 'antd';

const { Meta } = Card;

const ListMovies = ({ listMovies }) => {
    if(listMovies === 0){
        return (
            <Row style={{margin: '20px 0px'}}>
                <Col span={24}>
                    <p>Khong co du lieu</p>
                </Col>
            </Row>
        )
    }
    return (
        <Row style={{margin: '20px 0px'}}>
            {listMovies.map((item, index) => (
                <Col span={6} key={index}>
                    <Card
                        hoverable
                        style={{
                            marginRight: '5px',
                            marginBottom: '10px'
                        }}
                        cover={<img alt={item.original_title} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />}
                    >
                        <Meta title={item.title} />
                    </Card>
                </Col>
            ) )}
        </Row>
    )
}
export default React.memo(ListMovies);