import { useContext} from 'react';
import Scrollbar from 'src/components/Scrollbar';
import { SidebarContext } from 'src/contexts/SidebarContext';
import useAuth from 'src/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Box, Drawer, styled, useTheme, Button } from '@mui/material';
import { isMobile } from 'react-device-detect';
import Logo from 'src/components/LogoSign';
import LogoutIcon from '@mui/icons-material/Logout';
import SidebarMenu from './SidebarMenu';
// import SidebarTopSection from './SidebarTopSection';



const SidebarWrapper = styled(Box)(
  ({ theme }) => `
        width: ${theme.sidebar.width};
        min-width: ${theme.sidebar.width};
        // color: ${theme.sidebar.textColor};
        // background: ${theme.sidebar.background};
        // box-shadow: ${theme.sidebar.boxShadow};
        position: relative;
        z-index: 7;
        height: 100%;
        @media (min-width: ${theme.breakpoints.values.lg}px) {
          height: calc(100% - ${theme.header.height});
          margin-top: ${theme.header.height};
        }
`
);

const TopSection = styled(Box)(
  ({ theme }) => `
        margin: ${theme.spacing(2)};
`
);



function Sidebar() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const closeSidebar = () => toggleSidebar();
  const theme = useTheme();
  
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
    <>
      <SidebarWrapper
        sx={{
          display: {
            xs: 'none',
            lg: 'inline-block'
          },
          position: 'fixed',
          left: 0,
          top: 0
        }}
      >
        <Scrollbar style={{visibility:'hidden'}}>
          <TopSection>{/* <SidebarTopSection /> */}</TopSection>
          <SidebarMenu />
        </Scrollbar>
      </SidebarWrapper>
      <Drawer
        sx={{
          boxShadow: `${theme.sidebar.boxShadow}`
        }}
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open={sidebarToggle}
        onClose={closeSidebar}
        variant="temporary"
        elevation={9}
      >
        <SidebarWrapper>
          <Scrollbar>
            <TopSection>
              <Box
                sx={{
                  width: 52,
                  ml: 1,
                  mt: 1,
                  mb: 3
                }}
              >
                <Logo />
              </Box>
              {/* <SidebarTopSection /> */}
            </TopSection>
            <SidebarMenu />
          </Scrollbar>
        </SidebarWrapper>
      </Drawer>
      <Box m={1} style={{marginLeft:'3%',marginTop:'45%',position:'fixed',display:'block',zIndex:'100',visibility:isMobile ? 'hidden':undefined}}>
          <Button sx={{
              mt: 2,
              mb: 2,
              border: 'none',"& fieldset": { border: 'none' }
            }}
            
            
            // disabled={isSubmitting}
            type="submit"
            size="large"
            variant="contained" onClick={handleLogout}>
            <LogoutIcon
              sx={{
                mr: 1
              }}
            />
            Cerrar Sesión
          </Button>
        </Box>
    </>
  );
}

export default Sidebar;
