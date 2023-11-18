import {  useState } from 'react';
import PropTypes from 'prop-types';
// import Chip from '@mui/material/Chip';

import {
  Box,
  // Button,
  Card,
  Grid,
  Divider,
  // Dialog,
  // DialogTitle,
  // DialogContent,
  // DialogContentText,
  // DialogActions,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableContainer,
  TableRow,
  Typography,
  TextField,
  // Tooltip,
  // Slide
} from '@mui/material';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
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

const applyFilters = (associated, query, filters) => {

  return associated.filter((associated) => {
    let matches = true;

    if (query) {
      const properties = ['fullName'];
      let containsQuery = false;

      properties.forEach((property) => {
        if (associated[property].toLowerCase().includes(query.toLowerCase())) {
          containsQuery = true;
        }
      });

      if (filters.status && associated.status !== filters.status) {
        matches = false;
      }

      if (!containsQuery) {
        matches = false;
      }
    }

    Object.keys(filters).forEach((key) => {
      const value = filters[key];

      if (value && associated[key] !== value) {
        matches = false;
      }
    });

    return matches;
  });
};

// const applyPagination = (associated, page, limit) => {
//   return associated.slice(page * limit, page * limit + limit);
// };

const ResultsActive = (props) => {
  const [page, setPage] = useState(0); // current page number
  const [limit, setLimit] = useState(5); // page size

  const [query, setQuery] = useState('');
  const [filters] = useState({
    status: null
  });
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

  const handleQueryChange = (event) => {
    event.persist();
    setQuery(event.target.value);
  };

  const handlePageChange = (_event, newPage) => {

    // console.log(props);

    setPage(newPage);

    const reqObj = {
      "firstResult": newPage + 1,
      "fullName": "",
      "maxResults": limit,
      "suspended": 0
    };

    // props.onPageNumberChange(page);
    // console.log(`Children sending from handlePageChange: reqObj = `, reqObj);
    props.onPageParamsChange(reqObj);
  };

  const handleLimitChange = (event) => {
    // console.log(props);

    setLimit(parseInt(event.target.value));

    const reqObj = {
      "firstResult": 1,
      "fullName": "",
      "maxResults": event.target.value,
      "suspended": 0
    }
    setPage(0);

    // props.onPageSizeChange(limit);
    // console.log(`Children sending from handleLimitChange: reqObj = `, reqObj);
    props.onPageParamsChange(reqObj);
  };

  // useEffect(() => {
  //   localStorage.setItem('disable', disable);
  //   localStorage.setItem('block', block);

  // }, [props.numberOfResults, memberId, disable, block])

  const filteredAssociated = applyFilters(props.associated, query, filters);
  const paginatedAssociated = filteredAssociated;

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box p={1}>
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
              onChange={handleQueryChange}
              placeholder="Busque por nombres"
              value={query}

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
                <TableHead>
                  <TableRow>
                    {/* <TableCell align='center'>Foto</TableCell> */}
                    <TableCell align='center'>Nombre(s)</TableCell>
                    <TableCell align='center'>Apellido Paterno</TableCell>
                    <TableCell align='center'>Apellido Materno</TableCell>
                    <TableCell align='center'>DNI</TableCell>
                    <TableCell align='center'>Opciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedAssociated.map((associated) => {
                    return (
                      <>
                        <TableRow >
                          <TableCell align='center'>
                            <Typography noWrap variant="h5">
                                {associated.nombres}
                              </Typography>
                          </TableCell>

                          <TableCell align='center'>
                           <Typography noWrap variant="h5">
                               {associated.apellido_p}
                            </Typography>
                          </TableCell>
                          
                          <TableCell align='center'>
                          <Typography noWrap variant="h5">
                               {associated.apellido_m}
                            </Typography>
                          </TableCell>
                          <TableCell align='center' >
                          <Typography noWrap variant="h5">
                               {associated.nro_documento}
                            </Typography>
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell sx={{ paddingBottom: 0, paddingTop: 0, px: 5 }} colSpan={6}>
                            {/* <Collapse in={openAccordion === idx} timeout="auto" unmountOnExit>
                              <Box
                                sx={{
                                  width: "100%",
                                  py: '1',
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'top',
                                }}
                              > */}
                                
                                {/* <Dialog
                                  open={openDialogDisable}
                                  onClose={handleCloseDisableModal}
                                >
                                  <DialogTitle justifyContent="center" sx={{ p: 2 }}>
                                    <b>
                                      Inhabilitar Socia
                                    </b>
                                  </DialogTitle>
                                  <DialogContent>
                                    <DialogContentText
                                      sx={{
                                        my: { xs: 1, sm: 1 },
                                        color: "#000",
                                        backgroundColor: '#FFD6D6',
                                        p: 3,
                                      }}
                                    >
                                      Al inhabilitar a <b>{associated.fullName}</b>, esta pierde la posibilidad de aceptar clases nuevas a los clientes. Sin embargo, aún podrá asistir a sus clases programadas previamente.
                                    </DialogContentText>
                                    <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                                      ¿Desea INHABILITAR a la asociada: <b>{associated.fullName}</b>? No implica bloquearla.
                                    </Typography>
                                    <Grid
                                      container
                                      spacing={0}
                                      direction="column"
                                      justifyContent="center"
                                      paddingLeft={0}
                                      paddingRight={0}
                                      paddingBottom={2}
                                      paddingTop={1}
                                    >
                                      <Box sx={{ display: 'flex' }}>
                                        <Typography
                                          variant="h6"
                                          fontSize="0.9rem" sx={{ pr: '1rem' }}
                                        >
                                          <b>Deja un comentario explicando tu decisión</b>
                                        </Typography>
                                        <Tooltip
                                          title='El comentario ingresado será notificado a la socia inhabilitada.'>
                                          <InfoIcon />
                                        </Tooltip>
                                      </Box>

                                      <TextField
                                        sx={{ width: '100%' }}
                                        id="outlined-multiline-static"
                                        onChange={handleChangeCommentDisable}
                                        // value={commentRequest}
                                        multiline
                                        rows={4}
                                      />
                                    </Grid>
                                  </DialogContent>
                                  <DialogActions>
                                    <Button
                                      color="error"
                                      onClick={() => handleCloseDisableModal()}
                                    >
                                      Cancelar
                                    </Button>
                                    <Button
                                      sx={{
                                        my: { xs: 1, sm: 1 },
                                        color: "white",
                                        backgroundColor: '#0077FF',
                                        ':hover': {
                                          background: '#014796',
                                        },
                                      }}
                                      onClick={() => {
                                        handleDisableAssociated();
                                      }}
                                      variant="contained"
                                      startIcon={<NoAccountsIcon fontSize="small" />}
                                    >Inhabilitar
                                    </Button>

                                  </DialogActions>
                                </Dialog> */}
                                {/* <Dialog
                                  open={openDialogBlock}
                                  onClose={handleCloseBlockModal}
                                >
                                  <DialogTitle justifyContent="center" sx={{ p: 2 }}>
                                    <b>
                                      Bloquear Socia
                                    </b>
                                  </DialogTitle>

                                  <DialogContent>
                                    <DialogContentText
                                      sx={{
                                        my: { xs: 1, sm: 1 },
                                        color: "#000",
                                        backgroundColor: '#FFD6D6',
                                        p: 3,
                                      }}
                                    >
                                      Al bloquear a <b>{associated.fullName}</b>, esta pierde la posibilidad de ingresar al sistema. NO podrá asistir a sus clases programadas previamente.
                                    </DialogContentText>
                                    <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                                      <b>Nota:</b> Esta acción no puede deshacerse.
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                                      
                                    <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                                      ¿Desea BLOQUEAR a la asociada: <b>{associated.fullName}</b>?
                                    </Typography>
                                    <Grid
                                      container
                                      spacing={0}
                                      direction="column"
                                      justifyContent="center"
                                      paddingLeft={0}
                                      paddingRight={0}
                                      paddingBottom={2}
                                      paddingTop={1}
                                    >
                                      <Box sx={{ display: 'flex' }}>
                                        <Typography
                                          variant="h6"
                                          fontSize="0.9rem" sx={{ pr: '1rem' }}
                                        >
                                          <b>Deja un comentario explicando tu decisión</b>
                                        </Typography>
                                        <Tooltip
                                          title='El comentario ingresado será notificado a la socia bloqueada.'>
                                          <InfoIcon />
                                        </Tooltip>
                                      </Box>

                                      <TextField
                                        sx={{ width: '100%' }}
                                        id="outlined-multiline-static"
                                        onChange={handleChangeCommentBlock}
                                        // value={commentRequest}
                                        multiline
                                        rows={4}
                                      />
                                    </Grid>

                                  </DialogContent>
                                  <DialogActions>
                                    <Button
                                      color="error"
                                      onClick={() => handleCloseBlockModal()}>Cancelar</Button>
                                    <Button
                                      sx={{
                                        my: { xs: 1, sm: 1 },
                                        color: "white",
                                        backgroundColor: '#0077FF',
                                        ':hover': {
                                          background: '#014796',
                                        },
                                      }}
                                      onClick={() => {
                                        handleBlockAssociated();
                                      }
                                      }
                                      variant="contained"
                                      startIcon={<BlockIcon fontSize="small" />}
                                    >Bloquear
                                    </Button>

                                  </DialogActions>
                                </Dialog> */}
                                
                              {/* </Box>
                            </Collapse> */}
                          </TableCell>
                        </TableRow>
                      </>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            
            <Box
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
        </Box>
          </>
        )}
      </Card>
    </>
  );
};

ResultsActive.propTypes = {
  associated: PropTypes.array.isRequired,
  onPageParamsChange: PropTypes.func,
  numberOfResults: PropTypes.number
};

ResultsActive.defaultProps = {
  associated: [],
  numberOfResults: 555
};

export default ResultsActive;
