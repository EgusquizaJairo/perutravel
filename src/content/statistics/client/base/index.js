import { useState, useEffect } from 'react';
import certifyAxios from 'src/utils/aimAxios';
// import styled from '@emotion/styled';
import { Helmet } from 'react-helmet-async';
import { Grid, Box } from '@mui/material';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
// import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
// import useRefMounted from 'src/hooks/useRefMounted';
// import SearchIcon from '@mui/icons-material/Search';
// import AutorenewIcon from '@mui/icons-material/Autorenew';
import PageHeader from './PageHeader';
import ResultsActive from './ResultsActive';
// import ResultsInactive from './ResultsInactive';

// const profPic = 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format'

function ManagementAssociated() {
  // const [tabValue, setTabValue] = useState('1');
  // const isMountedRef = useRefMounted();

  const [numberOfResultsActive, setNumberOfResultsActive] = useState(0);
  // const [numberOfResultsInactive, setNumberOfResultsInactive] = useState(0);

  const [associated, setAssociated] = useState([]);
  // const [nombre,setNombre] = useState('');
  // const [apellidoP,setApellidoP] = useState('');
  // const [nroDocumento,setNroDocumento] = useState('');

  const getAssociates = async () => {
  //   let reqObj;
  //   if(codigo===1){
  //     setNombre('');
  //     setApellidoP('');
  //     setNroDocumento('');
  //     reqObj = {
  //       "firstResult": 1,
  //       "fullName": "",
  //       "maxResults": 5,
  //       "suspended": 1,
  //       "nombre":'',
  //       "apellido_p":'',
  //       "nro_documento":''
  //     };
  //   }
  //   else{
  //      reqObj = {
  //       "firstResult": 1,
  //       "fullName": "",
  //       "maxResults": 5,
  //       "suspended": 1,
  //       "nombre":nombre,
  //       "apellido_p":apellidoP,
  //       "nro_documento":nroDocumento
  //     };
  //  }
  //   console.log(reqObj);
    try {
      // reqObj.suspended = "0"; // Active
      // Active Associates
      const reqObj = {};
      const responseActive = await certifyAxios.post('/estadistica/query', reqObj);
      setNumberOfResultsActive(responseActive.data.total);
      console.log(responseActive.data);
      // Inactive Associates
      // reqObj.suspended = "1"; // Inactive
      // const responseInactive = await certifyAxios.post('/person/client/query', reqObj);
      // setNumberOfResultsInactive(responseInactive.data.total);
      setAssociated({
            active: responseActive.data.list,
            // inactive: responseInactive.data.list
       });
     
        // if (responseActive.data.list.length === 0) {
                
        // }
        // else {
        //   // console.log(response.data);
        //   setAssociated({
        //     active: responseActive.data.list,
        //     inactive: responseInactive.data.list
        //   });
        // }
    } catch (err) {
      console.error(err);

      if (err.response) {
        console.log(err.response);
      } else if (err.request) {
        console.error(err.request);
      } else {
        console.error('Some other unknown error');
      }
    }
  }



  useEffect(() => {
    getAssociates(0);
  }, []);


  const onPageParamsChange = (reqObj) => {

    getAssociates(reqObj);
    // setPageNumber(pageNumberP);
  }

  // const [value, setValue] = useState('1');

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  
    
  // const StyledTab = styled(Tab)({
  //     "&.Mui-selected": {
  //       color: "#0077FF"
  //     }
  //     ,'&:hover':{
  //       color:'inherit'
  //     },
  //   });

  return (
    <>
      <Helmet>
        <title>Estadísticas Clientes</title>
      </Helmet>

      <PageTitleWrapper>
        <PageHeader getAssociates />
      </PageTitleWrapper>
      
      <Box sx={{ width: '100%', typography: 'body1' }}>
     
      
      
           
        
          <Grid
            sx={{
              px: 4
            }}
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={4}
          >
            <Grid item xs={12}>
              <ResultsActive
                onPageParamsChange={onPageParamsChange}
                associated={associated.active}
                numberOfResults={numberOfResultsActive}
                getAsociadas={getAssociates}
              />
            </Grid>
          </Grid>
        

        
    </Box>
      {/* <Footer /> */}
    </>
  );
}

export default ManagementAssociated;