import Typewriter from 'typewriter-effect';

//Doc: https://github.com/tameemsafi/typewriterjs
const HomeTypewriter = () => {
    return (
        <>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .pauseFor(500)
                        .changeDelay(50)
                        .typeString("<span>Welcome To</span></br><span>The New World AI Studio</span>")
                        .start();
                }}
                options={{
                    autoStart: true,
                    loop: false,
                    skipAddStyles: false,
                    cursor: "|"
                }}
            />
        </>
    )
}

export default HomeTypewriter