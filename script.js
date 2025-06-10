
function mostrarInfo(id) {
  document.querySelectorAll('.info-section').forEach(el => el.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}
