import PropTypes from 'prop-types';

const ResultCounter = (props) => {
    return (
        <h3 className="title">{props.result}</h3>
    )
}
ResultCounter.propTypes = {
    result: PropTypes.number.isRequired
}
export default ResultCounter;