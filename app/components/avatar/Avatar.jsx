import React from 'react'


export default function Avatar({ user }) {
    if(user != null) {
        return (
            <>
                {user.image !== null ? (
                    <img src={user.image} alt={user.name} className="w-10 h-10 rounded-full" />
                ) : (
                    user.name && (
                        <div className='w-10 h-10 flex justify-center items-center rounded-full bg-blue-500 text-white text-md'>{user.name[0]}</div>
                    )
                )}
            </>
        )
    }
}
