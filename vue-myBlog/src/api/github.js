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
    url: `/users/repos/{user}/{respName}/contents`
  }
];
export default github;
