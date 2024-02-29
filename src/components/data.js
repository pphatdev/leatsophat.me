import axios from "axios"

export const getMyRepos = async () => {
    const response = await axios.get("https://api.github.com/users/pphatdev/repos?username=pphatdev")
    const data = await response.data
    return data
}
