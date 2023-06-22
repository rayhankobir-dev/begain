import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-10 shadow border border-gray-300 bg-slate-100">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-5">
            <div className="sm:flex sm:items-center sm:justify-between">
                <Link href={'/'} className="flex items-center mb-4 sm:mb-0">
                    <img src="/logo/logo.svg" className="h-8 mr-3" alt="Begain" />
                </Link>
                <ul className="flex gap-3 items-center mb-6 text-sm text-gray-500 sm:mb-0">
                    <li><Link href={'/about'}>About</Link></li>
                    <li><Link href="/help">Help</Link></li>
                    <li><Link href="/question">Questions</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
            <hr className="my-6 border-gray-300 sm:mx-auto" />
            <span className="block text-sm text-gray-500 sm:text-center">
                © {new Date().getFullYear()} <Link href="/" className="hover:underline">BeGain</Link>. All Rights Reserved.
            </span>
        </div>
    </footer>
  )
}
