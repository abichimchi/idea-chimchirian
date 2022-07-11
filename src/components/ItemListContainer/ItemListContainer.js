
import React, { useState } from "react";
import ItemCount from '../ItemCount/ItemCount.js'

const ItemListContainer = () => {

    return (
        <>
            <p>Nuestro Catalogo</p>
            <ItemCount stock='5' initial='1' /> 
        </>
    );
}

export default ItemListContainer;