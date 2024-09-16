// Packages:
import React from 'react'

// Components:
import CustomHead from '@/components/primary/CustomHead'

// Functions:
const Home = () => {
  return (
    <>
      <CustomHead />
      <main className='flex justify-center items-center w-[100vw] h-[100vh] bg-zinc-950 text-zinc-100 text-lg font-medium'>
        <span>
          A layer above the internet. <a target='_blank' href='https://bit.ly/3Xzb1vc' className='text-zinc-400 cursor-pointer hover:underline hover:text-zinc-300 transition-all'>Join us.</a>
        </span>
      </main>
    </>
  )
}

// Exports:
export default Home
