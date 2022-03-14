import React from 'react';
import { useNavigate } from 'react-router-dom';

// firebase
import { auth } from '../Firebase';

// components
import Navbar from './Navbar';


const Chat = () => {

    const navigate = useNavigate()

    const logoutHandler = async () => {
        auth.signOut()
        navigate('/')
    }

    return (
        <div>
            <Navbar logoutHandler={logoutHandler} />
            
        </div>
    );
};

export default Chat;
