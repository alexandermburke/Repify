import React from 'react'

export default function Button(props) {
    const { text, func } = props
    return (
        <button onClick={func} className='px-8 mx-auto py-4 rounded-md bg-gradient-to-r from-teal-800 to-teal-950 greenShadow duration-200 w-48'>
            <p>{text}</p>
        </button>
    )
}
