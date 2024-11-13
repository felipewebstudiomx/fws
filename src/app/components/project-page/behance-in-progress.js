import Image from "next/image"

export default function BehanceInProgress(){
    return(
        <div className='project-grid w-full flex flex-col justify-center items-center px-8 py-24'>
            <div className="w-full flex flex flex-col justify-center items-center bg-neutral-800 py-20 rounded-xl">
                <div className="w-36 h-36 relative">
                    <Image
                        src={'/behance-icon.png'}
                        fill={true}
                        objectFit='cover'
                        alt={'navbar'}
                    />
                </div>
                <div className="w-full text-center text-2xl pt-10">
                    Behance project in progress
                </div>
            </div>
        </div>
    )
}