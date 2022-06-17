import { createContext, useState } from "react";

export const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUserData] = useState('');
  const [extendedUserData, setExtendedUserData] = useState('');

  

  return (
    <AdminContext.Provider value={{isAdmin,setIsAdmin,user, setUserData, extendedUserData, setExtendedUserData}}>{children}</AdminContext.Provider>
  );
};
