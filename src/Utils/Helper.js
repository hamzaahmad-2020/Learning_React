export function filterData (searchText, restaurants) {
    const filterdata = restaurants.filter((restaurant) => 
     restaurant.name.includes(searchText)
    
    );
    return filterdata;
    
 };