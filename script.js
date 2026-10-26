'use strict';

// Paper filters on the Research page. The site is fully readable without JavaScript.
const papers = Array.from(document.querySelectorAll('.paper'));
const filterButtons = Array.from(document.querySelectorAll('[data-filter]'));
const paperTools = document.querySelector('.paper-tools');
const paperCount = document.querySelector('#paper-count');

function filterPapers(kind) {
  let visibleCount = 0;
  papers.forEach((paper) => {
    paper.hidden = kind !== 'all' && paper.dataset.kind !== kind;
    if (!paper.hidden) visibleCount += 1;
  });
  filterButtons.forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.filter === kind));
  });
  paperCount.textContent = `${visibleCount} ${visibleCount === 1 ? 'paper' : 'papers'}`;
}

if (paperTools && paperCount && papers.length) {
  paperTools.hidden = false;
  filterPapers('all');
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => filterPapers(button.dataset.filter));
  });

  // A direct link to a paper must work even if its category is filtered out.
  function revealLinkedPaper() {
    const target = document.getElementById(location.hash.slice(1));
    if (target && target.classList.contains('paper') && target.hidden) {
      filterPapers('all');
      target.scrollIntoView({ block: 'start' });
    }
  }
  window.addEventListener('hashchange', revealLinkedPaper);
  revealLinkedPaper();
}
