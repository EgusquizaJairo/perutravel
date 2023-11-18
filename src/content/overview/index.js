import { Container,  Button} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
// import { isMobile } from "react-device-detect";
import Header from 'src/layouts/AccentHeaderLayout/Header';
import Guest from 'src/components/Guest';
import LoginCover from '../pages/Auth/Login/Cover';
// import { Helmet } from 'react-helmet-async';
// import Footer from 'src/components/Footer';

// import Logo from 'src/components/LogoSign';
// import Hero from './Hero';

// const HeaderWrapper = styled(Card)(
//   ({ theme }) => `
//     width: 50%;
//     align-items: right;
//     margin-top: 100px;
//     height: ${theme.spacing(15)};
// `
// );



function Overview() {

  return (
    // <OverviewWrapper>
    //   <Helmet>
    //     <title>MI TUTORA</title>
    //   </Helmet>
    //   <HeaderWrapper>
    //     <Container maxWidth="lg">
    //       <Box display="flex" alignItems="center">
    //         <Logo />
    //       </Box>
    //     </Container>
    //   </HeaderWrapper>
    //   <Hero />
    //   <Footer />
    // </OverviewWrapper>
    <Guest>
          <Header />
              <Container  maxWidth='100%' style={{marginTop:'6%',alignContent:'right'}}>
                
                <Button style={{visibility:'hidden',width:'12%', height:'65px',textAlign:'center',borderRadius:'1', marginLeft:'71%',justifyContent:'center', lineHeight:'20px'}}  
                    sx={{border: 'none',"& fieldset": { border: 'none' }}}
                    component={RouterLink}
                    to="/bar_order/read"
                    size="large"
                    variant="contained"
                  >
                    Conexión a Pedidos de Bar
                  </Button>
                  <Button style={{visibility:'hidden',width:'12%',height:'65px',textAlign:'center',borderRadius:'1',marginLeft:'1%',justifyContent:'center', lineHeight:'20px'}}  
                    sx={{border: 'none',"& fieldset": { border: 'none' }}}
                    component={RouterLink}
                    to="/raffle_ticket/read"
                    size="large"
                    variant="contained"
                    
                  >
                    Conexión a Impresión de Tickets de Sorteo
                  </Button>
               
            </Container>
          
          <LoginCover />
          
      </Guest>
  );
}

export default Overview;
