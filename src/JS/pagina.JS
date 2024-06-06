// estamos recriando a calculadora usando agora arrow function
// toda vez que usamos this estamos nos referindo a calculadora(), ou seja, quando usamos this é o mesmo que, calculadora.(metodo)
// calculadora é o nosso Objeto
function Calculadora() {
    this.display = document.querySelector('.display')

    this.capturaCliques = () => { // criando o metodo capturacliques. 
        
        document.addEventListener('click', event => { //arrow funtion
            const element = event.target
            if (element.classList.contains('btn-num')) this.addNumDisplay(element) //chamando o metodo addnumdysplay
            if (element.classList.contains('btn-clear')) this.clear() //chamando o metodo clear
            if (element.classList.contains('btn-del')) this.del() //chamando o metodo del
            if (element.classList.contains('btn-eq')) this.realizaConta() //chamado o metodo realizaconta
        })
    }

    //toda vez que voce ver isso: = () => . temos uma arrow function

    this.addNumDisplay = element => this.display.value += element.innerText //criando o metodo addnumdisplay 
    this.clear = () => this.display.value = ''                              //criando o metodo clear
    this.del = () => this.display.value = this.display.value.slice(0, -1)   //criando o metodo del

    this.realizaConta = () => { //criando o metodo realizaconta
        try {
            const conta = eval(this.display.value)

            if (!conta) {
                alert('Conta inválida')
                return
            }
            this.display.value = conta
        } catch(e) {
            alert('Conta inválida')
            return
        }
    }

    this.inicia = () =>this.capturaCliques() //criando o metodo inicia. o metodo inicia só é executado quando metodo capturacliques é executado
}

const calculadora = new Calculadora()
calculadora.inicia()