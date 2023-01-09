const input = document.querySelectorAll('.input__field');
const inputLabel = document.querySelectorAll('.input__field+label');

/*input.onfocus = function() {
    inputLabel.style.top = '-10px';
    input.style.borderColor = 'black';
};

input.onblur = function() {
    if (input.value === '') {
        inputLabel.style.top = '10px';
        
    }
}
*/
for (let i = 0; i < input.length; i++) {
    input[i].onfocus = function () {
        inputLabel[i].style.top = '-10px';
        input[i].style.borderColor = 'black';
    }
    ;
    input[i].onblur = function () {
        if (input[i].value === '') {
        inputLabel[i].style.top = '10px';
        input[i].style.borderColor = 'lightgray';
        }
        
    }
}