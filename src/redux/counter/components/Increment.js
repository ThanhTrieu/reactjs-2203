import React from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { selectorCounter } from '../reducers/counter';
import { incrementCounter } from '../actions/counter';

const IncrementCounter = (props) => {
    //const count = useSelector(selectorCounter);
    //const dispatch = useDispatch();

    /*
    const clickIncrementCounter = () => {
        // dispatch action vao trong store de reducer nhan dc va xu ly
        dispatch(incrementCounter(count));
    }
    */
    const clickIncrementCounterV2 = () => {
        props.clkIncrement(props.myCount);
    }
    return (
        <button type="button" onClick={() => clickIncrementCounterV2()}> + </button>
    )
}

const mapStateToProps = state => ({
    // lay cai state tu reducer ra va goi la thanh 1 props trong component
    myCount: state.counter.count
});

const mapDispatchToProps = dispatch => ({
    // dispatch action thanh props trong component
    clkIncrement: val => dispatch(incrementCounter(val))
})
const ConnectIncrementCounter = connect(mapStateToProps,mapDispatchToProps)(IncrementCounter);
export default React.memo(ConnectIncrementCounter);