import Image from 'next/image'
import ProjectNavbar from '../../components/project-page/project-navbar'
import ProjectHero from '../../components/project-page/project-hero'
import { Poppins } from '@next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800']
})

const projectInfo = {
    title: 'Pronto Cleaning App',
    cover: '/projects/pronto-cleaning/pronto-cleaning-cover.png',
    year: '2023',
    tags: ['UX Design', 'UI Design'],
    brief: "Pronto was created to help and support independent cleaning professionals. The goal is to be useful not only to connect professionals with potential clients, but also to provide the professional with everything they need to manage their business: Client catalog, communication tool, financial reports, among many other features.",
    accentColor: {
        text: 'text-teal-300',
        border: 'border-teal-300'
    }
}

export default function ProntoCleaningApp(){
    return(
        <div className='page-container w-full min-h-screen bg-pronto-cleaning bg-fixed'>
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

            <div className='w-full bg-teal-100 relative p-8'>
                <Image
                    src={'/projects/pronto-cleaning/pronto-snapshots.png'}
                    alt="Pronto snapshots"
                    layout="intrinsic"
                    width={1555} // Ancho de la imagen original
                    height={812} // Altura de la imagen original (mantendrá la proporción)
                    style={{ width: '100%', height: 'auto' }} // Ancho 100%, altura automática
                />
            </div>

            <div className='pronto-sitemap flex flex-col gap-5 py-20 px-8'>
                <div className='text-2xl font-bold text-center'>Pronto sitemap</div>
                <div className='w-full relative'>
                    <Image
                        src={'/projects/pronto-cleaning/pronto-sitemap.png'}
                        alt="Pronto sitemap"
                        layout="intrinsic"
                        width={1270} // Ancho de la imagen original
                        height={730} // Altura de la imagen original (mantendrá la proporción)
                        style={{ width: '100%', height: 'auto' }} // Ancho 100%, altura automática
                    />
                </div>
            </div>

            <div className='pronto-wireframes flex flex-col gap-12'>
                <div className='w-full flex flex-col gap-5'>
                    <div className='text-2xl font-bold px-8'>Wireframes</div>
                    <div className='text-lg px-8'>
                        Wireframes of the main sections of the app were created to serve as a guide for it was timeto apply the style
                    </div>
                </div>
                <div className='w-full relative bg-teal-100 px-4 py-8'>
                    <Image
                        src={'/projects/pronto-cleaning/pronto-wireframes.png'}
                        alt="Pronto sitemap"
                        layout="intrinsic"
                        width={1322} // Ancho de la imagen original
                        height={1808} // Altura de la imagen original (mantendrá la proporción)
                        style={{ width: '100%', height: 'auto' }} // Ancho 100%, altura automática
                    />
                </div>
            </div>

            <div className='pronto-wireframes flex flex-col gap-20 py-20'>
                <div className='w-full flex flex-col gap-5'>
                    <div className='text-2xl font-bold px-8'>Color and fonts</div>
                    <div className='text-lg px-8'>
                        The client imagined the platform with a clean, almost minimalist style that is consistent with the mission and 
                        philosophy of the brand; and that's why a monochrome color palette was chosen in which only the main color of the 
                        brand was used to highlight the necessary elements.
                    </div>
                    <div className='text-lg px-8'>
                        The color palette was complemented with a geometrical font to give the app a modern look and feel. The cosen font was 'Poppins'
                    </div>
                </div>
                <div className='w-full relative bg-teal-100 px-8 py-8 text-black flex flex-col gap-12'>
                    <div className={`font-display flex flex-col gap-2 ${poppins.className}`}>
                        <div className='text-9xl'>Aa</div>
                        <div className='text-xl'>abcdefghijklmnopqrstuvwzyz</div>
                    </div>
                    <div className='color-dipslay flex flex-col gap-4'>
                        <div className='main-color w-full h-48 rounded-lg bg-[#00A5AD] shadow-xl p-5 text-white font-bold'>
                            #00A5AD
                        </div>
                        <div className='main-color w-full h-28 flex gap-4'>
                            <div className='flex-1 h-28 bg-[#FAFAFA] rounded-lg shadow-xl p-5 font-bold'>
                                #FAFAFA
                            </div>
                            <div className='flex-1 h-28 bg-[#1F1F1F] rounded-lg shadow-xl p-5 text-white font-bold'>
                                #1F1F1F
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='pronto-sitemap flex flex-col gap-5 pt-20'>
                <div className='text-2xl font-bold text-center px-8'>User interface</div>
                <div className='w-full relative px-2 py-8'>
                    <Image
                        src={'/projects/pronto-cleaning/pronto-ux.png'}
                        alt="Pronto sitemap"
                        layout="intrinsic"
                        width={1035} // Ancho de la imagen original
                        height={857} // Altura de la imagen original (mantendrá la proporción)
                        style={{ width: '100%', height: 'auto' }} // Ancho 100%, altura automática
                    />
                </div>
                <div className='w-full relative px-2 py-8 bg-teal-100'>
                    <Image
                        src={'/projects/pronto-cleaning/pronto-showcase.png'}
                        alt="Pronto sitemap"
                        layout="intrinsic"
                        width={1035} // Ancho de la imagen original
                        height={857} // Altura de la imagen original (mantendrá la proporción)
                        style={{ width: '100%', height: 'auto' }} // Ancho 100%, altura automática
                    />
                </div>
            </div>
        </div>
    )
}