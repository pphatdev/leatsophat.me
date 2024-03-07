import { Cards } from "./cards";
import { getMyRepos } from "./data"

/**
 * Home Project Template Sections
 * @returns
 */
export const homeTemplates = async () => {
    const projectWarrper = document.querySelector("#templates");
    const card = new Cards()
    const projects = await getMyRepos()
    projectWarrper.innerHTML = ""
    Array.from(projects).forEach( project => {
        if (project.is_template && project.owner.login == "pphatdev" && !project.fork) {
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

export default homeTemplates