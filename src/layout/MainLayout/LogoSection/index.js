import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
import config from 'config';
import Logo from 'ui-component/Logo';
// import logo from '../assets/images/Ange_logo.png';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
    <ButtonBase disableRipple component={Link} to={config.defaultPath}>
    <p style={{fontSize:'20px', fontWeight:"bolder"}}>Galileo </p>
        {/* <Logo   sx={{ width:" 53px"}}  /> */}
        {/* <img style={{width: '100px' }} src={logo} alt="Sticky Notes" /> */}
        
    </ButtonBase>
);

export default LogoSection;
