'use client';
import Link from 'next/link';
import { Dialog } from '@headlessui/react';
import React, { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Avatar from '../avatar/Avatar';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Questions', href: '/question', current: false },
    { name: 'Community', href: '/community', current: false },
    { name: 'Help', href: '/help', current: false },
    { name: 'About', href: '/about', current: false },
]
  
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}




export default function Navbar() {
    const { data: session } = useSession();
    const router = useRouter();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    
    const handleAskClick = () => {
        if(session !== null) {
            router.push('/question/ask');
        }else {
            toast.error('Please login your account!');
            router.push('/login');
        }
    }

    return (
        <Disclosure as="nav" className="bg-gray-50 shadow-md">
        {({ open }) => (
            <>
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            {open ? (
                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                            )}
                            </Disclosure.Button>
                        </div>
                        <div className="h-full flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                            <img
                                className=" h-8 w-auto lg:block"
                                src="/logo/logo.svg"
                                alt="Begain"
                            />
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-5">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ?  'flex items-center text-gray-900 px-1 border-b-2 border-blue-700' : 'h-16 flex items-center text-gray-500 hover:text-gray-700 border-b-2 border-white hover:border-gray-500',
                                                'py-2 text-sm font-regular'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button
                                type='button'
                                onClick={handleAskClick}
                                className='py-2.5 px-3 text-sm bg-blue-500 text-white rounded-md mr-5'
                            >
                                Ask Question
                            </button>
                            
                            {session !== null ? (
                                <>
                                    <button
                                        type="button"
                                        className="rounded-full p-1 text-gray-600 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    >
                                        <span className="sr-only">View notifications</span>
                                        <BellIcon className="h-8 w-8" aria-hidden="true" />
                                    </button>
                                    <Menu as="div" className="relative ml-3">
                                        <div>
                                            <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600">
                                                <span className="sr-only">Open user menu</span>
                                                <Avatar user={session?.user ?? null}/>
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                <Link
                                                    href="/profile"
                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    Your Profile
                                                </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        href="/profile/setting"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Settings
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        href="#"
                                                        onClick={() => {
                                                            signOut();
                                                        }}
                                                        className={classNames(active ? 'bg-gray-100' : '', 'w-full text-start text-rose-500 block px-4 py-2 text-sm hover:bg-rose-50')}
                                                    >
                                                        Sign out
                                                    </button>
                                                )}
                                            </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </>
                            ) : (
                                <>
                                    <Link href={'/login'} className='py-2 px-4 bg-blue-100 hover:bg-blue-200 duration-300 border border-blue-500 rounded-md'>
                                        Login
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                <Disclosure.Panel className="sm:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'block rounded-md px-3 py-2 text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                        >
                        {item.name}
                        </Disclosure.Button>
                    ))}
                    </div>
                </Disclosure.Panel>
            </>
        )}
        </Disclosure>
    )
}
