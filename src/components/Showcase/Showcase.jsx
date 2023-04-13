import React from 'react'
import './showcase.css'
import SideBar from '../SideBar/SideBar'

const Showcase = () => {
    return (
        <section className='relative'>
            <SideBar />
            <div className='bg-gradient-to-br from-slate-800 to-slate-900 absolute w-10/12 min-h-screen right-0 text-center pt-4'>
                <h1 className='text-4xl'>Photography</h1>
            </div>
        </section>
    )
}

export default Showcase