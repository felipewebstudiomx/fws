import Image from 'next/image'
import ProjectNavbar from '../../components/project-page/project-navbar'
import ProjectHero from '../../components/project-page/project-hero'

const projectInfo = {
    title: 'Pronto Detalle App',
    cover: '/projects/pronto-detalle/pronto-detalle-cover.png',
    year: '2024',
    tags: ['UX Design', 'UI Design', 'UX Research', 'UX Writting'],
    brief: "Pronto is a company dedicated to supplying products to stores belonging to the traditional channel. Pronto's operations are nationwide in Mexico, and like any large operation, it requires digital tools to manage the business and business processes. One of the most important one is the Sales and Delivery App, used by the operational team to register all new orders, manage their clients and their routes to visit the stores.",
    accentColor: {
        text: 'text-orange-500',
        border: 'border-orange-500'
    }
}

export default function ProntoDetalle(){
    return(
        <div className='page-container w-full min-h-screen bg-pronto-detalle bg-fixed'>
            <ProjectNavbar/>
            <div className='w-full !z-50'>
                <ProjectHero 
                    title={projectInfo.title}
                    cover={projectInfo.cover}
                    year={projectInfo.year}
                    tags={projectInfo.tags}
                    brief={projectInfo.brief}
                    accentColor={projectInfo.accentColor}
                />
            </div>

            <div className='w-full h-96 bg-orange-400 flex justify-center px-5 pt-5'>
                <div className='w-full relative'>
                    <Image
                        src={'/projects/pronto-detalle/pronto-landing.png'}
                        fill={true}
                        objectFit='cover'
                        objectPosition='0px 0px'
                    />
                </div>
            </div>

            <div className='w-full px-8 py-20 flex flex-col gap-8'>
                <div className='text-xl font-bold'>The problem</div>
                <div className='text-lg'>
                    Pronto began operating with many incomplete digital tools or with very basic MVPs to be able to make sales, manage 
                    the delivery and the warehouse of the products. As the business grew, the operation increasingly showed greater 
                    deficiencies and scalability problems. That is why a team was required to help provide the business with digital tools 
                    that met the needs of the business.
                </div>
            </div>

            <div className='w-full h-96 bg-orange-400 flex justify-center'>
                <div className='w-full relative'>
                    <Image
                        src={'/projects/pronto-detalle/user-research.png'}
                        fill={true}
                        objectFit='cover'
                    />
                </div>
            </div>

            <div className='w-full px-8 py-20 flex flex-col gap-8'>
                <div className='text-xl font-bold'>UX Research</div>
                <div className='text-lg'>
                    UX Research was a fundamental part of the project, as it was very important to have a thorough understanding of the 
                    processes in each area of ​​the operation, as well as to know the future users of the tools.
                    Some types of research used were field tests, interviews, surveys, personas, usability tests, etc.
                </div>
            </div>

            <div className='w-full h-96 bg-orange-400 flex justify-center'>
                <div className='w-full relative'>
                    <Image
                        src={'/projects/pronto-detalle/pronto-detalle.png'}
                        fill={true}
                        objectFit='cover'
                    />
                </div>
            </div>

            <div className='w-full px-8 py-20 flex flex-col gap-8'>
                <div className='text-xl font-bold'>Designing and prototyping</div>
                <div className='text-lg'>
                    The application design and prototyping process is a continuous process that adapts to the needs of the business 
                    (operational and commercial).
                </div>
                <div className='text-lg'>
                    Each functionality is subsequently tested and evaluated to ensure that it is usable. Otherwise, the necessary 
                    modifications are made, always keeping in mind the user experience and the efficiency of the operation.
                </div>
            </div>
        </div>
    )
}