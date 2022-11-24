const featuredMore = document.querySelector('#more-btn');
const moreCards = document.querySelectorAll('.card-performer:nth-child(n+3)');
const showMore = 'More &nbsp;<i class="fa-solid fa-chevron-down"></i>';
const showLess = 'Less &nbsp;<i class="fa-solid fa-chevron-up"></i>';
featuredMore.addEventListener('click', () => {
  if (featuredMore.innerHTML === showMore) {
    featuredMore.innerHTML = showLess;
  } else {
    featuredMore.innerHTML = showMore;
  }
  moreCards.forEach((i) => {
    i.classList.toggle('d-grid');
  });
});