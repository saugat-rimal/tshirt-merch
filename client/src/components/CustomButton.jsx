import React from 'react'
import state from '../store'
import { useSnapshot } from 'valtio'
import { getContrastingColor } from '../config/helpers'

const CustomButton = ({ type, title, customStyles, handleClick }) => {
    const snap = useSnapshot(state);

    const generateStyle = (type) => {
        if (type === 'filled') {
            return {
                backgroundColor: snap.color,
                color: getContrastingColor(snap.color)
            }
        } else if (type === 'outlined') {
            return {
                color: snap.color,
                border: `1px solid ${snap.color}`
            }
        }
    }


    return (
        <button
            style={generateStyle(type)}
            onClick={handleClick}
            className={`px-2 py-1 flex-1 rounded-md ${customStyles}`}>
            {title}
        </button>
    )
}

export default CustomButton