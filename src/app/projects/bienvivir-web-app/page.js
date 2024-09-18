import ProjectNavbar from '../../components/project-page/project-navbar'
import ProjectHero from '../../components/project-page/project-hero'

const projectInfo = {
    title: 'Bienvivir Web App',
    cover: '/bienvivir-cover.png',
    year: '2024',
    tags: ['UX Design', 'UI Design'],
    brief: "Bienvivir is a company that seeks to support people to live a full life through accompaniment, consulting, or preceptorship, with a Christian focus.",
    accentColor: {
        text: 'text-teal-300',
        border: 'border-teal-300'
    }
}

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
        </div>
    )
}