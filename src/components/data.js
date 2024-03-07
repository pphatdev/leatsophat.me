import axios from "axios"

/**
 * get api repository from github
 * @returns
 */
export const getMyRepos = async () => {
    try {
        const response  = await axios.get( "https://api.github.com/users/pphatdev/repos", {})
        const data      = await response.data
        return data
    } catch (error) {
        console.log(err)
    }
}