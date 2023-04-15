import React, { useState } from 'react'
import { AiFillFormatPainter, AiFillMail } from 'react-icons/ai'
import { BsFillHouseDoorFill } from 'react-icons/bs'
import { FaDog, FaTree } from 'react-icons/fa'
import { GiNinjaHead } from 'react-icons/gi'
import { ImNewspaper } from 'react-icons/im'
import { MdPhotoCamera, MdOutlineAttachMoney } from 'react-icons/md'
import logo from '../../assets/materials/logo.png'

const SideBar = () => {
    const [textbar, setTextBar] = useState('聯絡我們')

    return (
        <nav className='bg-slate-900 w-2/12 h-screen pl-3 pr-3 pt-8 flex flex-col gap-4 text-xl fixed desktop:hidden'>
            <div>
                <div className='mb-10 pb-4 border-b-2 select-none leading-8 flex justify-start items-center gap-4'>新世界 <br />A.I. 工作室<img className='w-14' src={logo} alt="logo_img" /></div>
            </div>

            <div className='menu flex flex-col gap-4'>
                <a className='hover:bg-slate-600 w-11/12 rounded-lg px-2 py-2 flex items-center gap-2' href="/photography">
                    <MdPhotoCamera />
                    攝影
                </a>
                <a className='hover:bg-slate-600 w-11/12 rounded-lg px-2 py-2 flex items-center gap-2' href="/painting" >
                    <AiFillFormatPainter />
                    插畫
                </a>
                <a className='hover:bg-slate-600 w-11/12 rounded-lg px-2 py-2 flex items-center gap-2' href="/anime" >
                    <GiNinjaHead />
                    遊戲/動漫
                </a>
                <a className='hover:bg-slate-600 w-11/12 rounded-lg px-2 py-2 flex items-center gap-2' href="animal" >
                    <FaDog />
                    動物
                </a>
                <a className='hover:bg-slate-600 w-11/12 rounded-lg px-2 py-2 flex items-center gap-2' href="/landscape" >
                    <FaTree />
                    大自然
                </a>

                <a className='hover:bg-slate-600 w-11/12 rounded-lg px-2 py-2 flex items-center gap-2' href="/architecture" >
                    <BsFillHouseDoorFill />
                    建築
                </a>
            </div>

            <div className='absolute bottom-4 translate-x-2/4 right-2/4 w-full text-center'>
                <h1 className='mb-4'>{textbar}</h1>
                <div className='flex justify-center items-center gap-4'>
                    <a href="mailto:kevin23122@gmail.com" className='email__link hover:bg-slate-600 border-2 px-2 py-2 rounded-2xl text-3xl' onMouseEnter={() => { setTextBar('電子郵件') }} onMouseLeave={() => { setTextBar('聯絡我們') }}>
                        <AiFillMail />
                    </a>
                    <a href="https://shopee.tw/" className='newsletter__link hover:bg-slate-600 border-2 px-2 py-2 rounded-2xl text-3xl' onMouseEnter={() => { setTextBar('訂閱電子報') }} onMouseLeave={() => { setTextBar('聯絡我們') }}>
                        <ImNewspaper />
                    </a>
                    <a href="https://shopee.tw/" target='_blank' rel="noreferrer" className='shopee__link hover:bg-slate-600 border-2 px-2 py-2 rounded-2xl text-3xl' onMouseEnter={() => { setTextBar('蝦皮賣場') }} onMouseLeave={() => { setTextBar('聯絡我們') }}>
                        <MdOutlineAttachMoney />
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default SideBar