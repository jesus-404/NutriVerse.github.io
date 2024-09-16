"use client";

import { useState, useEffect  } from 'react';
import RetrieveLink from './RetriveLink';
import SubmitPrompt from './SubmitPrompt';
import AiOutput from './AiOutput';

export default function Hero() {
    let txt = "Welcome!";
    const speed = 50;
    let i = 0;
    const [link, setLink] = useState('');
    const [prompt, setPrompt] = useState('');
    const [hasSubmit, setHasSubmit] = useState(false);

    const handleLinkInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLink(e.target.value);
    };

    const handlePromptInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPrompt(e.target.value);
    };

    const handleLinkSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        document.getElementById("retrive-link")?.classList.add("animate-fade-up");
        typeWriter();
        setTimeout(()=>{
            setHasSubmit(true);
        }, 500);
    };

    useEffect(() => {
        if (hasSubmit) {
            document.getElementById("submit-prompt")?.classList.add("animate-fade-up");
            document.getElementById("hero-wrapper")?.classList.add("animate-stretch");
        }
    }, [hasSubmit]);

    const handlePromptSubmit = (e:  React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setPrompt('');
        const animateTyping = document.getElementById("animate-typing");
        if (animateTyping?.innerHTML === "Welcome!") {
            txt = "Error! Unknown exception thrown.";
        }
        animateTyping!.innerHTML = "";
        i = 0;
        typeWriter();
    };

    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("animate-typing")!.innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    return(
        <div className="hero min-h-screen max-w-screen-lg">
            <div className="hero-content flex-col lg:flex-row gap-12 lg:w-full max-lg:mt-32">
                <div id="hero-wrapper">
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black sm:font-extrabold text-breathing">
                        NUTRIVERSE
                    </h1>
                    <p className="font-light pb-6 font-[family-name:var(--font-geist-mono)]">
                        Know what you want.
                    </p>
                    {hasSubmit ? 
                    <SubmitPrompt 
                        prompt={prompt}
                        hasText={prompt.length > 0}
                        handlePromptInputChange={handlePromptInputChange}
                        handlePromptSubmit={handlePromptSubmit}
                    /> : 
                    <RetrieveLink 
                        link={link} 
                        hasText={link.length > 0} 
                        handleLinkInputChange={handleLinkInputChange}
                        handleLinkSubmit={handleLinkSubmit}
                    /> }
                </div>
                <AiOutput />
            </div>
        </div>
    );
}