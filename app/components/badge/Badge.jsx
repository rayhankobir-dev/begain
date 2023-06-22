import React from 'react'

export default function Badge({ color, text }) {

    return (
        <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
            {text}
        </span>
    )
}
