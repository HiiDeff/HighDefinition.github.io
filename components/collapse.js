import React, { useState } from 'react';
import useCollapse from 'react-collapsed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

export default function Collapsible(props) {
    const [ isExpanded, setExpanded ] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

    function handleOnClick() {
        setExpanded(!isExpanded);
    }
    
    return (
        <div className="collapsible">
            <div className="header" {...getToggleProps({onClick: handleOnClick})}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <h4>{props.title}</h4>
                    <FontAwesomeIcon icon={isExpanded ? faAngleDown : faAngleUp } width="25" height="25" className="icon" style={{marginLeft: 15, color: 'white', margin: 0, padding: 0}}/>
                </div>
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    {props.children}
                </div>
            </div>
        </div>
    );
}