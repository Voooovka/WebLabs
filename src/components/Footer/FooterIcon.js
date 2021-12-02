import React from 'react'

const FooterIcon = (props) => {
    return (
        <div className="mx-4">
            <img src={props.icon.url} alt={props.icon.alt} />
        </div>
    )
}

export default FooterIcon;
