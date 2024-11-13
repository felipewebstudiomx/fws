import ProjectNavbar from '../../components/project-page/project-navbar'
import ProjectHero from '../../components/project-page/project-hero'
import BehanceInProgress from '../../components/project-page/behance-in-progress'

const projectInfo = {
    title: 'Great',
    cover: '/projects/great/great-cover.png',
    year: '2023',
    tags: ['UX Design', 'UI Design'],
    brief: "Great is a powerful HR management software used and powered by a top tech company to manage the recruitment and evaluation of prospects to join the team. This tool helps the department to find the best talent.",
    accentColor: {
        text: 'text-fuchsia-400',
        border: 'border-fuchsia-400'
    }
}

export default function Great(){
    return(
        <div className='page-container w-full min-h-screen bg-great bg-fixed'>
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
            <BehanceInProgress/>
        </div>
    )
}