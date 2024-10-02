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
        </div>
    )
}