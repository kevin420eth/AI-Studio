import React from 'react'
import HomeTypewriter from './HomeTypeWritter'

const Home = () => {
    return (
        <section className='bg-[url("../src/assets/background.jpg")] bg-cover bg-no-repeat min-h-screen pt-20 flex flex-col justify-center items-center'>
            <div className="text-2xl text-center h-20">
                <HomeTypewriter />
            </div>
            <a href='#' className='mt-10 text-2xl rounded-xl px-6 py-1.5 bg-cyan-600 hover:bg-cyan-700'>Enter</a>
        </section>
    )
}

export default Home