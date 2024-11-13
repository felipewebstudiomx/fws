import Image from "next/image"
import Link from "next/link"

export default function Project({title, external, year, description, image, variant, background, link}){
    return(
        <div className="project-card w-full max-w-7xl flex flex-col gap-4 md:flex-row md:gap-5 md:h-[440px]">
            <Link href={link} target={ external ? '_blank' : '_self' } className={`project-summary w-full rounded-xl ${background} p-5 flex flex-col gap-10 md:w-1/3 md:h-full md:gap-0 md:justify-between ${variant === '2' && 'md:order-2'}`}>
                <div className="year text-2xl font-bold">{year}</div>
                <div className="project-description flex flex-col gap-1.5">
                    <div className="title text-2xl font-bold">{title}</div>
                    <div className="description">
                        {description}
                    </div>
                </div>
            </Link>
            <Link href={link} target={ external ? '_blank' : '_self' } className={`project-cover relative overflow-hidden w-full h-72 rounded-lg p-5 md:w-2/3 md:h-full ${variant === '2' && 'md:order-1'}`}>
                <Image
                    src={image}
                    fill={true}
                    objectFit="cover"
                    alt={title}
                />
            </Link>
        </div>
    )
}