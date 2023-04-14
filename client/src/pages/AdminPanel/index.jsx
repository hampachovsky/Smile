import React, { useCallback, useState } from 'react';
import { LoginForm } from './LoginForm';

export const AdminPanel = () => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));
    const handleAuth = useCallback(() => {
        setIsAuth(true);
        localStorage.setItem('isAuth', true);
    }, []);
    return isAuth ? <div>ADMIN pannel</div> : <LoginForm handleAuth={handleAuth} />;
};
