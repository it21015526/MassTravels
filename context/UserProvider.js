import React, { createContext, useContext, useEffect, useState } from 'react'

const UserContext = createContext()

const UserDetailsProvider = ({ children }) => {
    const [usernameG,setUsernameG] =useState("");
    return (
        <UserContext.Provider value={{ usernameG, setUsernameG}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserName = () => useContext(UserContext);
export default UserDetailsProvider;