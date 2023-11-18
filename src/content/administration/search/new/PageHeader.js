import {   useEffect, useState } from 'react';
// import useRefMounted from 'src/hooks/useRefMounted';
// import * as Yup from 'yup';
// import { Formik } from 'formik';
// import Autocomplete from '@mui/material/Autocomplete';
// import {SerialPort} from 'serialport';
import 'react-quill/dist/quill.snow.css';
import certifyAxios from 'src/utils/aimAxios';
import { backendWSURL } from 'src/config';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {
  useNavigate
} from 'react-router-dom';
import { DateTimePicker } from '@mui/lab';
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
// import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
// import InputLabel from '@mui/material/InputLabel';
// import debounce from 'lodash/debounce';
// import DropzoneAIM from 'src/components/DropzoneAIM';



function PageHeader() {

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const theme = useTheme();
  const ws = new WebSocket(backendWSURL);
  const [nombres, setNombres] = useState('');
  const [apePaterno, setApePaterno] = useState('');
  const [apeMaterno, setApeMaterno] = useState('');
  const [nroDoc, setNroDoc] = useState('');
  const [correo, setCorreo] = useState('');
  const [celular, setCelular] = useState('');
  const [direccion, setDireccion] = useState('');
  const [tarjeta,setTarjeta] = useState('');
  // const [sala, setSala] = useState(1);
  // const [usuario,setUsuario] = useState('');
  // const [contrasenha,setContrsenha] = useState('');
  // const [contrasenha2, setContrsenha2] = useState('');
  const [start, setStart] = useState(new Date()); // Fecha de nacimiento
  const [sexo, setSexo] = useState(1);
  const [tipoDoc, setTipoDoc] = useState(1);
  const [cargo, setCargo] = useState(1);

  const [open, setOpen] = useState(false);
  const sexTypeOptions = [
    {
       id:1,
       name: 'Masculino'
    },
    {
      id:2,
      name:'Femenino'
    }
  ]
 const docTypeOptions = [
  {
    id:1,
    name:'DNI'
  },
  {
    id:2,
    name:'Pasaporte'
  },
  {
    id:3,
    name:'Carnet de Extranjeria'
  }
 ]
  
//  const cargoTypeOptions = [
//   {
//     id:2,
//     name:'Basico'
//   },
//   {
//     id:3,
//     name:'VIP'
//   } 
//  ]
const [cargoTypeOptions,setcargoTypeOptions] = useState([
    {
      id:2,
      name:'Basico'
    },
    {
      id:3,
      name:'VIP'
    } 
   ]);

  const handleCreateProjectSuccess = () => {
    enqueueSnackbar('Se ha registrado al cliente exitosamente', {
      variant: 'success',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      TransitionComponent: Zoom
    });
    // Salir de la pantalla de registro
    navigate('/sapt/manager/client');

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
     navigate('/sapt/manager/client');
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
        "id_sexo": sexo,
        "id_documento": tipoDoc,
        "id_cargo": cargo,
        "id_sala": 1,
        // "usuario":usuario,
        // "contrasenha":contrasenha,
        "nombres":nombres,
        "apellido_p":apePaterno,
        "apellido_m":apeMaterno,
        "fecha_nac":start,
        "nro_documento":nroDoc,
        "telefono":celular,
        "correo":correo,
        "direccion":direccion,
        "tarjeta":tarjeta
      };
      
      const response = await certifyAxios.post('/person/client/new', request);
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
  
  const callTipoCliente  = async()=>{

    const request = {
      "nombre":""
    };
    
    const response = await certifyAxios.post('/tipo_cliente/query', request);
    console.log(response);
    let x = [];
    for(let i = 0;i<response.data.list.length;i++){
       x.push({
         id:response.data.list[i].id_tipo_cliente,
         name:response.data.list[i].abreviatura
       });
    }
    setcargoTypeOptions(x);
  }

  useEffect(()=>{

    callTipoCliente();

    ws.onopen = () => {
      console.log("Connection opened");
      // setConnectionOpen(true);
    };

    ws.onmessage = (event) => {
      console.log("Me llego un mensaje");
      const data = JSON.parse(event.data);
      console.log(data);
      if(data.body.codigo==="2001") {
        setTarjeta(data.body.nroTarjeta);
      }
      else
      {
        setTarjeta('');
      }
    };
  },[]);

  return (
    <>
      <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center" sx={{mb:2}}>    
          <Typography variant="h3" component="h3">
            Nuevo Cliente
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
                  xs={6} sm={6} md={1.8}  sx={{mb:1}}
                  >
                  <Typography>
                    Apellido paterno
                  </Typography>
                  <TextField style={{backgroundColor:'#FFFFFF'}}
                    name="names"
                    value={apePaterno}
                    onChange={(e)=>{
                      setApePaterno(e.target.value)
                    }}
                    required
                    fullWidth
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={6} sm={6} md={0.4}>
                  <Typography hidden>
                  espacio
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={6} sm={6} md={1.8}
                  >
                  <Typography>
                    Apellido materno
                  </Typography>
                  <TextField style={{backgroundColor:'#FFFFFF'}}
                    name="names"
                    value={apeMaterno}
                    onChange={(e)=>{
                      setApeMaterno(e.target.value)
                    }}
                    required
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                {/* /////////////// */}
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
                  xs={6} sm={6} md={1.8} sx={{mb:1}}
                  >
                  <Typography>
                    Sexo
                  </Typography>
                  {/* <TextField style={{backgroundColor:'#FFFFFF'}}
                    name="names"
                    required
                    fullWidth
                    variant="outlined"
                  /> */}
                  <Select style={{backgroundColor:'#FFFFFF'}}
                      
                      name="identityType"
                      value = {sexo}
                      fullWidth
                      // helperText={touched.identityType && errors.identityType}
                      // onBlur={handleBlur}
                      // value={selectedDocumentType || ''}
                      onChange={(e) =>{
                          setSexo(e.target.value)
                          // console.log(e);
                       }}
                      // onChange={(e) => {
                      //   handleDocumentTypeChange(e);
                      //   handleChange(e);
                      // }}
                      // label="Tipo de Documento de Identidad"
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
                </Grid>

                <Grid item xs={6} sm={6} md={0.4}>
                  <Typography hidden>
                  espacio
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={6} sm={6} md={1.8}
                  >
                  <Typography>
                    Fecha de nacimiento
                  </Typography>
                  <DateTimePicker
                  style={{backgroundColor:'#FFFFFF'}}
                  views={['year','month','day']}
                  // disabled
                  value={start}
                  onChange={(date) => setStart(date)}
                  inputFormat='dd/MM/yyyy'
                  // inputFormat="E MMM dd yyyy HH:MM:SS O"
                  renderInput={(params) => (
                    <TextField style={{backgroundColor:'#FFFFFF'}}
                      {...params}
                      inputProps={{...params.inputProps, readOnly: true}}
                      // margin="normal"
                      // variant="outlined"
                      // fullWidth
                      // name="start"
                    />
                  )}
                  />
                </Grid>
               {/* ///////// */}
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
                  xs={6} sm={6} md={1.8}  sx={{mb:1}}
                  >
                  <Typography>
                    Tipo de documento
                  </Typography>
                  <Select style={{backgroundColor:'#FFFFFF'}}
                      
                      name="identityType"
                      value={tipoDoc}
                      fullWidth
                      onChange={(e) =>{
                        setTipoDoc(e.target.value)
                      }}
                      // helperText={touched.identityType && errors.identityType}
                      // onBlur={handleBlur}
                      // value={selectedDocumentType || ''}
                      // onChange={(e) => {
                      //   handleDocumentTypeChange(e);
                      //   handleChange(e);
                      // }}
                      // label="Tipo de Documento de Identidad"
                    >
                      {docTypeOptions.map((TypeOption) => (
                        <MenuItem
                          key={TypeOption.id}
                          value={TypeOption.id}
                        >
                          {TypeOption.name}
                        </MenuItem>
                      ))}
                    </Select>
                </Grid>

                <Grid item xs={6} sm={6} md={0.4}>
                  <Typography hidden>
                  espacio
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={6} sm={6} md={1.8}
                  >
                  <Typography>
                  Nro. de documento
                  </Typography>
                  <TextField style={{backgroundColor:'#FFFFFF'}}
                    name="names"
                    value={nroDoc}
                    onChange={(e)=>{
                      setNroDoc(e.target.value)
                    }}
                    required
                    fullWidth
                    variant="outlined"
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
                  xs={6} sm={6} md={1.8}  sx={{mb:1}}
                  >
                  <Typography>
                    Correo electrónico
                  </Typography>
                  <TextField style={{backgroundColor:'#FFFFFF'}}
                    name="names"
                    value={correo}
                    onChange={(e)=>{
                      setCorreo(e.target.value)
                    }}
                    required
                    fullWidth
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={6} sm={6} md={0.4}>
                  <Typography hidden>
                  espacio
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={6} sm={6} md={1.8}
                  >
                  <Typography>
                  Celular
                  </Typography>
                  <TextField style={{backgroundColor:'#FFFFFF'}}
                    name="names"
                    value={celular}
                    onChange={(e)=>{
                      setCelular(e.target.value)
                    }}
                    required
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
              {/*  */}
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
                    Dirección
                  </Typography>
                  <TextField style={{backgroundColor:'#FFFFFF'}}
                    name="names"
                    value={direccion}
                    onChange={(e)=>{
                      setDireccion(e.target.value)
                    }}
                    required
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
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
                    Tipo de Cliente
                  </Typography>
                  <Select style={{backgroundColor:'#FFFFFF'}}
                      
                      name="identityType"
                      value={cargo}
                      fullWidth
                      onChange={(e)=>{
                        setCargo(e.target.value)
                      }}
                      // helperText={touched.identityType && errors.identityType}
                      // onBlur={handleBlur}
                      // value={selectedDocumentType || ''}
                      // onChange={(e) => {
                      //   handleDocumentTypeChange(e);
                      //   handleChange(e);
                      // }}
                      // label="Tipo de Documento de Identidad"
                    >
                      {cargoTypeOptions.map((TypeOption) => (
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
                xs={6} sm={6} md={1.8} sx={{mb:2}}
              >
                  <Typography>
                    Tarjeta
                  </Typography>
                  <TextField style={{backgroundColor:'#D6D6D6',border:0}}
                    name="names"
                    required
                    fullWidth
                    variant="outlined"
                    value ={tarjeta}
                    onChange={(e)=>{
                      setTarjeta(e.target.value)
                    }}
                    disabled
                    inputProps={{style: {fontSize: 14}}} 
                    // disableUnderline={true}
                    // value={sala}
                    // onChange={(e)=>{
                    //   setSala(e.target.value)
                    // }}
                    readOnly
                    // disabled
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
             <Grid item xs={6} sm={6} md={4}>
                  <Typography sx={{fontWeight: 'bold'}}>
                  Nota: Debe insertar la tarjeta en la lectora para que aparezca el número de la tarjeta
                  </Typography>
              </Grid>
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
                    ¿Desea crear un nuevo cliente?
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Se creará al nuevo cliente.
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
