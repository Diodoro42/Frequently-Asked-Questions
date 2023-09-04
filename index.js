//variaveis
const questoes = document.getElementsByClassName('content-container')



for (let i = 0; i < questoes.length; i++) {
    questoes[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
    
}




