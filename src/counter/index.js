import React from 'react';
import LayoutCounter from "./components/Layout";
import ResultCounter from './components/Result';
import ButtonCounter from './components/commons/Button';

class AppCounter extends React.Component {

    changeCounter() {
        console.log('click me');
    }
    
    render() {
        // chi dung trong class components
        return (
            <LayoutCounter>
                <ResultCounter result={0} />
                <ButtonCounter
                    type="button"
                    name="increment"
                    className="btn"
                    click={this.changeCounter}
                >+</ButtonCounter>
                <ButtonCounter
                    type="button"
                    name="decrement"
                >-</ButtonCounter>
            </LayoutCounter>
        )
    }
}
export default AppCounter;