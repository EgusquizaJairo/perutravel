import {  useState, useEffect} from 'react';
import certifyAxios from 'src/utils/aimAxios';
// import PropTypes from 'prop-types';
// import Chip from '@mui/material/Chip';
import moment from 'moment';
import { backendWSURL } from 'src/config';
import {
  Box,
  Button,
  Card,
  Grid,
  Divider,
  Zoom,
  // Dialog,
  // DialogTitle,
  // DialogContent,
  // DialogContentText,
  // DialogActions,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  // TableHead,
  // TablePagination,
  TableContainer,
  TableRow,
  Typography,
  TextField,
  // Tooltip,
  // Slide
} from '@mui/material';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSnackbar } from 'notistack';
// import StarIcon from '@mui/icons-material/Star';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// import InfoIcon from '@mui/icons-material/Info';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';
// import BlockIcon from '@mui/icons-material/Block';
// import NoAccountsIcon from '@mui/icons-material/NoAccounts';
// import Icon from '@mui/material/IconButton';
// import Collapse from '@mui/material/Collapse';
// import { useSnackbar } from 'notistack';
// import certifyAxios from 'src/utils/aimAxios';
// import { formatNameCapitals } from 'src/utils/training';
// import { getNameAndUrlFromBack } from 'src/utils/awsConfig';

// import { useNavigate } from 'react-router-dom';
// import { comment } from 'stylis';

// import useAuth from 'src/hooks/useAuth';

// const applyFilters = (associated, query, filters) => {

//   return associated.filter((associated) => {
//     let matches = true;

//     if (query) {
//       const properties = ['fullName'];
//       let containsQuery = false;

//       properties.forEach((property) => {
//         if (associated[property].toLowerCase().includes(query.toLowerCase())) {
//           containsQuery = true;
//         }
//       });

//       if (filters.status && associated.status !== filters.status) {
//         matches = false;
//       }

//       if (!containsQuery) {
//         matches = false;
//       }
//     }

//     Object.keys(filters).forEach((key) => {
//       const value = filters[key];

//       if (value && associated[key] !== value) {
//         matches = false;
//       }
//     });

//     return matches;
//   });
// };

// const applyPagination = (associated, page, limit) => {
//   return associated.slice(page * limit, page * limit + limit);
// };

const ResultsActive = () => {
  // const [page, setPage] = useState(0); // current page number
  // const [limit, setLimit] = useState(5); // page size
  const { enqueueSnackbar } = useSnackbar();
  const ws = new WebSocket(backendWSURL);
  // const [query, setQuery] = useState('');
  
  // const ws = useRef();
  // console.log(ws);
  // console.log(ws.current);
  //  ws.current.onmessage = (event) => {
  //   const data = JSON.parse(event.data);
  //   console.log(data);
  //   // setMessages((_messages) => [..._messages, data]);
  // };
  // const [filters] = useState({
  //   status: null
  // });
  // const navigate = useNavigate();
  // const [openAccordion, setOpenAccordion] = useState(false);
  // const [openDialogDisable, setOpenDialogDisable] = useState(false);
  // const [openDialogBlock, setOpenDialogBlock] = useState(false);
  // const { enqueueSnackbar } = useSnackbar();
  // const [memberId, setMemberId] = useState(0);
  // const [commentBlock, setCommentBlock] = useState('');
  // const [commentDisable, setCommentDisable] = useState('');
  // const [disable, setDisable] = useState(false);
  // const [block, setBlock] = useState(false);


  // const { user } = useAuth();
  // const { user } = auth;

  // const handleChangeCommentBlock = (event) => {
  //   setCommentBlock(event.target.value);
  // }

  // const handleChangeCommentDisable = (event) => {
  //   setCommentDisable(event.target.value);
  // }

  // const redirectToProfile = (id) => {

  //   // to={`/aim/student/profile/${a.partnerId}`}
  //   navigate(`/aim/student/profile/${id}`);
  // };

  // Para Modal
  // const handleOpenEnableModal = (associated) => {
  //   setOpenDialogDisable(true);
  //   setMemberId(associated.id);
  // };


  // const handleOpenDisableModal = (associated) => {
  //   setOpenDialogDisable(true);
  //   setMemberId(associated.id);
  // };

  // const handleCloseDisableModal = () => {
  //   setOpenDialogDisable(false);
  // };

  // const handleDisableAssociated = async () => {
  //   try {
  //     const request = {
  //       "memberId": user.person.id,
  //       "sanctionedId": memberId,
  //       "description": commentDisable,
  //       "type": 0
  //     };
  //     await certifyAxios.post("/sanction/register", request);
  //     handleDisableSuccess();
  //   } catch (error) {
  //     handleDisableError(error.status);
  //     console.log(error);
  //   }
  //   setOpenDialogDisable(false);
  // };

  // const handleDisableSuccess = () => {
  //   enqueueSnackbar('Se inhabilitó correctamente a la asociada', {
  //     variant: 'success',
  //     anchorOrigin: {
  //       vertical: 'top',
  //       horizontal: 'right'
  //     },
  //     autoHideDuration: 3000,
  //     TransitionComponent: Slide
  //   });
  //   setDisable(true);
  //   const reqObj = {
  //     "firstResult": 1,
  //     "fullName": "",
  //     "maxResults": 5,
  //     "suspended": 0
  //   }
  //   setPage(0);

  //   // props.onPageSizeChange(limit);
  //   // console.log(`Children sending from handleLimitChange: reqObj = `, reqObj);
  //   props.onPageParamsChange(reqObj);
  // };

  // const handleDisableError = (message) => {
  //   enqueueSnackbar(`Hubo un error en la inhabilitación. Error ${message}`,
  //     {
  //       variant: 'error',
  //       anchorOrigin: {
  //         vertical: 'top',
  //         horizontal: 'right'
  //       },
  //       TransitionComponent: Slide
  //     });
  // };

  // // const handleOpenBlockModal = (associated) => {
  // //   setOpenDialogBlock(true);
  // //   setMemberId(associated.id);

  // // }

  // const handleCloseBlockModal = () => {
  //   setOpenDialogBlock(false);
  // }

  // const handleBlockAssociated = async () => {
  //   try {
  //     const request = {
  //       "memberId": user.person.id,
  //       "sanctionedId": memberId,
  //       "description": commentBlock,
  //       "type": 1
  //     };
  //     await certifyAxios.post("/sanction/register", request);
  //     handleBlockSuccess();
  //   } catch (error) {
  //     handleBlockError(error.status);
  //     console.log(error);
  //   }
  //   setOpenDialogBlock(false);
  // }
  // const handleBlockSuccess = () => {
  //   enqueueSnackbar('Se bloqueó correctamente a la asociada', {
  //     variant: 'success',
  //     anchorOrigin: {
  //       vertical: 'top',
  //       horizontal: 'right'
  //     },
  //     autoHideDuration: 3000,
  //     TransitionComponent: Slide
  //   });
  //   setBlock(true);
  //   const reqObj = {
  //     "firstResult": 1,
  //     "fullName": "",
  //     "maxResults": 5,
  //     "suspended": 0
  //   }
  //   setPage(0);

  //   // props.onPageSizeChange(limit);
  //   // console.log(`Children sending from handleLimitChange: reqObj = `, reqObj);
  //   props.onPageParamsChange(reqObj);
  // };

  // const handleBlockError = (message) => {
  //   enqueueSnackbar(`Hubo un error en el bloqueo. Error ${message}`,
  //     {
  //       variant: 'error',
  //       anchorOrigin: {
  //         vertical: 'top',
  //         horizontal: 'right'
  //       },
  //       TransitionComponent: Slide
  //     });
  // };

  // const handleQueryChange = (event) => {
  //   event.persist();
  //   setQuery(event.target.value);
  // };
  const [open, setOpen] = useState(false);
  const [idPagoManual,setIdPagoManual] = useState('');
  const handleClickOpen = () => {
    setOpen(true);
   // setIdPagoManual(soyyo);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const enviarRequest = async () => {
    try {
      const request = {
        "idPedidoBar": idPagoManual,
        // "documentType": selectedDocumentType - 1, 
        // "email": enteredEmail,
        // "fullName": enteredName,
        // "id": null,
        // "instituteMajorId": selectedInstituteMajor,
        // "photoUrl": uploadedPhoto.path,
        // "phase": selectedSemester,
        // "merit": selectedMerit
      };
      // console.log("El pago manual que quiero atender es el : ", idPagoManual)
      await certifyAxios.post('/pedido_bar/update', request);
      ws.send(
        JSON.stringify({
          sender: "Empleado1",
          body: "3004",
        })
      );
      getPagosManuales();
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


  const handleCreateProjectSuccess = () => {
    enqueueSnackbar('Se ha atendido el pedido del bar exitosamente', {
      variant: 'success',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      TransitionComponent: Zoom
    });
    // Salir de la pantalla de registro
    // navigate('/sapt/manager/employee');

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
    enqueueSnackbar(`Hubo un error en la atención del registro. ${message}`, {
      variant: 'error',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      TransitionComponent: Zoom
    });
  };

  // const handlePageChange = (_event, newPage) => {

  //   // console.log(props);

  //   setPage(newPage);

  //   const reqObj = {
  //     "firstResult": newPage + 1,
  //     "fullName": "",
  //     "maxResults": limit,
  //     "suspended": 0
  //   };

  //   // props.onPageNumberChange(page);
  //   // console.log(`Children sending from handlePageChange: reqObj = `, reqObj);
  //   props.onPageParamsChange(reqObj);
  // };

  // const handleLimitChange = (event) => {
  //   // console.log(props);

  //   setLimit(parseInt(event.target.value));

  //   const reqObj = {
  //     "firstResult": 1,
  //     "fullName": "",
  //     "maxResults": event.target.value,
  //     "suspended": 0
  //   }
  //   setPage(0);

  //   // props.onPageSizeChange(limit);
  //   // console.log(`Children sending from handleLimitChange: reqObj = `, reqObj);
  //   props.onPageParamsChange(reqObj);
  // };

  // useEffect(() => {
  //   localStorage.setItem('disable', disable);
  //   localStorage.setItem('block', block);

  // }, [props.numberOfResults, memberId, disable, block])

  const getPagosManuales = async () => {
    try {
      // reqObj.suspended = "0"; // Active
      // Active Associates
      // console.log("Quiero obtener los pagos manuales");
      let reqObj = {};
      const responseActive = await certifyAxios.post('/pedido_bar/selectMobile/', reqObj);
      console.log(responseActive);
      setAssociated(responseActive.data.result);
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
  };


  useEffect(() => {

    // setWS();

    ws.onopen = () => {
      console.log("Connection opened");
      // setConnectionOpen(true);
    };

    ws.onmessage = (event) => {
      console.log("Me llego un mensaje");
      const data = JSON.parse(event.data);
      if(data.body.codigo==="3003" || data.body.codigo==="3004") getPagosManuales();
    };
    getPagosManuales();
    // return () => {
    //   console.log("Cleaning up...");
    //   ws.close();
    // };    
  },[]);
  // useEffect(() => {
  //   // const reqObj = {
  //   //   "firstResult": 1,
  //   //   "fullName": "",
  //   //   "maxResults": 5,
  //   //   "suspended": 1
  //   // }
  //   getPagosManuales();
  // }, [getPagosManuales]);


  // const filteredAssociated = applyFilters(props.associated, query, filters);
  const [paginatedAssociated, setAssociated] = useState([]);
  // const ahora = new Date();
  
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box p={0}>
            <TextField
              sx={{
                m: 0
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchTwoToneIcon />
                  </InputAdornment>
                )
              }}
              // onChange={handleQueryChange}
              placeholder="Busque por nombres"
              // value={query}

              variant="outlined"
              style={{display:'none'}}
            />
          </Box>
        </Grid>
      </Grid>

      <Card>
        
        <Divider />

        {paginatedAssociated.length === 0 ? (
          <>
            <Typography
              sx={{
                py: 10
              }}
              variant="h3"
              fontWeight="normal"
              color="text.secondary"
              align="center"
            >
              No se encontraron registros
            </Typography>
          </>
        ) : (
          <>
            <TableContainer>
              <Table>
                {/* <TableHead> */}
                  {/* <TableRow>                    
                    <TableCell align='center'>Apellido Materno</TableCell>
                    <TableCell align='center'>DNI</TableCell>
                    <TableCell align='center'>Opciones</TableCell>
                  </TableRow> */}
                {/* </TableHead> */}
                <TableBody>
                  {paginatedAssociated.map((associated) => {
                    return (
                      <>
                      <TableRow >
                        <TableCell align='center'>Nombre del Cliente</TableCell>
                          <TableCell align='center'>
                            <Typography noWrap variant="h5">
                                {associated.Nombre}
                              </Typography>
                          </TableCell>
                         </TableRow>

                        <TableRow >
                        <TableCell align='center'>Nro. Relativo Máquina</TableCell>
                          <TableCell align='center'>
                            <Typography noWrap variant="h5">
                                {associated.posrelativa}
                              </Typography>
                          </TableCell>
                         </TableRow>

                         <TableRow >
                          <TableCell align='center'>Producto</TableCell>
                          <TableCell align='center'>
                           <Typography noWrap variant="h5">
                               {associated.nombre}
                            </Typography>
                          </TableCell>
                          </TableRow>

                          <TableRow >
                          <TableCell align='center'>Fecha de inicio</TableCell>
                          <TableCell align='center'>
                           <Typography noWrap variant="h5">
                               {moment(associated.fecha_ini).format('YYYY-MM-DD hh:mm:ss a')}
                            </Typography>
                          </TableCell>
                          </TableRow>

                          <TableRow >
                          <TableCell align='center'>Estado</TableCell>
                          <TableCell align='center'>
                           <Typography noWrap variant="h5">
                               Sin atender
                            </Typography>
                          </TableCell>
                          </TableRow>
                          
                          <TableRow >
                          <TableCell align='center'/>
                          <TableCell align='center'>
                           <Button variant="contained" 
                           style={{marginLeft:'80px'}}
                           onClick={()=>{
                            handleClickOpen();
                            setIdPagoManual(associated.id_pedido_bar);
                            }}>
                             Atender
                           </Button>
                          </TableCell>
                          </TableRow>


                          <TableRow style={{borderLeft:0}}>
                          <TableCell align='center' style={{backgroundColor:'#F8F8F8',borderLeft:'none'}}/>
                          <TableCell align='center' style={{backgroundColor:'#F8F8F8',borderLeft:'none'}}/>
                          </TableRow>

                          </>
                      )})}
                </TableBody>
              </Table>
            </TableContainer>
              <Dialog
                          open={open}
                              onClose={handleClose}
                              aria-labelledby="alert-dialog-title"
                              aria-describedby="alert-dialog-description"
                            >
                              <DialogTitle id="alert-dialog-title">
                                ¿Desea atender el pedido?
                              </DialogTitle>
                              <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                  Usted se compromete a brindarle el cliente el pedido.
                                </DialogContentText>
                              </DialogContent>
                              <DialogActions>
                                <Button onClick={handleClose}>Cancelar</Button>
                                <Button onClick={enviarRequest} autoFocus>
                                  Aceptar
                                </Button>
                              </DialogActions>
                         </Dialog>
            {/* <Box
          p={2}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Typography component="span" variant="subtitle1">
              Total:
            </Typography>{' '}
            <b>{paginatedAssociated.length}</b>
          </Box>
          <TablePagination
            component="div"
            count={props.numberOfResults}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleLimitChange}
            page={page}
            rowsPerPage={limit}
            rowsPerPageOptions={[5, 10, 15]}
          />
        </Box> */}
          </>
        )}
      </Card>
    </>
  );
};

// ResultsActive.propTypes = {
//   associated: PropTypes.array.isRequired,
//  // onPageParamsChange: PropTypes.func,
//   // numberOfResults: PropTypes.number
// };

ResultsActive.defaultProps = {
  associated: [],
  numberOfResults: 555
};

export default ResultsActive;
