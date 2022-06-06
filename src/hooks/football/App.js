import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import { league_id } from './const/index';
import { api } from './services/api';

const AppFootball = () => {
    const [loading, setLoading] = useState(true);
    const [leagueDetail, setLeagueDetail] = useState({});
    const [dataLeague, setDataLeague] = useState([]);

    useEffect(() => {
        // componentDidMount
        const getData = async () => {
            const football = await api.getDataFootball(league_id);
            if(football.hasOwnProperty('data')){
                // cap nhat state
                if(football['data'][league_id].hasOwnProperty('league_detail')){
                    setLeagueDetail(football['data'][league_id]['league_detail']);
                }
                if(football['data'][league_id].hasOwnProperty('data')){
                    setDataLeague(football['data'][league_id]['data']);
                }
            }
            setLoading(false); // call done 
        }
        getData();
    }, []); // truyen tham so [] - neu tham so bi thay doi thi useEffect tu dong chay lai
    
    console.log('leagueDetail', leagueDetail);
    return (
        <Row>
            <Col span={20} offset={2}>

            </Col>
        </Row>
    )
}
export default React.memo(AppFootball);
