import React from 'react';
import { useDispatch } from 'react-redux';


const Buttons = () => {

    const dispatch = useDispatch()

    const handlePlus = () => {
        dispatch({ type: 'plus' })
    }

    const handleMinus = () => {
        dispatch({ type: 'minus' })
    }

    return (
        <>
            <button onClick={handlePlus}>+</button>
            <button onClick={handleMinus}>-</button>
        </>
    );
};

export default Buttons;