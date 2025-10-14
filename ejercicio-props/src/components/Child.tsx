import {GrandChild} from "./GrandChild"

interface Props {
  name:string,
  age:number
}

export const Child =({name,age}:Props) => {
  return (
    <div><h2 className="text-lg font-semibold text-blue-700 mb-2">Componente Child</h2><div>Edad: {age}</div>
    
    <div><GrandChild name ={name}/></div>
    </div>
  )
}
