function addNumber(num) {
    // alert("Um Vírus Foi Instalado em Seu Computador!😧😧😧😧 Clique Aqui e Remova")

    const valorNumber = document.querySelector(".number").value

    document.querySelector(".number").value = valorNumber + num


}

function clearNumber(){
    document.querySelector(".number").value = ""
}

function calc(){
    const valorNumber = document.querySelector(".number").value

    document.querySelector(".number").value = eval(valorNumber)

}


function invertNumber(){
    const valorNumber = document.querySelector(".number").value

    document.querySelector(".number").value = valorNumber * -1

}
