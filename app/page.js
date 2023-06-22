import { getServerSession } from 'next-auth'
import User from './components/User'
import { authOptions } from './api/auth/[...nextauth]/route'


export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <section className='py-8'>
      <div className='text-3xl font-bold'>Welcome to BeGain</div>
      <img src='/vector/community.png' width={'70%'}/>
    </section>
  )
}