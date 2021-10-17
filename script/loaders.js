document.querySelectorAll('.loader').forEach((loader) => {
  let count = 0;
  if (!loader.dataset.complete) loader.dataset.complete = 0;
  const check = setInterval(() => {if (+loader.dataset.complete) clearInterval(interval), loader.innerHTML = '', clearInterval(check)}, 50);
  const interval = setInterval(() => loader.innerHTML = `Loading${'.'.repeat(count = count > 2 ? 0 : count + 1)}`, 600);
});