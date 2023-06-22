'use client';
import React from 'react'
import Markdown from './Markdown';
import Badge from '../badge/Badge';
import Avatar from '../avatar/Avatar';
import { timestampToHuman } from '@/app/libs/helper';
import Link from 'next/link';
export default function Question({ question }) {
  return (
    <div className='flex flex-col gap-3 p-5 bg-gray-100 hover:shadow border-[1.5px] border-gray-300/60 rounded-md'>
      <div className='flex gap-3'>
        <Avatar user={question.user}/>
        <div>
          <h2>{question.user.name}</h2>
          <small>{timestampToHuman(question.updatedAt)}</small>
        </div>
      </div>
      <div>
        <Link href={'/question/'+ question.id} className='text-4xl font-bold pb-8'>{question.title}</Link>
      </div>
      <div>
        <Markdown content={question.content} />
      </div>
      <div className='flex justify-between'>
        <Badge text={question.tags}/>
        <div>
          <Link href={'/question/'+question.id} className='text-sm'>Read more</Link>
        </div>
      </div>
    </div>
  )
}
