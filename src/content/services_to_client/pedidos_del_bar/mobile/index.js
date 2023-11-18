import { useState, useEffect, useCallback } from 'react';
import certifyAxios from 'src/utils/aimAxios';
// import styled from '@emotion/styled';
// import styled from '@emotion/styled';
import { Helmet } from 'react-helmet-async';
import { Grid, TextField, Box } from '@mui/material';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
// import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import useRefMounted from 'src/hooks/useRefMounted';

import PageHeader from './PageHeader';
import ResultsActive from './ResultsActive';
// import ResultsInactive from './ResultsInactive';

// const profPic = 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format'

function ManagementAssociated() {
  // const [tabValue, setTabValue] = useState('1');
  const isMountedRef = useRefMounted();

  const [numberOfResultsActive, setNumberOfResultsActive] = useState(0);
  // const [numberOfResultsInactive, setNumberOfResultsInactive] = useState(0);

  const [associated, setAssociated] = useState(
    []
  );

  const getAssociates = useCallback(async (reqObj) => {
    try {
      reqObj.suspended = "0"; // Active
      // Active Associates
      const responseActive = await certifyAxios.post('/person/employee/query', reqObj);
      setNumberOfResultsActive(responseActive.data.total);

      // Inactive Associates
      reqObj.suspended = "1"; // Inactive
      const responseInactive = await certifyAxios.post('/person/employee/query', reqObj);
      // setNumberOfResultsInactive(responseInactive.data.total);

      if (isMountedRef.current) {
        if (responseActive.data.list.length === 0 && responseActive.data.total > 0) {
          // const lastPage = Math.ceil(response.data.total / pageSize);
          // reqObj.firstResult = lastPage;
          // setPageNumber(lastPage);
          // getAssociates(reqObj);
        }
        else {
          // console.log(response.data);
          setAssociated({
            active: responseActive.data.list,
            inactive: responseInactive.data.list
          });
        }
      }
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
  }, [isMountedRef]);

  useEffect(() => {
    const reqObj = {
      "firstResult": 1,
      "fullName": "",
      "maxResults": 5,
      "suspended": 1
    }
    getAssociates(reqObj);
  }, [getAssociates]);

  // const handleTabChange = (event, newValue) => {
  //   setTabValue(newValue);

  // };

  const onPageParamsChange = (reqObj) => {

    getAssociates(reqObj);
    // setPageNumber(pageNumberP);
  }

  // const [value, setValue] = useState('1');

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  // const StyledTab = styled(Tab)({
   
  // });

  // const StyledTab = styled(Tab) (
  // ({ theme }) => `
  //       &.Mui-selected {
  //         color: ${theme.colors.primary.main}
  //       }
  // `);

  // const StyledTab = styled(Tab) (
  //   ({ theme }) => `
  //         &.Mui-selected {
  //           color: ${theme.colors.primary.main}
  //         }
  //   `);
    
    // const StyledTab = styled(Tab)({
    //   "&.Mui-selected": {
    //     color: "#0077FF"
    //   }
    //   ,'&:hover':{
    //     color:'inherit'
    //   },
    // });
    // const StyledTabList = styled(TabList)({
    //   "& .MuiTabs-indicator": {
    //     display: "none"

    //   }
    // });


  return (
    <>
      <Helmet>
        <title>Operador</title>
      </Helmet>

      <PageTitleWrapper>
        <PageHeader getAssociates />
      </PageTitleWrapper>
      <Box sx={{ width: '100%', typography: 'body1' }}>
      
       {/* <div style={{display: 'flex',alignItems: 'center'}}> */}
        {/* Buscadores */}
            <TextField style={{marginLeft:'5%',display:'none'}}
              sx={{
                m: 0
              }}
              // InputProps={{
              //   startAdornment: (
              //     <InputAdornment position="start">
              //       <SearchTwoToneIcon />
              //     </InputAdornment>
              //   )
              // }}
              // onChange={handleQueryChange}
              placeholder="Buscar por nombre"
              // value={query}
              variant="outlined" 
            />
            <TextField style={{marginLeft:'1%',display:'none'}}
              sx={{
                m: 0
              }}
              // InputProps={{
              //   startAdornment: (
              //     <InputAdornment position="start">
              //       <SearchTwoToneIcon />
              //     </InputAdornment>
              //   )
              // }}
              // onChange={handleQueryChange}
              placeholder="Buscar por apellido paterno"
              // value={query}
              variant="outlined" 
            />      
            <TextField style={{marginLeft:'1%',width:'15%',display:'none'}}
              sx={{
                m: 0
              }}
              // InputProps={{
              //   startAdornment: (
              //     <InputAdornment position="start">
              //       <SearchTwoToneIcon />
              //     </InputAdornment>
              //   )
              // }}
              // onChange={handleQueryChange}
              placeholder="Buscar por Nro. de Documento"
              // value={query}
              variant="outlined" 
            />

      {/* Botón para buscar */}
      <Grid
            sx={{
              px: 2 
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
              />
            </Grid>
       </Grid>

              
    </Box>
      {/* <Footer /> */}
    </>
  );
}

export default ManagementAssociated;