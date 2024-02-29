import { Cards } from "./cards";
import { getMyRepos } from "./data"

export const homeTemplates = async () => {
    const projectWarrper = document.querySelector("#templates");
    const card = new Cards()
    const projects = await getMyRepos()
    projectWarrper.innerHTML = ""
    Array.from(projects).forEach( project => {
        if (project.is_template && project.owner.login == "pphatdev" && !project.fork) {
            const url = {
                html: project.html_url,
                demo: project.homepage
            }
            projectWarrper.innerHTML += card.view(
                project.name,
                project.pushed_at,
                project.description,
                url
            )
        }
    })

}

export default homeTemplates