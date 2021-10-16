document.querySelectorAll('.loader').forEach((loader) => {
  let count = 0;
  if (!loader.dataset.complete) loader.dataset.complete = 0;
  const interval = setInterval(() => {

    loader.dataset.complete
    ? (clearInterval(interval), loader.innerHTML = '')
    : loader.innerHTML = `Loading${'.'.repeat(count = count > 2 ? 0 : count + 1)}`
  }, 600);
});