import {createContext} from 'react';
 
const UserContext = createContext  ({
    user:{
        name: "Dumy Name",
        email: "Dumy@email.com",
    },
});
export default UserContext;