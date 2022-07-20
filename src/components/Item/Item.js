import './Item.css'
import {Link} from "react-router-dom"
const Item = ({ name,img,id }) => {
    return (
        <div className="item">
            <img className='itemImg' src={item.img} alt="" />
            <div>
                <p className='itemName'>{item.name}</p>
            </div>
            <Link to={`/items/${id}`}><button>DETALLE</button></Link>
        </div>
    );
};

export default Item;
