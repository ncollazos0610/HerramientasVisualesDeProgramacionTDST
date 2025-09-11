import React, { useState } from 'react'

export const BasicTypes = () => {
  const name: string = "Víctor";
  const age: number = 28;
  //const isActive: boolean = true;
  const [isActive, setisActive] = useState(true)
  

  const names=[

    "Carvajal",
    "Nicolas",
    "Jaime",
    "Victor",
    "Paula"
  ];
  /*llave de valor*/
  const user ={
    /*llave : valor*/
    name: "Juanito",
    email: "juan@gmail.com",
    edad: 19,
    role: "admin",
    maritalStatus: "casado",
    isActive: true
  }
    // Listas de objetos literales
  const users=[
    {
    /*llave : valor*/
    name: "Juanito",
    email: "juan@gmail.com",
    edad: 19,
    role: "admin",
    maritalStatus: "casado",
    isActive: true
  },
  {
    /*llave : valor*/
    name: "Nicolas",
    email: "ncol@gmail.com",
    edad: 25,
    role: "admin",
    maritalStatus: "soltero",
    isActive: true
  },
  {
    /*llave : valor*/
    name: "Paula",
    email: "pau8@gmail.com",
    edad: 18,
    role: "admin",
    maritalStatus: "Divorciada",
    isActive: true
  }

    
  ]

  return (
    <>

      <div>BasicTypes</div>
      <h2>Constantes</h2>

      {/* shift+alt+f para identar el codigo */}
      {/* ctrl mas } para comentar */}
      {/* ul>((li>(b+span))*3) : */} 

      <ul>
        {/* li*3 : */}
        <li>Nombre: {name}</li>
        <li>Edad: {age}</li>
        <li>Activo: {isActive ? "Sí" : "No"}</li>
      </ul>

      <button onClick={() => setisActive(!isActive)}>
        {isActive ? "Desactivar" : "Activar"}
      </button>

    {names[4]}

    <ul>
    {/*Parametros           return */}
    {names.map((name,index)=><li key ={index}>
    {name}

    {/* puede ser button
    {names.map((name,index)=><button key ={index}>
    {name}</button> */}

    </li>
    
    )}
    </ul>

    <h2>Objetos literales</h2>
    {user.name}
    <p> </p>
    {user.isActive? "Activo" : "Inactivo"}

    <h2>Listas de objetos Literales</h2>
    <ul>
      {/* para recodar y estudiar */}
      <hr />
      {users.map((user,index)=><div key={index}>
        <div>{user.name}</div>
        <div>{user.edad}</div>
        <div>{user.email}</div>
        <div>{user.role}</div>
        <hr />  {/* linea de separacion */}
      </div>)}
    </ul>

    </>
  )
}

export default BasicTypes
