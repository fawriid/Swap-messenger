import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


// firebase
import { auth } from '../Firebase';


export const authCon = React.createContext()


const AuthContext = (props) => {
    
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setLoading(false)
            setUser(user)
            if(user) navigate('/chat')
        })

    }, [user,navigate])

    return (
        <div>
            <authCon.Provider value={user}>
                {!loading && props.children}
            </authCon.Provider>
        </div>
    );
};

export default AuthContext;