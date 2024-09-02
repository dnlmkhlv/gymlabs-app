import React, { useState, useEffect } from 'react';

function Hero(){
    const [text, setText] = useState('Workout');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const words = ['Workout', 'Nutrition'];

    useEffect(() => {
        let timer;
        const handleTyping = () => {
        const i = loopNum % words.length;
        const fullText = words[i];

        setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

        setTypingSpeed(isDeleting ? 80 : 200);

        if (!isDeleting && text === fullText) {
            setTimeout(() => setIsDeleting(true), 500);
        } else if (isDeleting && text === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
        }
        };

        timer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <section id="home" className="flex flex-col items-center justify-center h-screen text-center mt-[-80px] px-8">
            <h1 className="text-4xl font-bold sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                Personalized{' '}
                <span className="inline-block min-w-[120px] sm:min-w-[160px] md:min-w-[200px] lg:min-w-[240px] xl:min-w-[280px]">
                    <span className="text-primary">{text}</span>
                </span>
                {' '}Plans
            </h1>
            <p className="mt-6 text-base sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Get fit with tailored workout & nutrition plans designed just for you.</p>
            <button className="mt-6 btn btn-gradient">Get Started</button>
        </section>
    );
};

export default Hero;