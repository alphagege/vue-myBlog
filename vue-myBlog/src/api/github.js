const github = [
  //  旭日图api
  {
    name: "getGithubInfo",
    url: `/users/users/{user}`
  },
  {
    name: "getReposInfo",
    url: `/users/users/{user}/repos`
  },
  {
    name: "getReposRootInfo",
    url: `/users/repos/{user}/{respName}/contents/{path}`
    // https://api.github.com/repos/solomonxie/gists/contents/目录名
  }
];
export default github;
