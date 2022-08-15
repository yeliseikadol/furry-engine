import * as React from 'react';

function Header(props) {
    return (
        <div className="header">
            <logo>{props.logo}</logo>
        </div>
    )
}

export default Header
