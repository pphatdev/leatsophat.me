import { Cards } from "./cards";
import { getMyRepos } from "./data"

export const projects = async () => {
    const projectWarrper = document.querySelector("#projects");
    const card = new Cards()
    const projects = await getMyRepos()
    projectWarrper.innerHTML = ""
    Array.from(projects).forEach( project => {
        if (!project.fork) {
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

export default projects