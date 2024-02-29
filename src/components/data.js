import { Octokit } from "@octokit/core";

export const getReposOrg = async () => {
    const octokit = new Octokit({ auth: `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` });
    const response  = await octokit.request("GET /orgs/uixbase/repos", {
        org: "uixbase",
        type: "publish",
    });
    return response.data
}


export const getMyRepos = async () => {
    const octokit = new Octokit({ auth: `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` });
    const response  = await octokit.request('GET /user/repos', {
        username: 'pphatdev',
        type: "publish",
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })
    return response.data
}


export const getReposByUser = async () => {
    const octokit = new Octokit({ auth: `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` });
    const response  = await octokit.request('GET /users/pphatdev/repos', {
        username: 'pphatdev',
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })
    return response.data
}