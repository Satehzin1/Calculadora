//Variavel Global
const visor = document.getElementById("resultado");

function insert(num) {
    visor.innerText += num;
};

function clean() {
    visor.innerText = "";
};

function backSpace() {
    let numeroVisor = visor.textContent;
    visor.innerText = numeroVisor.substring(0, numeroVisor.length -1);
};

function calcular(){
    let calculo = visor.innerText;

    if (calculo.length > 2) {
        
        visor.innerText = eval(calculo);

    } else {
        
        visor.innerText = "Error!!!";
        visor.style.color =  '#f00';
        visor.style.textAlign = 'center'
        setTimeout(() => {
            clean();
            visor.style.color = "#000";
            visor.style.textAlign = "right"
        }, 1000);

    };
    
};

