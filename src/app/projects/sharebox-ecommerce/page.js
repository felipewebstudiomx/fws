import Image from 'next/image'
import ProjectNavbar from '../../components/project-page/project-navbar'
import ProjectHero from '../../components/project-page/project-hero'

const projectInfo = {
    title: 'Sharebox Ecommerce',
    cover: '/projects/sharebox/sharebox-cover.png',
    year: '2022',
    tags: ['UX Design', 'UI Design', 'Web Development'],
    brief: "Sharebox is a company dedicated to giving experiences and happiness through gift boxes. Since this is a business born during the pandemic, its social networks and website took on enormous relevance to get ahead and make its sales.",
    accentColor: {
        text: 'text-violet-300',
        border: 'border-violet-300'
    }
}

export default function ShareboxEcommerce(){
    return(
        <div className='page-container w-full min-h-screen bg-sharebox bg-fixed'>
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

            <div className='w-full h-96 bg-cyan-100 flex justify-center px-8 pt-8 md:h-[500px] md:px-12 lg:hidden'>
                <div className='w-full relative'>
                    <Image
                        src={'/projects/sharebox/sharebox-landing.png'}
                        fill={true}
                        objectFit='cover'
                        objectPosition='0px 0px'
                        alt='landing page'
                    />
                </div>
            </div>

            <div className='w-full justify-center hidden lg:flex'>
                <div className='w-full max-w-7xl flex justify-center bg-cyan-100 pt-5 h-[500px] px-12 rounded-lg'>
                    <div className='w-full relative md:w-[500px]'>
                        <Image
                            src={'/projects/sharebox/sharebox-landing.png'}
                            fill={true}
                            objectFit='cover'
                            objectPosition='0px 0px'
                            alt='sharebox home page'
                        />
                    </div>
                </div>
            </div>

            <div className='w-full px-8 py-20 flex justify-center gap-8 md:px-14'>
                <div className='w-full max-w-7xl flex flex-col gap-8 md:flex-row'>
                    <div className='text-xl font-bold md:w-1/3'>The problem</div>
                    <div className='text-lg md:w-2/3'>
                        Being a business with an unconventional sales system (because they offer different customization options), using Shopify gave them more problems than solutions, 
                        since to meet their needs they had to use different apps that represented an important spending. And yet the experience it offered to users was not the best
                    </div>
                </div>
            </div>

            <div className='w-full h-96 bg-cyan-100 flex justify-center lg:hidden'>
                <div className='w-full relative'>
                    <Image
                        src={'/projects/sharebox/sharebox-pages.png'}
                        fill={true}
                        objectFit='cover'
                        alt='sharebox snapshots'
                    />
                </div>
            </div>

            <div className='w-full justify-center hidden lg:flex'>
                <div className='w-full max-w-7xl flex justify-center bg-cyan-100 h-[500px] rounded-lg overflow-hidden'>
                    <div className='w-full relative'>
                        <Image
                            src={'/projects/sharebox/sharebox-pages.png'}
                            fill={true}
                            objectFit='cover'
                            alt='sharebox snapshots'
                        />
                    </div>
                </div>
            </div>

            <div className='w-full px-8 py-20 flex justify-center gap-8 md:px-14'>
                <div className='w-full max-w-7xl flex flex-col gap-8 md:flex-row'>
                    <div className='text-xl font-bold md:w-1/3'>Breaking limitations</div>
                    <div className='text-lg md:w-2/3'>
                        To get over the dependency of the page on those apps, what I did was create a frontend using a modern Technology Stack and then connect it to the existing online 
                        store, through the Shopify API. In this way, Shopify became solely used to store product information and process payments, and the design of the page and the user 
                        experience remained completely in our hands.
                    </div>
                </div>
            </div>

            <div className='w-full h-96 bg-cyan-100 flex justify-center lg:hidden'>
                <div className='w-full relative'>
                    <Image
                        src={'/projects/sharebox/sharebox-responsive.png'}
                        fill={true}
                        objectFit='cover'
                        alt='sharebox'
                    />
                </div>
            </div>

            <div className='w-full justify-center hidden lg:flex'>
                <div className='w-full max-w-7xl flex justify-center bg-cyan-100 h-[500px] rounded-lg overflow-hidden'>
                    <div className='w-full relative'>
                        <Image
                            src={'/projects/sharebox/sharebox-responsive.png'}
                            fill={true}
                            objectFit='cover'
                            alt='sharebox'
                        />
                    </div>
                </div>
            </div>

            <div className='w-full px-8 py-20 flex flex-col gap-20'>
                <div className='text-xl font-bold text-center'>Technology</div>
                <div className='text-lg tech-space flex flex-col gap-8 items-center'>
                    <div className='icon w-40 h-40 relative'>
                        <Image
                            src={'/projects/sharebox/nextjs-logo.png'}
                            fill={true}
                            objectFit='contain'
                            alt='nextjs'
                        />
                    </div>
                    <div className='tech-description w-full flex flex-col gap-3'>
                        <div className='text-xl font-bold text-center'>NEXT.JS</div>
                        <div className='text-center'>
                            Next.js is a modern React framework for developing single page Javascript applications.
                        </div>
                    </div>
                </div>

                <div className='text-lg tech-space flex flex-col gap-8 items-center'>
                    <div className='icon w-40 h-40 relative'>
                        <Image
                            src={'/projects/sharebox/shopify-logo.png'}
                            fill={true}
                            objectFit='contain'
                            alt='shopify'
                        />
                    </div>
                    <div className='tech-description w-full flex flex-col gap-3'>
                        <div className='text-xl font-bold text-center'>Shopify Buy SDK</div>
                        <div className='text-center'>
                            {"Is a lightweight library based on Shopify's Storefront API that allows you to build ecommerce into any website."}
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full bg-sky-300 h-40 relative md:h-64'>
                <Image
                    src={'/projects/sharebox/footer-image.png'}
                    fill={true}
                    objectFit='contain'
                    objectPosition='end'
                    alt='sharebox'
                />
            </div>
        </div>
    )
}