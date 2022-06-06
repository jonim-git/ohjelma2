import React from 'react';
import { useContext } from 'react';
import { AppContext } from './AppContext';

const CheckBox = (props) => {
     const theme = useContext(AppContext)
    return (
        <>
            <input type='checkbox' onChange={props.cbChanged} />
            <label>{props.label}</label>
            <button style={{ background: theme.background, color: theme.foreground }}>
                I am styled by this button! </button>
        </>
    );
};

export default CheckBox
