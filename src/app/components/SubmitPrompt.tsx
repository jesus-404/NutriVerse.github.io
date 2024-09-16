import { BiSolidSend, BiSolidMessageDetail  } from "react-icons/bi";

interface SubmitPromptProps {
    prompt: string;
    hasText: boolean;
    handlePromptInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    handlePromptSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function SubmitPrompt(props: SubmitPromptProps) {
    return(
        <div id="submit-prompt" className="max-w-lg shrink-0 animate-duration-[400ms]">
            <form className="flex relative border rounded-2xl border-white
             focus-within:outline outline-2 outline-offset-2 outline-[#292b2d]" onSubmit={props.handlePromptSubmit}>
                <div className="form-control w-full">
                    <textarea  
                        placeholder="What's your concern?"
                        className="input bg-transparent sm:w-[414.641px] w-[336.641px] h-32 min-h-[48px] pt-[0.60rem] z-10
                         focus:outline-none focus:border-transparent" 
                        required 
                        value={props.prompt}
                        onChange={props.handlePromptInputChange}
                    ></textarea>
                    {props.hasText || <BiSolidMessageDetail className="absolute ml-[11.5rem] mt-4 text-[#9ca3af] z-0"/>}
                </div>
                <div className="form-control absolute right-0 bottom-0">
                    <button className="btn btn-primary rounded-2xl bg-white border-white hover:bg-[#b2b2b2] hover:border-[#b2b2b2]  z-20">
                        <BiSolidSend className="size-4"/>
                    </button>
                </div>
            </form>
        </div>
    )
}