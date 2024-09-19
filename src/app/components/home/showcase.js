import Project from "./showcase/project"

const projectList = [
    {
        title: 'Pronto Detalle App',
        year: '2024',
        description: 'Internal tool with the purpose of helping salesmen complete their daily tasks',
        image: '/projects/pronto-detalle/pronto-detalle-cover.png',
        variant: '1',
        background: 'bg-orange-600',
        link: '/projects/pronto-detalle-app'
    },
    {
        title: 'Bienvivir App',
        year: '2024',
        description: 'Internal tool with the purpose of helping salesmen complete their daily tasks',
        image: '/projects/bienvivir-app/bienvivir-cover.png',
        variant: '2',
        background: 'bg-cyan-600',
        link: '/projects/bienvivir-web-app'
    },
    {
        title: 'International House Monterrey',
        year: '2024',
        description: 'Internal tool with the purpose of helping salesmen complete their daily tasks',
        image: '/projects/international-house/ih-cover.png',
        variant: '1',
        background: 'bg-blue-900',
        link: '/projects/international-house-monterrey'
    },
    {
        title: 'Blue Surf',
        year: '2023',
        description: 'Powerful project management software to handle the day to day operation of a top tech company',
        image: '/projects/bluesurf/bluesurf-cover.png',
        variant: '2',
        background: 'bg-sky-600',
        link: '/projects/blue-surf'
    },
    {
        title: 'Great',
        year: '2023',
        description: 'Powerful HR software to handle the day to day operation of a top tech company',
        image: '/projects/great/great-cover.png',
        variant: '1',
        background: 'bg-fuchsia-700',
        link: '/projects/great'
    },
    {
        title: 'Pronto Cleaning App',
        year: '2022',
        description: 'Powerful project management software to handle the day to day operation of a top tech company',
        image: '/projects/pronto-cleaning/pronto-cleaning-cover.png',
        variant: '2',
        background: 'bg-teal-600',
        link: '/projects/pronto-cleaning-app'
    },
    {
        title: 'Sharebox Ecommerce',
        year: '2022',
        description: 'Powerful HR software to handle the day to day operation of a top tech company',
        image: '/projects/sharebox/sharebox-cover.png',
        variant: '1',
        background: 'bg-violet-400',
        link: '/projects/sharebox-ecommerce'
    },
]

export default function Showcase(){
    return(
        <div id="projects" className="w-full px-8 py-10 flex flex-col gap-10 md:px-14">
            <div className="w-full text-center text-3xl font-bold">Showcase</div>
            
            <div className="w-full flex flex-col gap-10 justify-center items-center md:gap-5">
                {
                    projectList.map((project)=>(
                        <Project
                            key={project.link}
                            title={project.title}
                            year={project.year}
                            description={project.description}
                            image={project.image}
                            variant={project.variant}
                            background={project.background}
                            link={project.link}
                        />
                    ))
                }
            </div>
        </div>
    )
}