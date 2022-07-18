
import React, { useState } from "react";
import ItemCount from '../ItemCount/ItemCount.js'
import { useEffect } from "react";
import {products} from '../../mock/products';
import ItemDetail from "./ItemDetail.js";

const ItemDetailContainer = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const traerProductos = new Promise((resolved, rejected) => {
            setTimeout(() => {
                resolved(products);
            }, 2000);
        });
        traerProductos
            .then((data) => {
                setItems(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    return (
        <>
            <p>Nuestro Catalogo</p>
            <ItemCount stock={5} initial={1} /> 
            <ItemDetail/>
        </>
    );
}

export default ItemDetailContainer;