'use client';
import React, { useState, useRef, useEffect } from 'react';
import JoditEditor from 'jodit-react';
import { LoaderIcon, toast } from 'react-hot-toast';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const postQuestion = async (question) => {
    await toast.promise(axios.post('/api/question', question), {
        loading: 'Posting...',
        icon: LoaderIcon,
        success: 'Successfully posted!',
        error: 'Something went wrong!'
    });
}

const AskQuestion = () => {
    const { data: session } = useSession()
    const router = useRouter();
	const editor = useRef(null);
    const [fieldData, setfieldData] = useState([]);
	const [content, setContent] = useState('');

    const handleChange = (event) => {
        const name = event.target.name;
        setfieldData({
            ...fieldData,
            [name]: event.target.value,
        });
    };

    const formValidation = (title, content, tag) => {
        if(title == '' || content == '<p><br></p>' || content == '' || tag == '') {
            return false;
        }else {
            return true;
        }
    }

    const handlePostButton = async () => {
        const question = {
            userId: session.user.uid,
            title: fieldData.title,
            content: content,
            tags: fieldData.tag,
        }

        if(formValidation(question.title, question.content, question.tag)) {
            await postQuestion(JSON.stringify(question));
        }else {
            toast.error('Please fillup all information!');
        }
    }

	return (
		<div className='flex flex-col gap-5 bg-slate-100 rounded-lg overflow-hidden'>
            <div className='flex justify-between items-center pl-10 bg-blue-400'>
                <h1 className='text-3xl font-bold text-white'>Ask Public Question</h1>
                <img src="/vector/community.png" alt="community vector" width={200}/>
            </div>
            <div className='flex flex-col gap-5 p-5 pt-0'>
                <div className='w-full flex flex-col bg-gray-200/60 hover:bg-gray-200 border-[1.5px] hover:border-gray-300 duration-200 p-5 rounded-lg'>
                    <div className='pb-3'>
                        <h3 className='text-lg font-medium'>Title</h3>
                        <p className='text-sm'>Be specific and imagine you’re asking a question to another person.</p>
                    </div>
                    <input 
                        className='py-2.5 bg-transparent border-[1.5px] border-gray-400/80 rounded-md outline-none' 
                        type="text" 
                        name='title' 
                        placeholder='e.g'
                        onChange={handleChange}
                    />
                </div>
                <div className='bg-gray-200/60 hover:bg-gray-200 border-[1.5px] hover:border-gray-300 duration-200 p-5 rounded-lg'>
                    <h3 className='pb-4 text-xl font-medium'>What are the details of your problem?</h3>
                    <JoditEditor
                        ref={editor}
                        value={content}
                        tabIndex={1}
                        onBlur={newContent => setContent(newContent)}
                    />
                </div>
                <div className='flex flex-col bg-gray-200/60 hover:bg-gray-200 border-[1.5px] hover:border-gray-300 duration-200 p-5 rounded-lg'>
                    <div className='flex flex-col gap-1 pb-3'>
                        <h3 className='text-lg font-medium'>Tags</h3>
                        <p className='text-sm'>Add up to 3 tags to describe what your question is about. Start typing to see suggestions.</p>
                    </div>
                    <input 
                        className='py-2.5 bg-transparent border-[1.5px] border-gray-400/80 rounded-md outline-none' 
                        type="text" 
                        name='tag'
                        placeholder='tags: Java Script'
                        onChange={handleChange}
                    />
                </div>
                <button onClick={handlePostButton} className='max-w-[200px] py-3 bg-blue-500  text-white font-medium rounded-md'>Post</button>
            </div>
        </div>
	);
};

export default AskQuestion;