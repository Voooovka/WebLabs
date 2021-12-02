import React from 'react'

const Logo = () => {
    return (
        <div className="w-20">
            <img src={require("../../images/logo.svg").default} alt="logo" />
        </div>
    )
}

export default Logo;
