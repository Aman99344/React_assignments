import { createContext } from 'react'

export const AuthContext = createContext()

function CustumProvider(props){
    return <AuthContext.Provider  >{props.children}</AuthContext.Provider>
}

export default CustumProvider;