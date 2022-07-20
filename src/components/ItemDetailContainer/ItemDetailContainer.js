
import React, { useState } from "react";
import { useEffect } from "react";
import products from '../../mock/products';
import ItemDetail from "./ItemDetail.js";
import {useParams} from "react-router-dom"

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
  const {id} = useParams()

    const traerItemPorId = () => {
      return new Promise((resolve)=>{
        setTimeout(()=>{
          resolve(products.find(obj => obj.id === id))
        }, 1000)
      })
    }
  
    useEffect(()=>{
      traerItemPorId().then(respuesta=>{
        setItem(respuesta)
      }      
      )
    },[])
  
  
    return (
      <ItemDetail item={item}/>
    )
  }
  
  export default ItemDetailContainer;
