import { Octokit } from "@octokit/core";
export const octokit = new Octokit({ auth: `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` });

export const getReposOrg = async () => {
    const response  = await octokit.request("GET /orgs/uixbase/repos", {
        org: "uixbase",
        type: "publish",
    });
    return response.data
}


export const getMyRepos = async () => {
    const response  = await octokit.request('GET /user/repos', {
        username: 'pphatdev',
        type: "publish",
        headers: {
            'X-GitHub-Api-Version': '2022-11-28',
        }
    })
    return response.data
}


export const getReposByUser = async () => {
    const response  = await octokit.request('GET /users/pphatdev/repos', {
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })
    return response.data
}