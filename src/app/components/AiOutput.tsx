export default function AiOutput() {
    return(
        <div className="flex flex-col w-full border-white shadow-custom-lg">
            <div className="border-x border-t-4 rounded-t-lg w-full h-14 p-5 flex gap-4">
                <div className="border size-4 rounded-full bg-white"></div>
                <div className="border size-4 rounded-full bg-white"></div>
                <div className="border size-4 rounded-full bg-white"></div>
            </div>
            <div id="ai-textarea" className="border border-b-4 rounded-b-lg w-full h-80 max-sm:h-96
            font-[family-name:var(--font-geist-mono)] p-[0.60rem] whitespace-normal">
                <span id="animate-typing" className="break-words max-w-full"></span>
                <span className="animate-blinking">|</span>
            </div>
        </div>
    );
}

/* Colored Mockup
    <div className="border size-4 rounded-full bg-[#880808] border-[#880808]"></div>
    <div className="border size-4 rounded-full bg-[#FFC000] border-[#FFC000]"></div>
    <div className="border size-4 rounded-full bg-[#228B22] border-[#228B22]"></div>
*/