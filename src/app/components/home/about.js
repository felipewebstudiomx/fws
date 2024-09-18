import Image from "next/image"

export default function AboutSection(){
    return(
        <div className="w-full min-h-screen p-8 flex items-center justify-center sm:p-10 sm:py-0 md:p-14">
            <div className="about-content w-full max-w-6xl flex flex-col items-center gap-10 md:flex-row md:gap-28">
                <div className="flex-1 description flex flex-col gap-5 text-lg md:text-xl md:gap-10">
                    <div className="greetings flex gap-2 items-center">
                        <span>Hello there!</span>
                        <span>
                            <Image
                                src="/hi-emoji.png"
                                width={32}
                                height={32}
                                alt="portrait."
                            />
                        </span>
                    </div>
                    <div className="description flex flex-col gap-5 md:gap-10">
                        <div className="part-1">
                            I’m Felipe and I’m a UX Designer and Web Developer.
                        </div>
                        <div className="part-2">
                            I’m dedicated to crafting immersive digital experiences that captivate and engage users. With a keen eye for design aesthetics and a knack for coding, I merge creativity with functionality to deliver impactful solutions.
                        </div>
                    </div>
                </div>
                <div className="md:hidden">
                    <Image
                        src="/portrait.png"
                        width={355}
                        height={500}
                        alt="portrait."
                    />
                </div>
                <div className="desktop-image w-72 h-96 relative hidden md:inline lg:w-96 lg:h-[500px]">
                    <Image
                        src="/portrait.png"
                        fill={true}
                        objectFit="cover"
                        alt="portrait."
                    />
                </div>
            </div>
        </div>
    )
}