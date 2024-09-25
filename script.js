//Leonardo Takeshiro Souza Toyama 3D 22/09/2024

const avanca = document.querySelectorAll('.btn-proximo'); //criação da constante "avanca" 

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
}) //Atribuindo função para os botões, utilizando meios para ativar e desativar as telas