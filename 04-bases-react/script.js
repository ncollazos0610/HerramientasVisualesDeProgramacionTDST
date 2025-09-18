const botones= document.querySelectorAll('.btn-carrito');
console.log(botones)

botones.forEach(boton => {
    boton.addEventListener('click', ()=>{
        alert("Producto Agregado");
        console.log('Producto Agregao')
    })
})

//Capturar Buscador
const form =document.querySelector('form');
const input= document.querySelector('input');

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    alert('Buscaste: '+input.value);
})