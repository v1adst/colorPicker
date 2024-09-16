document.getElementById('pickColorBtn').addEventListener('click', function() {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  document.getElementById('colorDisplay').style.backgroundColor = randomColor;
  document.getElementById('colorDisplay').style.backgroundImage='none';
  document.getElementById('colorCode').textContent = randomColor;
});