import { createContext, useContext, useState } from 'react';
import type { PropsWithChildren } from 'react';


enum AuthStatus {
    checking = 'checking',
    authenticated = 'authenticated',
    unauthenticated = 'unauthenticated',
}

interface AuthState {
    status: AuthStatus;
    token?: string;
    user?: User;
    isAuthenticated: boolean;
    isChecking: boolean;
    signIn: (email: string, password: string) => void;
}

interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

const USER_LIST: User[] = [
    { id: 1, name: 'Nicolas', email: 'nico@example.com', password: '1234' },
    { id: 2, name: 'Sofia', email: 'sof@example.com', password: 'abcd' },
];

export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
    const [status, setStatus] = useState(AuthStatus.unauthenticated);
    const [user, setUser] = useState<User>();

    function signIn(email: string, password: string) {
        const usersFound = USER_LIST.filter(
            (value) => email === value.email && password === value.password
        );

        setStatus(AuthStatus.checking);

        if (usersFound.length > 0) {
            setUser(usersFound[0]);
            setTimeout(() => setStatus(AuthStatus.authenticated), 3000);
        } else {
            setTimeout(() => setStatus(AuthStatus.unauthenticated), 3000);
        }
    }

    return (
        <AuthContext.Provider
            value={{
                status: status,
                isChecking: status === AuthStatus.checking,
                isAuthenticated: status === AuthStatus.authenticated,
                user,
                signIn,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
