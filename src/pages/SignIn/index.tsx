import React from 'react'
import {useAuth} from '../../contexts/auth'

const SignIn: React.FC = () => {


    const { signed, signIn } = useAuth()
    function handleClick() {
        signIn()
         
    }
    
    return (
        <>
            <h1>Sign in</h1>
            <button onClick={handleClick}>Logar</button>
        </>
    )

}

export default SignIn;