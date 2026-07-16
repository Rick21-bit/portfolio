document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.panel');

  function showTab(id) {
    tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === id));
    panels.forEach(p => p.classList.toggle('active', p.id === id));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => showTab(tab.dataset.tab));
  });

  // Handle ?tab=projects URL param
  const params = new URLSearchParams(window.location.search);
  const requested = params.get('tab');
  if (requested && document.getElementById(requested)) {
    showTab(requested);
  }
});
