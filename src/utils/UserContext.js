import { createContext } from "react"

const  UserContext = createContext({
    loggedInUser: "Default user"  //this is data which any component can use
})

export default UserContext;