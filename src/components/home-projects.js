import { Cards } from "./cards";
import { getMyRepos } from "./data"

export const projects = async () => {
    const projectWarrper    = document.querySelector("#projects");
    const card          = new Cards()
    const projects      = await getMyRepos()
    Array.from(projects).forEach( project => {
        if (!project.is_template && project.language != null && project.description != null) {
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

export default projects