import React from 'react'

export default function Markdown({ content }) {
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
}
