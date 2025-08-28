import React, { useState } from 'react'

export const BasicTypes = () => {
   let name: string = "Nicolas"; //Variable //let para poder modificar
   //const age: number = 20; // Variable de estado
   const [age, setAge] = useState(28); //useStateSnipped para variable de estado
   //dar click a ctrl+space+enter para importar libreria
   //let isActive: boolean = true;
   const [isActive, setActive] = useState(true);

  return (
    <>
        <h3>Basic Types</h3>
        {isActive? //Operador ternario 
        //si es true:
        <ul>
            <li>Nombre: {name}</li>
            <li>Edad: {age}</li>
        </ul>/*para el false dos puntos*/:
        <p>Usuario Inactivo</p>
        }

        <h2>Variable Normal</h2>
        <button onClick={
          ()=> {
            console.log(`El nombre es: ${name}`)
          }
          }>Dar Nombre</button>

        <h2>Variable de Estado Age</h2>
        <button onClick={
          ()=> {
            setAge(29);
            console.log(`El valor de age es: ${age}`)
          }
          }>Modificar Edad</button>

        <h2>Variable de Estado Boleano</h2>
        <button onClick={
          ()=> {
            setActive(!isActive);
            console.log(`El usuario esta: ${isActive}`)
          }
          }>Modificar Estado</button>
    </>

  )
}
