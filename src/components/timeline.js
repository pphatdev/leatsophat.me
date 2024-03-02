import { timelines } from "../data/timeline"

const list = (data) => {
    return(data.map(item => {
        return(`
            <li>
                <h2 class="py-3 text-xl font-bold">${item?.title}</h2>
                <ul class="list-inside list-item">
                    ${item?.list.map(list => {
                        return(`<li class="list-disc">${list?.title}</li>`)
                    })}
                </ul>
            </li>
        `)
    }))
}

export const timeline = () => {
    const tartget = document.querySelector('#summary')
    tartget.innerHTML = list(timelines)
}