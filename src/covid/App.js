import React from 'react';
import LayoutCorona from './components/Layout';
import GlobalCorona from './components/Global';
import CountriesCorona from './components/Countries';
import { api } from './services/api';
import { Skeleton } from 'antd';

class AppCorona extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            global: {},
            countries: []
        }
    }

    async componentDidMount(){
        const data = await api.getDataVirusCorona();
        // cap nhat lai 2 state global va countries
        if(data.hasOwnProperty('Global')){
            this.setState({global: data.Global});
        }
        if(data.hasOwnProperty('Countries')){
            this.setState({countries: data.Countries});
        }
        // dung viec loading data
        this.setState({loading: false});
    }
    
    render(){
        if(this.state.loading){
            return (
                <LayoutCorona>
                    <Skeleton active />
                </LayoutCorona>
            )
        }
        return (
            <LayoutCorona>
                <GlobalCorona global={this.state.global} />
                <CountriesCorona countries={this.state.countries} />
            </LayoutCorona>
        )
    }
}
export default AppCorona;