import ProjectNavbar from '../../components/project-page/project-navbar'
import ProjectHero from '../../components/project-page/project-hero'

const projectInfo = {
    title: 'International House Monterrey',
    cover: '/ih-cover.png',
    year: '2024',
    tags: ['UX/UI Design', 'Fullstack development'],
    brief: "International House Monterrey is an affiliate member of the International House World Organisation. They are the only Teacher Training and international certification centre in the state of Nuevo Leon, Mexico. This makes them a must-see for educational institutions, English teachers, students, government institutions and all those people for whom the English language is part of their lives.",
    accentColor: {
        text: 'text-blue-400',
        border: 'border-blue-400'
    }
}

export default function InternationalHouse(){
    return(
        <div className='page-container w-full min-h-screen bg-ih bg-fixed'>
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