import React from 'react';
import LayoutMovies from './components/Layout';
import ListMovies from './components/List';
import PaginationMovie from './components/Pagination';
import { api } from './services/api';
import { Skeleton } from 'antd';

class AppMovies extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            listMovies: [],
            page: 1,
            totalPage: 0,
            totalResults: 0
        }
    }

    async componentDidMount(){
        const data = await api.getDataPopularityMovies(this.state.page);
        if(data.hasOwnProperty('results')){
            this.setState({listMovies: data.results})
        }
        if(data.hasOwnProperty('total_pages')){
            this.setState({totalPage: data.total_pages});
        }
        if(data.hasOwnProperty('total_results')) {
            this.setState({totalResults: data.total_results});
        }
        this.setState({loading: false});
    }

    changePage = async (p) => {
        // p : trang ma nguoi gui len
        if( p >= 1 && p <= this.state.totalPage){
            // can goi lai api de lay data moi theo page
            this.setState({loading: true}); // bat dau lay data moi
            const movies = await api.getDataPopularityMovies(p);
            if(movies.hasOwnProperty('results')){
                this.setState({listMovies: movies.results});
            }
            this.setState({ page: p, loading: false });
        }
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
                <PaginationMovie
                    current={this.state.page}
                    total={this.state.totalResults}
                    change={this.changePage}
                />
            </LayoutMovies>
        )
    }
}
export default AppMovies;