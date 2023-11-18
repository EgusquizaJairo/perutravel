import { useEffect, useState } from 'react';
// import useRefMounted from 'src/hooks/useRefMounted';
// import * as Yup from 'yup';
// import { Formik } from 'formik';
// import Autocomplete from '@mui/material/Autocomplete';
// import useAuth from 'src/hooks/useAuth';
import 'react-quill/dist/quill.snow.css';
import certifyAxios from 'src/utils/aimAxios';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {
  useNavigate
} from 'react-router-dom';
// import { DateTimePicker } from '@mui/lab';
// import dayjs from 'dayjs';
import {
  Grid,
  // Dialog,
  // DialogTitle,
  // DialogContent,
  Zoom,
  Typography,
  TextField,
  // FormHelperText,
  // CircularProgress,
  Button,
  // FormControl,
  Select,
  MenuItem,
  // Card,
  // Divider,
  // Alert,
  useTheme
} from '@mui/material';
import { useSnackbar } from 'notistack';
// import { use } from 'i18next';
// import { use } from 'i18next';
// import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
// import InputLabel from '@mui/material/InputLabel';
// import debounce from 'lodash/debounce';
// import DropzoneAIM from 'src/components/DropzoneAIM';



function PageHeader() {

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const theme = useTheme();
  // const { user } = useAuth();
 
  const [equivalencia,setEquivalencia] = useState('');
  const [multiplicador,setMultiplicador] = useState('');
  const [inEstado,setinEstado] = useState(1);
  const [previo,setPrevio] = useState('');
  const [posterior,setPosterior] = useState('');

 const EstadoTypeOptions =[
  {
    id:1,
    name:'Activo'
  },
  {
    id:2,
    name:'Inactivo'
  }
 ]

  // const [relativo, setRelativo] = useState(1);
  // // const [serie,setSerie] = useState('');
  // const [inModelo, setinModelo] = useState(1);
  // const [modelo,setModelo] = useState([]);
  // const [inJuego, setinJuego] = useState(1);
  // const [juego,setJuego] = useState([]);
  // const [inSala, setinSala] = useState(1);
  // const [inTipo, setinTipo] = useState(1);
  // const [sala,setSala] = useState([]);
  const [open, setOpen] = useState(false);
//   const sexTypeOptions = [
//     {
//        id:1,
//        name: 'Masculino'
//     },
//     {
//       id:2,
//       name:'Femenino'
//     }
//   ]
//  const TipoTypeOptions = [
//   {
//     id:1,
//     name:'Entrada de Productos'
//   },
//   {
//     id:2,
//     name:'Salida de Productos'
//   }
//  ]
  


  const handleCreateProjectSuccess = () => {
    enqueueSnackbar('Se han modificado los parámetros', {
      variant: 'success',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      TransitionComponent: Zoom
    });
    // Salir de la pantalla de registro
    // navigate('/sapt/manager/inventory');

    // Poner todos en default
    // setOpen(false);
    // setEnteredName('');
    // setSelectedDocumentType();
    // setEnteredIdentity('');
    // setEnteredEmail('');
    // setSelectedInstituteMajor();
    // setUploadedPhoto({});
    // setSelectedSemester();
    // setSelectedMerit();
  };

  const handleCreateProjectFailure = (message) => {
    enqueueSnackbar(`Hubo un error en el registro. ${message}`, {
      variant: 'error',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      TransitionComponent: Zoom
    });
  };


  const regresarBase = () =>{
     navigate('/sapt/manager/inventory');
  }


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  const enviarRequest = async () => {
    try {
      // if(relativo===0) return;
      const request = {
        "equivalencia":equivalencia,
        "multiplicador":multiplicador,
        "previo":previo,
        "posterior":posterior,
        "estado":inEstado
      };

      const response = await certifyAxios.post('/parametro/update', request);
      console.log(response);
      handleClose();
      handleCreateProjectSuccess();
      // if(response.data.razon==="OK"){
      //   handleClose();
      //   handleCreateProjectSuccess();
      // }
      // else{
      //   handleClose();
      //   handleCreateProjectFailure(response.data.razon);
      // }
    } catch (err) {
      handleClose();
      handleCreateProjectFailure(err.message);
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
 
  const leerModelos = async () =>{
    const request = {
    };
    const response = await certifyAxios.post('/parametro/query/punto', request);

    setEquivalencia(response.data.list[0].equivalencia);
    setMultiplicador(response.data.list[0].multiplicador);

  }


  const leerSalas = async () =>{

    const request = {
      // nombre:'',
      // suspended:0
    };
    const response = await certifyAxios.post('/parametro/query/ticket', request);
    setinEstado(response.data.list[0].estado);
    setPrevio(response.data.list[0].dias_previos);
    setPosterior(response.data.list[0].dias_posteriores);
   // console.log(response);
    // let salaX= [];
    // response.data.list.forEach(element => {
    //   salaX.push({
    //     id:element.id_sala,
    //     name:`${element.nombre}`
    //   });
    // });
    // setSala(salaX);
  }

  
  useEffect(async()=>{
    leerModelos();
    leerSalas();
  },[]);
  

  return (
    <>
      <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center" sx={{mb:2}}>    
          <Typography variant="h3" component="h3">
            Parámetros del programa de recompensas
          </Typography>   
      </Grid>

          {/* <Grid sx={{ display: 'flex', flexDirection: 'row', mb: 7 ,backgroundColor: "transparent",
        boxShadow: "none"}}> */}
            {/* <Grid xs={4}/> */}
            <Grid  container xs={6} sm={6} md={12}>
            
                {/* /////////////// */}
               {/* ///////// */}
            {/* /////// */}
            <Grid item md={12}>
                  <Typography hidden>
                  Salto de linea  
                  </Typography>
                </Grid>

                <Grid item xs={6} sm={6} md={4}>
                  <Typography hidden>
                  espacio
                  </Typography>
                </Grid>

                <Grid
                item
                xs={6} sm={6} md={4} sx={{mb:1}}
              >
                  <Typography>
                   Equivalencia Puntos/Ticket de Sorteo
                  </Typography>
                  <TextField style={{backgroundColor:'#FFFFFF'}}
                    name="names"
                    required
                    fullWidth
                    variant="outlined"
                    value={equivalencia}
                    onChange={(e) =>{
                      setEquivalencia(e.target.value)
                    }}
                  />
                </Grid>
                {/* //////////// */}
                <Grid item md={12}>
                  <Typography hidden>
                  Salto de linea  
                  </Typography>
                </Grid>

                <Grid item xs={6} sm={6} md={4}>
                  <Typography hidden>
                  espacio
                  </Typography>
                </Grid>

                <Grid
               item
               xs={6} sm={6} md={4} sx={{mb:1}}
              >
                  <Typography>
                  Multiplicador base de punto ganado por crédito jugado
                  </Typography>
                  <TextField style={{backgroundColor:'#FFFFFF'}}
                    name="names"
                    required
                    fullWidth
                    variant="outlined"
                    value={multiplicador}
                    onChange={(e) =>{
                      setMultiplicador(e.target.value)
                    }}
                  />
                </Grid>
                {/* ////////// */}
                {/* ///////  */}
                <Grid item md={12}>
                  <Typography hidden>
                  Salto de linea  
                  </Typography>
                </Grid>

                <Grid item xs={6} sm={6} md={4}>
                  <Typography hidden>
                  espacio
                  </Typography>
                </Grid>

                <Grid
                item
                xs={6} sm={6} md={4} sx={{mb:1}}
              >
                  <Typography>
                  Estado de los tickets de crédito por cumpleaños
                  </Typography>
                  <Select style={{backgroundColor:'#FFFFFF'}}
                      
                      name="identityType"
                      value={inEstado}
                      fullWidth
                      onChange={(e)=>{
                        setinEstado(e.target.value)
                      }}
                    >
                      {EstadoTypeOptions.map((TypeOption) => (
                        <MenuItem
                          key={TypeOption.id}
                          value={TypeOption.id}
                        >
                          {TypeOption.name}
                        </MenuItem>
                      ))}
                    </Select>
                </Grid>
                {/* /// */}
                {/* ///////////////// */}
                <Grid item md={12}>
                  <Typography hidden>
                  Salto de linea  
                  </Typography>
                </Grid>

                <Grid item xs={6} sm={6} md={4}>
                  <Typography hidden>
                  espacio
                  </Typography>
                </Grid>
                <Grid
                item
                xs={6} sm={6} md={4} sx={{mb:1}}
              >
                  <Typography>
                  Días previos al cumpleaños a brindar ticket de crédito
                  </Typography>
                  <TextField style={{backgroundColor:'#FFFFFF'}}
                    name="names"
                    required
                    fullWidth
                    variant="outlined"
                    value={previo}
                    onChange={(e) =>{
                      setPrevio(e.target.value)
                    }}
                  />
                </Grid>
               {/* /////////// */}
               <Grid item md={12}>
                  <Typography hidden>
                  Salto de linea  
                  </Typography>
                </Grid>

                <Grid item xs={6} sm={6} md={4}>
                  <Typography hidden>
                  espacio
                  </Typography>
                </Grid>
                <Grid
                item
                xs={6} sm={6} md={4} sx={{mb:1}}
              >
                  <Typography>
                  Días posteriores al cumpleaños a brindar ticket de crédito
                  </Typography>
                  <TextField style={{backgroundColor:'#FFFFFF'}}
                    name="names"
                    required
                    fullWidth
                    variant="outlined"
                    value={posterior}
                    onChange={(e) =>{
                      setPosterior(e.target.value)
                    }}
                  />
                </Grid>


                {/* //////// */}
            </Grid>

            {/* <Divider orientation="vertical" flexItem /> */}

            
          {/* </Grid> */}

          <Grid
            sx={{
              mb: `${theme.spacing(3)}`
            }}
            container
            // justifyContent="center"
            margin="auto"
            item
            xs={12}
            sm={8}
            md={9}
          >
            <Grid item xs={6} sm={6} md={6}/>
            <Button
            sx={{
              mr: 4
            }}
              // color="secondary"
              style={{color:'red',borderColor:'red', visibility:'hidden'}}
              size="large"
              variant="outlined"
              onClick={regresarBase}
            >
              Cancelar
            </Button>

            <Button
              
              type="submit"
              // startIcon={
              //   isSubmitting ? <CircularProgress size="1rem" /> : null
              // }
              // disabled={Boolean(errors.submit) || isSubmitting}
              variant="outlined"
              size="large"
              style={{color:'#0077FF',borderColor:'#0077FF'}}
              // color="secondary"
              onClick={()=>{
                   handleClickOpen();
                 }}
            >
              Guardar
            </Button>
            <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    ¿Desea modificar los parámetros?
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Se modificarán los parámetros.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button onClick={enviarRequest} autoFocus>
                      Aceptar
                    </Button>
                  </DialogActions>
                </Dialog>
          </Grid>
            
    </>
  );
}

export default PageHeader;
