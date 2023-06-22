'use client'
import { useEffect } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from "next/navigation"
import Navbar from '@/app/components/navbar/Navbar'


const dashboard = () => {
  const { data: session } = useSession()
  const router = useRouter();
  useEffect(() => {
    if(!session) {
      router.push('/');
    }
  })
  return (
    <>
      <Navbar/>
      <h1>Dashboard</h1>
      <p>Hi {session?.user?.email}</p>
      <button onClick={() => signOut()}>Sign Out</button>
    </>
  )
}

export default dashboard