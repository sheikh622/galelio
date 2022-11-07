import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// project imports
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../../redux/auth/actions';

import axios from 'axios';

import { socialLogin } from '../../redux/auth/actions';
// ==============================|| AUTH GUARD ||============================== //

/**
 * Authentication guard for routes
 * @param {PropTypes.node} children children element/node
 */

const AuthGuard = ({ children }) => {
    const dispatch = useDispatch();
    console.log("Cookies.get('session')", Cookies.get('session'));
    const token = useSelector((state) => state.auth.token);
<<<<<<< HEAD
    let socialToken;

    if (!token) {
        socialToken = localStorage.getItem('persist:root');
        console.log('socialToken', socialToken);
    }
    console.log(token, 'token authGuard');
=======
>>>>>>> d56ebe8e9ccdb1035b99dbea47cbb0cbb74b3f54
    const navigate = useNavigate();

    const [user, setUser] = useState([]);

    useEffect(() => {
<<<<<<< HEAD
        const getUser = () => {
            fetch('http://localhost:3000/api/v1/auth/facebook/callback/success', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Credentials': true
                }
            })
                .then((response) => {
                    console.log('response', response);
                    if (response.status === 200) return response.json();
                    navigate('/dashboard', { replace: true });
                    throw new Error('authentication has been failed!');
                })
                .then((resObject) => {
                    console.log('resObject', resObject);
                    setUser(resObject.user);
                    //           let token= resObject.token;
                    //    localStorage.setItem("persist:root", JSON.stringify({token}))

                    dispatch(loginSuccess(resObject));
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        getUser();

        console.log('user', user);

        if (token) {
            navigate('/dashboard', { replace: true });
        } else {
            navigate('/login', { replace: true });
        }
    }, []);

    // useEffect(()=>{

    //     console.log("user ", user)
    //     console.log("token ", token )
    //     if (user.length > 0 || token) {
    //         navigate('/dashboard', { replace: true });
    //     } else {
    //         navigate('/login', { replace: true });
    //     }
    // },[])

    // const getAuthStatus = () => {
    //     axios({
    //         method: 'get',
    //         url: 'http://localhost:3000/api/v1/auth/facebook/callback/success'
    //     }).then(function (response) {
    //         console.log("response.data", response.data)
    //         if (token != '') {
    //             navigate('/dashboard', { replace: true });
    //         } else {
    //             navigate('/login', { replace: true });
    //         }
    //     });
    // };

    // useEffect(() => {
    //     getAuthStatus();
    // }, []);
    // useEffect(() => {

    // if (token == '') {
    //     navigate('/login', { replace: true });
    // } else {
    //     navigate('/dashboard', { replace: true });
    // }
    // }, [token]);
=======
        if (token == '') {
            navigate('login', { replace: true });
        }
    }, [token, navigate]);

>>>>>>> d56ebe8e9ccdb1035b99dbea47cbb0cbb74b3f54
    return children;
};

AuthGuard.propTypes = {
    children: PropTypes.node
};

export default AuthGuard;
