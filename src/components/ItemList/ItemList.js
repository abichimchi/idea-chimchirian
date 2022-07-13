import Item from '../Item/Item';

const styles={display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'flex-end'};

const ItemList = ({ items }) => {
    return (
        <div className="itemlist" style={styles}>
            {items.map((item) => (
                <Item item={item} key={item.id} />
            ))}
        </div>
    );
};

export default ItemList;