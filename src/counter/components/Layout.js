import HeaderCounter from './Header';
import FooterCounter from './Footer';
import './css/common.css';

const LayoutCounter = (props) => {
    return (
        <>
            <div className="container">
                <HeaderCounter/>
                <div className="content">
                    {props.children}
                </div>
                <FooterCounter/>
            </div>
        </>
    )
}
export default LayoutCounter;