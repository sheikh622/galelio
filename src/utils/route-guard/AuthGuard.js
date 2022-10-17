import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

// project imports
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// ==============================|| AUTH GUARD ||============================== //

/**
 * Authentication guard for routes
 * @param {PropTypes.node} children children element/node
 */
const AuthGuard = ({ children }) => {
    const token = useSelector((state) => state.auth.token);
    console.log(token,"token authGuard")
    const navigate = useNavigate();

    useEffect(() => {
        if (token == '') {
            navigate('/login', { replace: true });
        }
        else{
            navigate('/dashboard', { replace: true }); 
        }
    }, [token]);
    return children;
};

AuthGuard.propTypes = {
    children: PropTypes.node
};

export default AuthGuard;
