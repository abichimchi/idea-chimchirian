
const cant = 1;

let stylesCart={
    width: '6vw'
}

let stylesCant={
    padding:'1rem',
    alignItems:' center',
    alignSelf: 'center',
}

let stylesContendorCart={
    backgroundColor:'grey',
    margin:'1rem',
    display: 'inline-flex',
    borderRadius: '3px'
}

const CartWidget = () => {
    return (
        <>
            <div style={stylesContendorCart}>
            <img style={stylesCart} src="../cart-icon.png" alt="carrito" />
            <h2 style={stylesCant}>{cant}</h2>
            </div>
        </>
    );
}


export default CartWidget;