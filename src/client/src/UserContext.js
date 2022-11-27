import React from "react";
import { useNavigate } from "react-router-dom";
import { TOKEN_POST, USER_POST } from './api'
import useFetch from "./Hooks/useFetch";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
    const [user, setUser] = React.useState(null);
    const [login, setLogin] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const { request } = useFetch();
    const navigate = useNavigate();

    const userLogout = () => {
        window.localStorage.clear();
        navigate('/login');
        setLogin(false);
        setUser(null);
    }

    React.useEffect(() => {
        const autoLogin = () => {
            const token = window.localStorage.getItem('token');
            if (!token) {
                setLogin(false);
            } 
        }
        autoLogin();
    }, [navigate]);


    const userPost = async (name, email, password, document, phone, birthday) => {

        setLoading(true)

        const { url, options } = USER_POST({
            name: name,
            email: email,
            password: password,
            document: document,
            phone: phone,
            birthdayDate: birthday,
        });

        const { response } = await request(url, options);

        if (response.ok) {
            setError(false)
            setLoading(false)
            setLogin(false)
            navigate('/login')
        } else if (response.status !== 200) {
            setError('Tivemos algum problema :(. Verifique as informações ou contate o suporte.')
            console.log(error)
            setLoading(false)
            setLogin(false)
        }
    };

    const userLogin = async (email, password) => {
        setLoading(true)

        const { url, options } = TOKEN_POST({
            email: email,
            password: password,
        })

        const { json, response } = await request(url, options);

        let id = json.id_User;
        let token = json.access_Token;
        let newUser = json.user;

        if (response.ok) {
            console.log("ID: ",id)
            console.log("TOKEN: ",token)
            console.log("NEWUSER: ",newUser)
            window.localStorage.setItem('token', token);
            window.localStorage.setItem('user', newUser);
            window.localStorage.setItem('id', id);
            setError(false)
            setLogin(true)
            setUser(newUser)
            navigate('/')
            setLoading(false)
        } else {
            setError('Email ou senha inválidos.')
            setLoading(false)
            setLogin(false)
        }
    }

    return (
        <UserContext.Provider
            value={{ userLogin, userPost, user, userLogout, loading, error, login }}>
            {children}
        </UserContext.Provider>
    )
}