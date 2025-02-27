window.addEventListener("scroll", () => {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;

  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrollPercentage = (scrollTop / scrollHeight) * 100;

  document.querySelector(".progress-bar").style.width = scrollPercentage + "%";
});
