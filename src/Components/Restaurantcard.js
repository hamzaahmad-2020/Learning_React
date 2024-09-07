

const RestaurantCard = ({image, name, cusines}) =>{
        
    return (
        <div className="card">
            <img src= {image} />
            <h3>{name}</h3>
            <p>{cusines.join(", ")}</p>
        </div>
    );
};

export default RestaurantCard;