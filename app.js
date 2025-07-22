document.getElementById('search').addEventListener('input', function() {
  const query = this.value;
  const results = document.getElementById('results');
  results.innerHTML = '<p>Searching YouTube and Spotify for: ' + query + '</p>';
});
