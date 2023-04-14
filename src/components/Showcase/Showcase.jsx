import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import SideBar from '../SideBar/SideBar'

import photography_data from '../../data/photography'
import painting_data from '../../data/painting'
import anime_data from '../../data/anime'
import animal_data from '../../data/animal'
import landscape_data from '../../data/landscape'
import architecture_data from '../../data/architecture'

const Showcase = () => {
    let { artStyle } = useParams()

    if (typeof (artStyle) === 'undefined') {
        artStyle = 'photography'
    }

    let data = ''
    if (artStyle === 'photography') {
        data = photography_data
    } else if (artStyle === 'painting') {
        data = painting_data
    } else if (artStyle === 'anime') {
        data = anime_data
    } else if (artStyle === 'animal') {
        data = animal_data
    } else if (artStyle === 'landscape') {
        data = landscape_data
    } else if (artStyle === 'architecture') {
        data = architecture_data
    }

    const styles = ["photography", "painting", "anime", "animal", "landscape", "architecture"]

    const [visibility, setVisibility] = useState(8)

    useEffect(() => {
        const imageElements = document.querySelectorAll('.image__wrapper')
        const lastImageElement = imageElements[imageElements.length - 1]

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && imageElements.length < data.length) {
                    console.log('Loading...')
                    setVisibility((prev) => prev + 4)
                }
            })
        })

        observer.observe(lastImageElement)
    })

    if (styles.includes(artStyle)) {
        artStyle = artStyle.charAt(0).toUpperCase() + artStyle.slice(1)

        return (
            <section className='relative'>
                <SideBar />
                <div className='bg-gradient-to-br from-slate-800 to-slate-900 absolute w-10/12 min-h-screen right-0 text-center pt-4'>
                    <h1 className='text-4xl mb-10'>{artStyle}</h1>

                    <div className='flex gap-4 px-4'>

                        <div className='showcase__wrapper flex flex-col gap-4'>
                            {data.slice(0, visibility).map((item) => {
                                if (item.id % 4 === 1) {
                                    return (
                                        <div className='image__wrapper rounded-md overflow-hidden' key={item.id}>{item.name}
                                            <img src={item.image} alt={`image__${artStyle}`} />
                                        </div>
                                    )
                                } else {
                                    return ''
                                }
                            })}
                        </div>

                        <div className='showcase__wrapper flex flex-col gap-4'>
                            {data.slice(0, visibility).map((item) => {
                                if (item.id % 4 === 2) {
                                    return (
                                        <div className='image__wrapper rounded-md overflow-hidden' key={item.id}>{item.name}
                                            <img src={item.image} alt={`image__${artStyle}`} />
                                        </div>
                                    )
                                } else {
                                    return ''
                                }
                            })}
                        </div>

                        <div className='showcase__wrapper flex flex-col gap-4'>
                            {data.slice(0, visibility).map((item) => {
                                if (item.id % 4 === 3) {
                                    return (
                                        <div className='image__wrapper rounded-md overflow-hidden' key={item.id}>{item.name}
                                            <img src={item.image} alt={`image__${artStyle}`} />
                                        </div>
                                    )
                                } else {
                                    return ''
                                }
                            })}
                        </div>

                        <div className='showcase__wrapper flex flex-col gap-4'>
                            {data.slice(0, visibility).map((item) => {
                                if (item.id % 4 === 0) {
                                    return (
                                        <div className='image__wrapper rounded-md overflow-hidden' key={item.id}>{item.name}
                                            <img src={item.image} alt={`image__${artStyle}`} />
                                        </div>
                                    )
                                } else {
                                    return ""
                                }
                            })}
                        </div>
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