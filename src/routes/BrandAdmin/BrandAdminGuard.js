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
const BrandAdminGuard = ({ children }) => {
    const token = useSelector((state) => state.auth.token);
    const navigate = useNavigate();
    // console.log(token,"token authGuard")
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

BrandAdminGuard.propTypes = {
    children: PropTypes.node
};

export default BrandAdminGuard;
