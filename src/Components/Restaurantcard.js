

const RestaurantCard = ({image, name, cusines}) =>{
        
    return (
        <div className="w-[200px] h-[350px] p-2 m-2 shadow-lg">
            <img className="w-[200px] h-[200px]" src= {image} />
            <h3 className="font-bold text-xl py-2">{name}</h3>
            <p>{cusines.join(", ")}</p>
        </div>
    );
};

export default RestaurantCard;