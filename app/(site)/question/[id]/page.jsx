'use client';
import Markdown from '@/app/components/question/Markdown'
import React, { useState, useRef, useEffect } from 'react';
import JoditEditor from 'jodit-react';
import { LoaderIcon, toast } from 'react-hot-toast';
import { useSession } from 'next-auth/react';
import axios from 'axios';


export default function SingleQuestion({params}) {
    const [question, setQuestion] = useState({})
	const [content, setContent] = useState('');
    const editor = useRef(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res =  await fetch('/api/question/'+params.id, {cache: 'no-cache'});
            } catch (error) {
                console.error('Error fetching question:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div>
            <h1>{'Titile'}</h1>
            <Markdown content={'hhhh'}/>

            
            <JoditEditor
                ref={editor}
                value={content}
                tabIndex={1}
                onBlur={newContent => setContent(newContent)}
            />
        </div>
    )
}
