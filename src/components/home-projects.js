import { Cards } from "./cards";
import { getMyRepos } from "./data"

export const homeProjects = async () => {
    const projectWarrper = document.querySelector("#projects");
    const card = new Cards()
    const projects = await getMyRepos()
    projectWarrper.innerHTML = ""
    Array.from(projects).slice(0,4).forEach( project => {
        if (!project.is_template && project.language && !project.fork) {
            projectWarrper.innerHTML += card.view(
                {
                    header: {
                        title: project?.name,
                        date: project?.pushed_at
                    },
                    content: {
                        description: project?.description
                    },
                    footer: {
                        url: {
                            html: project?.html_url,
                            demo: project?.homepage
                        },
                        language: project?.language
                    }
                }
            )
        }
    })

}

export default homeProjects