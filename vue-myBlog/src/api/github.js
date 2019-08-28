const github = [
  //  旭日图api
  {
    name: "getGithubInfo",
    url: `/api/users/{user}`
  },
  {
    name: "getReposInfo",
    url: `/api/users/{user}/repos`
  },
  {
    name: "getReposRootInfo",
    url: `/api/repos/{user}/{respName}/contents/{path}`
    // https://api.github.com/repos/solomonxie/gists/contents/目录名
  }
];
export default github;
