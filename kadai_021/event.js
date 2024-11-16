const bttn = document.getElementById('btn');
const textt = document.getElementById('text')
bttn.addEventListener('click', () => {
  setTimeout(() => {
  textt.textContent = 'ボタンをクリックしました';
}, 2000); 
});
