import { Cards } from "./cards";
import { getMyRepos } from "./data"

export const homeProjects = async () => {
    const projectWarrper = document.querySelector("#projects");
    const card = new Cards()
    const projects = await getMyRepos()
    projectWarrper.innerHTML = ""
    Array.from(projects).slice(0, 4).forEach( project => {
        if (!project.is_template && project.language && !project.fork) {
            const url = {
                html: project.html_url,
                demo: project.homepage
            }
            projectWarrper.innerHTML += card.view(
                project.name,
                project.pushed_at,
                project.description,
                url,
                project.language
            )
        }
    })

}

export default homeProjects