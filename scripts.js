const optionImage = document.querySelectorAll('.option-image')
const container = document.querySelector('.container')
const resultText = document.querySelector(".result-text")
const computerResult = document.querySelector(".computer-result img")
const userResult = document.querySelector(".user-result img")

const computerSrcImg = ['imagens/pedra.png', 'imagens/papel.png', 'imagens/tesoura.png']


/* 
 (R)0 Rock - Pedra
 (P)1 Paper - Papel  
 (S)2 Scissors - Tesoura
 
    Pedra - Ganha Tesoura, perde para papel
    Papel - Ganha de pedra, perde para tesoura
    Tesoura - Ganha de papel, perde de pedra 
*/

const winner = {
    RR: "Empate",
    RP: "Você",
    RS: "Computador",
    PP: "Empate",
    PR: "Você",
    PS: "Computador",
    SS: "Empate",
    SR: "Computador",
    SP: "Você"
}   


function handleOptionClick(event) {
    const clickedImage = event.currentTarget
    const userIndex = Array.from(optionImage).indexOf(clickedImage)

    container.classList.add("start")
    resultText.textContent = "..."

    userResult.src = computerResult.src = 'imagens/pedra.png'

    setTimeout(() => {
        container.classList.remove("start")

        userResult.src = computerSrcImg[userIndex]

        const randomNumber = Math.floor(Math.random() * computerSrcImg.length)
        computerResult.src = computerSrcImg[randomNumber]

        const userValue = ['R', 'P', 'S'][userIndex]
        const computerValue = ['R', 'P', 'S'][randomNumber]
        const userComputerResult = userValue + computerValue
        const finalResult = winner [userComputerResult]


        resultText.textContent = userValue === computerValue ? 'Empate' : finalResult + ' Ganhou'



    }, 2000);
}

optionImage.forEach(img => {
    img.addEventListener("click", handleOptionClick)
})  
