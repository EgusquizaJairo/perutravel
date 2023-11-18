import { useState } from 'react';
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
  const [direccion, setDireccion] = useState('');
  const [costo, setCosto] = useState('');

  const [open, setOpen] = useState(false);


  const handleCreateProjectSuccess = () => {
    enqueueSnackbar('Se ha registrado el producto satisfactoriamente', {
      variant: 'success',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      TransitionComponent: Zoom
    });
    // Salir de la pantalla de registro
    navigate('/sapt/manager/product');

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
     navigate('/sapt/manager/product');
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
      formData.append("images", imagen,imagen.name);
      formData.append("nombre", nombres);
      formData.append("marca", direccion);
      formData.append("tipo_imagen", imagen.type);
      formData.append("nombre_imagen", imagen.name);
      formData.append("costo", costo);
      const response = await certifyAxiosImages.post('/product/new/imagen', formData)

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
    console.log(e.target.files[0]);
    if(e.target.files.length>0) setImagen(e.target.files[0]);
    setFile(URL.createObjectURL(e.target.files[0]));
    }
    catch(ex){
      console.log(ex);
    }
  }

  return (
    <>
      <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center" sx={{mb:2}}>    
          <Typography variant="h3" component="h3">
            Nuevo Producto
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
                    Nombre Corto
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
                  <Typography>
                    Imagen
                  </Typography>
                  <img src={file} alt="description of"  style={{maxWidth:'350px',maxHeight:'200px'
                  ,minHeight:'200px',minWidth:'350px'}}
                  onError = {() => setFile("https://cuantificaciones.com/wp-content/uploads/2016/04/dummy-post-vertical-1-thegem-blog-default-large.jpg")}/>


                  <TextField style={{backgroundColor:'#FFFFFF'}}
                
                name="names"
                value={imagen===null ? '':imagen.name}
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
                    Costo por unidad (S/.)
                  </Typography>
                  <TextField style={{backgroundColor:'#FFFFFF'}}
                    name="names"
                    value={costo}
                    onChange={(e)=>{
                      setCosto(e.target.value)
                    }}
                    required
                    fullWidth
                    variant="outlined"
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
                    ¿Desea crear un nuevo producto?
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Se creará un nuevo producto.
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
