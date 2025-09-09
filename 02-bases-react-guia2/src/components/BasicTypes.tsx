import React, { useState } from 'react'

export const BasicTypes = () => {
  const name: string = "Víctor";
  const age: number = 28;
  //const isActive: boolean = true;
  const [isActive, setisActive] = useState(true)

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

    </>
  )
}

export default BasicTypes
