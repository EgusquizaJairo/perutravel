// import { useRef } from 'react';
import { Navigate} from 'react-router-dom';
import PropTypes from 'prop-types';
import useAuth from 'src/hooks/useAuth';
import { isMobile } from "react-device-detect";

const Guest = ({ children }) => {
  const { isAuthenticated, user } = useAuth();
  // const ws = useRef();
  // // const WebSocket = require('ws');
  // ws.current = new WebSocket("ws://localhost:5000");
  // ws.current.onopen = () => {
  //   console.log("Connection opened");
  // };
  // const navigate = useNavigate();
  // const { logout } = useAuth();
  // const handleLogout = async () => {
  //   try {
  //     await logout();
  //     navigate('/');
  //     // window.location.replace('https://inf227i4.inf.pucp.edu.pe/');
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  
  if (isAuthenticated) {
    localStorage.setItem('personId', user.id)
    const { role } = user.person;
    if (role === 1) return <Navigate to="/search"/>;
    if (role === 2 && isMobile) return <Navigate to="/sapt/employeeOpe"/>;
    // if (role === 2) return <Navigate to="/aim/associated" />;
    // if (role === 3) return <Navigate to="/aim/admin" />;
    // if (documentNumber === null)
    //   return <Navigate to="/account/register/google" />;
    // if (role === 0) return <Navigate to="/aim/student" />;
    // handleLogout();
  }

  return <>{children}</>;
};

Guest.propTypes = {
  children: PropTypes.node
};


export default Guest;
