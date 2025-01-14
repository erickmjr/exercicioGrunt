document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('.botao').addEventListener('click', function(evento){
        evento.preventDefault();

        alert('oiiii');

        let div = document.querySelector('.div1');

        div.innerHTML= `
                <h2>
                    Testando teste!
                </h2>
            `;
    })
})