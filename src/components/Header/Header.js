import React from 'react'

const Header = () => {
    return (
        <header className='fixed w-full bg-slate-900 text-slate-200 flex justify-start items-center px-20 py-2 gap-60'>
            <h1 className="text-3xl select-none">Kevmars</h1>
            <nav className='flex justify-between items-center gap-12 ml-40'>
                <a href="#top" className="navbar__link">Home</a>
                <a href="#category" className="navbar__link">Category</a>
                <a href="#contact" className="navbar__link">Showcase</a>
                <a href="#contact" className="navbar__link">Contact</a>
            </nav>
        </header>
    )
}

export default Header