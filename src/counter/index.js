import React from 'react';
import LayoutCounter from "./components/Layout";
import ResultCounter from './components/Result';
import ButtonCounter from './components/commons/Button';

class AppCounter extends React.Component {
    //count = 0;
    constructor(props){
        super(props);
        // khai bao state
        this.state = {
            count: 0
        }
        //this.name= 'aaa';
        //this.changeCounter = this.changeCounter.bind(this);
    }

    changeCounter = (type) => {
        //this.setState({count: this.state.count + 1});
        // chi su dung duoc this.setState trong class component
        // vi no nam trong React.Component ma class da ke thua
        if(type === 'increment'){
            this.setState(state => ({count: state.count + 1}) );
        } else if(type === 'decrement'){
            this.setState(state => ({count: state.count - 1}) );
        }
    }
    
    render() {
        // chi dung trong class components
        return (
            <LayoutCounter>
                <ResultCounter result={this.state.count} />
                <ButtonCounter
                    type="button"
                    name="increment"
                    className="btn"
                    click={this.changeCounter}
                >
                    +
                </ButtonCounter>
                <ButtonCounter
                    type="button"
                    name="decrement"
                    click={this.changeCounter}
                >
                    -
                </ButtonCounter>
            </LayoutCounter>
        )
    }
}
export default AppCounter;