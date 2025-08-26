import React from 'react'

export const BasicTypes = () => {
   const name: string = "Nicolas";
   const age: number = 20;
   let isActive: boolean = true;

  return (
    <>
        <div>Hello World</div>

        <div>
            {" "+name}
        </div>

        <div>BasicTypes</div>
 
        <div>
            {" "+age}
        </div>

        <div>
            {" "+isActive}
        </div>
    </>

  )
}
