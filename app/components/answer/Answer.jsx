import React from 'react'
import Markdown from '../question/Markdown'
import Avatar from '../avatar/Avatar'

export default function Answer({ answer }) {
  return (
    <div>
        <Markdown content={answer.content} />
        <div>
            <Avatar user={answer.user} />
        </div>
    </div>
  )
}
