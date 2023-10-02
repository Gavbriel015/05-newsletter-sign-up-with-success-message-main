document.addEventListener('DOMContentLoaded', function() {
    const emailSuccess = document.querySelector('#emailSuccess');

    const correoValido = localStorage.getItem('correoValido');
    
    emailSuccess.textContent = correoValido;
});