import ProjectNavbar from '../../components/project-page/project-navbar'
import ProjectHero from '../../components/project-page/project-hero'

const projectInfo = {
    title: 'Blue Surf PMS',
    cover: '/projects/bluesurf/bluesurf-cover.png',
    year: '2023',
    tags: ['UX Design', 'UI Design'],
    brief: "Blue Surf is a powerful project management system powered by a top tech company. This software is the heart of the company's operations, as it is used by all team members to manage and record their activities on a day-to-day basis.",
    accentColor: {
        text: 'text-blue-400',
        border: 'border-blue-400'
    }
}

export default function BlueSurf(){
    return(
        <div className='page-container w-full min-h-screen bg-blue-surf bg-fixed'>
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