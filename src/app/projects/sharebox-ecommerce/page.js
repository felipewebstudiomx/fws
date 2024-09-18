import ProjectNavbar from '../../components/project-page/project-navbar'
import ProjectHero from '../../components/project-page/project-hero'

const projectInfo = {
    title: 'Sharebox Ecommerce',
    cover: '/sharebox-cover.png',
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
        </div>
    )
}