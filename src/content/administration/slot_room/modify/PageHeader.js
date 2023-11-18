import { useState, useEffect } from 'react';
// import useRefMounted from 'src/hooks/useRefMounted';
// import * as Yup from 'yup';
// import { Formik } from 'formik';
// import Autocomplete from '@mui/material/Autocomplete';
import 'react-quill/dist/quill.snow.css';
// import certifyAxios from 'src/utils/aimAxios';
import certifyAxiosImages from 'src/utils/aimAxios';
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
  // Select,
  // MenuItem,
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
  const [file, setFile] = useState("");
  const [nombres, setNombres] = useState('');
  const [imagen, setImagen] = useState({
    name:''
  });
  const [sala,setSala] = useState('');
  // const [apePaterno, setApePaterno] = useState('');
  // const [apeMaterno, setApeMaterno] = useState('');
  // const [nroDoc, setNroDoc] = useState('');
  // const [correo, setCorreo] = useState('');
  // const [celular, setCelular] = useState('');
  const [direccion, setDireccion] = useState('');
  // const [cambio, setCambio] = useState(0);
  // const [sala, setSala] = useState(1);
  // const [usuario,setUsuario] = useState('');
  // const [contrasenha,setContrsenha] = useState('');
  // const [contrasenha2, setContrsenha2] = useState('');
  // const [start, setStart] = useState(new Date()); // Fecha de nacimiento
  // const [sexo, setSexo] = useState(1);
  // const [tipoDoc, setTipoDoc] = useState(1);
  // const [cargo, setCargo] = useState(2);

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

// const checkNested = (obj, level,  ...rest) =>{
//   if (obj === undefined) return false
//   if (rest.length === 0 && Object.hasOwn(obj,level)) return true
//   return checkNested(obj[level], ...rest)
// }

  const handleCreateProjectSuccess = async () => {
    enqueueSnackbar('Se ha modificado la sala satisfactoriamente', {
      variant: 'success',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      TransitionComponent: Zoom
    });
  
   sala.nombre = nombres;
   sala.direccion = direccion;
   localStorage.removeItem("sala");
    localStorage.setItem("sala",JSON.stringify(sala));
    navigate('/sapt/manager/slot_room');
   // console.log(checkNested(sala,"layout","data"));
   // console.log(cambio);
  //  if(cambio===1 && checkNested(sala,"layout","data"))
  //  {
  //   // console.log("LLEGUE")
  //   let reader = new FileReader();
  //   reader.readAsDataURL(imagen);
  //   reader.onload = function () {
  //       // console.log(sala.layout.data);
  //       // console.log(reader.result);
  //       let a = reader.result;
  //       a = a.split(',')[1];
  //       const binary = atob(a);
  //       const len = binary.length;
  //       const bytes = new Array(len);
  //       for (let i = 0; i < len; i++)
  //           bytes[i] = binary.charCodeAt(i)
  //       sala.layout.data = bytes;
  //       // console.log("asdasd");
  //       // console.log(sala.layout.data);
  //       sala.nombre_layout = imagen.name;
  //       sala.tipo_layout = imagen.type;
  //       localStorage.removeItem("sala");
  //       localStorage.setItem("sala",JSON.stringify(sala));
  //   };
  //  }
  //  else{
  //   localStorage.removeItem("sala");
  //   localStorage.setItem("sala",JSON.stringify(sala));
  //  }
   
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
     navigate('/sapt/manager/slot_room');
  }


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const getInstance = () => {
  //   return axios.create({
  //     baseURL: baseUrl,
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   });
  // }

  const enviarRequest = async () => {
    try {

      // const request = {
      //   "id_sexo": sexo,
      //   "id_documento": tipoDoc,
      //   "id_cargo": cargo,
      //   "id_sala": 1,
      //   "usuario":usuario,
      //   "contrasenha":contrasenha,
      //   "nombres":nombres,
      //   "apellido_p":apePaterno,
      //   "apellido_m":apeMaterno,
      //   "fecha_nac":start,
      //   "nro_documento":nroDoc,
      //   "telefono":celular,
      //   "correo":correo,
      //   "direccion":direccion
      // };
    //  const request = {
    //       "nombre":nombres,
    //       "direccion":direccion,

    //  };
      // const response1 = await certifyAxios.post('/person/employee/new', request);
      // let id_sala = response1.id_sala;

      let formData = new FormData();
      // let aa = new Blob([sala.layout.data]);
      // console.log(aa);
      // let aa = new Blob([1,2,3]);
      // if(cambio===1) formData.append("images", imagen,imagen.name);
        // else formData.append("images", imagen,imagen.name);
      formData.append("nombre", nombres);
      formData.append("direccion", direccion);
      // if(cambio===1)formData.append("tipo_layout", imagen.type);
       // else formData.append("tipo_layout", sala.tipo_layout);
      // if(cambio===1)formData.append("nombre_layout", imagen.name);
       // else formData.append("nombre_layout", sala.nombre_layout);
       formData.append("tipo_update", 1);
      formData.append("id_sala", sala.id_sala);
      // if(cambio===1) formData.append("tipo_update", 2);
      //   else formData.append("tipo_update", 1);
      const response = await certifyAxiosImages.post('/slot_room/update', formData)

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

  const handleCambiarFile = (e) => {
    try{
    // setCambio(1);
    console.log(e.target.files[0]);
    if(e.target.files.length>0) setImagen(e.target.files[0]);
    setFile(URL.createObjectURL(e.target.files[0]));
    }
    catch (ex){
      console.log(ex);
    }
  }


  useEffect(()=>{
    let salaX = JSON.parse(localStorage.getItem("sala"));
    if(salaX==null) navigate('/sapt/manager/slot_room');
    console.log(salaX);
    setSala(salaX);
    setNombres(salaX.nombre);
    setDireccion(salaX.direccion);
    // if(salaX.tipo_layout!=null) setFile(`data:${salaX.tipo_layout};base64, ${Buffer.from(salaX.layout.data).toString('base64')}`);
    // if(salaX.tipo_layout!=null) setImagen({name:salaX.nombre_layout,tipo:salaX.tipo_layout});
    // setFile(btoa(String.fromCharCode(...new Uint8Array(salaX.layout.data))));
    // let A = salaX.layout.data;
    // const B64 = Buffer.from(A).toString('base64');
    // setFile("https://cuantificaciones.com/wp-content/uploads/2016/04/dummy-post-vertical-1-thegem-blog-default-large.jpg");
    // setIdEmpleado(empleado.id_empleado); 
   },[]);


  return (
    <>
      <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center" sx={{mb:2}}>    
          <Typography variant="h3" component="h3">
            Modificar Sala
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
                    Nombre
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
                  <Typography style={{display:'none'}}>
                    Layout-Imagen
                  </Typography>
                  <img src={file} alt="description of"  style={{maxWidth:'350px',maxHeight:'200px'
                  ,minHeight:'200px',minWidth:'350px',display:'none'}}
                  onError = {() => setFile("https://cuantificaciones.com/wp-content/uploads/2016/04/dummy-post-vertical-1-thegem-blog-default-large.jpg")}/>


                  <TextField style={{backgroundColor:'#FFFFFF',display:'none'}}
                
                name="names"
                value={imagen.name}
                required
                fullWidth
                variant="outlined"
                InputProps={{endAdornment: <Button
                                        variant="contained"
                                        component="label"
                                        sx={{width:'40%'}}
                                       >
                                      Subir
                                      <input
                                        type="file"
                                        hidden
                                        onChange={handleCambiarFile}
                                      />
                </Button>
                }}
              />
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
                    ¿Desea modificar la sala?
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Se modificará la sala.
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
