import axios from "axios"

export const getMyRepos = async () => {
    return axios.get(
            "https://api.github.com/users/pphatdev/repos",
            {}
        ).then(response => {
            return response.data
        })
        .catch(err=> {
            console.log(err)
        })
}
