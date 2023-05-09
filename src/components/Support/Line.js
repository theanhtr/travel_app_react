import React from 'react'

export default function Line(props) {
    const styleLine = {
        width: props.width,
        height: props.height,
        backgroundColor: props.color,
        margin: "0px auto"
    }

    return (
        <div style={styleLine}></div>
    )
}
