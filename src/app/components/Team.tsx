import { useState } from "react";
import Image from "next/image"
import teamData from "./teamData";
import { IoLogoGithub, IoLogoLinkedin, IoMdMail  } from "react-icons/io";

export default function Team() {
    const size_sm = 160;
    const size_lg = 420;

    const ProfileList = ()=>{
        const [hoveredMember, setHoveredMember] = useState<number | null>(null);;

        const handleMouseEnter = (index: number) => {
            setHoveredMember(index);
            document.getElementById
        };
      
        const handleMouseLeave = () => {
            setHoveredMember(null);
        };

        return(
            <>
            {teamData.map((member, index) => (
                <div key={index} className="relative w-40">
                <div
                    className="w-40 rounded-full"
                    onMouseEnter={() => handleMouseEnter(index)}
                >
                    <figure>
                        <Image
                            src={member.src}
                            alt={member.alt}
                            width={size_sm}
                            height={size_sm}
                            loading="lazy"
                            className="rounded-full"
                        />
                    </figure>
                </div>
                {hoveredMember == index &&
                    <div 
                        id={index.toString()}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 card
                         card-compact bg-[#050505] w-96 max-lg:w-80 shadow-custom-lg z-40 animate-fade animate-duration-200"
                        onMouseLeave={handleMouseLeave}
                    >
                        <figure>
                            <Image
                                src={member.src}
                                alt={member.alt}
                                width={size_lg}
                                height={size_lg}
                                loading="lazy"
                            />
                        </figure>
                        <div className="card-body">
                        <h2 className="card-title">
                            {member.name}
                        </h2>
                        <p>
                            {member.role}
                        </p>
                        <div className="card-actions justify-end">
                            <a href={member.gitHub} className="size-12 z-20 cursor-pointer">
                                <IoLogoGithub className="size-10" />
                            </a>
                            <a href={member.linkedIn} className="size-12 z-20 cursor-pointer">
                                <IoLogoLinkedin className="size-10" />
                            </a>
                            <a href={`mailto:${member.email}`} className="size-12 z-20 cursor-pointer">
                                <IoMdMail className="size-10" />
                            </a>
                        </div>
                        </div>
                    </div>
                }
                </div>
            ))}
            </>
        )
    };

    return(
        <div id="team" className="max-w-screen-lg bg-[#080808] w-11/12 p-8 rounded-2xl my-24">
            <div>
                <h2 className="text-5xl max-sm:text-4xl font-extrabold w-full text-center my-14">
                    Meet the Team
                </h2>
                <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1
                 items-center sm:gap-y-24 gap-y-12 justify-items-center ">
                    <ProfileList />
                </div>
            </div>
        </div>
    )
}