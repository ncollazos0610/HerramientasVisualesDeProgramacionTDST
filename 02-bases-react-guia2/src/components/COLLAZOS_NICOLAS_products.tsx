import React, { useState } from 'react'

export const Products = () => {

  // Interface tipo Product

  interface Product {
    name?: string; // Si usamos el signo de interrogacion hacemos que el dato sea opcional y pueda recibir null
    precio: number;
    descripcion: string;
    stock: number;

  }
  // Listas de objetos literales
  // implementacion de interface
  const products: Product[] = [
    {
      /*llave : valor*/
      name: "Acetaminofen",
      precio: 42000,
      descripcion: "Pastillero",
      stock: 10

    },
    {
      /*llave : valor*/
      name: "Mielteltos",
      precio: 52000,
      descripcion: "Jarabe 500ml",
      stock: 20
    },
    {
      /*llave : valor*/
      name: "Citrato de Magnesio",
      precio: 50000,
      descripcion: "Polvos 50g",
      stock: 15
    }


  ]

  return (
    <>

      <div>Nicolas Collazos Rozo</div>
      <h2>Productos</h2>

      {/* shift+alt+f para identar el codigo */}
      {/* ctrl mas } para comentar */}
      {/* ul>((li>(b+span))*3) : */}


      <h2>Listas de objetos Literales</h2>
      <ul>
        {/* para recodar y estudiar */}
        <hr />
        {products.map((product, index) => <div key={index}>
          <div><span>Nombre: </span> {product.name}</div>
          <div><span>Precio: </span> {product.precio}</div>
          <div><span>Descripcion: </span> {product.descripcion}</div>
          <div><span>Stock: </span> {product.stock}</div>
          <hr />  {/* linea de separacion */}
        </div>)}
      </ul>

    </>
  )
}
