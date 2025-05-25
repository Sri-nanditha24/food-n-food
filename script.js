document.querySelector('.search-btn').addEventListener('click', () => {
  const searchTerm = document.querySelector('.search-input').value.trim();
  if (!searchTerm) {
    alert('Please enter a recipe name');
    return;
  }
  const url = 'results.html?search=' + encodeURIComponent(searchTerm);
  window.location.href = url;
});
