import React, { createContext, useState } from 'react'

export const UserContext = createContext();

export const UserProvider = props => {
    const userItem = localStorage.getItem("user");
    const currentUser = userItem && JSON.parse(localStorage.getItem("user"));
    const [user, setUser] = useState(currentUser ? currentUser : null);
    return(
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    );
}