import Image from "next/image"

export default function ProjectHero({title, cover, year, tags, brief, accentColor}){
    return(
        <div className="w-full flex flex-col gap-20 z-0 px-8 md:px-14 pt-28 pb-24">

            <div className="w-full flex flex-col items-center gap-10 justify-center">
                <div className="w-full max-w-7xl md:h-[420px] flex flex-col gap-5 md:flex-row md:gap-10">
                    <div className="md:w-1/3 flex md:justify-end ">
                        <div className="flex flex-col gap-5 md:justify-end pb-5">
                            <div className={`year text-2xl font-bold ${accentColor.text}`}>{year}</div>
                            <div className={`areas flex flex-col gap-2 pl-4 border-l-2 ${accentColor.border} text-lg`}>
                                {tags.map((tag) => (
                                    <div key={tag}>{tag}</div>
                                ))}                                
                            </div>
                        </div>
                    </div>
                    <div className="md:w-2/3 h-64 md:h-full bg-slate-700 rounded-2xl relative rounded-lg overflow-hidden">
                        <Image
                            src={cover}
                            fill={true}
                            objectFit="cover"
                            alt={'Project cover'}
                        />
                    </div>
                </div>
                <div className="w-full max-w-7xl text-5xl md:text-8xl font-bold uppercase">{title}</div>
            </div>

            <div className="w-full flex justify-center gap-10">
                <div className="w-full max-w-7xl flex flex-col gap-10 md:flex-row">
                    <div className="md:w-1/3 font-bold text-2xl">About the project</div>
                    <div className="md:w-2/3 text-xl">
                        {brief}
                    </div>
                </div>
            </div>

        </div>
    )
}