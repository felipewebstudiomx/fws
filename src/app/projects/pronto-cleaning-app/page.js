import ProjectNavbar from '../../components/project-page/project-navbar'
import ProjectHero from '../../components/project-page/project-hero'

const projectInfo = {
    title: 'Pronto Cleaning App',
    cover: '/pronto-cleaning-cover.png',
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
        </div>
    )
}