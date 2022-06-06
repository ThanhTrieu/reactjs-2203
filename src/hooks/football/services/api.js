import axios from 'axios';

const getDataFootball = async (id) => {
    const url = `https://gw.vnexpress.net/football/standing?league_id=${id}`;
    const response = await axios.get(url);
    const result = response.status === 200 ? response.data : {};
    return result;
}
export const api = {
    getDataFootball
}