document.addEventListener('DOMContentLoaded', function() {
    let contenedor = document.getElementById('contenedor');
    let form = document.getElementById('registrationForm');
    let btn2 = document.getElementById('btn-2');
    let btn3 = document.getElementById('btn-3');
    let btn = document.getElementById('btn');
    console.log(contenedor);

    document.getElementById('btn-3').addEventListener('click', function() {
        contenedor.classList.remove('bg-secondary');
        form.classList.remove('bg-light');
        btn2.classList.remove('bg-light');
        btn3.classList.remove('bg-light');
        btn.classList.remove('btn-primary');
        contenedor.classList.add('bg-dark');
        contenedor.classList.add('text-light');
        form.classList.add('bg-secondary');
        btn2.classList.add('bg-warning')
        btn3.classList.add('bg-warning')
        btn.classList.add('bg-warning')
    });

    document.getElementById('btn-2').addEventListener('click', function() {
        contenedor.classList.remove('bg-dark');
        contenedor.classList.add('bg-secondary');
        contenedor.classList.remove('text-light');
        form.classList.remove('bg-secondary');
        form.classList.add('bg-light');
        btn2.classList.remove('bg-warning')
        btn2.classList.add('bg-light');
        btn3.classList.remove('bg-warning')
        btn3.classList.add('bg-light');
        btn.classList.remove('bg-warning')
        btn.classList.add('btn-primary');
    });
});




      (() => {
        'use strict';
        const form = document.getElementById('registrationForm');

        form.addEventListener('submit', (event) => {
          let isValid = true;

          const inputs = form.querySelectorAll('input');

          inputs.forEach(input => {
            if (input.value.trim().length < 3) {
              input.classList.add('is-invalid');
              input.classList.remove('is-valid');
              isValid = false;
            } else {
              input.classList.remove('is-invalid');
              input.classList.add('is-valid');
            }

     
            if (input.type === 'email' && !validateEmail(input.value)) {
              input.classList.add('is-invalid');
              input.classList.remove('is-valid');
              isValid = false;
            }
            if (input.type === 'date' && !validateFecha(input.value)){
                input.classList.add('is-invalid');
                input.classList.remove('is-valid');
                isValid = false;
            }
          });

          if (!isValid) {
            event.preventDefault();
            event.stopPropagation();
          }else {
            alert("Datos enviados")
          }

          form.classList.add('was-validated');
        }, false);

        
        function validateEmail(email) {
          const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return re.test(String(email).toLowerCase());
        }
        function validateFecha(fecha) {
            const date = new Date(fecha);
            const today = new Date();
            return date <= today;
        }
      })();