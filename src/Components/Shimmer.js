const Shimmer = () => {
    return ( 
        <div className="resturantlist">
            {Array(5).fill("").map((e, index) => 
                (<div key={index} className="Shimmer-card"></div>))}
        </div>
        
)
}

export default Shimmer