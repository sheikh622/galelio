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
const SubAdminGuard = ({ children }) => {
    const token = useSelector((state) => state.auth.token);
    const navigate = useNavigate();
   
    useEffect(() => {
        if (token == '') {
            navigate('/', { replace: true });
        }
        else{
            navigate('/dashboard', { replace: true }); 
        }
    }, [token]);

    return children;
};

SubAdminGuard.propTypes = {
    children: PropTypes.node
};

export default SubAdminGuard;
