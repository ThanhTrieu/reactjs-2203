import React from 'react';
import LayoutMovies from './components/Layout';
import ListMovies from './components/List';
import { api } from './services/api';
import { Skeleton } from 'antd';

class AppMovies extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            listMovies: []
        }
    }

    async componentDidMount(){
        const data = await api.getDataPopularityMovies(1);
        if(data.hasOwnProperty('results')){
            this.setState({listMovies: data.results})
        }
        this.setState({loading: false});
    }

    render() {
        if(this.state.loading){
            return (
                <LayoutMovies>
                    <Skeleton active />
                </LayoutMovies>
            )
        }
        return (
            <LayoutMovies>
                <ListMovies listMovies={this.state.listMovies} />
            </LayoutMovies>
        )
    }
}
export default AppMovies;