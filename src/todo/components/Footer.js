import React from 'react'

const FooterTodo = () => {
    console.log('Footer component render');
    return (
        <div className="footer">
            <p>Copyright &copy; 2022</p>
        </div>
    )
}
export default React.memo(FooterTodo);