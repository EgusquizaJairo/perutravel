// import { useState, useCallback, useEffect } from 'react';
// import useRefMounted from 'src/hooks/useRefMounted';
// import * as Yup from 'yup';
// import { Formik } from 'formik';
// import Autocomplete from '@mui/material/Autocomplete';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';
// import certifyAxios from 'src/utils/aimAxios';
// import { useDropzone } from 'react-dropzone';
import {
  Grid,
  // Dialog,
  // DialogTitle,
  // DialogContent,
  // Zoom,
  Typography,
  // TextField,
  // FormHelperText,
  // CircularProgress,
  Button,
  // FormControl,
  // Select,
  // MenuItem,
  // Card,
  // Divider,
  // Alert,
  // useTheme
} from '@mui/material';
// import { useSnackbar } from 'notistack';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
// import InputLabel from '@mui/material/InputLabel';
// import debounce from 'lodash/debounce';
// import DropzoneAIM from 'src/components/DropzoneAIM';



function PageHeader() {
  // const [open, setOpen] = useState(false);
  // const { enqueueSnackbar } = useSnackbar();
  // const theme = useTheme();
  // const isMountedRef = useRefMounted();

  // const [enteredName, setEnteredName] = useState('');
  // const [selectedDocumentType, setSelectedDocumentType] = useState();
  // const [enteredIdentity, setEnteredIdentity] = useState('');
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [selectedSemester, setSelectedSemester] = useState();
  // const [selectedMerit, setSelectedMerit] = useState();
  // // const [selectedInstitute, setSelectedInstitute] = useState();
  // const [uploadedPhoto, setUploadedPhoto] = useState({});

  // const [instituteInputValue, setInstituteInputValue] = useState('');
  // const [instituteOptions, setInstituteOptions] = useState([]);

  // const [instituteMajorOptions, setInstituteMajorOptions] = useState([]);
  // const [selectedInstituteMajor, setSelectedInstituteMajor] = useState();
  // const [disableMajorCombo, setDisableMajorCombo] = useState(true);

  // const getInstituteOptionsDelayed = useCallback(
  //   debounce((inputText) => {
  //     // console.log('ENTERING DEBOUNCE with inputText: ', inputText);
  //     setInstituteOptions([]);
  //     if (inputText && inputText.length !== 0) getInstitutes(inputText);
  //   }, 200),
  //   []
  // );

  // const {
  //   isDragActive: isDragActivePhoto,
  //   isDragAccept: isDragAcceptPhoto,
  //   isDragReject: isDragRejectPhoto,
  //   getRootProps: getRootPhoto,
  //   getInputProps: getInputPhoto
  // } = useDropzone({
  //   accept: 'image/jpeg, image/png',
  //   maxFiles: 1,
  //   onDrop: (acceptedFile) => {
  //     if (acceptedFile[0] !== undefined)
  //       setUploadedPhoto(
  //         Object.assign(acceptedFile[0], {
  //           preview: URL.createObjectURL(acceptedFile[0]),
  //         }),
  //       );
  //   },
  // });

  // const handleCreateProjectOpen = () => {
  //   setOpen(true);
  // };

  // const handleCreateProjectClose = () => {
  //   setOpen(false);
  // };

  // const handleCreateProjectSuccess = () => {
  //   enqueueSnackbar('Se ha registrado a la nueva asociada satisfactoriamente', {
  //     variant: 'success',
  //     anchorOrigin: {
  //       vertical: 'top',
  //       horizontal: 'right'
  //     },
  //     TransitionComponent: Zoom
  //   });
  //   setOpen(false);
  //   setEnteredName('');
  //   setSelectedDocumentType();
  //   setEnteredIdentity('');
  //   setEnteredEmail('');
  //   setSelectedInstituteMajor();
  //   setUploadedPhoto({});
  //   setSelectedSemester();
  //   setSelectedMerit();
  // };

  // const handleCreateProjectFailure = (message) => {
  //   enqueueSnackbar(`Hubo un error en el registro. ${message}`, {
  //     variant: 'error',
  //     anchorOrigin: {
  //       vertical: 'top',
  //       horizontal: 'right'
  //     },
  //     TransitionComponent: Zoom
  //   });
  // };

  // const semesterOptions = [
  //   {
  //     id: '1',
  //     name: '1'
  //   },
  //   {
  //     id: '2',
  //     name: '2'
  //   },
  //   {
  //     id: '3',
  //     name: '3'
  //   },
  //   {
  //     id: '4',
  //     name: '4'
  //   },
  //   {
  //     id: '5',
  //     name: '5'
  //   },
  //   {
  //     id: '6',
  //     name: '6'
  //   },
  //   {
  //     id: '7',
  //     name: '7'
  //   },
  //   {
  //     id: '8',
  //     name: '8'
  //   },
  //   {
  //     id: '9',
  //     name: '9'
  //   },
  //   {
  //     id: '10',
  //     name: '10'
  //   }
  // ];

  // const meritOptions = [
  //   {
  //     id: '1',
  //     name: 'Medio Superior'
  //   },
  //   {
  //     id: '2',
  //     name: 'Tercio Superior'
  //   },
  //   {
  //     id: '3',
  //     name: 'Quinto Superior'
  //   },
  //   {
  //     id: '4',
  //     name: 'Décimo Superior'
  //   }
  // ];

  // const documentTypeOptions = [
  //   {
  //     id: 1,
  //     name: 'DNI'
  //   },
  //   {
  //     id: 2,
  //     name: 'Carné de extranjería'
  //   }
  // ];


  // const getInstitutes = useCallback(async (inputText) => {
  //   try {
  //     const request = {
  //       "value": inputText
  //     };

  //     const response = await certifyAxios.post('/common/institute/query', request);
  //     // console.log('Received institutes: ', response.data.list);
  //     setInstituteOptions(response.data.list);

  //     // if (isMountedRef.current) {
  //     // }
  //   } catch (err) {
  //     console.error(err);

  //     if (err.response) {
  //       console.log(err.response);
  //     } else if (err.request) {
  //       console.error(err.request);
  //     } else {
  //       console.error('Some other unknown error');
  //     }
  //   }
  // }, [isMountedRef]);

  // const getInstituteMajors = async (instituteKey) => {
  //   try {
  //     const request = {
  //       "id": instituteKey
  //     };

  //     // console.log('instituteMajor request: ', request);
  //     const response = await certifyAxios.post('/common/institute/instituteMajor/query', request);
  //     // console.log('Received majors: ', response.data.list);


  //     if (response.data.list.length > 0) {
  //       setInstituteMajorOptions(response.data.list);
  //       setDisableMajorCombo(false);
  //     }

  //   } catch (err) {
  //     console.error(err);

  //     if (err.response) {
  //       console.log(err.response);
  //     } else if (err.request) {
  //       console.error(err.request);
  //     } else {
  //       console.error('Some other unknown error');
  //     }
  //   }
  // };

  // const handleNameChange = (e) => {
  //   setEnteredName(e.target.value);
  // }

  // const handleDocumentTypeChange = (e) => {
  //   setSelectedDocumentType(e.target.value);
  // }

  // const handleIdentityChange = (e) => {
  //   setEnteredIdentity(e.target.value);
  // }

  // const handleEmailChange = (e) => {
  //   setEnteredEmail(e.target.value);
  // }

  // const handleInstituteChange = (e, v) => {

  //   if (v) {
  //     // setSelectedInstitute(v);
  //     getInstituteMajors(v.key);
  //   }
  //   else {
  //     setInstituteMajorOptions([]);
  //   }

  // };

  // const handleInstituteMajorChange = (e) => {
  //   setSelectedInstituteMajor(e.target.value);
  // };

  // const handleSemesterChange = (e) => {
  //   setSelectedSemester(e.target.value);
  // };

  // const handleMeritChange = (e) => {
  //   setSelectedMerit(e.target.value);
  // };

  // useEffect(() => {
  //   getInstituteOptionsDelayed(instituteInputValue, (filteredOptions) => {
  //     setInstituteOptions(filteredOptions);
  //   });
  // }, [instituteInputValue, getInstituteOptionsDelayed]);


  // const handleFormSubmit = async () => {
  //   try {
  //     const request = {
  //       "documentNumber": enteredIdentity,
  //       "documentType": selectedDocumentType - 1, // el combo por alguna razón no admite id 0
  //       "email": enteredEmail,
  //       "fullName": enteredName,
  //       "id": null,
  //       "instituteMajorId": selectedInstituteMajor,
  //       "photoUrl": uploadedPhoto.path,
  //       "phase": selectedSemester,
  //       "merit": selectedMerit
  //     };

  //     await certifyAxios.post('/person/partner/register', request);
  //     handleCreateProjectSuccess();

  //     // llamamos al servicio de listado de asociadas:
  //     getAssociates({
  //       "firstResult": 1,
  //       "fullName": "",
  //       "maxResults": 5,
  //       "suspended": 0
  //     });

  //   } catch (err) {
  //     handleCreateProjectFailure(err.message);
  //     console.error(err);

  //     if (err.response) {
  //       console.log(err.response);
  //     } else if (err.request) {
  //       console.error(err.request);
  //     } else {
  //       console.error('Some other unknown error');
  //     }
  //   }
  // }
  const navigate = useNavigate();
  const registrarEmpleado = () =>{
    navigate('/sapt/manager/employee/new');
  }

  return (
    <>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h3" component="h3" gutterBottom>
            Pagos manuales
          </Typography>
        </Grid>
        <Grid item style={{marginRight:'2%'}}>
          <Button
            onClick={registrarEmpleado}
            variant="contained"
            startIcon={<AddTwoToneIcon fontSize="small" />}
          >
            Nuevo Empleado
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default PageHeader;
