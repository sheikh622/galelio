import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

/**
 * Authentication guard for routes
 * @param {PropTypes.node} children children element/node
 */
const AdminGuard = ({ children }) => {
    const token = useSelector((state) => state.auth.token);
    const navigate = useNavigate();
    console.log('token in AdminGuard', token);
    useEffect(() => {
        if (token == null) {
            navigate('/', { replace: true });
        } else if (token) {
            console.log('When there will be token in admin guard');
            navigate('/dashboard', { replace: true });
        }
    }, [token]);
    return children;
};

AdminGuard.propTypes = {
    children: PropTypes.node
};

export default AdminGuard;
