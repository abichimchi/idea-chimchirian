import React,{useState} from "react";
import Button from '../Button/Button.js'
import Display from '../Display/Display.js'

export default function ItemCount({ stock, initial}) {
  const [contador, setContador] = useState(initial)
  return (
    <div>
        <Display value={contador}/>
        <Button operacion='+' funcion={()=> stock>contador ? setContador(contador+1) : setContador(stock)}/>
        <Button operacion='-' funcion={()=> contador<=0 ? setContador(0) : setContador(contador-1)}/>
    </div>
  );
}
