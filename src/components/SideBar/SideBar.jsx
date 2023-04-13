import React, { useState } from 'react'
import './sidebar.css'
import { AiFillFormatPainter, AiFillMail } from 'react-icons/ai'
import { BsFillHouseDoorFill } from 'react-icons/bs'
import { FaDog, FaTree } from 'react-icons/fa'
import { GiFox } from 'react-icons/gi'
import { ImNewspaper } from 'react-icons/im'
import { MdPhotoCamera, MdOutlineAttachMoney } from 'react-icons/md'


const SideBar = () => {
    const [textbar, setTextBar] = useState('Contact Us')

    return (
        <nav className='bg-slate-900 w-2/12 h-screen pl-3 pr-3 pt-8 flex flex-col gap-4 text-xl relative'>
            <h1 className='mb-10 pb-4 border-b-2 select-none'>The New World</h1>
            <div className='menu flex flex-col gap-4'>
                <a className='hover:bg-slate-600 focus:bg-slate-600 w-11/12 rounded-lg px-2 py-2 flex items-center gap-2' href="#1">
                    <MdPhotoCamera />
                    Photography
                </a>
                <a className='hover:bg-slate-600 focus:bg-slate-600 w-11/12 rounded-lg px-2 py-2 flex items-center gap-2' href="#1" >
                    <AiFillFormatPainter />
                    Painting
                </a>
                <a className='hover:bg-slate-600 focus:bg-slate-600 w-11/12 rounded-lg px-2 py-2 flex items-center gap-2' href="#1" >
                    <GiFox />
                    Anime
                </a>
                <a className='hover:bg-slate-600 focus:bg-slate-600 w-11/12 rounded-lg px-2 py-2 flex items-center gap-2' href="#1" >
                    <FaDog />
                    Animal
                </a>
                <a className='hover:bg-slate-600 focus:bg-slate-600 w-11/12 rounded-lg px-2 py-2 flex items-center gap-2' href="#1" >
                    <FaTree />
                    LandScape
                </a>

                <a className='hover:bg-slate-600 focus:bg-slate-600 w-11/12 rounded-lg px-2 py-2 flex items-center gap-2' href="#1" >
                    <BsFillHouseDoorFill />
                    Architecture
                </a>
            </div>


            <div className='social__section absolute bottom-4 translate-x-2/4 right-2/4 text-center'>
                <h1 className='mb-4'>{textbar}</h1>
                <div className='flex justify-center items-center gap-6'>
                    <a href="mailto:kevin23122@gmail.com" className='email__link hover:bg-slate-600 border-2 px-2 py-2 rounded-2xl text-4xl' onMouseEnter={() => { setTextBar('Email Us')}} onMouseLeave={()=>{setTextBar('Contact Us')}}>
                        <AiFillMail />
                    </a>
                    <a href="https://shopee.tw/" className='newsletter__link hover:bg-slate-600 border-2 px-2 py-2 rounded-2xl text-4xl' onMouseEnter={() => { setTextBar('Subscribe Newsletter')}} onMouseLeave={()=>{setTextBar('Contact Us')}}>
                        <ImNewspaper />
                    </a>
                    <a href="https://shopee.tw/" target='_blank' rel="noreferrer" className='shopee__link hover:bg-slate-600 border-2 px-2 py-2 rounded-2xl text-4xl' onMouseEnter={() => { setTextBar('Go Shopee')}} onMouseLeave={()=>{setTextBar('Contact Us')}}>
                        <MdOutlineAttachMoney />
                    </a>
                </div>
            </div>

        </nav>
    )
}

export default SideBar