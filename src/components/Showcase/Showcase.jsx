import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

import SideBar from '../SideBar/SideBar'

import photography_data from '../../data/photography'
import painting_data from '../../data/painting'
import anime_data from '../../data/anime'
import animal_data from '../../data/animal'
import landscape_data from '../../data/landscape'
import architecture_data from '../../data/architecture'

import { AiFillFormatPainter, AiFillCloseCircle, AiFillMail } from 'react-icons/ai'
import { BsFillHouseDoorFill } from 'react-icons/bs'
import { FaDog, FaTree } from 'react-icons/fa'
import { GiNinjaHead, GiHamburgerMenu } from 'react-icons/gi'
import { ImNewspaper } from 'react-icons/im'
import { MdPhotoCamera, MdOutlineAttachMoney } from 'react-icons/md'

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

    const [menuVisibility, setMenuVisibility] = useState('hidden')

    if (styles.includes(artStyle)) {

        let artStyleChinese = ''
        if (artStyle === 'photography') {
            artStyleChinese = '📷 攝影'
        } else if (artStyle === 'painting') {
            artStyleChinese = '🎨 插畫'
        } else if (artStyle === 'anime') {
            artStyleChinese = '👺 遊戲/動漫'
        } else if (artStyle === 'animal') {
            artStyleChinese = '🐶 動物'
        } else if (artStyle === 'landscape') {
            artStyleChinese = '🌊 大自然'
        } else if (artStyle === 'architecture') {
            artStyleChinese = '⛩ 建築'
        }

        artStyle = artStyle.charAt(0).toUpperCase() + artStyle.slice(1)
        return (
            <section className='relative'>
                <SideBar />

                <div className={`${menuVisibility} fixed bg-slate-900/[.8] w-full h-full z-50 flex justify-center`}>
                    <i className='absolute right-4 top-4 scale-150 cursor-pointer' onClick={() => {
                        setMenuVisibility('hidden')
                    }
                    }>{<AiFillCloseCircle />}</i>

                    <div className='flex flex-col justify-center gap-6'>
                        <a className='flex items-center gap-2 text-2xl' href="/photography">
                            <MdPhotoCamera />
                            攝影
                        </a>
                        <a className='flex items-center gap-2 text-2xl' href="/painting" >
                            <AiFillFormatPainter />
                            插畫
                        </a>
                        <a className='flex items-center gap-2 text-2xl' href="/anime" >
                            <GiNinjaHead />
                            遊戲/動漫
                        </a>
                        <a className='flex items-center gap-2 text-2xl' href="animal" >
                            <FaDog />
                            動物
                        </a>
                        <a className='flex items-center gap-2 text-2xl' href="/landscape" >
                            <FaTree />
                            大自然
                        </a>

                        <a className='flex items-center gap-2 text-2xl' href="/architecture" >
                            <BsFillHouseDoorFill />
                            建築
                        </a>

                        <hr className='' />

                        <a className='flex items-center gap-2 text-2xl' href="mailto:kevin23122@gmail.com" >
                            <AiFillMail />
                            電子郵件
                        </a>

                        <a className='flex items-center gap-2 text-2xl' href="https://shopee.tw/" target='_blank' rel="noreferrer">
                            <ImNewspaper />
                            訂閱電子報
                        </a>

                        <a className='flex items-center gap-2 text-2xl' href="https://shopee.tw/" target='_blank' rel="noreferrer">
                            <MdOutlineAttachMoney />
                            蝦皮賣場
                        </a>
                    </div>
                </div>

                <div className='bg-gradient-to-br from-slate-800 to-slate-900 w-10/12 desktop:w-full absolute desktop:relative min-h-screen right-0 text-center pt-4'>

                    <i className='invisible absolute right-4 top-4 scale-150 cursor-pointer desktop:visible' onClick={() => { setMenuVisibility('') }}>{<GiHamburgerMenu />}</i>

                    <h1 className='text-4xl small-mobile:text-2xl mb-10'>{artStyleChinese}</h1>

                    <div className='flex gap-4 px-4 py-4'>

                        <div className='showcase__wrapper flex flex-col gap-4 w-3/12'>
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

                        <div className='showcase__wrapper flex flex-col gap-4 w-3/12'>
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

                        <div className='showcase__wrapper flex flex-col gap-4 w-3/12'>
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

                        <div className='showcase__wrapper flex flex-col gap-4 w-3/12'>
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