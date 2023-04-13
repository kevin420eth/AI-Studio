import React from 'react'
import { useParams } from 'react-router'
import './showcase.css'
import SideBar from '../SideBar/SideBar'

const Showcase = () => {
    let { artStyle } = useParams()

    if (typeof (artStyle) === 'undefined') {
        artStyle = 'photography'
    }
    
    const styles = ["photography", "painting", "anime", "animal", "landscape", "architecture"]

    if (styles.includes(artStyle)) {
        artStyle = artStyle.charAt(0).toUpperCase() + artStyle.slice(1)

        return (
            <section className='relative'>
                <SideBar />
                <div className='bg-gradient-to-br from-slate-800 to-slate-900 absolute w-10/12 min-h-screen right-0 text-center pt-4'>
                    <h1 className='text-4xl'>{artStyle}</h1>
                </div>
            </section>
        )
    } else {
        return (
            <div className='text-black'>
                <h1 className='mb-8'>Page not found</h1>
                <a className='text-blue-600 underline' href="/photography">Go Back 🏠</a>
            </div>
        )
    }


}

export default Showcase