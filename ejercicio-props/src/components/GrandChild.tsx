import React from 'react'

interface Props {
  name:string
}

export const GrandChild =({name}:Props) => {
  return (
    <>
    <h2 className="text-lg font-semibold text-blue-700 mb-2">Componente GrandChild</h2>
    <div>{name}</div>

    </>
  )
}
