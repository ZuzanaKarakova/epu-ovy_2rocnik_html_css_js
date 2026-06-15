const btnRezim = document.getElementById('dark-mode-btn');

console.log(btnRezim);

btnRezim.addEventListener('click', () => {
    document.body.classList.contains('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        btnRezim.textContent = 'Light mode';
})