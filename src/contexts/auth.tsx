import { promises } from 'fs';
import { createContext, useState, useEffect, useContext } from 'react';
import * as auth from '../services/auth';
import api from '../services/api';
import AuthRoutes from '../routes/auth.routes';


interface AuthContextData {
    signed: boolean;
    user: object | null;
    loading: boolean;
    signIn(): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {

    const [user, setUser] = useState <object | null> (null)
    const [loading, setLoading] = useState(true)


    

    useEffect(() => {
        async function loadStoragedData() {
            const storageUser = await localStorage.getItem('RAB:user')
            const storageToken = await localStorage.getItem('RAB:token')

            await new Promise((resolve) => setTimeout(resolve, 2000));

            if (storageUser && storageToken) {

                api.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem('RAB:token')}`


                setUser(JSON.parse(storageUser))
                setLoading(false)
            }
        }

        loadStoragedData()
    }, [])

    async function signIn() {
       const response = await auth.signIn();
      
       setUser(response.user)

       api.defaults.headers['Authorization'] = `Bearer ${response.token}`

       await localStorage.setItem('RAB:user', JSON.stringify(response.user))
       await localStorage.setItem('RAB:token', response.token)

    }

    async function signOut() {
        setUser(null);
        await localStorage.removeItem('RAB:user')
         await localStorage.removeItem('RAB:token')
    }

  

    return (
        <AuthContext.Provider value={{signed: !!user, user: user, loading, signIn, signOut}}>
            { children }
        </AuthContext.Provider>
    )
};

export function useAuth() {
    const context = useContext(AuthContext)

    return context;
}