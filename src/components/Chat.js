import React, { useContext, useEffect, useState } from 'react';
import { Avatar, ChatEngine } from 'react-chat-engine';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// context 
import { authCon } from '../context/AuthContext';

// icon
import { LoadingOutlined } from '@ant-design/icons';


// firebase
import { auth } from '../Firebase';

// components
import Navbar from './Navbar';


const Chat = () => {

    const navigate = useNavigate()

    const [loading, setLoading] = useState(true)
    const user = useContext(authCon)

    useEffect(() => {
        if (!user) {
            navigate('/')
            return
        }
        console.log(user)
        axios
            .get("https://api.chatengine.io/users/me", {
                headers: {
                    "project-id": "99bbad5f-f895-4a62-bc53-b46fe48a6ce8",
                    "user-name": user.email,
                    "user-secret": user.uid,
                },
            })
            .then(() => setLoading(false))
            .catch(() => {
                const formData = new FormData();
                formData.append("email", user.email);
                formData.append("username", user.email);
                formData.append("secret", user.uid);
                getPicture(user.photoURL).then((photo) => {
                    formData.append("avatar", photo, photo.name);
                    axios
                        .post("https://api.chatengine.io/users/", formData, {
                            headers: {
                                "private-key": "8c074374-59e0-4214-a572-e876cbcdff01",
                            },
                        })
                        .then(() => {
                            setLoading(false);
                        });
                    // .catch((error) => console.log(error));
                });
            });
    }, [user, navigate])

    const getPicture = async (url) => {
        const fetched = await fetch(url)
        const response = await fetched.blob()
        return new File([response], 'userAvatar.jpg' , {type: 'image/jpeg'})
    }

    if (!user || loading) return <LoadingOutlined />    


// for navbar
    const logoutHandler = async () => {
        auth.signOut()
        navigate('/')
    }

    return (
        <div>
            <Navbar logoutHandler={logoutHandler} />
            <ChatEngine
                height="calc(100vh-60px)"
                projectID="99bbad5f-f895-4a62-bc53-b46fe48a6ce8"
                userName={user.email}
                userSecret={user.uid}
            />
        </div>
    );
};

export default Chat;
