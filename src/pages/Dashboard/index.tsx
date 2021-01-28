import React from 'react'
import {useAuth} from '../../contexts/auth'

const Dashboard: React.FC = () => {

    const { signed, signOut } = useAuth()
    function handleClick() {
        signOut();
    }
    
    return (
        <>
            <h1>Dashboard</h1>
            <button onClick={handleClick}>Deslogar</button>
        </>
    )
}

export default Dashboard;