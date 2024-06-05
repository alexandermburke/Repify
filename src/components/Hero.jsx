import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>

                <p>READY TO GET</p>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Incredibly <span className='text-green-400'>Massive</span></h1>
            </div>
            <p className='text-sm md:text-base font-light'>I hereby acknowledge that I may become <span className='text-green-400 font-medium'>astonishingly massive</span> and accept all risks of becoming the local <span className='text-green-400 font-medium'>muscle behemoth</span>, with a potential to outgrow standard doorways.</p>
            <Button func={() => {
                window.location.href = '#generate'
            }} text={"Start"}></Button>
        </div>
    )
}
