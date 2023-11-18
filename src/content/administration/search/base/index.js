import { useState, useEffect } from 'react';
import certifyAxios from 'src/utils/aimAxios';
// import styled from '@emotion/styled';
// import styled from '@emotion/styled';
import { Helmet } from 'react-helmet-async';
import { Grid,   TextField, Box , IconButton,Select,MenuItem,InputLabel, FormControl} from '@mui/material';
import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
// import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
// import useRefMounted from 'src/hooks/useRefMounted';
import SearchIcon from '@mui/icons-material/Search';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import PageHeader from './PageHeader';
import ResultsActive from './ResultsActive';
import ResultsInactive from './ResultsInactive';

// const profPic = 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format'

function ManagementAssociated() {
  // const [tabValue, setTabValue] = useState('1');
  // const isMountedRef = useRefMounted();

  const [numberOfResultsActive, setNumberOfResultsActive] = useState(0);
  const [numberOfResultsInactive, setNumberOfResultsInactive] = useState(0);

  const [associated, setAssociated] = useState([]);
  const [nombre,setNombre] = useState('');
  
  
  const [rating,setRating] = useState('');
  const [estado,setEstado] = useState('hidden');
   
  const sexTypeOptions = [
    {
       id:1,
       name: '1'
    },
    {
      id:2,
      name:'2'
    },
    {
      id:3,
      name:'3'
    },
    {
      id:4,
      name:'4'
    },
    {
      id:5,
      name:'5'
    }
  ]
  const getAssociates = async (codigo) => {
    let reqObj;
    if(codigo===1){
      setNombre('');
      reqObj = {
        "titulos":nombre,
        "rating":rating
      };
    }
    else{
       reqObj = {
        "titulos":nombre,
        "rating":rating
      };
   }
    console.log(reqObj);
    try {
      reqObj.suspended = "0"; // Active
      // Active Associates
      const responseActive = await certifyAxios.post('/person/client/query', reqObj);
      setNumberOfResultsActive(responseActive.data.total);
      console.log(responseActive.data);
      // Inactive Associates
      reqObj.suspended = "1"; // Inactive
      // const responseInactive = await certifyAxios.post('/person/client/query', reqObj);
      setNumberOfResultsInactive(0);
      setAssociated({
            active: responseActive.data.list,
            inactive: []
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

  const resetBack = async () => {
    let reqObj=[];
    try {
    
      const responseActive = await certifyAxios.post('/person/client/update', reqObj);
      console.log(responseActive.data);
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
    // getAssociates(0);
  }, []);


  const onPageParamsChange = (reqObj) => {

    getAssociates(reqObj);
    // setPageNumber(pageNumberP);
  }

  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
    
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
        <title>Busqueda</title>
      </Helmet>

      <PageTitleWrapper>
        <PageHeader getAssociates />
      </PageTitleWrapper>
      <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
      
       <div style={{display: 'flex',alignItems: 'center', direction:'row',justifyContent:'center'}}>
        {/* Buscadores */}
            <TextField style={{backgroundColor:'white',color:'black',width:'20%'}}
              

              // InputProps={{
              //   startAdornment: (
              //     <InputAdornment position="start">
              //       <SearchTwoToneIcon />
              //     </InputAdornment>
              //   )
              // }}

              onChange={(e)=>{
                setNombre(e.target.value);
              }}
              InputProps={{
                sx: {
                    "& input": {
                        color:'black',
                        fontSize:'15px'
                    }
                }
            }}
              placeholder="Destino / Lugar de viaje"
              
              value={nombre}
              variant="outlined" 
            />
            {/* <TextField style={{marginLeft:'1%',backgroundColor:'white',color:'black',width:'20%'}}
              onChange={(e)=>{
                setNombre(e.target.value);
              }}
              InputProps={{
                sx: {
                    "& input": {
                        color:'black',
                        fontSize:'15px'
                    }
                }
            }}
              placeholder="Destino / Lugar de viaje"
              
              value={nombre}
              variant="outlined" 
            /> */}
            <FormControl style={{marginLeft:'1%',backgroundColor:'white',color:'black',width:'5%'}}
             
            >
             <InputLabel >
              Rating
              </InputLabel>
               <Select style={{backgroundColor:'#FFFFFF'}}
                      
                      name="identityType"
                      value = {rating}
                      sx={{fontSize: '15px'}}
                      
                      onChange={(e) =>{
                          setRating(e.target.value)
                          // console.log(e);
                       }}
                      
                      label="Rating"
                    >
                      {sexTypeOptions.map((TypeOption) => (
                        <MenuItem
                          key={TypeOption.id}
                          value={TypeOption.id}
                        >
                          {TypeOption.name}
                        </MenuItem>
                      ))}
              </Select>
              </FormControl>
            {/* <TextField style={{marginLeft:'1%',width:'15%',backgroundColor:'white',color:'black'}}
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
              onChange={(e)=>{
                setNroDocumento(e.target.value);
              }}
              placeholder="Buscar por Nro. de Documento"
              value={nroDocumento}
              variant="outlined" 
            /> */}

              <IconButton style={{marginLeft:'1%', background:'#0D3878'}} onClick={()=>{
                if(rating!=='' && nombre!==''){
                  getAssociates(0);
                  setEstado('visible');
                }
              }}>
                  <SearchIcon fontSize="large" color='white'/>
                  {/* <Typography style={{color:'white',fontSize:'15px'}}>Buscar paquetes</Typography> */}
              </IconButton>
              <IconButton style={{marginLeft:'1%', background:'#0D3878'}} onClick={()=>{
                //  getAssociates(1);
                 setAssociated([]);
                 setNumberOfResultsActive(0);
                 setEstado('hidden');
                 setRating('');
                 setNombre('');
               }}>
                  <AutorenewIcon fontSize="large" color='white'/>
              </IconButton>

              <IconButton style={{marginLeft:'1%', background:'#F44336'}} onClick={()=>{
                //  getAssociates(1);
                 setAssociated([]);
                 setNumberOfResultsActive(0);
                 resetBack();
                 setEstado('hidden');
                 setRating('');
                 setNombre('');
               }}>
                  <PriorityHighIcon fontSize="large" color='white'/>
              </IconButton>
      {/* Botón para buscar */}
      
              <TabList onChange={handleChange} 
                sx={{
                  
                }}
                // textColor="secondary"
                // indicatorColor="inherit"
                // textColor='black'
                selectionFollowsFocus={false}
                // TabIndicatorProps={{style: {background:'transparent'}}}
                // inkBarStyle={{backgroundColor: '#0077FF'}}
                TabIndicatorProps={{
                  style: {
                    color:'#000000',
                    backgroundColor: "transparent",
                    borderColor:"#0077FF" ,
                    borderTop:'0',
                    borderLeft:'0',
                    borderRight:'0',
                    boxShadow:'none',
                    borderRadius:'0'
                  }
                }}
                // textColor='secondary'
                
                aria-label='secondary tabs example'
                value={value}
                />
                {/* <StyledTab label='Activos' value='1' disableRipple disabled={value==='1'} style={{visibility:'hidden'}}/>
                <StyledTab label='Inactivos' value='2' disableRipple disabled={value==='2'} style={{visibility:'hidden'}}/> */}
              {/* </TabList> */}
           </div>    
        
        
        <TabPanel value='1' style={{visibility:estado}}>
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
        </TabPanel>

        <TabPanel value='2'>
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
              <ResultsInactive
                onPageParamsChange={onPageParamsChange}
                associated={associated.inactive}
                numberOfResults={numberOfResultsInactive} 
                getAsociadas={getAssociates}
                />
            </Grid>
          </Grid>
        </TabPanel>
      </TabContext>
    </Box>
      {/* <Footer /> */}
    </>
  );
}

export default ManagementAssociated;