document.addEventListener('DOMContentLoaded', function() {
    const errorEmail = document.querySelector('#errorEmail');
    const email = document.querySelector('#email');
    const formulario = document.querySelector('#formulario');
    let correoValido;

    email.addEventListener('blur', (e) => {
        if (!validarEmail(e.target.value)) {
            email.classList.add('text-red-600', 'bg-red-100', 'border-red-400');
            errorEmail.textContent = 'Valid email required';
        } else {
            email.classList.remove('text-red-600', 'bg-red-100', 'border-red-400');
            errorEmail.textContent = '';
        }
    });
    
    formulario.addEventListener('submit', (e) => {
    
        if (!validarEmail(email.value)) {
            e.preventDefault();
            email.classList.add('text-red-600', 'bg-red-100', 'border-red-400');
            errorEmail.textContent = 'Valid email required';
        } else {
            correoValido = email.value;
            localStorage.setItem('correoValido', correoValido);
            window.open('success.html');

            
        }
    });
    function validarEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return re.test(email);
      }

    function enviarEmail(email) {
        console.log(email)
    }
})