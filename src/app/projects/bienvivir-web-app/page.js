import ProjectNavbar from '../../components/project-page/project-navbar'
import ProjectHero from '../../components/project-page/project-hero'
import Image from 'next/image'

const projectInfo = {
    title: 'Bienvivir Web App',
    cover: '/projects/bienvivir-app/bienvivir-cover.png',
    year: '2024',
    tags: ['UX Design', 'UI Design'],
    brief: "BienVivir is more than a service, it is your partner dedicated to guiding you towards a fulfilling life. Its team is made up of passionate professionals committed to your comprehensive health. From psychologists to specialized coaches, they all share the common goal of offering personalized support that adapts to your individual needs.",
    accentColor: {
        text: 'text-teal-300',
        border: 'border-teal-300'
    }
}

const projectScope = [
    {
        title: '01. Discovering',
        description: 'UX Research, benchmark, in-depth interviews',
        src: '/projects/bienvivir-app/icons/search.png'
    },
    {
        title: '02. Definition',
        description: 'Project scope, information architecture',
        src: '/projects/bienvivir-app/icons/definition.png'
    },
    {
        title: '03. Ideate',
        description: 'User flow, sketching, wireframes',
        src: '/projects/bienvivir-app/icons/idea.png'
    },
    {
        title: '04. Prototype',
        description: 'Color and typography, UI Kit, UI Design',
        src: '/projects/bienvivir-app/icons/prototype.png'
    },
]

export default function BienVivirApp(){
    return(
        <div className='page-container w-full min-h-screen bg-bienvivir bg-fixed'>
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

            <div className='w-full h-96 bg-cyan-100 flex justify-center pt-4 md:h-[500px] md:px-12 lg:hidden'>
                <div className='w-full relative'>
                    <Image
                        src={'/projects/bienvivir-app/bienvivir-mobile.png'}
                        fill={true}
                        objectFit='cover'
                        objectPosition='0px 0px'
                        alt='landing page'
                    />
                </div>
            </div>

            <div className='w-full justify-center hidden lg:flex'>
                <div className='w-full max-w-7xl flex justify-center bg-cyan-100 pt-4 h-[500px] px-12 rounded-lg'>
                    <div className='w-full relative md:w-[720px]'>
                        <Image
                            src={'/projects/bienvivir-app/bienvivir-mobile.png'}
                            fill={true}
                            objectFit='cover'
                            objectPosition='0px 0px'
                            alt='sharebox home page'
                        />
                    </div>
                </div>
            </div>

            <div className='project-scope flex w-full justify-center px-8 py-24'>
                <div className='section-container flex flex-col gap-20 items-center w-full max-w-7xl'>
                    <div className='w-full text-3xl text-center'>
                        Design process
                    </div>
                    <div className='w-full grid grid-cols-1 gap-8 md:grid-cols-2'>
                        {
                            projectScope.map((project)=>(
                                <div className='rounded-xl bg-gradient-to-b from-sky-200/50 to-sky-200/20 p-0.5'>
                                    <div className='w-full rounded-xl h-full bg-[#0A0A0A] p-6 flex flex-col gap-5 lg:px-8'>
                                        <div className='w-16 h-16 bg-sky-300/25 rounded-full p-4'>
                                            <div className='relative w-full h-full'>
                                                <Image
                                                    src={project.src}
                                                    fill={true}
                                                    objectFit='cover'
                                                    alt={project.title}
                                                />
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <div className='text-2xl'>{project.title}</div>
                                            <div className='text-white/75'>{project.description}</div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className='project-grid w-full flex justify-center px-8 py-24'>
                <div className='w-full max-w-7xl'>

                    <div className='w-full flex flex-col gap-5 md:flex-row md:h-[420px] lg:h-[600px]'>

                        <div className='flex flex-col gap-5 md:h-full md:flex-1'>
                            <div className='w-full h-40 bg-cyan-100 rounded-xl sm:h-52 md:h-1/2'>
                                <div className='w-full h-full relative'>
                                    <Image
                                        src={'/projects/bienvivir-app/navbar.png'}
                                        fill={true}
                                        objectFit='contain'
                                        alt={'navbar'}
                                    />
                                </div>
                            </div>
                            <div className='w-full h-40 bg-cyan-100 rounded-xl relative sm:h-52 md:h-1/2 overflow-hidden'>
                                <Image
                                    src={'/projects/bienvivir-app/session.jpg'}
                                    fill={true}
                                    objectFit='cover'
                                    alt={'navbar'}
                                />
                            </div>
                        </div>

                        <div className='h-72 bg-cyan-100 rounded-xl relative sm:h-96 md:h-full md:flex-1'>
                            <Image
                                src={'/projects/bienvivir-app/snapshots.png'}
                                fill={true}
                                objectFit='cover'
                                alt={'navbar'}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}