//достаем информацию
// document.querySelector('.b-one').addEventListener('click', () => {
//     document.querySelector('.block-out-one').innerHTML =  document.querySelector('.input-one').value;
// });

// document.querySelector('.button-color').addEventListener('click', () => {
//     document.querySelector('.block-out-color').innerHTML =  document.querySelector('.color-choise').value;
// });

//checkbox
// document.querySelector('.checkbox-button').addEventListener('click', () => {
//     document.querySelector('.block-out-cheked').innerHTML =  document.querySelector('.checkbox-input').value;
// }); 
// const start = () => {
//     console.log('start')
//     const checkbox = document.querySelector('.checkbox-input')  
   // document.querySelector('.checkbox-input').checked = true  
//console.log(checkbox) 
// document.addEventListener('DOMContentLoaded', function () {
//     document.querySelector('.checkbox-button').addEventListener('click', () => {
//         if (document.querySelector('.checkbox-input').checked) {
//             document.querySelector('.checkbox-input').checked = false
//         } else {
//             document.querySelector('.checkbox-input').checked = true
//         };
//     });
// // }, false);

// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelector('.button-radio').addEventListener('click', () => {
//         let radio = document.querySelectorAll('.input-radio')
//         for(let i = 0; i < radio.length; i++) {
//             if(radio[i].checked) {
//                 data = radio[i].value;
//                 console.log(data);
//                 break;
//             }
//         }
//         document.querySelector('.block-out-radio').innerHTML = data;
//     });
// },false);
// //password
// document.querySelector('.buttton-password').addEventListener('click', () => {
//     document.querySelector('.block-out-password').innerHTML = document.querySelector('.input-password').value;
// });
// //document.addEventListener('DOMContentLoaded', function() {
//     document.querySelector('.button-select').addEventListener('click', () => {
//         document.querySelector('.block-out-select').innerHTML = document.querySelector('.select-input').value;
//     });
// //  },false);
// document.querySelector('.text-button').addEventListener('click', () => {
//     document.querySelector('.block-out-text   ').innerHTML = document.querySelector('.text-input').value;
// });
//form
document.querySelector('.form-input').addEventListener('submit', (event) => {
    event.preventDefault();
    const formInput = document.querySelector('.form-input')
    console.dir(formInput.elements.proof.value) //id находит елемент через консоль .e
});