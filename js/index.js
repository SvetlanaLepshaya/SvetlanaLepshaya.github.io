
const input = document.querySelectorAll('.input-field')
const inputLabel = document.querySelectorAll('.input-field+label');



for (let i = 0; i < input.length; i++) {
    input[i].onfocus = function() {
        inputLabel[i].style.top = '-10px'
    }
    
    input[i].onblur = function() {
        if (input[i].value === '') {
            inputLabel[i].style.top = '10px'
        }
    }
}