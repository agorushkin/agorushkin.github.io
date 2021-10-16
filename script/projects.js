(async () => {
  const rawRepos = await fetch('https://api.github.com/users/agorushkin-ts/repos');
  const repos    = (await rawRepos.json()).filter(repo => repo.name[0] !== '.' && !/agorushkin/g.test(repo.name));

  const list = document.querySelector('#projects');
  list.firstChild.dataset.complete = true;

  for (const repo of repos) {
    const li = document.createElement('li');
    const icon = repo.description[0] + repo.description[1];
    li.innerHTML = `<a href="${repo.html_url}">${icon} ${repo.name}</a>`;
    list.appendChild(li);
  }
})();