import './Item.css'

const Item = ({ item }) => {
    return (
        <div className="item">
            <img className='itemImg' src={item.img} alt="" />
            <div>
                <p className='itemName'>{item.name}</p>
            </div>
        </div>
    );
};

export default Item;
