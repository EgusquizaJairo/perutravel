import { useEffect, useState } from 'react';
// import useRefMounted from 'src/hooks/useRefMounted';
// import * as Yup from 'yup';
// import { Formik } from 'formik';
// import Autocomplete from '@mui/material/Autocomplete';
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
  
  const [nombres, setNombres] = useState('');
  // const [apePaterno, setApePaterno] = useState('');
  // const [apeMaterno, setApeMaterno] = useState('');
  // const [nroDoc, setNroDoc] = useState('');
  // const [correo, setCorreo] = useState('');
  // const [celular, setCelular] = useState('');
  // const [direccion, setDireccion] = useState('');
  // const [sala, setSala] = useState(1);
  // const [usuario,setUsuario] = useState('');
  // const [contrasenha,setContrsenha] = useState('');
  // const [contrasenha2, setContrsenha2] = useState('');
  // const [start, setStart] = useState(new Date()); // Fecha de nacimiento
  // const [sexo, setSexo] = useState(1);
  // const [tipoDoc, setTipoDoc] = useState(1);
  const [relativo, setRelativo] = useState('');
  const [serie,setSerie] = useState('');
  const [inModelo, setinModelo] = useState(1);
  const [modelo,setModelo] = useState([]);
  const [inJuego, setinJuego] = useState(1);
  const [juego,setJuego] = useState([]);
  const [inSala, setinSala] = useState(1);
  const [sala,setSala] = useState([]);
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
//  const docTypeOptions = [
//   {
//     id:1,
//     name:'DNI'
//   },
//   {
//     id:2,
//     name:'Pasaporte'
//   },
//   {
//     id:3,
//     name:'Carnet de Extranjeria'
//   }
//  ]
  
//  const cargoTypeOptions = [
//   {
//     id:2,
//     name:'Asistente de Operaciones'
//   },
//   {
//     id:3,
//     name:'Asistente de Marketing'
//   } 
//   // {
//   //   id:4,
//   //   name:'Gerente de Marketing'
//   // }
//  ]

  const handleCreateProjectSuccess = () => {
    enqueueSnackbar('Se ha registrado la máquina satisfactoriamente', {
      variant: 'success',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      TransitionComponent: Zoom
    });
    // Salir de la pantalla de registro
    navigate('/sapt/manager/machine');

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
     navigate('/sapt/manager/machine');
  }


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  const enviarRequest = async () => {
    try {

      const request = {
        "id_modelo":inModelo,
        "id_juego":inJuego,
        "id_sala":inSala,
        "nombre":nombres,
        "nro_serie":serie,
        "posrelativa":relativo
      };

      const response = await certifyAxios.post('/machine/new', request);
      console.log(response);
      handleClose();
      handleCreateProjectSuccess();
      
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
    const request = {};
    const response = await certifyAxios.post('/machine/model/query', request);
    // console.log(response);
    let modeloX = [];
    response.data.list.forEach(element => {
      modeloX.push({
        id:element.id_modelo,
        name:`${element.nombreFabric} - ${element.nombreModel}`
      });
    });
    setModelo(modeloX);

  }
  const leerJuegos = async () =>{
    const request = {};
    const response = await certifyAxios.post('/machine/game/query', request);
    // console.log(response);
    let juegoX= [];
    response.data.list.forEach(element => {
      juegoX.push({
        id:element.id_juego,
        name:`${element.nombre}`
      });
    });
    setJuego(juegoX);
  }

  const leerSalas = async () =>{

    const request = {
      nombre:'',
      suspended:0
    };
    const response = await certifyAxios.post('/slot_room/query', request);
    console.log(response);
    let salaX= [];
    response.data.list.forEach(element => {
      salaX.push({
        id:element.id_sala,
        name:`${element.nombre}`
      });
    });
    setSala(salaX);
  }


  useEffect(async()=>{
    leerModelos();
    leerJuegos(); 
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
            Nueva Máquina
          </Typography>   
      </Grid>

          {/* <Grid sx={{ display: 'flex', flexDirection: 'row', mb: 7 ,backgroundColor: "transparent",
        boxShadow: "none"}}> */}
            {/* <Grid xs={4}/> */}
            <Grid  container xs={6} sm={6} md={12}>
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
                    Nombres
                  </Typography>
                  <TextField style={{backgroundColor:'#FFFFFF'}}
                    name="names"
                    required
                    fullWidth
                    variant="outlined"
                    value={nombres}
                    onChange={(e) =>{
                      setNombres(e.target.value)
                    }}
                  />
                </Grid>

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
                    Modelo
                  </Typography>
                  <Select style={{backgroundColor:'#FFFFFF'}}
                      
                      name="identityType"
                      value={inModelo}
                      fullWidth
                      onChange={(e)=>{
                        setinModelo(e.target.value)
                      }}
                    >
                      {modelo.map((TypeOption) => (
                        <MenuItem
                          key={TypeOption.id}
                          value={TypeOption.id}
                        >
                          {TypeOption.name}
                        </MenuItem>
                      ))}
                    </Select>
                </Grid>
                {/* ////////// */}
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
                    Juego
                  </Typography>
                  <Select style={{backgroundColor:'#FFFFFF'}}
                      
                      name="identityType"
                      value={inJuego}
                      fullWidth
                      onChange={(e)=>{
                        setinJuego(e.target.value)
                      }}
                    >
                      {juego.map((TypeOption) => (
                        <MenuItem
                          key={TypeOption.id}
                          value={TypeOption.id}
                        >
                          {TypeOption.name}
                        </MenuItem>
                      ))}
                    </Select>
                </Grid>
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
                    Nro. de serie
                  </Typography>
                  <TextField style={{backgroundColor:'#FFFFFF'}}
                    name="names"
                    required
                    fullWidth
                    variant="outlined"
                    value={serie}
                    onChange={(e) =>{
                      setSerie(e.target.value)
                    }}
                  />
                </Grid>
                {/* /// */}
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
                    Sala
                  </Typography>
                  <Select style={{backgroundColor:'#FFFFFF'}}
                      
                      name="identityType"
                      value={inSala}
                      fullWidth
                      onChange={(e)=>{
                        setinSala(e.target.value)
                      }}
                    >
                      {sala.map((TypeOption) => (
                        <MenuItem
                          key={TypeOption.id}
                          value={TypeOption.id}
                        >
                          {TypeOption.name}
                        </MenuItem>
                      ))}
                    </Select>
                </Grid>
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
                xs={6} sm={6} md={2} sx={{mb:1}}
              >
                  <Typography>
                    Nro. relativo en sala
                  </Typography>
                  <TextField style={{backgroundColor:'#FFFFFF'}}
                    name="names"
                    required
                    fullWidth
                    variant="outlined"
                    value={relativo}
                    onChange={(e) =>{
                      setRelativo(e.target.value)
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
              style={{color:'red',borderColor:'red'}}
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
              onClick={handleClickOpen}
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
                    ¿Desea registrar una nueva máquina?
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Se registrará una nueva máquina.
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
