// Declarando el evento de suma
const funcSuma = document.getElementById('sum').addEventListener('click', suma)

// Creando la funcion de suma 
function suma (){
    let valueOne = parseFloat(document.getElementById('numberone').value);
    let valueTwo = parseFloat(document.getElementById('numbertwo').value);

    let result = document.getElementById('result');
    result.value = valueOne + valueTwo
}

// ----------------------------------------------------------------------------

// Declarando el evento de resta
const funcResta = document.getElementById('rest').addEventListener('click', rest)

// Creando la funcion de resta 
function rest (){
    let valueOne = parseFloat(document.getElementById('numberone').value);
    let valueTwo = parseFloat(document.getElementById('numbertwo').value);

    let result = document.getElementById('result');
    result.value = valueOne - valueTwo
}

// ----------------------------------------------------------------------------

// Declarando el evento de multiplicacion
const funcMultiplication = document.getElementById('multiplication').addEventListener('click', multiplication)

// Creando la funcion de multiplicacion 
function multiplication (){
    let valueOne = parseFloat(document.getElementById('numberone').value);
    let valueTwo = parseFloat(document.getElementById('numbertwo').value);

    let result = document.getElementById('result');
    result.value = valueOne * valueTwo
}

// ----------------------------------------------------------------------------

// Declarando el evento de division
const funcDivision = document.getElementById('division').addEventListener('click', division)

// Creando la funcion de division 
function division (){
    let valueOne = parseFloat(document.getElementById('numberone').value);
    let valueTwo = parseFloat(document.getElementById('numbertwo').value);

    let result = document.getElementById('result');
    result.value = valueOne / valueTwo
}

// ----------------------------------------------------------------------------

// Declarando el evento de reseteo
const funcClear = document.getElementById('clear').addEventListener('click', clear)

// Creando la funcion de reseteo 
function clear (){
    let valueOne = document.getElementById('numberone');
    let valueTwo = document.getElementById('numbertwo');
    let result = document.getElementById('result');
    
    valueOne.value = ''
    valueTwo.value = ''
    result.value = ''
}

// ----------------------------------------------------------------------------

// Declarando el error de vacios


// SI FUNCIONA 
// const funcError = document.getElementById('operation-buttom').addEventListener('click', error)

// // NO FUNCIONA
// const funcError = document.getElementsByClassName('operation-buttom').addEventListener('click', error)

// Creando la funcion de reseteo (La llamo en el HTML)
function error (){
    let valueOne = document.getElementById('numberone').value;
    let valueTwo = document.getElementById('numbertwo').value;
    
    if(valueOne == '' || valueTwo == ''){
        document.getElementById('error').classList.add('error');
    }
}

function hiddenError (){
    let check = document.getElementById('error').classList.contains('error');
    if(check){
        document.getElementById('error').classList.remove('error');
    }
}

setInterval(hiddenError, 5000)


