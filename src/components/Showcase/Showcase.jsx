import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import './showcase.css'
import SideBar from '../SideBar/SideBar'

import items from './items'

const Showcase = () => {
    let { artStyle } = useParams()

    if (typeof (artStyle) === 'undefined') {
        artStyle = 'photography'
    }

    const styles = ["photography", "painting", "anime", "animal", "landscape", "architecture"]

    const [visibility, setVisibility] = useState(8)

    useEffect(() => {
        const imageElements = document.querySelectorAll('.image__wrapper')
        const lastImageElement = imageElements[imageElements.length-1]

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry)=>{
                if(entry.isIntersecting && imageElements.length<items.length){
                    console.log('Loading...')
                    setVisibility((prev)=>prev+4)
                }
            })
        })

        observer.observe(lastImageElement)
    },[visibility])




    if (styles.includes(artStyle)) {
        artStyle = artStyle.charAt(0).toUpperCase() + artStyle.slice(1)

        return (
            <section className='relative'>
                <SideBar />
                <div className='bg-gradient-to-br from-slate-800 to-slate-900 absolute w-10/12 min-h-screen right-0 text-center pt-4'>
                    <h1 className='text-4xl mb-10'>{artStyle}</h1>
                    <div className="showcase__wrapper grid grid-cols-4 px-4 border-2 gap-4">
                        {items.slice(0, visibility).map((item) => {
                            return <div className='image__wrapper h-96 border-2' id={item.id} key={item.id}>{item.name}</div>
                        })}
                    </div>
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