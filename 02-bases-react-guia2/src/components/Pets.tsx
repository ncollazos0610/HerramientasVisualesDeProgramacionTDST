import React from 'react'
import './Pets.css'

export const Pets = () => {

    const pets = [

        "Perro",
        "Loro",
        "Rana",
        "Gato",
        "Hamster"
    ];

    return (
        <>
            <div>Pets</div>
            <div>
                <h2>Imprime la lista de nombres con <span>Map</span></h2>
                {pets.map((pet, index) => <div key={index}>
                    {pet}
                </div>
                )}

                <h2>Imprime todos los elementos de la lista separados por comas</h2>

                {pets.join(" , ")}

            </div>

            
        </>
    )
}

export default Pets
/*RECORDAR IDENTAR SHIFT + ALT +F*/

