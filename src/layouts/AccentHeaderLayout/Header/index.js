// import { useContext } from 'react';
// import useAuth from 'src/hooks/useAuth';

import { useNavigate } from 'react-router-dom';
import useAuth from 'src/hooks/useAuth';
import LogoutIcon from '@mui/icons-material/Logout';
import {
  Box,
  Card,
  Button,
 //  IconButton,
  // Tooltip,
  alpha,
  styled
} from '@mui/material';
// import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
// import { SidebarContext } from 'src/contexts/SidebarContext';
// import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
// import HeaderSearch from './Search';
// import HeaderButtons from './Buttons';
// import HeaderUserbox from './Userbox';
import Logo from './Logo';



const HeaderWrapper = styled(Card)(
  ({ theme }) => `
    height: ${theme.header.height};
    color: ${theme.header.textColor};
    padding: ${theme.spacing(0, 2)};
    right: 0;
    z-index: 6;
    background-color: ${alpha(theme.colors.primary.main, 0.95)};
    backdrop-filter: blur(3px);
    position: fixed;
    justify-content: space-between;
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: 0;
`
);

// const IconButtonPrimary = styled(IconButton)(
//   ({ theme }) => `
//     background: ${theme.colors.alpha.trueWhite[10]};
//     color: ${theme.colors.alpha.trueWhite[70]};
//     padding: 0;
//     width: 42px;
//     height: 42px;
//     border-radius: 100%;
//     margin-left: ${theme.spacing(2)};
//     &.active,
//     &:active,
//     &:hover {
//       background: ${alpha(theme.colors.alpha.trueWhite[30], 0.2)};
//       color: ${theme.colors.alpha.trueWhite[100]};
//     }
// `
// );

const BoxLogoWrapper = styled(Box)(
  ({ theme }) => `
  margin-right: ${theme.spacing(2)};
  @media (min-width: ${theme.breakpoints.values.lg}px) {
    width: calc(${theme.sidebar.width} - ${theme.spacing(9)});
  }
    
`
);

function Header() {
  // const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  // const { user } = useAuth();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      // window.location.replace('https://inf227i4.inf.pucp.edu.pe/');
    } catch (err) {
      console.error(err);
    }
  };
  console.log(user);
  return (
    <HeaderWrapper>
      <Box display="flex" alignItems="center">
        <BoxLogoWrapper>
          <Logo />
        </BoxLogoWrapper>
        {/* <span style={{ fontSize: 38,fontWeight: "bold",color:"white"}}>SAPT</span> */}
        <Box
          component="span"
          sx={{
            display: { xs: 'none', sm: 'inline-block' }
          }}
        >
          {/* <HeaderSearch /> */}
          {/* {user.person.role === 0 && (
            <Button
              variant="outlined"
              color="white"
              href="/aim/student/courses"
            >
              Explorar Cursos
            </Button>
          )} */}
        </Box>
      </Box>
      <Box display="flex" alignItems="center">
        {/* {user.person.role === 0 && <HeaderButtons />} */}
        {/* <HeaderUserbox /> */}
        <Box
          component="span"
          sx={{
            display: { lg: 'none', xs: 'inline-block' }
          }}
        >
          <Button color="primary" fullWidth onClick={handleLogout} 
          style={{visibility:user === null ? 'hidden':undefined}}>
            <LogoutIcon
              sx={{
                mr: 1,color:'#FFFFFF'
              }}
            />
          </Button>
        </Box>
      </Box>
    </HeaderWrapper>
  );
}

export default Header;